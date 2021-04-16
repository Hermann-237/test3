import { useState } from "react"
import { NavLink } from "react-router-dom"

import { Fragment } from "react"
const popularVerb = require("./popularVerb")
function SideRight() {

    const [PopularVerb] = useState(popularVerb)
    return (
        <>

            <div className="col-md-3 col-12 flex-wrap sideRight  pl-2 pr-sm-0 ">
                <h5> Most popular verbs</h5>
                <hr className="my-4"></hr>
                <ul className="right-ul row">
                    {
                        PopularVerb.map((verb, index) => {
                            return (
                                <Fragment key={index}>
                                    <li className="col-6 text-left"><NavLink to={"/conjugation/conjugation-verb-" + verb + ".html"} className="text-info pr-5" >{verb}</NavLink> </li>
                                </Fragment>
                            )
                        })
                    }
                </ul>

                <div>
                    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
                    <ins className="adsbygoogle"
                        style={{ display: "block", textAlign: "center" }}
                        data-ad-layout="in-article"
                        data-ad-format="fluid"
                        data-ad-client="ca-pub-9812907413573595"
                        data-ad-slot="8196551966"></ins>
                    <script>
                        (adsbygoogle = window.adsbygoogle || []).push({ });
                </script>
                </div>
            </div>
        </>
    )
}

export default SideRight
