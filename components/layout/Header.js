import Link from "next/link";

function Header() {
    const scroll = (element) => {
        const section = document.querySelector(element);
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    return (
        <>
            <div className="header landing" >
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="navigation">
                                <nav className="navbar navbar-expand-lg navbar-dark">
                                    <div className="brand-logo">
                                        <div onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                                            <img src="/images/logo.png" alt="" className="logo-primary"
                                                style={{
                                                    height: "50px",
                                                }} />
                                        </div>
                                    </div>

                                    <div className={"collapse navbar-collapse"}>
                                        <ul className="navbar-nav" >
                                            <li className="nav-item" style={{cursor: "pointer"}}>
                                                <a onClick={() => scroll("#feature")}
                                                    style={{
                                                        fontWeight: 500,
                                                        fontSize: "16px",
                                                        cursor: "pointer",
                                                    }}>Features</a>
                                            </li>
                                            <li className="nav-item" style={{cursor: "pointer"}}>
                                                <a onClick={() => scroll("#tokenomic")}
                                                    style={{
                                                        fontWeight: 500,
                                                        fontSize: "16px",
                                                        cursor: "pointer",
                                                    }}>Tokenomics</a>
                                            </li>
                                            <li className="nav-item" style={{cursor: "pointer"}}>
                                                <a onClick={() => scroll("#roadmap")}
                                                    style={{
                                                        fontWeight: 500,
                                                        fontSize: "16px",
                                                    }}>Roadmap</a>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="play-btn d-flex align-items-center">
                                        <div className="btn btn-primary"
                                            style={{
                                                fontWeight: 600,
                                                fontSize: "16px",
                                                padding: "6px 16px",
                                            }}>Coming soon</div>
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
