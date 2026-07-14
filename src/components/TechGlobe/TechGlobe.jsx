import React, { useEffect, useRef, useContext } from "react";
import { ThemeContext } from "../../ThemeContext";
import { FaJava } from "react-icons/fa";
import {
    SiBootstrap,
    SiC,
    SiCplusplus,
    SiCss3,
    SiD3Dotjs,
    SiDjango,
    SiExpress,
    SiFastapi,
    SiGit,
    SiGithub,
    SiHtml5,
    SiJavascript,
    SiJson,
    SiMongodb,
    SiMysql,
    SiNetlify,
    SiNodedotjs,
    SiNpm,
    SiPython,
    SiRailway,
    SiReact,
    SiRedux,
    SiTailwindcss,
    SiTypescript,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import * as THREE from "three";
import "./TechGlobe.css";

const iconTextures = [
    { label: "C", short: "C", Icon: SiC, color: "#5c6bc0" },
    { label: "C++", short: "C++", Icon: SiCplusplus, color: "#00599c" },
    { label: "CSS3", short: "CSS", Icon: SiCss3, color: "#1572b6" },
    {
        label: "Express",
        short: "EX",
        Icon: SiExpress,
        color: "#111827",
        darkColor: "#f8fafc",
    },
    { label: "Git", short: "Git", Icon: SiGit, color: "#f05032" },
    {
        label: "GitHub",
        short: "GH",
        Icon: SiGithub,
        color: "#181717",
        darkColor: "#f8fafc",
    },
    { label: "HTML5", short: "HTML", Icon: SiHtml5, color: "#e34f26" },
    { label: "JavaScript", short: "JS", Icon: SiJavascript, color: "#f7df1e" },
    {
        label: "JSON",
        short: "JSON",
        Icon: SiJson,
        color: "#4b5563",
        darkColor: "#f8fafc",
    },
    { label: "Python", short: "PY", Icon: SiPython, color: "#3776ab" },
    { label: "MongoDB", short: "MDB", Icon: SiMongodb, color: "#47a248" },
    { label: "Java", short: "Java", Icon: FaJava, color: "#f89820" },
    { label: "Node.js", short: "Node", Icon: SiNodedotjs, color: "#5fa04e" },
    {
        label: "Django",
        short: "DJ",
        Icon: SiDjango,
        color: "#092e20",
        darkColor: "#f8fafc",
    },
    { label: "npm", short: "npm", Icon: SiNpm, color: "#cb3837" },
    { label: "FastAPI", short: "API", Icon: SiFastapi, color: "#009688" },
    { label: "MySQL", short: "SQL", Icon: SiMysql, color: "#4479a1" },
    { label: "React", short: "React", Icon: SiReact, color: "#61dafb" },
    { label: "Redux", short: "Redux", Icon: SiRedux, color: "#764abc" },
    {
        label: "Tailwind CSS",
        short: "TW",
        Icon: SiTailwindcss,
        color: "#06b6d4",
    },
    { label: "VS Code", short: "VS", Icon: VscVscode, color: "#007acc" },
    { label: "Bootstrap", short: "BS", Icon: SiBootstrap, color: "#7952b3" },
    { label: "TypeScript", short: "TS", Icon: SiTypescript, color: "#3178c6" },
    { label: "Netlify", short: "NET", Icon: SiNetlify, color: "#00c7b7" },
    {
        label: "Railway",
        short: "RW",
        Icon: SiRailway,
        color: "#0b0d0e",
        darkColor: "#f8fafc",
    },
    { label: "D3.js", short: "D3", Icon: SiD3Dotjs, color: "#f9a03c" },
];

const escapeSvgValue = (value) =>
    String(value)
        .replace(/&/g, "&amp;")
        .replace(/"/g, "&quot;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");

const toSvgAttrName = (name) => {
    if (name === "className") return "class";
    if (name === "strokeWidth") return "stroke-width";
    if (name === "strokeLinecap") return "stroke-linecap";
    if (name === "strokeLinejoin") return "stroke-linejoin";
    if (name === "fillRule") return "fill-rule";
    if (name === "clipRule") return "clip-rule";
    return name;
};

const serializeAttrs = (attrs = {}) =>
    Object.entries(attrs)
        .filter(
            ([, value]) =>
                value !== undefined && value !== null && value !== false,
        )
        .map(([name, value]) => {
            if (typeof value === "object") {
                return "";
            }

            return `${toSvgAttrName(name)}="${escapeSvgValue(value)}"`;
        })
        .filter(Boolean)
        .join(" ");

const serializeIconChildren = (children) => {
    if (
        children === undefined ||
        children === null ||
        typeof children === "boolean"
    ) {
        return "";
    }

    if (Array.isArray(children)) {
        return children.map(serializeIconChildren).join("");
    }

    if (typeof children === "string" || typeof children === "number") {
        return escapeSvgValue(children);
    }

    if (!React.isValidElement(children) || typeof children.type !== "string") {
        return "";
    }

    const { children: nestedChildren, ...attrs } = children.props || {};
    const serializedAttrs = serializeAttrs(attrs);

    return `<${children.type}${serializedAttrs ? ` ${serializedAttrs}` : ""}>${serializeIconChildren(
        nestedChildren,
    )}</${children.type}>`;
};

const svgToDataUri = (Icon, color) => {
    const iconElement = Icon({
        color,
        size: 96,
    });

    const rootAttrs = {
        stroke: "currentColor",
        fill: "currentColor",
        strokeWidth: "0",
        ...(iconElement.props?.attr || {}),
        color,
        style: `color:${color}`,
        height: 96,
        width: 96,
        xmlns: "http://www.w3.org/2000/svg",
    };

    const svg = `<svg ${serializeAttrs(rootAttrs)}>${serializeIconChildren(
        iconElement.props?.children,
    )}</svg>`;

    return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
};

const createTextTexture = (text, color) => {
    const canvas = document.createElement("canvas");
    canvas.width = 256;
    canvas.height = 256;

    const context = canvas.getContext("2d");
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.fillStyle = color;
    context.font = "800 58px Arial, sans-serif";
    context.textAlign = "center";
    context.textBaseline = "middle";
    context.fillText(text, canvas.width / 2, canvas.height / 2);

    const texture = new THREE.CanvasTexture(canvas);
    texture.colorSpace = THREE.SRGBColorSpace;
    texture.needsUpdate = true;

    return texture;
};

const SkillTagCloud = () => {
    const containerRef = useRef(null);
    const { theme } = useContext(ThemeContext);

    useEffect(() => {
        const canvas = containerRef.current;
        if (!canvas) return undefined;

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, 1, 1, 1000);
        const renderer = new THREE.WebGLRenderer({
            antialias: true,
            alpha: true,
        });

        renderer.setSize(375, 375);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
        canvas.appendChild(renderer.domElement);

        const group = new THREE.Group();
        const loader = new THREE.TextureLoader();
        const sprites = [];
        const radius = 27;
        const size = 6;
        let loadedCount = 0;
        let frameId = null;

        function fibonacciSpherePoints(samples, radiusValue) {
            const points = [];
            const offset = 2 / samples;
            const increment = Math.PI * (3 - Math.sqrt(5));

            for (let i = 0; i < samples; i++) {
                const y = i * offset - 1 + offset / 2;
                const r = Math.sqrt(1 - y * y);
                const phi = i * increment;

                const x = Math.cos(phi) * r;
                const z = Math.sin(phi) * r;

                points.push(
                    new THREE.Vector3(
                        x * radiusValue,
                        y * radiusValue,
                        z * radiusValue,
                    ),
                );
            }

            return points;
        }

        const points = fibonacciSpherePoints(iconTextures.length, radius);

        const connectIconsWithLines = () => {
            const lineColor = theme === "dark" ? 0x00ffff : 0x073cde;

            const lineMaterial = new THREE.LineBasicMaterial({
                color: lineColor,
                transparent: true,
                opacity: 0.3,
            });

            for (let i = 0; i < sprites.length; i++) {
                for (let j = i + 1; j < sprites.length; j++) {
                    const pos1 = sprites[i].position;
                    const pos2 = sprites[j].position;
                    const distance = pos1.distanceTo(pos2);

                    if (distance < radius * 1) {
                        const geometry =
                            new THREE.BufferGeometry().setFromPoints([
                                pos1.clone(),
                                pos2.clone(),
                            ]);
                        const line = new THREE.Line(geometry, lineMaterial);
                        group.add(line);
                    }
                }
            }
        };

        const addSprite = (texture, icon, index) => {
            texture.magFilter = THREE.LinearFilter;
            texture.minFilter = THREE.LinearFilter;
            texture.colorSpace = THREE.SRGBColorSpace;

            const sprite = new THREE.Sprite(
                new THREE.SpriteMaterial({
                    map: texture,
                    transparent: true,
                    depthWrite: false,
                }),
            );

            const imageWidth = texture.image?.width || 1;
            const imageHeight = texture.image?.height || 1;
            const aspect = imageWidth / imageHeight;
            sprite.scale.set(size * aspect, size, 1);
            sprite.position.copy(points[index]);
            sprite.userData.label = icon.label;

            group.add(sprite);
            sprites.push(sprite);

            loadedCount++;
            if (loadedCount === iconTextures.length) {
                connectIconsWithLines();
            }
        };

        iconTextures.forEach((icon, index) => {
            const iconColor =
                theme === "dark" && icon.darkColor
                    ? icon.darkColor
                    : icon.color;

            loader.load(
                svgToDataUri(icon.Icon, iconColor),
                (texture) => addSprite(texture, icon, index),
                undefined,
                () =>
                    addSprite(
                        createTextTexture(icon.short, iconColor),
                        icon,
                        index,
                    ),
            );
        });

        scene.add(group);
        camera.position.z = 50;

        const glowGeometry = new THREE.SphereGeometry(radius + 3.5, 32, 32);
        const glowMaterial = new THREE.MeshBasicMaterial({
            color: 0x0000ff,
            transparent: true,
            opacity: 0.05,
            side: THREE.BackSide,
            depthWrite: false,
        });
        const glowSphere = new THREE.Mesh(glowGeometry, glowMaterial);
        scene.add(glowSphere);

        let isDragging = false;
        let prevMouse = { x: 0, y: 0 };
        let rotationSpeed = { x: 0, y: 0 };

        const updateCanvasRect = () => {
            renderer.domElement.getBoundingClientRect();
        };

        const onMouseDown = (e) => {
            isDragging = true;
            prevMouse = { x: e.clientX, y: e.clientY };
        };

        const onMouseUp = () => {
            isDragging = false;
        };

        const onMouseMove = (e) => {
            if (!isDragging) return;

            const dx = e.clientX - prevMouse.x;
            const dy = e.clientY - prevMouse.y;
            rotationSpeed.y = dx * 0.005;
            rotationSpeed.x = dy * 0.005;
            group.rotation.y += rotationSpeed.y;
            group.rotation.x += rotationSpeed.x;
            prevMouse = { x: e.clientX, y: e.clientY };
        };

        const animate = () => {
            frameId = requestAnimationFrame(animate);

            if (!isDragging) {
                group.rotation.y += 0.005;
            }

            group.children.forEach((obj) => {
                if (obj instanceof THREE.Sprite) {
                    obj.lookAt(camera.position);
                }
            });

            renderer.render(scene, camera);
        };

        animate();

        window.addEventListener("scroll", updateCanvasRect);
        window.addEventListener("resize", updateCanvasRect);
        window.addEventListener("mousedown", onMouseDown);
        window.addEventListener("mouseup", onMouseUp);
        window.addEventListener("mousemove", onMouseMove);

        return () => {
            if (frameId) {
                cancelAnimationFrame(frameId);
            }

            window.removeEventListener("scroll", updateCanvasRect);
            window.removeEventListener("resize", updateCanvasRect);
            window.removeEventListener("mousedown", onMouseDown);
            window.removeEventListener("mouseup", onMouseUp);
            window.removeEventListener("mousemove", onMouseMove);

            group.traverse((obj) => {
                if (obj.geometry) {
                    obj.geometry.dispose();
                }

                if (obj.material) {
                    if (obj.material.map) {
                        obj.material.map.dispose();
                    }

                    obj.material.dispose();
                }
            });

            glowGeometry.dispose();
            glowMaterial.dispose();
            renderer.dispose();

            if (renderer.domElement.parentNode === canvas) {
                canvas.removeChild(renderer.domElement);
            }
        };
    }, [theme]);

    return (
        <div className="iconssphear-section fade-in">
            <div className="iconssphear-tag-cloud" ref={containerRef}></div>
        </div>
    );
};

export default SkillTagCloud;
