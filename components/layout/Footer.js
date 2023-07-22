import Link from "next/link";
import React from 'react';
import { FaDiscord, FaTelegram, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <>
            <div className="bottom section-padding triangle-top-dark triangle-bottom-dark">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-4 col-lg-4 col-md-7 col-sm-8">
                            <div className="bottom-logo">
                                <img
                                    className="pb-3"
                                    src="/images/logo2.png"
                                    alt=""
                                    style={{ height: 60 }}
                                />
                                <p style={{ fontWeight: 400 }}>
                                    FUN - FAIR - FAST
                                </p>
                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-2 col-md-5 col-sm-4 col-6">
                            <div className="bottom-widget">
                                <h4 className="widget-title">About us</h4>
                                <ul>
                                    <li>
                                        <Link href="#">Explore</Link>
                                    </li>
                                    <li>
                                        <Link href="#">Item</Link>
                                    </li>
                                    <li>
                                        <Link href="#">Collection</Link>
                                    </li>
                                    <li>
                                        <Link href="#">Connect</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-2 col-md-4 col-sm-4 col-6">
                            <div className="bottom-widget">
                                <h4 className="widget-title">Integrations</h4>
                                <ul>
                                    <li>
                                        <Link href="#">Github</Link>
                                    </li>
                                    <li>
                                        <Link href="#">Gitbook</Link>
                                    </li>
                                    <li>
                                        <Link href="#">Widget</Link>
                                    </li>
                                    <li>
                                        <Link href="#">Media Kit</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-2 col-md-4 col-sm-4">
                            <div className="bottom-widget">
                                <h4 className="widget-title">Community</h4>
                                <ul>
                                    <li>
                                        <Link href="#">Discord</Link>
                                    </li>
                                    <li>
                                        <Link href="#">Telegram</Link>
                                    </li>
                                    <li>
                                        <Link href="#">Twitter</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-2 col-md-4 col-sm-4">
                            <div className="bottom-widget">
                                <h4 className="widget-title">Help</h4>
                                <ul>
                                    <li>
                                        <Link href="#">User Docs</Link>
                                    </li>
                                    <li>
                                        <Link href="#">FAQ</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer">
                <div className="container">
                    <div className="row">
                        <div className="copyright">
                            <p>
                                © Copyright 2023 <a href="#" style={{ color: "#2a52be" }}>F3Play</a>{" "}
                                All Rights Reserved
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;