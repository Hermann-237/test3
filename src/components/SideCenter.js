import React, { Fragment } from 'react'
import { useState } from "react"
import { useHistory, NavLink } from "react-router-dom"
import irregularVerb from "./irregularVerb"
const a = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "R", "T", "U", "V", "W", "X", "Y", "Z"]

function SideCenter() {
    const [IrregularVerb] = useState(irregularVerb)
    const [inputValue, setinputValue] = useState("")
    const history = useHistory()


    function submitSeach(e) {
        e.preventDefault()
        history.push(`/conjugation/conjugaison-verb-${inputValue.trim()}.html`)
    }

    return (
        <>{/* col-12 col-md-8 */}
            <div className="col-12 col-md-6 py-5 sideCenter ">
                <div className="text-center mb-5">

                    <form className="form-inline d-flex justify-content-center" onSubmit={submitSeach} >
                        <div className="form-group mb-2">
                            <input type="text" className="form-control " placeholder="Conjugation" value={inputValue} onChange={(e) => {
                                setinputValue(e.target.value)
                            }} />
                        </div>
                        <input type="submit" value="Conjugation" className="btn btn-info mb-2 ml-2" />
                    </form>
                </div>
                <div className=" index-millieu pb-5 pr-4 pr-sm-0">
                    <h5 className=" pt-3 "> Irregular verbs</h5>
                    <hr className="my-4 ml-4 ml-sm-0"></hr>
                    <ul className="right-ul row">
                        {
                            IrregularVerb.map((verb, index) => {
                                return (
                                    <Fragment key={index}>
                                        <li className="col-6 col-sm-4 text-left"><NavLink to={"conjugation/conjugation-verb-" + verb + ".html"} className="text-info" >{verb}</NavLink>



                                        </li>
                                    </Fragment>
                                )
                            })
                        }
                    </ul>

                </div>
                <div className="my-5 py-5 index-millieu">
                    <h5 className="mb-5"> List of all the verbs</h5>
                    <hr className="my-4 ml-4 ml-sm-0 mr-4 mr-sm-0"></hr>

                    {
                        a.map((element, index) => {
                            return (<NavLink to={"/conjugations/aphabet/conjugation-list-of-verb-starting-by-" + element.toLocaleLowerCase() + ".html"} className="mx-1 text-info " key={index}> {element}</NavLink>)
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default SideCenter
