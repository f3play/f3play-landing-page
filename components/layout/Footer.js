import Link from "next/link";
import React from 'react';
import { FaDiscord, FaTelegram, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <>
            <div className="bottom section-padding triangle-top-dark triangle-bottom-dark">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-2 col-lg-2" />
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="bottom-logo">
                                <img
                                    className="pb-3"
                                    src="/images/logo.png"
                                    alt=""
                                    style={{ height: 90 }}
                                />
                                <p style={{ fontWeight: 400, fontSize: 14 }}>
                                    The innovative fusion of <a style={{ color: "white" }}>Meme</a> & <a style={{ color: "white" }}>GameFi</a>.
                                </p>
                            </div>
                        </div>

                        <div className="col-xl-2 col-lg-2 col-md-3 col-sm-6 col-6">
                            <div className="bottom-widget">
                                <h4 className="widget-title" style={{fontSize: 16}}>Community</h4>
                                <ul>
                                    <li>
                                        <Link href="#" style={{fontSize: 14}}>Discord</Link>
                                    </li>
                                    <li>
                                        <Link href="https://t.me/F3Play" style={{fontSize: 14}}>Telegram</Link>
                                    </li>
                                    <li>
                                        <Link href="#" style={{fontSize: 14}}>Twitter</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-2 col-md-3 col-sm-6 col-6">
                            <div className="bottom-widget">
                                <h4 className="widget-title" style={{fontSize: 16}}>Resources</h4>
                                <ul>
                                    <li>
                                        <Link href="https://docs.f3play.io/" style={{fontSize: 14}}>Documents</Link>
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
                            <p style={{fontSize: 14, fontWeight: 400}}>
                                © Copyright 2023 <a href="https://devtrek.io/" style={{ color: "#0d6692" }}>DevTrek</a>{" "}
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