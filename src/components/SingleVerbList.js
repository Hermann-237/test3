import React, { Fragment } from 'react'
import { useParams, NavLink } from "react-router-dom"
import SideLeft from "./SideLeft"
import SideRight from "./SideRight"
import Helmet from "react-helmet"
import touslesverb from "./touslesverb";
function SingleVerbList() {
    const { singleVerbList } = useParams()
    const verbValue = singleVerbList.split("-").reverse()[0].split(".")[0]
    const result = touslesverb.filter(element => element[0] === verbValue);
    const title = `Conjugation verb that starts with '${verbValue}' | Simplecyto Conjugator English`
    const description = `Conjugate the English verb that starts with '${verbValue}': indicative, past tense, participle, present perfect, passive, conditional, conjugation models and irregular verbs. Translate ride in context, with examples of use  and prononciation.`


    return (
        <div>
            <Helmet>
                <title>{title}</title>
                <meta name="description" content={description} />
            </Helmet>

            <div className="d-flex  flex-column flex-md-row justify-content-around allBody ">
                <SideLeft />
                <div className=" index-millieu   col-12 col-md-6 pt-5  sideCenter">
                    <h3 className="mb-5"> List of the verb starting by {`'${verbValue.toUpperCase()}'`}</h3>
                    <hr className="my-4"></hr>
                    <ul className="right-ul row">
                        {
                            result.map((element, index) => {
                                return (
                                    <Fragment key={index}>
                                        <li className="col-6 col-sm-4 text-left"><NavLink to={"/conjugation/conjugation-verb-" + element.trim() + ".html"} className="text-info" >{element}</NavLink>
                                        </li>
                                    </Fragment>
                                )
                            })
                        }
                    </ul>
                </div>
                <SideRight />
            </div>
        </div>
    )
}

export default SingleVerbList
