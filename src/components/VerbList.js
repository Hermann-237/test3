import React from 'react';
import { NavLink } from "react-router-dom";
import SideLeft from "./SideLeft"
import SideRight from "./SideRight"
const a = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

function VerbList() {
    return (
        <div className="d-flex  flex-column flex-md-row justify-content-around allBody">
            <SideLeft />
            <div className="col-12 col-md-6 py-5 index-millieu">
                <h1 className="mb-5"> List of all the verbs</h1>
                <hr className="my-4"></hr>

                {
                    a.map((element, index) => {
                        return (<NavLink to={"/conjugations/aphabet/conjugation-list-of-verb-starts-with-" + element.toLocaleLowerCase() + ".html"} className="mx-1 text-info " key={index}> {element}</NavLink>)
                    })
                }
            </div>
            <SideRight />
        </div>
    )
}

export default VerbList
