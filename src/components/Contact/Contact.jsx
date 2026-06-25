import React from "react";
import "./Contact.css";

const Contact = () => {
    const currentYear = new Date().getFullYear();

    return (
        <>
            <div id="Contact" className="footer">
                <div className="footer-content">
                    {/* <div className="footer-ribbon">
            <div className="ribbon-top">Shohag Faraji</div>
            <div className="ribbon-bottom">Software Engineer</div>
          </div> */}

                    <div className="footer-icons">
                        <p className="footer-find-text">
                            You can find me here ✌
                        </p>
                        <div className="icon-links">
                            <a
                                href="https://www.linkedin.com/in/shohagfaraji/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i className="fa-brands fa-linkedin footer-icon"></i>
                            </a>
                            <a
                                href="https://github.com/shohagfaraji"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i className="fa-brands fa-github footer-icon"></i>
                            </a>
                            <a href="mailto:shohagfaraji2@gmail.com">
                                <i className="fa-solid fa-envelope footer-icon"></i>
                            </a>
                            {/* <a
                              href=""
                              target="_blank"
                              rel="noopener noreferrer"
                          >
                              <i className="fas fa-user footer-icon"></i>
                          </a> */}
                        </div>
                    </div>
                </div>
                <div className="footer-border">
                    <p className="footer-text">
                        &copy; {currentYear} Shohag Faraji. All rights reserved.
                    </p>
                </div>
            </div>
        </>
    );
};

export default Contact;
