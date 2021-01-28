import React, { useRef, useEffect } from "react";

const { tableau } = window;

function Tableau() {
    const ref = useRef(null);

    /* Using our node proxy server */
    const url2 = `http://localhost:4000/api/tableau`;
    // const url2 = "http://b259599d8f6e.ngrok.io:4000/api/tableau";

    /* Using tableau directly */
    // const url =
    //     "https://dub01.online.tableau.com/t/herolopoc/views/poc/Sheet1?:showAppBanner=false&:display_count=n&:showVizHome=n&:origin=viz_share_link&Id=1";
    async function initViz() {
        console.log(new tableau.Viz(ref.current, url2));
        // new tableau.Viz(ref.current, url);
    }

    useEffect(() => {
        initViz();
    }, []);

    return (
        <div>
            <p>Tableau Embedded</p>
            <div ref={ref}></div>
        </div>
    );
}

export default Tableau;
