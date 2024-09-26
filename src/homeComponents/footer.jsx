import React, { Component } from 'react';
import GitHubButton from 'react-github-btn';
import "./style.css";

class Footer extends Component {
    render() {
        return (
            <footer className="page-footer font-small special-color-dark pt-4">
                <div className="container text-center text-md-left">
                    <div className="row">
                        <div className="col-md-4 mt-md-0 mt-3">
                            <h5 className="text-uppercase">Algo Grow</h5>
                            <p>Learn algorithms through engaging visualizations and interactive experiences.</p>
                        </div>

                        <div className="col-md-4 mb-md-0 mb-3">
                            <h5 className="text-uppercase">Links</h5>
                            <ul className="list-unstyled">
                                <li>
                                    <a href="https://anujkumar-portfolio.vercel.app/">About Me</a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/in/anuj-kumar-a7954a257/">LinkedIn</a>
                                </li>
                                <li>
                                    <a href="mailto:anujkumar73889@gmail.com">Contact</a>
                                </li>
                            </ul>
                        </div>

                        <div className="col-md-4 mb-md-0 mb-3">
                            <h5 className="text-uppercase">Follow Us</h5>
                            <div className="github-btn">
                                <GitHubButton
                                    href="https://github.com/iamanujkumar"
                                    data-color-scheme="no-preference: light; light: light; dark: dark;"
                                    data-size="large"
                                    data-show-count="true"
                                    aria-label="Star your-repo on GitHub"
                                >
                                    Star
                                </GitHubButton>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer-copyright text-center py-2">
                    © {new Date().getFullYear()} Algo Grow. All rights reserved.
                </div>
            </footer>
        );
    }
}

export default Footer;
