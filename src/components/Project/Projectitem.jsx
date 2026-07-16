import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";
import {
    MdForward5,
    MdPause,
    MdPlayArrow,
    MdReplay,
    MdReplay5,
} from "react-icons/md";
import { FaExpand } from "react-icons/fa";
import "./Projectitem.css";

const VIEWER_MAX_WIDTH = 1080;
const VIEWER_MAX_HEIGHT = 760;
const VIEWER_HEADER_HEIGHT = 62;
const VIEWER_PADDING = 32;

const Projectitem = (props) => {
    const {
        sourceCodeLink,
        deployedLink,
        name,
        description,
        languages,
        image,
        video,
        index,
        projectType,
    } = props;

    const [hovered, setHovered] = useState(false);
    const [expanded, setExpanded] = useState(false);
    const [isViewerOpen, setIsViewerOpen] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const [hasEnded, setHasEnded] = useState(false);
    const [duration, setDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const [isSeeking, setIsSeeking] = useState(false);
    const [seekFeedback, setSeekFeedback] = useState(null);
    const [areControlsVisible, setAreControlsVisible] = useState(false);
    const [viewerSourceRect, setViewerSourceRect] = useState(null);
    const [viewerTargetRect, setViewerTargetRect] = useState(null);
    const [isViewerClosing, setIsViewerClosing] = useState(false);
    const previewVideoRef = useRef(null);
    const playerVideoRef = useRef(null);
    const mediaWrapperRef = useRef(null);
    const viewerStartTimeRef = useRef(0);
    const seekFrameRef = useRef(null);
    const seekFeedbackTimeoutRef = useRef(null);
    const controlsTimeoutRef = useRef(null);
    const closeViewerTimeoutRef = useRef(null);
    const controlsVisibleRef = useRef(false);
    const lastControlsMoveRef = useRef(0);
    const lastProgressTimeRef = useRef(0);
    const SHORT_LIMIT = 120;
    const isLong = description.length > SHORT_LIMIT;

    const getViewerTargetRect = () => {
        if (typeof window === "undefined") return null;

        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;
        const viewerPadding = viewportWidth <= 640 ? 12 : VIEWER_PADDING;
        const availableWidth = Math.max(viewportWidth - viewerPadding * 2, 280);
        const maxHeight = Math.min(viewportHeight * 0.92, VIEWER_MAX_HEIGHT);
        let width = Math.min(VIEWER_MAX_WIDTH, availableWidth);
        let videoHeight = (width * 9) / 16;
        let height = VIEWER_HEADER_HEIGHT + videoHeight;

        if (height > maxHeight) {
            videoHeight = Math.max(maxHeight - VIEWER_HEADER_HEIGHT, 180);
            width = Math.min((videoHeight * 16) / 9, availableWidth);
            height = VIEWER_HEADER_HEIGHT + (width * 9) / 16;
        }

        return {
            width,
            height,
            left: (viewportWidth - width) / 2,
            top: (viewportHeight - height) / 2,
        };
    };

    const getRectAnimation = (rect) => ({
        x: rect?.left || 0,
        y: rect?.top || 0,
        scaleX:
            rect && viewerTargetRect ? rect.width / viewerTargetRect.width : 1,
        scaleY:
            rect && viewerTargetRect
                ? rect.height / viewerTargetRect.height
                : 1,
    });

    const formatTime = (seconds) => {
        if (!Number.isFinite(seconds) || seconds <= 0) return "0:00";

        const totalSeconds = Math.floor(seconds);
        const minutes = Math.floor(totalSeconds / 60);
        const remainingSeconds = totalSeconds % 60;

        return `${minutes}:${String(remainingSeconds).padStart(2, "0")}`;
    };

    const pausePreview = (resetTime = false) => {
        if (!previewVideoRef.current) return;

        previewVideoRef.current.pause();

        if (resetTime) {
            previewVideoRef.current.currentTime = 0;
        }
    };

    const handleMouseEnter = () => {
        if (!video || isViewerOpen) return;

        setHovered(true);

        if (previewVideoRef.current) {
            previewVideoRef.current.currentTime = 0;
            const playPromise = previewVideoRef.current.play();

            if (playPromise !== undefined) {
                playPromise.catch(() => {
                    // Hover previews can be interrupted when the cursor leaves quickly.
                });
            }
        }
    };

    const handleMouseLeave = () => {
        if (!video) return;

        setHovered(false);
        pausePreview(true);
    };

    const openVideoViewer = () => {
        if (!video) return;

        const mediaRect = mediaWrapperRef.current?.getBoundingClientRect();

        if (mediaRect) {
            setViewerSourceRect({
                left: mediaRect.left,
                top: mediaRect.top,
                width: mediaRect.width,
                height: mediaRect.height,
            });
        }

        setViewerTargetRect(getViewerTargetRect());
        setIsViewerClosing(false);
        viewerStartTimeRef.current = previewVideoRef.current?.currentTime || 0;
        pausePreview(false);
        setHovered(false);
        showControls();
        setIsViewerOpen(true);
    };

    const finishCloseVideoViewer = useCallback(() => {
        if (closeViewerTimeoutRef.current) {
            clearTimeout(closeViewerTimeoutRef.current);
            closeViewerTimeoutRef.current = null;
        }

        setIsPlaying(false);
        setHasEnded(false);
        setIsViewerOpen(false);
        setIsSeeking(false);
        setSeekFeedback(null);
        setIsViewerClosing(false);
    }, []);

    const closeVideoViewer = useCallback(() => {
        if (isViewerClosing) return;

        if (playerVideoRef.current) {
            playerVideoRef.current.pause();
        }

        const mediaRect = mediaWrapperRef.current?.getBoundingClientRect();

        if (mediaRect) {
            setViewerSourceRect({
                left: mediaRect.left,
                top: mediaRect.top,
                width: mediaRect.width,
                height: mediaRect.height,
            });
        }

        setViewerTargetRect(
            (currentRect) => currentRect || getViewerTargetRect(),
        );
        setIsViewerClosing(true);
        controlsVisibleRef.current = false;
        setAreControlsVisible(false);

        if (closeViewerTimeoutRef.current) {
            clearTimeout(closeViewerTimeoutRef.current);
        }

        closeViewerTimeoutRef.current = window.setTimeout(() => {
            finishCloseVideoViewer();
        }, 520);

        if (controlsTimeoutRef.current) {
            clearTimeout(controlsTimeoutRef.current);
            controlsTimeoutRef.current = null;
        }
    }, [finishCloseVideoViewer, isViewerClosing]);

    const hideControls = useCallback(() => {
        if (controlsTimeoutRef.current) {
            clearTimeout(controlsTimeoutRef.current);
            controlsTimeoutRef.current = null;
        }

        controlsVisibleRef.current = false;
        setAreControlsVisible(false);
    }, []);

    const showControls = useCallback((autoHide = true) => {
        if (!controlsVisibleRef.current) {
            controlsVisibleRef.current = true;
            setAreControlsVisible(true);
        }

        if (controlsTimeoutRef.current) {
            clearTimeout(controlsTimeoutRef.current);
        }

        if (autoHide) {
            controlsTimeoutRef.current = setTimeout(() => {
                controlsVisibleRef.current = false;
                setAreControlsVisible(false);
                controlsTimeoutRef.current = null;
            }, 3000);
        }
    }, []);

    const showControlsFromPointer = useCallback(() => {
        const now = performance.now();

        if (
            controlsVisibleRef.current &&
            now - lastControlsMoveRef.current < 220
        ) {
            return;
        }

        lastControlsMoveRef.current = now;
        showControls();
    }, [showControls]);

    const handleMediaKeyDown = (event) => {
        if (!video) return;

        if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            openVideoViewer();
        }
    };

    const handlePlayerLoadedMetadata = (event) => {
        const media = event.currentTarget;
        const videoDuration = Number.isFinite(media.duration)
            ? media.duration
            : 0;
        const nextTime = Math.min(
            viewerStartTimeRef.current,
            videoDuration || 0,
        );

        setDuration(videoDuration);
        setCurrentTime(nextTime);
        setHasEnded(false);
        lastProgressTimeRef.current = nextTime;
        media.currentTime = nextTime;
        media.muted = true;

        const playPromise = media.play();

        if (playPromise !== undefined) {
            playPromise
                .then(() => setIsPlaying(true))
                .catch(() => {
                    setIsPlaying(false);
                    // Autoplay can be blocked until the user taps play.
                });
        }
    };

    const seekTo = useCallback(
        (nextTime) => {
            if (!playerVideoRef.current) return;

            const videoDuration =
                playerVideoRef.current.duration || duration || 0;
            const safeTime = Math.min(
                Math.max(nextTime, 0),
                videoDuration || nextTime,
            );

            setCurrentTime(safeTime);
            lastProgressTimeRef.current = safeTime;
            playerVideoRef.current.currentTime = safeTime;
        },
        [duration],
    );

    const skipVideo = useCallback(
        (seconds) => {
            if (!playerVideoRef.current) return;

            const videoDuration = playerVideoRef.current.duration || 0;
            const nextTime = Math.min(
                Math.max(playerVideoRef.current.currentTime + seconds, 0),
                videoDuration,
            );

            seekTo(nextTime);
            showControls();
            setSeekFeedback({
                direction: seconds < 0 ? "back" : "forward",
                label: seconds < 0 ? "-5s" : "+5s",
            });

            if (seekFeedbackTimeoutRef.current) {
                clearTimeout(seekFeedbackTimeoutRef.current);
            }

            seekFeedbackTimeoutRef.current = setTimeout(() => {
                setSeekFeedback(null);
            }, 520);
        },
        [seekTo, showControls],
    );

    const handleScrub = (event) => {
        const nextTime = Number(event.target.value);

        showControls(false);
        setIsSeeking(true);
        setCurrentTime(nextTime);
        lastProgressTimeRef.current = nextTime;

        if (seekFrameRef.current) {
            clearTimeout(seekFrameRef.current);
        }

        // Slider/label update instantly above. The actual video seek only
        // commits every 80ms while dragging because real seeking has to locate
        // a keyframe and decode forward.
        seekFrameRef.current = setTimeout(() => {
            seekTo(nextTime);
        }, 80);
    };

    const finishScrub = () => {
        if (seekFrameRef.current) {
            clearTimeout(seekFrameRef.current);
            seekFrameRef.current = null;
        }

        if (playerVideoRef.current) {
            playerVideoRef.current.currentTime = currentTime;
        }

        setIsSeeking(false);
        showControls();
    };

    const togglePlay = useCallback(() => {
        if (!playerVideoRef.current) return;

        showControls();

        if (hasEnded) {
            playerVideoRef.current.currentTime = 0;
            setCurrentTime(0);
            lastProgressTimeRef.current = 0;
            setHasEnded(false);
        }

        if (playerVideoRef.current.paused) {
            const playPromise = playerVideoRef.current.play();
            setIsPlaying(true);

            if (playPromise !== undefined) {
                playPromise.catch(() => setIsPlaying(false));
            }
        } else {
            playerVideoRef.current.pause();
            setIsPlaying(false);
        }
    }, [hasEnded, showControls]);

    const openFullscreen = () => {
        const media = playerVideoRef.current;

        if (!media) return;

        if (media.requestFullscreen) {
            media.requestFullscreen().catch(() => {});
        } else if (media.webkitEnterFullscreen) {
            media.webkitEnterFullscreen();
        }
    };

    useEffect(() => {
        if (!isViewerOpen) return undefined;

        const handleGlobalKeyDown = (event) => {
            const targetTag = event.target?.tagName;

            if (event.key === "Escape") {
                closeVideoViewer();
                return;
            }

            if (targetTag === "INPUT" || targetTag === "SELECT") {
                return;
            }

            if (event.key === "ArrowLeft") {
                event.preventDefault();
                skipVideo(-5);
                return;
            }

            if (event.key === "ArrowRight") {
                event.preventDefault();
                skipVideo(5);
                return;
            }

            if (event.key === " " && targetTag !== "BUTTON") {
                event.preventDefault();
                togglePlay();
            }
        };

        window.addEventListener("keydown", handleGlobalKeyDown);

        return () => {
            window.removeEventListener("keydown", handleGlobalKeyDown);
        };
    }, [closeVideoViewer, isViewerOpen, skipVideo, togglePlay]);

    useEffect(() => {
        const media = playerVideoRef.current;

        if (!isViewerOpen || !media) return undefined;

        const handleTimeUpdate = () => {
            if (isSeeking) return;
            const nextTime = media.currentTime || 0;

            if (Math.abs(nextTime - lastProgressTimeRef.current) >= 0.3) {
                lastProgressTimeRef.current = nextTime;
                setCurrentTime(nextTime);
            }
        };

        media.addEventListener("timeupdate", handleTimeUpdate);

        return () => {
            media.removeEventListener("timeupdate", handleTimeUpdate);

            if (seekFrameRef.current) {
                clearTimeout(seekFrameRef.current);
            }

            if (seekFeedbackTimeoutRef.current) {
                clearTimeout(seekFeedbackTimeoutRef.current);
            }

            if (controlsTimeoutRef.current) {
                clearTimeout(controlsTimeoutRef.current);
            }

            if (closeViewerTimeoutRef.current) {
                clearTimeout(closeViewerTimeoutRef.current);
            }
        };
    }, [isSeeking, isViewerOpen]);

    const videoViewer =
        isViewerOpen && typeof document !== "undefined"
            ? createPortal(
                  <motion.div
                      className="video-viewer-backdrop"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: isViewerClosing ? 0 : 1 }}
                      transition={{
                          duration: isViewerClosing ? 0.34 : 0.2,
                          ease: "easeOut",
                      }}
                      onWheel={(event) => event.preventDefault()}
                      onMouseDown={(event) => {
                          if (event.target === event.currentTarget) {
                              closeVideoViewer();
                          }
                      }}
                  >
                      <motion.div
                          className="video-viewer"
                          initial={getRectAnimation(viewerSourceRect)}
                          animate={getRectAnimation(
                              isViewerClosing
                                  ? viewerSourceRect
                                  : viewerTargetRect || getViewerTargetRect(),
                          )}
                          transition={{
                              duration: 0.34,
                              ease: [0.22, 1, 0.36, 1],
                          }}
                          onAnimationComplete={() => {
                              if (isViewerClosing) {
                                  finishCloseVideoViewer();
                              }
                          }}
                          style={{
                              position: "fixed",
                              top: 0,
                              left: 0,
                              width:
                                  viewerTargetRect?.width ||
                                  "min(1080px, 100%)",
                              height: viewerTargetRect?.height || "auto",
                              transformOrigin: "top left",
                              willChange: "transform",
                          }}
                          role="dialog"
                          aria-modal="true"
                          aria-label={`${name} video preview`}
                      >
                          <div className="video-viewer-header">
                              <div>
                                  <h3>{name}</h3>
                              </div>
                              <button
                                  type="button"
                                  className="video-icon-button video-close-button"
                                  onClick={closeVideoViewer}
                                  aria-label="Close video preview"
                              >
                                  <span aria-hidden="true">×</span>
                              </button>
                          </div>
                          <div
                              className={`video-viewer-media${
                                  areControlsVisible ? " controls-visible" : ""
                              }`}
                              onMouseEnter={() => showControls()}
                              onMouseMove={showControlsFromPointer}
                              onMouseLeave={hideControls}
                              onFocus={() => showControls(false)}
                              onBlur={() => showControls()}
                          >
                              <video
                                  ref={playerVideoRef}
                                  src={video}
                                  autoPlay
                                  muted
                                  preload="auto"
                                  playsInline
                                  controlsList="nodownload"
                                  onLoadedMetadata={handlePlayerLoadedMetadata}
                                  onClick={togglePlay}
                                  onPlay={() => {
                                      setHasEnded(false);
                                      setIsPlaying(true);
                                  }}
                                  onPause={() => setIsPlaying(false)}
                                  onEnded={() => {
                                      setIsPlaying(false);
                                      setHasEnded(true);
                                      showControls(false);
                                  }}
                              />

                              {seekFeedback && (
                                  <div
                                      className={`video-seek-feedback ${seekFeedback.direction}`}
                                      aria-live="polite"
                                  >
                                      <span>{seekFeedback.label}</span>
                                  </div>
                              )}

                              <div className="video-center-controls">
                                  <button
                                      type="button"
                                      className="video-icon-button video-seek-button"
                                      onClick={() => skipVideo(-5)}
                                      aria-label="Go back 5 seconds"
                                  >
                                      <MdReplay5 aria-hidden="true" />
                                  </button>
                                  <button
                                      type="button"
                                      className="video-icon-button video-play-button"
                                      onClick={togglePlay}
                                      aria-label={
                                          hasEnded
                                              ? "Replay video"
                                              : isPlaying
                                                ? "Pause video"
                                                : "Play video"
                                      }
                                  >
                                      {hasEnded ? (
                                          <MdReplay aria-hidden="true" />
                                      ) : isPlaying ? (
                                          <MdPause aria-hidden="true" />
                                      ) : (
                                          <MdPlayArrow aria-hidden="true" />
                                      )}
                                  </button>
                                  <button
                                      type="button"
                                      className="video-icon-button video-seek-button"
                                      onClick={() => skipVideo(5)}
                                      aria-label="Go forward 5 seconds"
                                  >
                                      <MdForward5 aria-hidden="true" />
                                  </button>
                              </div>

                              <div className="video-bottom-controls">
                                  <span className="video-time">
                                      {formatTime(currentTime)}
                                  </span>
                                  <input
                                      className="video-progress"
                                      type="range"
                                      min="0"
                                      max={duration || 0}
                                      step="0.01"
                                      value={Math.min(
                                          currentTime,
                                          duration || currentTime,
                                      )}
                                      onChange={handleScrub}
                                      onPointerDown={() => setIsSeeking(true)}
                                      onPointerUp={finishScrub}
                                      onBlur={finishScrub}
                                      aria-label="Video timeline"
                                      style={{
                                          "--video-progress-percent": `${
                                              duration
                                                  ? (currentTime / duration) *
                                                    100
                                                  : 0
                                          }%`,
                                      }}
                                  />
                                  <span className="video-time">
                                      {formatTime(duration)}
                                  </span>

                                  <button
                                      type="button"
                                      className="video-icon-button video-small-button video-fullscreen-button"
                                      onClick={openFullscreen}
                                      aria-label="Open fullscreen"
                                  >
                                      <span
                                          className="video-fullscreen-corners"
                                          aria-hidden="true"
                                      >
                                          <span />
                                          <span />
                                          <span />
                                          <span />
                                      </span>
                                  </button>
                              </div>
                          </div>
                      </motion.div>
                  </motion.div>,
                  document.body,
              )
            : null;

    return (
        <>
            <motion.div
                className="project-card"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                    duration: 0.5,
                    ease: "easeOut",
                    delay: index * 0.08,
                }}
            >
                <div
                    ref={mediaWrapperRef}
                    className={`image-wrapper${video ? " has-video" : ""}`}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    onClick={openVideoViewer}
                    onKeyDown={handleMediaKeyDown}
                    role={video ? "button" : undefined}
                    tabIndex={video ? 0 : undefined}
                    aria-label={
                        video ? `Open ${name} video preview` : undefined
                    }
                >
                    <img
                        src={image}
                        alt={`${name} screenshot`}
                        className={hovered && video ? "media-hidden" : ""}
                    />
                    {video && (
                        <>
                            <video
                                ref={previewVideoRef}
                                src={video}
                                muted
                                loop
                                playsInline
                                className={
                                    hovered ? "media-visible" : "media-hidden"
                                }
                            />
                            <div className="media-action-layer">
                                <span className="media-action-pill">
                                    <FaExpand />
                                    Watch Demo
                                </span>
                            </div>
                        </>
                    )}
                </div>

                <div className="project-details">
                    <p className="project-type">- {projectType}</p>
                    <h3 className="project-title">{name}</h3>
                    <div className="tech-tags">
                        {languages.split("|").map((lang, tagIndex) => (
                            <span key={tagIndex} className="tech-tag">
                                {lang.trim()}
                            </span>
                        ))}
                    </div>
                    <p className="project-desc">
                        {expanded || !isLong
                            ? description
                            : `${description.substring(0, SHORT_LIMIT)}...`}
                        {isLong && (
                            <span
                                className="toggle-desc"
                                onClick={() => setExpanded(!expanded)}
                            >
                                {expanded ? " See Less" : " See More"}
                            </span>
                        )}
                    </p>
                    <div className="project-buttons">
                        <motion.a
                            href={sourceCodeLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-code shine-button"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            GitHub
                        </motion.a>
                        <motion.a
                            href={deployedLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-live shine-button"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Live Demo
                        </motion.a>
                    </div>
                </div>
            </motion.div>
            {videoViewer}
        </>
    );
};

export default Projectitem;
