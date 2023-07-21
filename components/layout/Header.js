import Link from "next/link";

function Header() {
    return (
        <>
            <div className="header landing">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="navigation">
                                <nav className="navbar navbar-expand-lg navbar-dark">
                                    <div className="brand-logo">
                                        <Link href="/">
                                            <img src="/images/icon.png" alt="" className="logo-primary"
                                                style={{
                                                    width: "40px",
                                                    height: "40px",
                                                }} />
                                        </Link>
                                    </div>

                                    <div className={"collapse navbar-collapse"}>
                                        <ul className="navbar-nav" >
                                            <li className="nav-item" >
                                                <Link href="#tokenomic"
                                                    style={{
                                                        fontWeight: 500,
                                                        fontSize: "18px",
                                                    }}>Tokenomics</Link>
                                            </li>
                                            <li className="nav-item" >
                                                <Link href="#roadmap"
                                                    style={{
                                                        fontWeight: 500,
                                                        fontSize: "18px",
                                                    }}>Roadmap</Link>
                                            </li>
                                            <li className="nav-item" >
                                                <Link href="#partner"
                                                    style={{
                                                        fontWeight: 500,
                                                        fontSize: "18px",
                                                    }}>Partners</Link>

                                            </li>
                                        </ul>
                                    </div>

                                    <div className="play-btn d-flex align-items-center">
                                        <Link href="https://beta.f3play.io/" className="btn btn-primary"
                                            style={{
                                                fontWeight: 600,
                                                fontSize: "18px",
                                            }}>Play Now</Link>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Header;
