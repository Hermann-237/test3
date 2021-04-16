import { useState } from "react"
import { useParams, useHistory } from "react-router-dom"
import Helmet from "react-helmet"

/* import axios from "axios" */

function Translate() {
    const { singleTranslate } = useParams()
    const [fromOrigine, setfromOrigine] = useState("en")
    const [toOrigine, settoOrigine] = useState("fr")
    const [inputLangue, setinputLangue] = useState("")
    const history = useHistory()
    const title = `Translate ${singleTranslate.split("-").join(" ")} | Translate word: ${singleTranslate.split("-").join(" ")} | Simplecyto Translate ${fromOrigine} to ${toOrigine}`
    const description = `words in context, translation ${singleTranslate.split("-").join(" ")} in context, simplecyto Context, idioms in context,  translation search engine, idiomatic translation, idioms translation, translation example, translation examples, Arabic, German, Spanish, French, Hebrew, Italian, Japanese, Dutch, Polish, Portuguese, Romanian, Russian, Turkish, Chinese, English, idiomatic translations, bilingual concordancer, contextual dictionary, example of use, examples of use, translations in context, context, language lovers, contextual example, idiomatic expressions, dictionary, examples and idioms, concordance tool`

    function OnclickTranslate(e) {
        e.preventDefault()
        history.push(`/translate/translate-${fromOrigine}-${toOrigine}-${inputLangue}.html`)
        console.log(inputLangue.length)

    }



    return (
        <>
            <Helmet>
                <title>{title}</title>
                <meta name="description" content={description} />
            </Helmet>
            <div className="container my-5 allBody">
                <h4 className="text-danger my-5">This page is being created try later ! ...</h4>
                <form className="form-inline d-flex justify-content-center" >
                    <div className="form-group mb-2">
                        <input type="text" className="form-control py-2" placeholder="Translate" value={inputLangue} onChange={(e) => {
                            setinputLangue(e.target.value)
                        }} />
                    </div>
                    <div className="form-group mb-2 ml-3 ">
                        <select id="inputState" className="form-control bg-primary text-white py-2" value={fromOrigine} onChange={(e) => {
                            setfromOrigine(e.target.value)
                        }}>
                            <option value="en">English</option>
                            <option value="de">German</option>
                            <option value="es">Spanish</option>
                            <option value="fr">French </option>
                            <option value="it">Italian</option>
                            <option value="nl">Dutch</option>
                            <option value="pt">Portuguese</option>
                        </select>
                    </div>
                    <div className="form-group mb-2">
                        <i className="fa fa-refresh ml-3 text-danger"></i>
                    </div>
                    <div className="form-group mb-2 ml-3 ">
                        <select id="inputState" className="form-control bg-danger text-white py-2" value={toOrigine} onChange={(e) => {
                            settoOrigine(e.target.value)
                        }}>
                            <option value="en">English</option>
                            <option value="de">German</option>
                            <option value="es">Spanish</option>
                            <option value="fr">French </option>
                            <option value="it">Italian</option>
                            <option value="nl">Dutch</option>
                            <option value="pt">Portuguese</option>
                        </select>
                    </div>
                    {
                        (inputLangue.length <= 0) ? (<button className="btn btn-info mb-2 ml-2" disabled> Translate</button>) : (<input type="submit" value="Translate" className="btn btn-info mb-2 ml-2" onClick={OnclickTranslate} />)
                    }

                </form>
                {/* <button className="btn btn-indo mb-2" disabled> Translate</button> */}

            </div>
        </>
    )
}

export default Translate