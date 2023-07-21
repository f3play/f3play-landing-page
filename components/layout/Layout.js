import { useEffect, useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Head from "next/head";


const LayoutFront = ({
    children,
}) => {
    const [height, setHeight] = useState();
    useEffect(() => {
        setHeight(window.screen.height);
    }, []);
    return (
        <>
            <Head>
                <title>F3Play</title>
                <link rel="icon" href="/favicon.png" />
            </Head>
            <div id="main-wrapper" className="front">
                <Header />

                {children}

                <Footer />
            </div>
        </>
    );
};

export default LayoutFront;
