import { useParams, useHistory, NavLink } from "react-router-dom"
import { useState } from "react"
import irregularVerb from "./irregularVerb"
import irregularData from "./irregularAndPopularVerb";
import Helmet from "react-helmet"
import touslesverb from "./touslesverb"
import seulverbs from "./seulverb"
import dotenv from "dotenv"
dotenv.config()
/* map, agree,annul, annoy ,hop,dig,dip,dim*/

function SingleVerb() {
    const [inputValue, setinputValue] = useState("")
    const { singleVerb } = useParams()
    const history = useHistory()
    let verbSingleOne = singleVerb.split("-")[2].split(".")[0];
    const title = `Conjugation  ${verbSingleOne} | Conjugate verb ${verbSingleOne} | Simplecyto Conjugator English`;
    const description = `Conjugate the English verb ${verbSingleOne}: indicative, past tense, participle, present perfect, passive, conditional, conjugation models and irregular verbs. Translate ride in context, with examples of use  and prononciation.`;

    const filterData = irregularData.filter(element => element.conjugated_forms[0][1].split(" ")[1] === verbSingleOne)
    const verbObject = filterData[0]
    const petiteVoyelle = ["n", "m", "t", "g", "p", "b", "d"]
    const voyelle = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "z"]

    const consone = ["o", "i", "u", "a", "e"]
    let participes = null;
    let troisieme = null;
    let ing = null;
    if (verbSingleOne.split("").reverse()[0] === "e") {
        participes = " " + verbSingleOne + "d"
        troisieme = " " + verbSingleOne + "s"
        ing = verbSingleOne + "ing"

    }
    else if (verbSingleOne.split("").reverse()[0] === "y") {
        participes = " " + verbSingleOne.split("").reverse().slice(1).reverse().join("") + "ied"
        troisieme = " " + verbSingleOne.split("").reverse().slice(1).reverse().join("") + "ies"
        ing = verbSingleOne + "ing"
    }
    else if (verbSingleOne.split("").reverse()[0] === "h" || verbSingleOne.split("").reverse()[0] === "s") {
        participes = " " + verbSingleOne + "ed"
        troisieme = " " + verbSingleOne + "es"
        ing = verbSingleOne + "ing"
    }
    else if (verbSingleOne.length === 3 && petiteVoyelle.includes(verbSingleOne.split("").reverse()[0]) && consone.includes(verbSingleOne.split("").reverse()[1]) && voyelle.includes(verbSingleOne.split("").reverse()[2])) {
        participes = " " + verbSingleOne + verbSingleOne.split("").reverse()[0] + "ed";
        troisieme = " " + verbSingleOne + "s";
        ing = verbSingleOne + verbSingleOne.split("").reverse()[0] + "ing"
    }
    else if (verbSingleOne.length === 4 && petiteVoyelle.includes(verbSingleOne.split("").reverse()[0]) && consone.includes(verbSingleOne.split("").reverse()[1]) && voyelle.includes(verbSingleOne.split("").reverse()[2])) {
        participes = " " + verbSingleOne + verbSingleOne.split("").reverse()[0] + "ed";
        troisieme = " " + verbSingleOne + "s";
        ing = verbSingleOne + verbSingleOne.split("").reverse()[0] + "ing"
    }
    else if (verbSingleOne === "annul") {
        participes = " " + verbSingleOne + verbSingleOne.split("").reverse()[0] + "ed";
        troisieme = " " + verbSingleOne + "s";
        ing = verbSingleOne + verbSingleOne.split("").reverse()[0] + "ing"
    }
    else if (verbSingleOne.split("").reverse()[0] === "o") {
        participes = " " + verbSingleOne + "ed"
        troisieme = " " + verbSingleOne + "es"
        ing = verbSingleOne + "ing"
    }
    else {
        participes = " " + verbSingleOne + "ed"
        troisieme = " " + verbSingleOne + "s"
        ing = verbSingleOne + "ing"

    }


    const seulverb = seulverbs[0]

    function seachVerb(e) {
        e.preventDefault()
        history.push(`/conjugation/conjugation-verb-${inputValue.trim()}.html`)

    }

    return (
        <div>
            <Helmet>
                <title>{title}</title>
                <meta name="description" content={description} />
            </Helmet>
            <div className="container my-5">
                <form className="form-inline d-flex justify-content-center" onSubmit={seachVerb} >
                    <div className="form-group mb-2">
                        <input type="text" className="form-control " placeholder="Conjugation" value={inputValue} onChange={(e) => {
                            setinputValue(e.target.value)
                        }} />
                    </div>
                    <input type="submit" value="Conjugation" className="btn btn-info mb-2 ml-2" />


                </form>

            </div>

            <div className="d-flex  flex-column flex-md-row justify-content-around " >
                <div className="   p-2 col-12 col-md-2 d-none d-md-block">
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
                <div className="col-12 col-md-6 py-5 ">

                    {


                        (!touslesverb.includes(verbSingleOne)) ? <>
                            {/* debut bon */}

                            <div >
                                <p className="text-danger"> "{verbSingleOne}" does not exist so far! make sure the input field is an infinitive form</p>
                                <p> Infinitive :  <span className="text-danger">{seulverb.conjugated_forms[0][1]}</span></p>
                                <p> Simple Past :  <span className="text-danger">{seulverb.conjugated_forms[1][1]}</span></p>
                                <p>Past Participle :  <span className="text-danger">{seulverb.conjugated_forms[2][1]}</span></p>
                                <h4 className="text-info pt-5 ">Indicative</h4>
                                <div className="row">
                                    {seulverb.conjugation_tables.indicative.map((element, index) => {
                                        return (
                                            <div className="col-sm" key={index}>

                                                <div className="card  singleverb-card  mt-5 " style={{ width: "370px" }}>
                                                    <p className="text-left pl-3 text-danger pt-3">{element.heading.toUpperCase()}</p>
                                                    <ul className="list-group list-group-flush">
                                                        <li className="list-group-item text-left"><NavLink to={`/translate/translate-${element.forms[0][0]}-${element.forms[0][1].split(" ").join("-")}.html`} > <span className="text-dark"> {element.forms[0][0]} </span><span className="text-info">{element.forms[0][1]} </span></NavLink>  <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                                            const utterance = new SpeechSynthesisUtterance(element.forms[0][0] + element.forms[0][1])
                                                            utterance.rate = .8
                                                            utterance.lang = "us-US"
                                                            speechSynthesis.speak(utterance)
                                                        }}> </i>
                                                        </li>
                                                        <li className="list-group-item text-left"><NavLink to={`/translate/translate-${element.forms[1][0]}-${element.forms[1][1].split(" ").join("-")}.html`}> <span className="text-dark"> {element.forms[1][0]} </span><span className="text-info">{element.forms[1][1]} </span></NavLink>  <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                                            const utterance = new SpeechSynthesisUtterance(element.forms[1][0] + element.forms[1][1])
                                                            utterance.rate = .8
                                                            utterance.lang = "us-US"
                                                            speechSynthesis.speak(utterance)
                                                        }}> </i>
                                                        </li>
                                                        <li className="list-group-item text-left"><NavLink to={`/translate/translate-he-${element.forms[2][1].split(" ").join("-")}.html`}> <span className="text-dark"> {element.forms[2][0]} </span><span className="text-info">{element.forms[2][1]} </span></NavLink>  <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                                            const utterance = new SpeechSynthesisUtterance("she" + element.forms[2][1])
                                                            utterance.rate = .8
                                                            utterance.lang = "us-US"
                                                            speechSynthesis.speak(utterance)
                                                        }}> </i>
                                                        </li>
                                                        <li className="list-group-item text-left"><NavLink to={`/translate/translate-${element.forms[3][0]}-${element.forms[3][1].split(" ").join("-")}.html`}> <span className="text-dark"> {element.forms[3][0]} </span><span className="text-info">{element.forms[3][1]} </span></NavLink>  <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                                            const utterance = new SpeechSynthesisUtterance(element.forms[3][0] + element.forms[3][1])
                                                            utterance.rate = .8
                                                            utterance.lang = "us-US"
                                                            speechSynthesis.speak(utterance)
                                                        }}> </i>
                                                        </li>
                                                        <li className="list-group-item text-left"><NavLink to={`/translate/translate-${element.forms[4][0]}-${element.forms[4][1].split(" ").join("-")}.html`}> <span className="text-dark"> {element.forms[4][0]} </span><span className="text-info">{element.forms[4][1]} </span></NavLink>  <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                                            const utterance = new SpeechSynthesisUtterance(element.forms[4][0] + element.forms[4][1])
                                                            utterance.rate = .8
                                                            utterance.lang = "us-US"
                                                            speechSynthesis.speak(utterance)
                                                        }}> </i>
                                                        </li>
                                                        <li className="list-group-item text-left"><NavLink to={`/translate/translate-${element.forms[5][0]}-${element.forms[5][1].split(" ").join("-")}.html`}> <span className="text-dark"> {element.forms[5][0]} </span><span className="text-info">{element.forms[5][1]} </span></NavLink>  <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                                            const utterance = new SpeechSynthesisUtterance(element.forms[5][0] + element.forms[5][1])
                                                            utterance.rate = .8
                                                            utterance.lang = "us-US"
                                                            speechSynthesis.speak(utterance)
                                                        }}> </i>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        )

                                    })

                                    }
                                </div>

                                <h4 className="text-info pt-5">Passive</h4>
                                <div className="row">
                                    {seulverb.conjugation_tables.passive.map((element, index) => {
                                        return (
                                            <div className="col-sm" key={index}>

                                                <div className="card  singleverb-card  mt-5 " style={{ width: "370px" }}>
                                                    <p className="text-left pl-3 text-danger pt-3">{element.heading.toUpperCase()}</p>
                                                    <ul className="list-group list-group-flush">
                                                        <li className="list-group-item text-left"><NavLink to={`/translate/translate-${element.forms[0][0]}-${element.forms[0][1].split(" ").join("-")}.html`}> <span className="text-dark">{element.forms[0][0]} </span><span className="text-info">{element.forms[0][1]} </span></NavLink>  <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                                            const utterance = new SpeechSynthesisUtterance(element.forms[0][0] + element.forms[0][1])
                                                            utterance.rate = .8
                                                            utterance.lang = "us-US"
                                                            speechSynthesis.speak(utterance)
                                                        }}> </i>
                                                        </li>
                                                        <li className="list-group-item text-left"><NavLink to={`/translate/translate-${element.forms[1][0]}-${element.forms[1][1].split(" ").join("-")}.html`}> <span className="text-dark"> {element.forms[1][0]} </span><span className="text-info">{element.forms[1][1]} </span></NavLink>  <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                                            const utterance = new SpeechSynthesisUtterance(element.forms[1][0] + element.forms[1][1])
                                                            utterance.rate = .8
                                                            utterance.lang = "us-US"
                                                            speechSynthesis.speak(utterance)
                                                        }}> </i>
                                                        </li>
                                                        <li className="list-group-item text-left"><NavLink to={`/translate/translate-he-${element.forms[2][1].split(" ").join("-")}.html`}> <span className="text-dark"> {element.forms[2][0]} </span><span className="text-info">{element.forms[2][1]} </span></NavLink>  <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                                            const utterance = new SpeechSynthesisUtterance("she" + element.forms[2][1])
                                                            utterance.rate = .8
                                                            utterance.lang = "us-US"
                                                            speechSynthesis.speak(utterance)
                                                        }}> </i>
                                                        </li>
                                                        <li className="list-group-item text-left"><NavLink to={`/translate/translate-${element.forms[3][0]}-${element.forms[3][1].split(" ").join("-")}.html`}> <span className="text-dark"> {element.forms[3][0]} </span><span className="text-info">{element.forms[3][1]} </span></NavLink>  <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                                            const utterance = new SpeechSynthesisUtterance(element.forms[3][0] + element.forms[3][1])
                                                            utterance.rate = .8
                                                            utterance.lang = "us-US"
                                                            speechSynthesis.speak(utterance)
                                                        }}> </i>
                                                        </li>
                                                        <li className="list-group-item text-left"><NavLink to={`/translate/translate-${element.forms[4][0]}-${element.forms[4][1].split(" ").join("-")}.html`}> <span className="text-dark"> {element.forms[4][0]} </span><span className="text-info">{element.forms[4][1]} </span></NavLink>  <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                                            const utterance = new SpeechSynthesisUtterance(element.forms[4][0] + element.forms[4][1])
                                                            utterance.rate = .8
                                                            utterance.lang = "us-US"
                                                            speechSynthesis.speak(utterance)
                                                        }}> </i>
                                                        </li>
                                                        <li className="list-group-item text-left"><NavLink to={`/translate/translate-${element.forms[5][0]}-${element.forms[5][1].split(" ").join("-")}.html`}> <span className="text-dark"> {element.forms[5][0]} </span><span className="text-info">{element.forms[5][1]} </span></NavLink>  <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                                            const utterance = new SpeechSynthesisUtterance(element.forms[5][0] + element.forms[5][1])
                                                            utterance.rate = .8
                                                            utterance.lang = "us-US"
                                                            speechSynthesis.speak(utterance)
                                                        }}> </i>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        )

                                    })

                                    }
                                </div>
                                <h4 className="text-info pt-5">Conditional</h4>
                                <div className="row">
                                    {seulverb.conjugation_tables.conditional.map((element, index) => {
                                        return (
                                            <div className="col-sm" key={index}>

                                                <div className="card  singleverb-card  mt-5 " style={{ width: "370px" }}>
                                                    <p className="text-left pl-3 text-danger pt-3">{element.heading.toUpperCase()}</p>
                                                    <ul className="list-group list-group-flush">
                                                        <li className="list-group-item text-left"><NavLink to={`/translate/translate-${element.forms[0][0]}-${element.forms[0][1].split(" ").join("-")}.html`}> <span className="text-dark"> {element.forms[0][0]} </span><span className="text-info">{element.forms[0][1]} </span></NavLink>  <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                                            const utterance = new SpeechSynthesisUtterance(element.forms[0][0] + element.forms[0][1])
                                                            utterance.rate = .8
                                                            utterance.lang = "us-US"
                                                            speechSynthesis.speak(utterance)
                                                        }}> </i>
                                                        </li>
                                                        <li className="list-group-item text-left"><NavLink to={`/translate/translate-${element.forms[1][0]}-${element.forms[1][1].split(" ").join("-")}.html`}> <span className="text-dark"> {element.forms[1][0]} </span><span className="text-info">{element.forms[1][1]} </span></NavLink>  <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                                            const utterance = new SpeechSynthesisUtterance(element.forms[1][0] + element.forms[1][1])
                                                            utterance.rate = .8
                                                            utterance.lang = "us-US"
                                                            speechSynthesis.speak(utterance)
                                                        }}> </i>
                                                        </li>
                                                        <li className="list-group-item text-left"><NavLink to={`/translate/translate-he-${element.forms[2][1].split(" ").join("-")}.html`}> <span className="text-dark"> {element.forms[2][0]} </span><span className="text-info">{element.forms[2][1]} </span></NavLink>  <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                                            const utterance = new SpeechSynthesisUtterance("she" + element.forms[2][1])
                                                            utterance.rate = .8
                                                            utterance.lang = "us-US"
                                                            speechSynthesis.speak(utterance)
                                                        }}> </i>
                                                        </li>
                                                        <li className="list-group-item text-left"><NavLink to={`/translate/translate-${element.forms[3][0]}-${element.forms[3][1].split(" ").join("-")}.html`}> <span className="text-dark"> {element.forms[3][0]} </span><span className="text-info">{element.forms[3][1]} </span></NavLink>  <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                                            const utterance = new SpeechSynthesisUtterance(element.forms[3][0] + element.forms[3][1])
                                                            utterance.rate = .8
                                                            utterance.lang = "us-US"
                                                            speechSynthesis.speak(utterance)
                                                        }}> </i>
                                                        </li>
                                                        <li className="list-group-item text-left"><NavLink to={`/translate/translate-${element.forms[4][0]}-${element.forms[4][1].split(" ").join("-")}.html`}> <span className="text-dark"> {element.forms[4][0]} </span><span className="text-info">{element.forms[4][1]} </span></NavLink>  <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                                            const utterance = new SpeechSynthesisUtterance(element.forms[4][0] + element.forms[4][1])
                                                            utterance.rate = .8
                                                            utterance.lang = "us-US"
                                                            speechSynthesis.speak(utterance)
                                                        }}> </i>
                                                        </li>
                                                        <li className="list-group-item text-left"><NavLink to={`/translate/translate-${element.forms[5][0]}-${element.forms[5][1].split(" ").join("-")}.html`}> <span className="text-dark"> {element.forms[5][0]} </span><span className="text-info">{element.forms[5][1]} </span></NavLink>  <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                                            const utterance = new SpeechSynthesisUtterance(element.forms[5][0] + element.forms[5][1])
                                                            utterance.rate = .8
                                                            utterance.lang = "us-US"
                                                            speechSynthesis.speak(utterance)
                                                        }}> </i>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        )

                                    })

                                    }
                                </div>


                            </div>

                            {/* fin bon */}
                        </> :

                            (!irregularVerb.includes(verbSingleOne)) ? <>
                                <p>Infinitive:  <span className="text-danger"> to {verbSingleOne}</span></p>
                                <p>Simple Past:  <span className="text-danger">  {participes}</span></p>
                                <p>Past Participle :  <span className="text-danger">  {participes}</span></p>
                                <h4 className="text-info pt-5  ">Indicative</h4>
                                <div className="row">
                                    <div className="col-sm">

                                        <div className="card  singleverb-card  mt-5 " style={{ width: "370px" }}>
                                            <p className="text-left pl-3 text-danger pt-3"> Present Simple</p>
                                            <ul className="list-group list-group-flush">
                                                <li className="list-group-item text-left"><NavLink to={`/translate/translate-i-${verbSingleOne}.html`} > <span className="text-dark"> I </span><span className="text-info">{verbSingleOne} </span></NavLink>  <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                                    const utterance = new SpeechSynthesisUtterance("I " + verbSingleOne)
                                                    utterance.rate = .8
                                                    utterance.lang = "us-US"
                                                    speechSynthesis.speak(utterance)
                                                }}> </i>
                                                </li>
                                                <li className="list-group-item text-left"><NavLink to={`/translate/translate-you-${verbSingleOne}.html`}> <span className="text-dark"> you </span><span className="text-info">{verbSingleOne} </span></NavLink>  <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                                    const utterance = new SpeechSynthesisUtterance("you " + verbSingleOne)
                                                    utterance.rate = .8
                                                    utterance.lang = "us-US"
                                                    speechSynthesis.speak(utterance)
                                                }}> </i>
                                                </li>
                                                <li className="list-group-item text-left"><NavLink to={`/translate/translate-he-${verbSingleOne}.html`}> <span className="text-dark"> he/she/it </span><span className="text-info">{troisieme}</span></NavLink>  <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                                    const utterance = new SpeechSynthesisUtterance("she " + troisieme)
                                                    utterance.rate = .8
                                                    utterance.lang = "us-US"
                                                    speechSynthesis.speak(utterance)
                                                }}> </i>
                                                </li>
                                                <li className="list-group-item text-left"><NavLink to={`/translate/translate-we-${verbSingleOne}.html`}> <span className="text-dark"> we </span><span className="text-info">{verbSingleOne} </span></NavLink>  <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                                    const utterance = new SpeechSynthesisUtterance("we " + verbSingleOne)
                                                    utterance.rate = .8
                                                    utterance.lang = "us-US"
                                                    speechSynthesis.speak(utterance)
                                                }}> </i>
                                                </li>
                                                <li className="list-group-item text-left"><NavLink to={`/translate/translate-you-${verbSingleOne}.html`}> <span className="text-dark"> you </span><span className="text-info">{verbSingleOne} </span></NavLink>  <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                                    const utterance = new SpeechSynthesisUtterance("you " + verbSingleOne)
                                                    utterance.rate = .8
                                                    utterance.lang = "us-US"
                                                    speechSynthesis.speak(utterance)
                                                }}> </i>
                                                </li>
                                                <li className="list-group-item text-left"><NavLink to={`/translate/translate-they-${verbSingleOne}.html`}> <span className="text-dark"> they </span><span className="text-info">{verbSingleOne} </span></NavLink>  <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                                    const utterance = new SpeechSynthesisUtterance("they " + verbSingleOne)
                                                    utterance.rate = .8
                                                    utterance.lang = "us-US"
                                                    speechSynthesis.speak(utterance)
                                                }}> </i>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    {/* deuxieme */}

                                    <div className="col-sm">

                                        <div className="card  singleverb-card  mt-5 " style={{ width: "370px" }}>
                                            <p className="text-left pl-3 text-danger pt-3"> Present Progressive</p>
                                            <ul className="list-group list-group-flush">
                                                <li className="list-group-item text-left"><NavLink to={`/translate/translate-i-${verbSingleOne}.html`} > <span className="text-dark"> I </span><span className="text-info">{"am " + ing}</span></NavLink>  <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                                    const utterance = new SpeechSynthesisUtterance("I am " + ing)
                                                    utterance.rate = .8
                                                    utterance.lang = "us-US"
                                                    speechSynthesis.speak(utterance)
                                                }}> </i>
                                                </li>
                                                <li className="list-group-item text-left"><NavLink to={`/translate/translate-you-${verbSingleOne}.html`}> <span className="text-dark"> you </span><span className="text-info">{"are " + ing}</span></NavLink>  <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                                    const utterance = new SpeechSynthesisUtterance("you are " + ing)
                                                    utterance.rate = .8
                                                    utterance.lang = "us-US"
                                                    speechSynthesis.speak(utterance)
                                                }}> </i>
                                                </li>
                                                <li className="list-group-item text-left"><NavLink to={`/translate/translate-he-${verbSingleOne}.html`}> <span className="text-dark"> he/she/it </span><span className="text-info">{"is " + ing}</span></NavLink>  <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                                    const utterance = new SpeechSynthesisUtterance("she is " + ing)
                                                    utterance.rate = .8
                                                    utterance.lang = "us-US"
                                                    speechSynthesis.speak(utterance)
                                                }}> </i>
                                                </li>
                                                <li className="list-group-item text-left"><NavLink to={`/translate/translate-we-${verbSingleOne}.html`}> <span className="text-dark"> we </span><span className="text-info">{"are " + ing}</span></NavLink>  <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                                    const utterance = new SpeechSynthesisUtterance("we are " + ing)
                                                    utterance.rate = .8
                                                    utterance.lang = "us-US"
                                                    speechSynthesis.speak(utterance)
                                                }}> </i>
                                                </li>
                                                <li className="list-group-item text-left"><NavLink to={`/translate/translate-you-${verbSingleOne}.html`}> <span className="text-dark"> you </span><span className="text-info">{"are " + ing}</span></NavLink>  <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                                    const utterance = new SpeechSynthesisUtterance("you are " + ing)
                                                    utterance.rate = .8
                                                    utterance.lang = "us-US"
                                                    speechSynthesis.speak(utterance)
                                                }}> </i>
                                                </li>
                                                <li className="list-group-item text-left"><NavLink to={`/translate/translate-they-${verbSingleOne}.html`}> <span className="text-dark"> they </span><span className="text-info">{"are " + ing}</span></NavLink>  <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                                    const utterance = new SpeechSynthesisUtterance("they are " + ing)
                                                    utterance.rate = .8
                                                    utterance.lang = "us-US"
                                                    speechSynthesis.speak(utterance)
                                                }}> </i>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    {/* troisieme */}



                                    <div className="col-sm">

                                        <div className="card  singleverb-card  mt-5 " style={{ width: "370px" }}>
                                            <p className="text-left pl-3 text-danger pt-3"> Present Perfect</p>
                                            <ul className="list-group list-group-flush">
                                                <li className="list-group-item text-left"><NavLink to={`/translate/translate-i-${verbSingleOne}.html`} > <span className="text-dark"> I </span><span className="text-info">{"have " + participes}</span></NavLink>  <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                                    const utterance = new SpeechSynthesisUtterance("I have " + participes)
                                                    utterance.rate = .8
                                                    utterance.lang = "us-US"
                                                    speechSynthesis.speak(utterance)
                                                }}> </i>
                                                </li>
                                                <li className="list-group-item text-left"><NavLink to={`/translate/translate-you-${verbSingleOne}.html`}> <span className="text-dark"> you </span><span className="text-info">{"have " + participes}</span></NavLink>  <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                                    const utterance = new SpeechSynthesisUtterance("you have " + participes)
                                                    utterance.rate = .8
                                                    utterance.lang = "us-US"
                                                    speechSynthesis.speak(utterance)
                                                }}> </i>
                                                </li>
                                                <li className="list-group-item text-left"><NavLink to={`/translate/translate-he-${verbSingleOne}.html`}> <span className="text-dark"> he/she/it </span><span className="text-info">{"has " + participes}</span></NavLink>  <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                                    const utterance = new SpeechSynthesisUtterance("she has " + participes)
                                                    utterance.rate = .8
                                                    utterance.lang = "us-US"
                                                    speechSynthesis.speak(utterance)
                                                }}> </i>
                                                </li>
                                                <li className="list-group-item text-left"><NavLink to={`/translate/translate-we-${verbSingleOne}.html`}> <span className="text-dark"> we </span><span className="text-info">{"have " + participes}</span></NavLink>  <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                                    const utterance = new SpeechSynthesisUtterance("we have " + participes)
                                                    utterance.rate = .8
                                                    utterance.lang = "us-US"
                                                    speechSynthesis.speak(utterance)
                                                }}> </i>
                                                </li>
                                                <li className="list-group-item text-left"><NavLink to={`/translate/translate-you-${verbSingleOne}.html`}> <span className="text-dark"> you </span><span className="text-info">{"have " + participes}</span></NavLink>  <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                                    const utterance = new SpeechSynthesisUtterance("you have " + participes)
                                                    utterance.rate = .8
                                                    utterance.lang = "us-US"
                                                    speechSynthesis.speak(utterance)
                                                }}> </i>
                                                </li>
                                                <li className="list-group-item text-left"><NavLink to={`/translate/translate-they-${verbSingleOne}.html`}> <span className="text-dark"> they </span><span className="text-info">{"have " + participes}</span></NavLink>  <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                                    const utterance = new SpeechSynthesisUtterance("they have " + participes)
                                                    utterance.rate = .8
                                                    utterance.lang = "us-US"
                                                    speechSynthesis.speak(utterance)
                                                }}> </i>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    {/* quatrieme */}



                                    <div className="col-sm">

                                        <div className="card  singleverb-card  mt-5 " style={{ width: "370px" }}>
                                            <p className="text-left pl-3 text-danger pt-3"> Present Perfect Progressive</p>
                                            <ul className="list-group list-group-flush">
                                                <li className="list-group-item text-left"><NavLink to={`/translate/translate-i-${verbSingleOne}.html`} > <span className="text-dark"> I </span><span className="text-info">{"have been " + ing}</span></NavLink>  <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                                    const utterance = new SpeechSynthesisUtterance("I have been " + ing)
                                                    utterance.rate = .8
                                                    utterance.lang = "us-US"
                                                    speechSynthesis.speak(utterance)
                                                }}> </i>
                                                </li>
                                                <li className="list-group-item text-left"><NavLink to={`/translate/translate-you-${verbSingleOne}.html`}> <span className="text-dark"> you </span><span className="text-info">{"have been " + ing}</span></NavLink>  <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                                    const utterance = new SpeechSynthesisUtterance("you have been " + ing)
                                                    utterance.rate = .8
                                                    utterance.lang = "us-US"
                                                    speechSynthesis.speak(utterance)
                                                }}> </i>
                                                </li>
                                                <li className="list-group-item text-left"><NavLink to={`/translate/translate-he-${verbSingleOne}.html`}> <span className="text-dark"> he/she/it </span><span className="text-info">{"has been " + ing}</span></NavLink>  <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                                    const utterance = new SpeechSynthesisUtterance("she has been " + ing)
                                                    utterance.rate = .8
                                                    utterance.lang = "us-US"
                                                    speechSynthesis.speak(utterance)
                                                }}> </i>
                                                </li>
                                                <li className="list-group-item text-left"><NavLink to={`/translate/translate-we-${verbSingleOne}.html`}> <span className="text-dark"> we </span><span className="text-info">{"have been " + ing}</span></NavLink>  <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                                    const utterance = new SpeechSynthesisUtterance("we have been " + ing)
                                                    utterance.rate = .8
                                                    utterance.lang = "us-US"
                                                    speechSynthesis.speak(utterance)
                                                }}> </i>
                                                </li>
                                                <li className="list-group-item text-left"><NavLink to={`/translate/translate-you-${verbSingleOne}.html`}> <span className="text-dark"> you </span><span className="text-info">{"have been " + ing}</span></NavLink>  <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                                    const utterance = new SpeechSynthesisUtterance("you have been " + ing)
                                                    utterance.rate = .8
                                                    utterance.lang = "us-US"
                                                    speechSynthesis.speak(utterance)
                                                }}> </i>
                                                </li>
                                                <li className="list-group-item text-left"><NavLink to={`/translate/translate-they-${verbSingleOne}.html`}> <span className="text-dark"> they </span><span className="text-info">{"have been " + ing}</span></NavLink>  <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                                    const utterance = new SpeechSynthesisUtterance("they have been " + ing)
                                                    utterance.rate = .8
                                                    utterance.lang = "us-US"
                                                    speechSynthesis.speak(utterance)
                                                }}> </i>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    {/* Simple past */}



                                    <div className="col-sm">

                                        <div className="card  singleverb-card  mt-5 " style={{ width: "370px" }}>
                                            <p className="text-left pl-3 text-danger pt-3"> Simple Past</p>
                                            <ul className="list-group list-group-flush">
                                                <li className="list-group-item text-left"><NavLink to={`/translate/translate-i-${verbSingleOne}.html`} > <span className="text-dark"> I </span><span className="text-info">{participes}</span></NavLink>  <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                                    const utterance = new SpeechSynthesisUtterance("I " + participes)
                                                    utterance.rate = .8
                                                    utterance.lang = "us-US"
                                                    speechSynthesis.speak(utterance)
                                                }}> </i>
                                                </li>
                                                <li className="list-group-item text-left"><NavLink to={`/translate/translate-you-${verbSingleOne}.html`}> <span className="text-dark"> you </span><span className="text-info">{participes}</span></NavLink>  <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                                    const utterance = new SpeechSynthesisUtterance("you " + participes)
                                                    utterance.rate = .8
                                                    utterance.lang = "us-US"
                                                    speechSynthesis.speak(utterance)
                                                }}> </i>
                                                </li>
                                                <li className="list-group-item text-left"><NavLink to={`/translate/translate-he-${verbSingleOne}.html`}> <span className="text-dark"> he/she/it </span><span className="text-info">{participes}</span></NavLink>  <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                                    const utterance = new SpeechSynthesisUtterance("she " + participes)
                                                    utterance.rate = .8
                                                    utterance.lang = "us-US"
                                                    speechSynthesis.speak(utterance)
                                                }}> </i>
                                                </li>
                                                <li className="list-group-item text-left"><NavLink to={`/translate/translate-we-${verbSingleOne}.html`}> <span className="text-dark"> we </span><span className="text-info">{participes}</span></NavLink>  <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                                    const utterance = new SpeechSynthesisUtterance("we " + participes)
                                                    utterance.rate = .8
                                                    utterance.lang = "us-US"
                                                    speechSynthesis.speak(utterance)
                                                }}> </i>
                                                </li>
                                                <li className="list-group-item text-left"><NavLink to={`/translate/translate-you-${verbSingleOne}.html`}> <span className="text-dark"> you </span><span className="text-info">{participes}</span></NavLink>  <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                                    const utterance = new SpeechSynthesisUtterance("you " + participes)
                                                    utterance.rate = .8
                                                    utterance.lang = "us-US"
                                                    speechSynthesis.speak(utterance)
                                                }}> </i>
                                                </li>
                                                <li className="list-group-item text-left"><NavLink to={`/translate/translate-they-${verbSingleOne}.html`}> <span className="text-dark"> they </span><span className="text-info">{participes}</span></NavLink>  <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                                    const utterance = new SpeechSynthesisUtterance("they " + participes)
                                                    utterance.rate = .8
                                                    utterance.lang = "us-US"
                                                    speechSynthesis.speak(utterance)
                                                }}> </i>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    {/* past progressive */}
                                    <div className="col-sm">

                                        <div className="card  singleverb-card  mt-5 " style={{ width: "370px" }}>
                                            <p className="text-left pl-3 text-danger pt-3"> Past Progressive</p>
                                            <ul className="list-group list-group-flush">
                                                <li className="list-group-item text-left"><NavLink to={`/translate/translate-i-${verbSingleOne}.html`} > <span className="text-dark"> I </span><span className="text-info">{"was " + ing}</span></NavLink>  <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                                    const utterance = new SpeechSynthesisUtterance("I was " + ing)
                                                    utterance.rate = .8
                                                    utterance.lang = "us-US"
                                                    speechSynthesis.speak(utterance)
                                                }}> </i>
                                                </li>
                                                <li className="list-group-item text-left"><NavLink to={`/translate/translate-you-${verbSingleOne}.html`}> <span className="text-dark"> you </span><span className="text-info">{"were " + ing}</span></NavLink>  <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                                    const utterance = new SpeechSynthesisUtterance("you were " + ing)
                                                    utterance.rate = .8
                                                    utterance.lang = "us-US"
                                                    speechSynthesis.speak(utterance)
                                                }}> </i>
                                                </li>
                                                <li className="list-group-item text-left"><NavLink to={`/translate/translate-he-${verbSingleOne}.html`}> <span className="text-dark"> he/she/it </span><span className="text-info">{"was " + ing}</span></NavLink>  <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                                    const utterance = new SpeechSynthesisUtterance("she was " + ing)
                                                    utterance.rate = .8
                                                    utterance.lang = "us-US"
                                                    speechSynthesis.speak(utterance)
                                                }}> </i>
                                                </li>
                                                <li className="list-group-item text-left"><NavLink to={`/translate/translate-we-${verbSingleOne}.html`}> <span className="text-dark"> we </span><span className="text-info">{"were " + ing}</span></NavLink>  <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                                    const utterance = new SpeechSynthesisUtterance("we were " + ing)
                                                    utterance.rate = .8
                                                    utterance.lang = "us-US"
                                                    speechSynthesis.speak(utterance)
                                                }}> </i>
                                                </li>
                                                <li className="list-group-item text-left"><NavLink to={`/translate/translate-you-${verbSingleOne}.html`}> <span className="text-dark"> you </span><span className="text-info">{"were " + ing}</span></NavLink>  <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                                    const utterance = new SpeechSynthesisUtterance("you were " + ing)
                                                    utterance.rate = .8
                                                    utterance.lang = "us-US"
                                                    speechSynthesis.speak(utterance)
                                                }}> </i>
                                                </li>
                                                <li className="list-group-item text-left"><NavLink to={`/translate/translate-they-${verbSingleOne}.html`}> <span className="text-dark"> they </span><span className="text-info">{"were " + ing}</span></NavLink>  <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                                    const utterance = new SpeechSynthesisUtterance("they were " + ing)
                                                    utterance.rate = .8
                                                    utterance.lang = "us-US"
                                                    speechSynthesis.speak(utterance)
                                                }}> </i>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    {/* 7 */}
                                    <div className="col-sm">

                                        <div className="card  singleverb-card  mt-5 " style={{ width: "370px" }}>
                                            <p className="text-left pl-3 text-danger pt-3"> Past Perfect</p>
                                            <ul className="list-group list-group-flush">
                                                <li className="list-group-item text-left"><NavLink to={`/translate/translate-i-${verbSingleOne}.html`} > <span className="text-dark"> I </span><span className="text-info">{"had " + participes}</span></NavLink>  <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                                    const utterance = new SpeechSynthesisUtterance("I had " + participes)
                                                    utterance.rate = .8
                                                    utterance.lang = "us-US"
                                                    speechSynthesis.speak(utterance)
                                                }}> </i>
                                                </li>
                                                <li className="list-group-item text-left"><NavLink to={`/translate/translate-you-${verbSingleOne}.html`}> <span className="text-dark"> you </span><span className="text-info">{"had " + participes}</span></NavLink>  <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                                    const utterance = new SpeechSynthesisUtterance("you had " + participes)
                                                    utterance.rate = .8
                                                    utterance.lang = "us-US"
                                                    speechSynthesis.speak(utterance)
                                                }}> </i>
                                                </li>
                                                <li className="list-group-item text-left"><NavLink to={`/translate/translate-he-${verbSingleOne}.html`}> <span className="text-dark"> he/she/it </span><span className="text-info">{"had " + participes}</span></NavLink>  <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                                    const utterance = new SpeechSynthesisUtterance("she had " + participes)
                                                    utterance.rate = .8
                                                    utterance.lang = "us-US"
                                                    speechSynthesis.speak(utterance)
                                                }}> </i>
                                                </li>
                                                <li className="list-group-item text-left"><NavLink to={`/translate/translate-we-${verbSingleOne}.html`}> <span className="text-dark"> we </span><span className="text-info">{"had " + participes}</span></NavLink>  <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                                    const utterance = new SpeechSynthesisUtterance("we had " + participes)
                                                    utterance.rate = .8
                                                    utterance.lang = "us-US"
                                                    speechSynthesis.speak(utterance)
                                                }}> </i>
                                                </li>
                                                <li className="list-group-item text-left"><NavLink to={`/translate/translate-you-${verbSingleOne}.html`}> <span className="text-dark"> you </span><span className="text-info">{"had " + participes}</span></NavLink>  <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                                    const utterance = new SpeechSynthesisUtterance("you had " + participes)
                                                    utterance.rate = .8
                                                    utterance.lang = "us-US"
                                                    speechSynthesis.speak(utterance)
                                                }}> </i>
                                                </li>
                                                <li className="list-group-item text-left"><NavLink to={`/translate/translate-they-${verbSingleOne}.html`}> <span className="text-dark"> they </span><span className="text-info">{"had " + participes}</span></NavLink>  <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                                    const utterance = new SpeechSynthesisUtterance("they had " + participes)
                                                    utterance.rate = .8
                                                    utterance.lang = "us-US"
                                                    speechSynthesis.speak(utterance)
                                                }}> </i>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    {/* 9 */}
                                    <div className="col-sm">

                                        <div className="card  singleverb-card  mt-5 " style={{ width: "370px" }}>
                                            <p className="text-left pl-3 text-danger pt-3"> Past Perfect Progressive</p>
                                            <ul className="list-group list-group-flush">
                                                <li className="list-group-item text-left"><NavLink to={`/translate/translate-i-${verbSingleOne}.html`} > <span className="text-dark"> I </span><span className="text-info">{"had been " + ing}</span></NavLink>  <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                                    const utterance = new SpeechSynthesisUtterance("I had been " + ing)
                                                    utterance.rate = .8
                                                    utterance.lang = "us-US"
                                                    speechSynthesis.speak(utterance)
                                                }}> </i>
                                                </li>
                                                <li className="list-group-item text-left"><NavLink to={`/translate/translate-you-${verbSingleOne}.html`}> <span className="text-dark"> you </span><span className="text-info">{"had been " + ing}</span></NavLink>  <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                                    const utterance = new SpeechSynthesisUtterance("you had been " + ing)
                                                    utterance.rate = .8
                                                    utterance.lang = "us-US"
                                                    speechSynthesis.speak(utterance)
                                                }}> </i>
                                                </li>
                                                <li className="list-group-item text-left"><NavLink to={`/translate/translate-he-${verbSingleOne}.html`}> <span className="text-dark"> he/she/it </span><span className="text-info">{"had been " + ing}</span></NavLink>  <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                                    const utterance = new SpeechSynthesisUtterance("she had been " + ing)
                                                    utterance.rate = .8
                                                    utterance.lang = "us-US"
                                                    speechSynthesis.speak(utterance)
                                                }}> </i>
                                                </li>
                                                <li className="list-group-item text-left"><NavLink to={`/translate/translate-we-${verbSingleOne}.html`}> <span className="text-dark"> we </span><span className="text-info">{"had been " + ing}</span></NavLink>  <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                                    const utterance = new SpeechSynthesisUtterance("we had been " + ing)
                                                    utterance.rate = .8
                                                    utterance.lang = "us-US"
                                                    speechSynthesis.speak(utterance)
                                                }}> </i>
                                                </li>
                                                <li className="list-group-item text-left"><NavLink to={`/translate/translate-you-${verbSingleOne}.html`}> <span className="text-dark"> you </span><span className="text-info">{"had been " + ing}</span></NavLink>  <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                                    const utterance = new SpeechSynthesisUtterance("you had been " + ing)
                                                    utterance.rate = .8
                                                    utterance.lang = "us-US"
                                                    speechSynthesis.speak(utterance)
                                                }}> </i>
                                                </li>
                                                <li className="list-group-item text-left"><NavLink to={`/translate/translate-they-${verbSingleOne}.html`}> <span className="text-dark"> they </span><span className="text-info">{"had been " + ing}</span></NavLink>  <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                                    const utterance = new SpeechSynthesisUtterance("they had been " + ing)
                                                    utterance.rate = .8
                                                    utterance.lang = "us-US"
                                                    speechSynthesis.speak(utterance)
                                                }}> </i>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    {/* 10 */}
                                    <div className="col-sm">

                                        <div className="card  singleverb-card  mt-5 " style={{ width: "370px" }}>
                                            <p className="text-left pl-3 text-danger pt-3">Simple Future</p>
                                            <ul className="list-group list-group-flush">
                                                <li className="list-group-item text-left"><NavLink to={`/translate/translate-i-${verbSingleOne}.html`} > <span className="text-dark"> I </span><span className="text-info">{"will " + verbSingleOne}</span></NavLink>  <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                                    const utterance = new SpeechSynthesisUtterance("I will " + verbSingleOne)
                                                    utterance.rate = .8
                                                    utterance.lang = "us-US"
                                                    speechSynthesis.speak(utterance)
                                                }}> </i>
                                                </li>
                                                <li className="list-group-item text-left"><NavLink to={`/translate/translate-you-${verbSingleOne}.html`}> <span className="text-dark"> you </span><span className="text-info">{"will " + verbSingleOne}</span></NavLink>  <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                                    const utterance = new SpeechSynthesisUtterance("you will " + verbSingleOne)
                                                    utterance.rate = .8
                                                    utterance.lang = "us-US"
                                                    speechSynthesis.speak(utterance)
                                                }}> </i>
                                                </li>
                                                <li className="list-group-item text-left"><NavLink to={`/translate/translate-he-${verbSingleOne}.html`}> <span className="text-dark"> he/she/it </span><span className="text-info">{"will " + verbSingleOne}</span></NavLink>  <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                                    const utterance = new SpeechSynthesisUtterance("she will " + verbSingleOne)
                                                    utterance.rate = .8
                                                    utterance.lang = "us-US"
                                                    speechSynthesis.speak(utterance)
                                                }}> </i>
                                                </li>
                                                <li className="list-group-item text-left"><NavLink to={`/translate/translate-we-${verbSingleOne}.html`}> <span className="text-dark"> we </span><span className="text-info">{"will " + verbSingleOne}</span></NavLink>  <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                                    const utterance = new SpeechSynthesisUtterance("we will " + verbSingleOne)
                                                    utterance.rate = .8
                                                    utterance.lang = "us-US"
                                                    speechSynthesis.speak(utterance)
                                                }}> </i>
                                                </li>
                                                <li className="list-group-item text-left"><NavLink to={`/translate/translate-you-${verbSingleOne}.html`}> <span className="text-dark"> you </span><span className="text-info">{"will " + verbSingleOne}</span></NavLink>  <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                                    const utterance = new SpeechSynthesisUtterance("you will " + verbSingleOne)
                                                    utterance.rate = .8
                                                    utterance.lang = "us-US"
                                                    speechSynthesis.speak(utterance)
                                                }}> </i>
                                                </li>
                                                <li className="list-group-item text-left"><NavLink to={`/translate/translate-they-${verbSingleOne}.html`}> <span className="text-dark"> they </span><span className="text-info">{"will " + verbSingleOne}</span></NavLink>  <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                                    const utterance = new SpeechSynthesisUtterance("they will " + verbSingleOne)
                                                    utterance.rate = .8
                                                    utterance.lang = "us-US"
                                                    speechSynthesis.speak(utterance)
                                                }}> </i>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    {/* 11 */}
                                    <div className="col-sm">

                                        <div className="card  singleverb-card  mt-5 " style={{ width: "370px" }}>
                                            <p className="text-left pl-3 text-danger pt-3"> Future Progressive</p>
                                            <ul className="list-group list-group-flush">
                                                <li className="list-group-item text-left"><NavLink to={`/translate/translate-i-${verbSingleOne}.html`} > <span className="text-dark"> I </span><span className="text-info">{"will be " + ing}</span></NavLink>  <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                                    const utterance = new SpeechSynthesisUtterance("I will be " + ing)
                                                    utterance.rate = .8
                                                    utterance.lang = "us-US"
                                                    speechSynthesis.speak(utterance)
                                                }}> </i>
                                                </li>
                                                <li className="list-group-item text-left"><NavLink to={`/translate/translate-you-${verbSingleOne}.html`}> <span className="text-dark"> you </span><span className="text-info">{"will be " + ing}</span></NavLink>  <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                                    const utterance = new SpeechSynthesisUtterance("you will be " + ing)
                                                    utterance.rate = .8
                                                    utterance.lang = "us-US"
                                                    speechSynthesis.speak(utterance)
                                                }}> </i>
                                                </li>
                                                <li className="list-group-item text-left"><NavLink to={`/translate/translate-he-${verbSingleOne}.html`}> <span className="text-dark"> he/she/it </span><span className="text-info">{"will be " + ing}</span></NavLink>  <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                                    const utterance = new SpeechSynthesisUtterance("she will be " + ing)
                                                    utterance.rate = .8
                                                    utterance.lang = "us-US"
                                                    speechSynthesis.speak(utterance)
                                                }}> </i>
                                                </li>
                                                <li className="list-group-item text-left"><NavLink to={`/translate/translate-we-${verbSingleOne}.html`}> <span className="text-dark"> we </span><span className="text-info">{"will be " + ing}</span></NavLink>  <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                                    const utterance = new SpeechSynthesisUtterance("we will be " + ing)
                                                    utterance.rate = .8
                                                    utterance.lang = "us-US"
                                                    speechSynthesis.speak(utterance)
                                                }}> </i>
                                                </li>
                                                <li className="list-group-item text-left"><NavLink to={`/translate/translate-you-${verbSingleOne}.html`}> <span className="text-dark"> you </span><span className="text-info">{"will be " + ing}</span></NavLink>  <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                                    const utterance = new SpeechSynthesisUtterance("youwill be " + ing)
                                                    utterance.rate = .8
                                                    utterance.lang = "us-US"
                                                    speechSynthesis.speak(utterance)
                                                }}> </i>
                                                </li>
                                                <li className="list-group-item text-left"><NavLink to={`/translate/translate-they-${verbSingleOne}.html`}> <span className="text-dark"> they </span><span className="text-info">{"will be " + ing}</span></NavLink>  <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                                    const utterance = new SpeechSynthesisUtterance("they will be " + ing)
                                                    utterance.rate = .8
                                                    utterance.lang = "us-US"
                                                    speechSynthesis.speak(utterance)
                                                }}> </i>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    {/* 12 */}
                                    <div className="col-sm">

                                        <div className="card  singleverb-card  mt-5 " style={{ width: "370px" }}>
                                            <p className="text-left pl-3 text-danger pt-3"> Future Perfect</p>
                                            <ul className="list-group list-group-flush">
                                                <li className="list-group-item text-left"><NavLink to={`/translate/translate-i-${verbSingleOne}.html`} > <span className="text-dark"> I </span><span className="text-info">{"will have " + participes}</span></NavLink>  <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                                    const utterance = new SpeechSynthesisUtterance("I will have " + participes)
                                                    utterance.rate = .8
                                                    utterance.lang = "us-US"
                                                    speechSynthesis.speak(utterance)
                                                }}> </i>
                                                </li>
                                                <li className="list-group-item text-left"><NavLink to={`/translate/translate-you-${verbSingleOne}.html`}> <span className="text-dark"> you </span><span className="text-info">{"will have " + participes}</span></NavLink>  <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                                    const utterance = new SpeechSynthesisUtterance("you will have " + participes)
                                                    utterance.rate = .8
                                                    utterance.lang = "us-US"
                                                    speechSynthesis.speak(utterance)
                                                }}> </i>
                                                </li>
                                                <li className="list-group-item text-left"><NavLink to={`/translate/translate-he-${verbSingleOne}.html`}> <span className="text-dark"> he/she/it </span><span className="text-info">{"will have " + participes}</span></NavLink>  <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                                    const utterance = new SpeechSynthesisUtterance("she will have " + participes)
                                                    utterance.rate = .8
                                                    utterance.lang = "us-US"
                                                    speechSynthesis.speak(utterance)
                                                }}> </i>
                                                </li>
                                                <li className="list-group-item text-left"><NavLink to={`/translate/translate-we-${verbSingleOne}.html`}> <span className="text-dark"> we </span><span className="text-info">{"will have " + participes}</span></NavLink>  <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                                    const utterance = new SpeechSynthesisUtterance("we will have " + participes)
                                                    utterance.rate = .8
                                                    utterance.lang = "us-US"
                                                    speechSynthesis.speak(utterance)
                                                }}> </i>
                                                </li>
                                                <li className="list-group-item text-left"><NavLink to={`/translate/translate-you-${verbSingleOne}.html`}> <span className="text-dark"> you </span><span className="text-info">{"will have " + participes}</span></NavLink>  <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                                    const utterance = new SpeechSynthesisUtterance("you will have " + participes)
                                                    utterance.rate = .8
                                                    utterance.lang = "us-US"
                                                    speechSynthesis.speak(utterance)
                                                }}> </i>
                                                </li>
                                                <li className="list-group-item text-left"><NavLink to={`/translate/translate-they-${verbSingleOne}.html`}> <span className="text-dark"> they </span><span className="text-info">{"will have " + participes}</span></NavLink>  <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                                    const utterance = new SpeechSynthesisUtterance("they will have " + participes)
                                                    utterance.rate = .8
                                                    utterance.lang = "us-US"
                                                    speechSynthesis.speak(utterance)
                                                }}> </i>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    {/* 13 */}
                                    <div className="col-sm">

                                        <div className="card  singleverb-card  mt-5 " style={{ width: "370px" }}>
                                            <p className="text-left pl-3 text-danger pt-3"> Future Perfect Progressive</p>
                                            <ul className="list-group list-group-flush">
                                                <li className="list-group-item text-left"><NavLink to={`/translate/translate-i-${verbSingleOne}.html`} > <span className="text-dark"> I </span><span className="text-info">{"will have been " + ing}</span></NavLink>  <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                                    const utterance = new SpeechSynthesisUtterance("I will have been " + ing)
                                                    utterance.rate = .8
                                                    utterance.lang = "us-US"
                                                    speechSynthesis.speak(utterance)
                                                }}> </i>
                                                </li>
                                                <li className="list-group-item text-left"><NavLink to={`/translate/translate-you-${verbSingleOne}.html`}> <span className="text-dark"> you </span><span className="text-info">{"will have been " + ing}</span></NavLink>  <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                                    const utterance = new SpeechSynthesisUtterance("you will have been " + ing)
                                                    utterance.rate = .8
                                                    utterance.lang = "us-US"
                                                    speechSynthesis.speak(utterance)
                                                }}> </i>
                                                </li>
                                                <li className="list-group-item text-left"><NavLink to={`/translate/translate-he-${verbSingleOne}.html`}> <span className="text-dark"> he/she/it </span><span className="text-info">{"will have been " + ing}</span></NavLink>  <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                                    const utterance = new SpeechSynthesisUtterance("she will have been " + ing)
                                                    utterance.rate = .8
                                                    utterance.lang = "us-US"
                                                    speechSynthesis.speak(utterance)
                                                }}> </i>
                                                </li>
                                                <li className="list-group-item text-left"><NavLink to={`/translate/translate-we-${verbSingleOne}.html`}> <span className="text-dark"> we </span><span className="text-info">{"will have been " + ing}</span></NavLink>  <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                                    const utterance = new SpeechSynthesisUtterance("we will have been " + ing)
                                                    utterance.rate = .8
                                                    utterance.lang = "us-US"
                                                    speechSynthesis.speak(utterance)
                                                }}> </i>
                                                </li>
                                                <li className="list-group-item text-left"><NavLink to={`/translate/translate-you-${verbSingleOne}.html`}> <span className="text-dark"> you </span><span className="text-info">{"will have been " + ing}</span></NavLink>  <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                                    const utterance = new SpeechSynthesisUtterance("you will have been " + ing)
                                                    utterance.rate = .8
                                                    utterance.lang = "us-US"
                                                    speechSynthesis.speak(utterance)
                                                }}> </i>
                                                </li>
                                                <li className="list-group-item text-left"><NavLink to={`/translate/translate-they-${verbSingleOne}.html`}> <span className="text-dark"> they </span><span className="text-info">{"will have been " + ing}</span></NavLink>  <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                                    const utterance = new SpeechSynthesisUtterance("they will have been " + ing)
                                                    utterance.rate = .8
                                                    utterance.lang = "us-US"
                                                    speechSynthesis.speak(utterance)
                                                }}> </i>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>




                                </div>
                                {/* Passive-------------------------------- */}

                                <h4 className="text-info pt-5  ">Passive</h4>
                                <div className="row">

                                    {/* 1*/}

                                    <div className="col-sm">

                                        <div className="card  singleverb-card  mt-5 " style={{ width: "370px" }}>
                                            <p className="text-left pl-3 text-danger pt-3"> Passive Simple Present</p>
                                            <ul className="list-group list-group-flush">
                                                <li className="list-group-item text-left"><NavLink to={`/translate/translate-i-${verbSingleOne}.html`} > <span className="text-dark"> I </span><span className="text-info">{"am " + participes}</span></NavLink>  <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                                    const utterance = new SpeechSynthesisUtterance("I am " + participes)
                                                    utterance.rate = .8
                                                    utterance.lang = "us-US"
                                                    speechSynthesis.speak(utterance)
                                                }}> </i>
                                                </li>
                                                <li className="list-group-item text-left"><NavLink to={`/translate/translate-you-${verbSingleOne}.html`}> <span className="text-dark"> you </span><span className="text-info">{"are " + participes}</span></NavLink>  <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                                    const utterance = new SpeechSynthesisUtterance("you are " + participes)
                                                    utterance.rate = .8
                                                    utterance.lang = "us-US"
                                                    speechSynthesis.speak(utterance)
                                                }}> </i>
                                                </li>
                                                <li className="list-group-item text-left"><NavLink to={`/translate/translate-he-${verbSingleOne}.html`}> <span className="text-dark"> he/she/it </span><span className="text-info">{"is " + participes}</span></NavLink>  <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                                    const utterance = new SpeechSynthesisUtterance("she is " + participes)
                                                    utterance.rate = .8
                                                    utterance.lang = "us-US"
                                                    speechSynthesis.speak(utterance)
                                                }}> </i>
                                                </li>
                                                <li className="list-group-item text-left"><NavLink to={`/translate/translate-we-${verbSingleOne}.html`}> <span className="text-dark"> we </span><span className="text-info">{"are " + participes}</span></NavLink>  <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                                    const utterance = new SpeechSynthesisUtterance("we are " + participes)
                                                    utterance.rate = .8
                                                    utterance.lang = "us-US"
                                                    speechSynthesis.speak(utterance)
                                                }}> </i>
                                                </li>
                                                <li className="list-group-item text-left"><NavLink to={`/translate/translate-you-${verbSingleOne}.html`}> <span className="text-dark"> you </span><span className="text-info">{"are " + participes}</span></NavLink>  <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                                    const utterance = new SpeechSynthesisUtterance("youare " + participes)
                                                    utterance.rate = .8
                                                    utterance.lang = "us-US"
                                                    speechSynthesis.speak(utterance)
                                                }}> </i>
                                                </li>
                                                <li className="list-group-item text-left"><NavLink to={`/translate/translate-they-${verbSingleOne}.html`}> <span className="text-dark"> they </span><span className="text-info">{"are " + participes}</span></NavLink>  <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                                    const utterance = new SpeechSynthesisUtterance("they are " + participes)
                                                    utterance.rate = .8
                                                    utterance.lang = "us-US"
                                                    speechSynthesis.speak(utterance)
                                                }}> </i>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    {/* 2*/}

                                    <div className="col-sm">

                                        <div className="card  singleverb-card  mt-5 " style={{ width: "370px" }}>
                                            <p className="text-left pl-3 text-danger pt-3"> Passive Simple Present</p>
                                            <ul className="list-group list-group-flush">
                                                <li className="list-group-item text-left"><NavLink to={`/translate/translate-i-${verbSingleOne}.html`} > <span className="text-dark"> I </span><span className="text-info">{"am being " + participes}</span></NavLink>  <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                                    const utterance = new SpeechSynthesisUtterance("I am being " + participes)
                                                    utterance.rate = .8
                                                    utterance.lang = "us-US"
                                                    speechSynthesis.speak(utterance)
                                                }}> </i>
                                                </li>
                                                <li className="list-group-item text-left"><NavLink to={`/translate/translate-you-${verbSingleOne}.html`}> <span className="text-dark"> you </span><span className="text-info">{"are being " + participes}</span></NavLink>  <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                                    const utterance = new SpeechSynthesisUtterance("you are being " + participes)
                                                    utterance.rate = .8
                                                    utterance.lang = "us-US"
                                                    speechSynthesis.speak(utterance)
                                                }}> </i>
                                                </li>
                                                <li className="list-group-item text-left"><NavLink to={`/translate/translate-he-${verbSingleOne}.html`}> <span className="text-dark"> he/she/it </span><span className="text-info">{"is being " + participes}</span></NavLink>  <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                                    const utterance = new SpeechSynthesisUtterance("she is being " + participes)
                                                    utterance.rate = .8
                                                    utterance.lang = "us-US"
                                                    speechSynthesis.speak(utterance)
                                                }}> </i>
                                                </li>
                                                <li className="list-group-item text-left"><NavLink to={`/translate/translate-we-${verbSingleOne}.html`}> <span className="text-dark"> we </span><span className="text-info">{"are being " + participes}</span></NavLink>  <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                                    const utterance = new SpeechSynthesisUtterance("we are being " + participes)
                                                    utterance.rate = .8
                                                    utterance.lang = "us-US"
                                                    speechSynthesis.speak(utterance)
                                                }}> </i>
                                                </li>
                                                <li className="list-group-item text-left"><NavLink to={`/translate/translate-you-${verbSingleOne}.html`}> <span className="text-dark"> you </span><span className="text-info">{"are being " + participes}</span></NavLink>  <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                                    const utterance = new SpeechSynthesisUtterance("you are being " + participes)
                                                    utterance.rate = .8
                                                    utterance.lang = "us-US"
                                                    speechSynthesis.speak(utterance)
                                                }}> </i>
                                                </li>
                                                <li className="list-group-item text-left"><NavLink to={`/translate/translate-they-${verbSingleOne}.html`}> <span className="text-dark"> they </span><span className="text-info">{"are being " + participes}</span></NavLink>  <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                                    const utterance = new SpeechSynthesisUtterance("they are being " + participes)
                                                    utterance.rate = .8
                                                    utterance.lang = "us-US"
                                                    speechSynthesis.speak(utterance)
                                                }}> </i>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    {/* 3*/}

                                    <div className="col-sm">

                                        <div className="card  singleverb-card  mt-5 " style={{ width: "370px" }}>
                                            <p className="text-left pl-3 text-danger pt-3"> Passive Present Perfect</p>
                                            <ul className="list-group list-group-flush">
                                                <li className="list-group-item text-left"><NavLink to={`/translate/translate-i-${verbSingleOne}.html`} > <span className="text-dark"> I </span><span className="text-info">{"have been " + participes}</span></NavLink>  <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                                    const utterance = new SpeechSynthesisUtterance("I have been " + participes)
                                                    utterance.rate = .8
                                                    utterance.lang = "us-US"
                                                    speechSynthesis.speak(utterance)
                                                }}> </i>
                                                </li>
                                                <li className="list-group-item text-left"><NavLink to={`/translate/translate-you-${verbSingleOne}.html`}> <span className="text-dark"> you </span><span className="text-info">{"have been " + participes}</span></NavLink>  <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                                    const utterance = new SpeechSynthesisUtterance("you have been " + participes)
                                                    utterance.rate = .8
                                                    utterance.lang = "us-US"
                                                    speechSynthesis.speak(utterance)
                                                }}> </i>
                                                </li>
                                                <li className="list-group-item text-left"><NavLink to={`/translate/translate-he-${verbSingleOne}.html`}> <span className="text-dark"> he/she/it </span><span className="text-info">{"has been " + participes}</span></NavLink>  <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                                    const utterance = new SpeechSynthesisUtterance("she has been " + participes)
                                                    utterance.rate = .8
                                                    utterance.lang = "us-US"
                                                    speechSynthesis.speak(utterance)
                                                }}> </i>
                                                </li>
                                                <li className="list-group-item text-left"><NavLink to={`/translate/translate-we-${verbSingleOne}.html`}> <span className="text-dark"> we </span><span className="text-info">{"have been " + participes}</span></NavLink>  <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                                    const utterance = new SpeechSynthesisUtterance("we have been " + participes)
                                                    utterance.rate = .8
                                                    utterance.lang = "us-US"
                                                    speechSynthesis.speak(utterance)
                                                }}> </i>
                                                </li>
                                                <li className="list-group-item text-left"><NavLink to={`/translate/translate-you-${verbSingleOne}.html`}> <span className="text-dark"> you </span><span className="text-info">{"have been " + participes}</span></NavLink>  <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                                    const utterance = new SpeechSynthesisUtterance("you have been " + participes)
                                                    utterance.rate = .8
                                                    utterance.lang = "us-US"
                                                    speechSynthesis.speak(utterance)
                                                }}> </i>
                                                </li>
                                                <li className="list-group-item text-left"><NavLink to={`/translate/translate-they-${verbSingleOne}.html`}> <span className="text-dark"> they </span><span className="text-info">{"have been " + participes}</span></NavLink>  <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                                    const utterance = new SpeechSynthesisUtterance("they have been " + participes)
                                                    utterance.rate = .8
                                                    utterance.lang = "us-US"
                                                    speechSynthesis.speak(utterance)
                                                }}> </i>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    {/* 4*/}

                                    <div className="col-sm">

                                        <div className="card  singleverb-card  mt-5 " style={{ width: "370px" }}>
                                            <p className="text-left pl-3 text-danger pt-3"> Passive Present Perfect Progressive</p>
                                            <ul className="list-group list-group-flush">
                                                <li className="list-group-item text-left"><NavLink to={`/translate/translate-i-${verbSingleOne}.html`} > <span className="text-dark"> I </span><span className="text-info">{"have been being " + participes}</span></NavLink>  <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                                    const utterance = new SpeechSynthesisUtterance("I have been being " + participes)
                                                    utterance.rate = .8
                                                    utterance.lang = "us-US"
                                                    speechSynthesis.speak(utterance)
                                                }}> </i>
                                                </li>
                                                <li className="list-group-item text-left"><NavLink to={`/translate/translate-you-${verbSingleOne}.html`}> <span className="text-dark"> you </span><span className="text-info">{"have been being " + participes}</span></NavLink>  <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                                    const utterance = new SpeechSynthesisUtterance("you have been being " + participes)
                                                    utterance.rate = .8
                                                    utterance.lang = "us-US"
                                                    speechSynthesis.speak(utterance)
                                                }}> </i>
                                                </li>
                                                <li className="list-group-item text-left"><NavLink to={`/translate/translate-he-${verbSingleOne}.html`}> <span className="text-dark"> he/she/it </span><span className="text-info">{"has been being " + participes}</span></NavLink>  <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                                    const utterance = new SpeechSynthesisUtterance("she has been being " + participes)
                                                    utterance.rate = .8
                                                    utterance.lang = "us-US"
                                                    speechSynthesis.speak(utterance)
                                                }}> </i>
                                                </li>
                                                <li className="list-group-item text-left"><NavLink to={`/translate/translate-we-${verbSingleOne}.html`}> <span className="text-dark"> we </span><span className="text-info">{"have been being " + participes}</span></NavLink>  <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                                    const utterance = new SpeechSynthesisUtterance("we have been being " + participes)
                                                    utterance.rate = .8
                                                    utterance.lang = "us-US"
                                                    speechSynthesis.speak(utterance)
                                                }}> </i>
                                                </li>
                                                <li className="list-group-item text-left"><NavLink to={`/translate/translate-you-${verbSingleOne}.html`}> <span className="text-dark"> you </span><span className="text-info">{"have been being " + participes}</span></NavLink>  <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                                    const utterance = new SpeechSynthesisUtterance("you have been being " + participes)
                                                    utterance.rate = .8
                                                    utterance.lang = "us-US"
                                                    speechSynthesis.speak(utterance)
                                                }}> </i>
                                                </li>
                                                <li className="list-group-item text-left"><NavLink to={`/translate/translate-they-${verbSingleOne}.html`}> <span className="text-dark"> they </span><span className="text-info">{"have been being " + participes}</span></NavLink>  <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                                    const utterance = new SpeechSynthesisUtterance("they have been being " + participes)
                                                    utterance.rate = .8
                                                    utterance.lang = "us-US"
                                                    speechSynthesis.speak(utterance)
                                                }}> </i>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    {/* 5*/}

                                    <div className="col-sm">

                                        <div className="card  singleverb-card  mt-5 " style={{ width: "370px" }}>
                                            <p className="text-left pl-3 text-danger pt-3"> Passive Simple Past</p>
                                            <ul className="list-group list-group-flush">
                                                <li className="list-group-item text-left"><NavLink to={`/translate/translate-i-${verbSingleOne}.html`} > <span className="text-dark"> I </span><span className="text-info">{"was " + participes}</span></NavLink>  <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                                    const utterance = new SpeechSynthesisUtterance("I was " + participes)
                                                    utterance.rate = .8
                                                    utterance.lang = "us-US"
                                                    speechSynthesis.speak(utterance)
                                                }}> </i>
                                                </li>
                                                <li className="list-group-item text-left"><NavLink to={`/translate/translate-you-${verbSingleOne}.html`}> <span className="text-dark"> you </span><span className="text-info">{"were " + participes}</span></NavLink>  <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                                    const utterance = new SpeechSynthesisUtterance("you were " + participes)
                                                    utterance.rate = .8
                                                    utterance.lang = "us-US"
                                                    speechSynthesis.speak(utterance)
                                                }}> </i>
                                                </li>
                                                <li className="list-group-item text-left"><NavLink to={`/translate/translate-he-${verbSingleOne}.html`}> <span className="text-dark"> he/she/it </span><span className="text-info">{"was " + participes}</span></NavLink>  <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                                    const utterance = new SpeechSynthesisUtterance("she was " + participes)
                                                    utterance.rate = .8
                                                    utterance.lang = "us-US"
                                                    speechSynthesis.speak(utterance)
                                                }}> </i>
                                                </li>
                                                <li className="list-group-item text-left"><NavLink to={`/translate/translate-we-${verbSingleOne}.html`}> <span className="text-dark"> we </span><span className="text-info">{"were " + participes}</span></NavLink>  <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                                    const utterance = new SpeechSynthesisUtterance("we were " + participes)
                                                    utterance.rate = .8
                                                    utterance.lang = "us-US"
                                                    speechSynthesis.speak(utterance)
                                                }}> </i>
                                                </li>
                                                <li className="list-group-item text-left"><NavLink to={`/translate/translate-you-${verbSingleOne}.html`}> <span className="text-dark"> you </span><span className="text-info">{"were " + participes}</span></NavLink>  <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                                    const utterance = new SpeechSynthesisUtterance("you were " + participes)
                                                    utterance.rate = .8
                                                    utterance.lang = "us-US"
                                                    speechSynthesis.speak(utterance)
                                                }}> </i>
                                                </li>
                                                <li className="list-group-item text-left"><NavLink to={`/translate/translate-they-${verbSingleOne}.html`}> <span className="text-dark"> they </span><span className="text-info">{"were " + participes}</span></NavLink>  <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                                    const utterance = new SpeechSynthesisUtterance("they were " + participes)
                                                    utterance.rate = .8
                                                    utterance.lang = "us-US"
                                                    speechSynthesis.speak(utterance)
                                                }}> </i>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    {/* 6*/}

                                    <div className="col-sm">

                                        <div className="card  singleverb-card  mt-5 " style={{ width: "370px" }}>
                                            <p className="text-left pl-3 text-danger pt-3"> Passive  Past Progressive</p>
                                            <ul className="list-group list-group-flush">
                                                <li className="list-group-item text-left"><NavLink to={`/translate/translate-i-${verbSingleOne}.html`} > <span className="text-dark"> I </span><span className="text-info">{"was being " + participes}</span></NavLink>  <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                                    const utterance = new SpeechSynthesisUtterance("I were being " + participes)
                                                    utterance.rate = .8
                                                    utterance.lang = "us-US"
                                                    speechSynthesis.speak(utterance)
                                                }}> </i>
                                                </li>
                                                <li className="list-group-item text-left"><NavLink to={`/translate/translate-you-${verbSingleOne}.html`}> <span className="text-dark"> you </span><span className="text-info">{"were being " + participes}</span></NavLink>  <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                                    const utterance = new SpeechSynthesisUtterance("you were being " + participes)
                                                    utterance.rate = .8
                                                    utterance.lang = "us-US"
                                                    speechSynthesis.speak(utterance)
                                                }}> </i>
                                                </li>
                                                <li className="list-group-item text-left"><NavLink to={`/translate/translate-he-${verbSingleOne}.html`}> <span className="text-dark"> he/she/it </span><span className="text-info">{"was being " + participes}</span></NavLink>  <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                                    const utterance = new SpeechSynthesisUtterance("she was being " + participes)
                                                    utterance.rate = .8
                                                    utterance.lang = "us-US"
                                                    speechSynthesis.speak(utterance)
                                                }}> </i>
                                                </li>
                                                <li className="list-group-item text-left"><NavLink to={`/translate/translate-we-${verbSingleOne}.html`}> <span className="text-dark"> we </span><span className="text-info">{"were being " + participes}</span></NavLink>  <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                                    const utterance = new SpeechSynthesisUtterance("we were being " + participes)
                                                    utterance.rate = .8
                                                    utterance.lang = "us-US"
                                                    speechSynthesis.speak(utterance)
                                                }}> </i>
                                                </li>
                                                <li className="list-group-item text-left"><NavLink to={`/translate/translate-you-${verbSingleOne}.html`}> <span className="text-dark"> you </span><span className="text-info">{"were being " + participes}</span></NavLink>  <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                                    const utterance = new SpeechSynthesisUtterance("you were being " + participes)
                                                    utterance.rate = .8
                                                    utterance.lang = "us-US"
                                                    speechSynthesis.speak(utterance)
                                                }}> </i>
                                                </li>
                                                <li className="list-group-item text-left"><NavLink to={`/translate/translate-they-${verbSingleOne}.html`}> <span className="text-dark"> they </span><span className="text-info">{"were being " + participes}</span></NavLink>  <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                                    const utterance = new SpeechSynthesisUtterance("they were being " + participes)
                                                    utterance.rate = .8
                                                    utterance.lang = "us-US"
                                                    speechSynthesis.speak(utterance)
                                                }}> </i>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    {/* 7*/}

                                    <div className="col-sm">

                                        <div className="card  singleverb-card  mt-5 " style={{ width: "370px" }}>
                                            <p className="text-left pl-3 text-danger pt-3"> Passive Past Perfect</p>
                                            <ul className="list-group list-group-flush">
                                                <li className="list-group-item text-left"><NavLink to={`/translate/translate-i-${verbSingleOne}.html`} > <span className="text-dark"> I </span><span className="text-info">{"had been " + participes}</span></NavLink>  <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                                    const utterance = new SpeechSynthesisUtterance("I had been " + participes)
                                                    utterance.rate = .8
                                                    utterance.lang = "us-US"
                                                    speechSynthesis.speak(utterance)
                                                }}> </i>
                                                </li>
                                                <li className="list-group-item text-left"><NavLink to={`/translate/translate-you-${verbSingleOne}.html`}> <span className="text-dark"> you </span><span className="text-info">{"had been " + participes}</span></NavLink>  <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                                    const utterance = new SpeechSynthesisUtterance("you had been " + participes)
                                                    utterance.rate = .8
                                                    utterance.lang = "us-US"
                                                    speechSynthesis.speak(utterance)
                                                }}> </i>
                                                </li>
                                                <li className="list-group-item text-left"><NavLink to={`/translate/translate-he-${verbSingleOne}.html`}> <span className="text-dark"> he/she/it </span><span className="text-info">{"had been " + participes}</span></NavLink>  <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                                    const utterance = new SpeechSynthesisUtterance("she had been " + participes)
                                                    utterance.rate = .8
                                                    utterance.lang = "us-US"
                                                    speechSynthesis.speak(utterance)
                                                }}> </i>
                                                </li>
                                                <li className="list-group-item text-left"><NavLink to={`/translate/translate-we-${verbSingleOne}.html`}> <span className="text-dark"> we </span><span className="text-info">{"had been " + participes}</span></NavLink>  <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                                    const utterance = new SpeechSynthesisUtterance("we had been " + participes)
                                                    utterance.rate = .8
                                                    utterance.lang = "us-US"
                                                    speechSynthesis.speak(utterance)
                                                }}> </i>
                                                </li>
                                                <li className="list-group-item text-left"><NavLink to={`/translate/translate-you-${verbSingleOne}.html`}> <span className="text-dark"> you </span><span className="text-info">{"had been " + participes}</span></NavLink>  <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                                    const utterance = new SpeechSynthesisUtterance("you had been " + participes)
                                                    utterance.rate = .8
                                                    utterance.lang = "us-US"
                                                    speechSynthesis.speak(utterance)
                                                }}> </i>
                                                </li>
                                                <li className="list-group-item text-left"><NavLink to={`/translate/translate-they-${verbSingleOne}.html`}> <span className="text-dark"> they </span><span className="text-info">{"had been " + participes}</span></NavLink>  <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                                    const utterance = new SpeechSynthesisUtterance("they had been " + participes)
                                                    utterance.rate = .8
                                                    utterance.lang = "us-US"
                                                    speechSynthesis.speak(utterance)
                                                }}> </i>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    {/* 2*/}

                                    <div className="col-sm">

                                        <div className="card  singleverb-card  mt-5 " style={{ width: "370px" }}>
                                            <p className="text-left pl-3 text-danger pt-3"> Passive Past Perfect Progressive</p>
                                            <ul className="list-group list-group-flush">
                                                <li className="list-group-item text-left"><NavLink to={`/translate/translate-i-${verbSingleOne}.html`} > <span className="text-dark"> I </span><span className="text-info">{"had been being " + participes}</span></NavLink>  <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                                    const utterance = new SpeechSynthesisUtterance("I had been being " + participes)
                                                    utterance.rate = .8
                                                    utterance.lang = "us-US"
                                                    speechSynthesis.speak(utterance)
                                                }}> </i>
                                                </li>
                                                <li className="list-group-item text-left"><NavLink to={`/translate/translate-you-${verbSingleOne}.html`}> <span className="text-dark"> you </span><span className="text-info">{"had been being " + participes}</span></NavLink>  <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                                    const utterance = new SpeechSynthesisUtterance("you had been being " + participes)
                                                    utterance.rate = .8
                                                    utterance.lang = "us-US"
                                                    speechSynthesis.speak(utterance)
                                                }}> </i>
                                                </li>
                                                <li className="list-group-item text-left"><NavLink to={`/translate/translate-he-${verbSingleOne}.html`}> <span className="text-dark"> he/she/it </span><span className="text-info">{"had been being " + participes}</span></NavLink>  <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                                    const utterance = new SpeechSynthesisUtterance("she had been being " + participes)
                                                    utterance.rate = .8
                                                    utterance.lang = "us-US"
                                                    speechSynthesis.speak(utterance)
                                                }}> </i>
                                                </li>
                                                <li className="list-group-item text-left"><NavLink to={`/translate/translate-we-${verbSingleOne}.html`}> <span className="text-dark"> we </span><span className="text-info">{"had been being " + participes}</span></NavLink>  <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                                    const utterance = new SpeechSynthesisUtterance("we had been being " + participes)
                                                    utterance.rate = .8
                                                    utterance.lang = "us-US"
                                                    speechSynthesis.speak(utterance)
                                                }}> </i>
                                                </li>
                                                <li className="list-group-item text-left"><NavLink to={`/translate/translate-you-${verbSingleOne}.html`}> <span className="text-dark"> you </span><span className="text-info">{"had been being " + participes}</span></NavLink>  <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                                    const utterance = new SpeechSynthesisUtterance("you had been being " + participes)
                                                    utterance.rate = .8
                                                    utterance.lang = "us-US"
                                                    speechSynthesis.speak(utterance)
                                                }}> </i>
                                                </li>
                                                <li className="list-group-item text-left"><NavLink to={`/translate/translate-they-${verbSingleOne}.html`}> <span className="text-dark"> they </span><span className="text-info">{"had been being " + participes}</span></NavLink>  <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                                    const utterance = new SpeechSynthesisUtterance("they had been being " + participes)
                                                    utterance.rate = .8
                                                    utterance.lang = "us-US"
                                                    speechSynthesis.speak(utterance)
                                                }}> </i>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    {/* 3*/}

                                    <div className="col-sm">

                                        <div className="card  singleverb-card  mt-5 " style={{ width: "370px" }}>
                                            <p className="text-left pl-3 text-danger pt-3"> Passive Simple Future</p>
                                            <ul className="list-group list-group-flush">
                                                <li className="list-group-item text-left"><NavLink to={`/translate/translate-i-${verbSingleOne}.html`} > <span className="text-dark"> I </span><span className="text-info">{"will be " + participes}</span></NavLink>  <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                                    const utterance = new SpeechSynthesisUtterance("I will be " + participes)
                                                    utterance.rate = .8
                                                    utterance.lang = "us-US"
                                                    speechSynthesis.speak(utterance)
                                                }}> </i>
                                                </li>
                                                <li className="list-group-item text-left"><NavLink to={`/translate/translate-you-${verbSingleOne}.html`}> <span className="text-dark"> you </span><span className="text-info">{"will be " + participes}</span></NavLink>  <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                                    const utterance = new SpeechSynthesisUtterance("you will be " + participes)
                                                    utterance.rate = .8
                                                    utterance.lang = "us-US"
                                                    speechSynthesis.speak(utterance)
                                                }}> </i>
                                                </li>
                                                <li className="list-group-item text-left"><NavLink to={`/translate/translate-he-${verbSingleOne}.html`}> <span className="text-dark"> he/she/it </span><span className="text-info">{"will be " + participes}</span></NavLink>  <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                                    const utterance = new SpeechSynthesisUtterance("she will be " + participes)
                                                    utterance.rate = .8
                                                    utterance.lang = "us-US"
                                                    speechSynthesis.speak(utterance)
                                                }}> </i>
                                                </li>
                                                <li className="list-group-item text-left"><NavLink to={`/translate/translate-we-${verbSingleOne}.html`}> <span className="text-dark"> we </span><span className="text-info">{"will be " + participes}</span></NavLink>  <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                                    const utterance = new SpeechSynthesisUtterance("we will be " + participes)
                                                    utterance.rate = .8
                                                    utterance.lang = "us-US"
                                                    speechSynthesis.speak(utterance)
                                                }}> </i>
                                                </li>
                                                <li className="list-group-item text-left"><NavLink to={`/translate/translate-you-${verbSingleOne}.html`}> <span className="text-dark"> you </span><span className="text-info">{"will be " + participes}</span></NavLink>  <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                                    const utterance = new SpeechSynthesisUtterance("you will be " + participes)
                                                    utterance.rate = .8
                                                    utterance.lang = "us-US"
                                                    speechSynthesis.speak(utterance)
                                                }}> </i>
                                                </li>
                                                <li className="list-group-item text-left"><NavLink to={`/translate/translate-they-${verbSingleOne}.html`}> <span className="text-dark"> they </span><span className="text-info">{"will be " + participes}</span></NavLink>  <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                                    const utterance = new SpeechSynthesisUtterance("they will be " + participes)
                                                    utterance.rate = .8
                                                    utterance.lang = "us-US"
                                                    speechSynthesis.speak(utterance)
                                                }}> </i>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    {/* 4*/}

                                    <div className="col-sm">

                                        <div className="card  singleverb-card  mt-5 " style={{ width: "370px" }}>
                                            <p className="text-left pl-3 text-danger pt-3"> Passive Future Progressive</p>
                                            <ul className="list-group list-group-flush">
                                                <li className="list-group-item text-left"><NavLink to={`/translate/translate-i-${verbSingleOne}.html`} > <span className="text-dark"> I </span><span className="text-info">{"will be being " + participes}</span></NavLink>  <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                                    const utterance = new SpeechSynthesisUtterance("I will be being " + participes)
                                                    utterance.rate = .8
                                                    utterance.lang = "us-US"
                                                    speechSynthesis.speak(utterance)
                                                }}> </i>
                                                </li>
                                                <li className="list-group-item text-left"><NavLink to={`/translate/translate-you-${verbSingleOne}.html`}> <span className="text-dark"> you </span><span className="text-info">{"will be being " + participes}</span></NavLink>  <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                                    const utterance = new SpeechSynthesisUtterance("you will be being " + participes)
                                                    utterance.rate = .8
                                                    utterance.lang = "us-US"
                                                    speechSynthesis.speak(utterance)
                                                }}> </i>
                                                </li>
                                                <li className="list-group-item text-left"><NavLink to={`/translate/translate-he-${verbSingleOne}.html`}> <span className="text-dark"> he/she/it </span><span className="text-info">{"will be being " + participes}</span></NavLink>  <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                                    const utterance = new SpeechSynthesisUtterance("she will be being " + participes)
                                                    utterance.rate = .8
                                                    utterance.lang = "us-US"
                                                    speechSynthesis.speak(utterance)
                                                }}> </i>
                                                </li>
                                                <li className="list-group-item text-left"><NavLink to={`/translate/translate-we-${verbSingleOne}.html`}> <span className="text-dark"> we </span><span className="text-info">{"will be being " + participes}</span></NavLink>  <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                                    const utterance = new SpeechSynthesisUtterance("we will be being " + participes)
                                                    utterance.rate = .8
                                                    utterance.lang = "us-US"
                                                    speechSynthesis.speak(utterance)
                                                }}> </i>
                                                </li>
                                                <li className="list-group-item text-left"><NavLink to={`/translate/translate-you-${verbSingleOne}.html`}> <span className="text-dark"> you </span><span className="text-info">{"will be being " + participes}</span></NavLink>  <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                                    const utterance = new SpeechSynthesisUtterance("you will be being " + participes)
                                                    utterance.rate = .8
                                                    utterance.lang = "us-US"
                                                    speechSynthesis.speak(utterance)
                                                }}> </i>
                                                </li>
                                                <li className="list-group-item text-left"><NavLink to={`/translate/translate-they-${verbSingleOne}.html`}> <span className="text-dark"> they </span><span className="text-info">{"will be being " + participes}</span></NavLink>  <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                                    const utterance = new SpeechSynthesisUtterance("they will be being " + participes)
                                                    utterance.rate = .8
                                                    utterance.lang = "us-US"
                                                    speechSynthesis.speak(utterance)
                                                }}> </i>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    {/* 5*/}

                                    <div className="col-sm">

                                        <div className="card  singleverb-card  mt-5 " style={{ width: "370px" }}>
                                            <p className="text-left pl-3 text-danger pt-3"> Passive Future Perfect</p>
                                            <ul className="list-group list-group-flush">
                                                <li className="list-group-item text-left"><NavLink to={`/translate/translate-i-${verbSingleOne}.html`} > <span className="text-dark"> I </span><span className="text-info">{"will have been " + participes}</span></NavLink>  <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                                    const utterance = new SpeechSynthesisUtterance("I will have been " + participes)
                                                    utterance.rate = .8
                                                    utterance.lang = "us-US"
                                                    speechSynthesis.speak(utterance)
                                                }}> </i>
                                                </li>
                                                <li className="list-group-item text-left"><NavLink to={`/translate/translate-you-${verbSingleOne}.html`}> <span className="text-dark"> you </span><span className="text-info">{"will have been " + participes}</span></NavLink>  <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                                    const utterance = new SpeechSynthesisUtterance("you will have been " + participes)
                                                    utterance.rate = .8
                                                    utterance.lang = "us-US"
                                                    speechSynthesis.speak(utterance)
                                                }}> </i>
                                                </li>
                                                <li className="list-group-item text-left"><NavLink to={`/translate/translate-he-${verbSingleOne}.html`}> <span className="text-dark"> he/she/it </span><span className="text-info">{"will have been " + participes}</span></NavLink>  <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                                    const utterance = new SpeechSynthesisUtterance("she will have been " + participes)
                                                    utterance.rate = .8
                                                    utterance.lang = "us-US"
                                                    speechSynthesis.speak(utterance)
                                                }}> </i>
                                                </li>
                                                <li className="list-group-item text-left"><NavLink to={`/translate/translate-we-${verbSingleOne}.html`}> <span className="text-dark"> we </span><span className="text-info">{"will have been " + participes}</span></NavLink>  <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                                    const utterance = new SpeechSynthesisUtterance("we will have been " + participes)
                                                    utterance.rate = .8
                                                    utterance.lang = "us-US"
                                                    speechSynthesis.speak(utterance)
                                                }}> </i>
                                                </li>
                                                <li className="list-group-item text-left"><NavLink to={`/translate/translate-you-${verbSingleOne}.html`}> <span className="text-dark"> you </span><span className="text-info">{"will have been " + participes}</span></NavLink>  <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                                    const utterance = new SpeechSynthesisUtterance("you will have been " + participes)
                                                    utterance.rate = .8
                                                    utterance.lang = "us-US"
                                                    speechSynthesis.speak(utterance)
                                                }}> </i>
                                                </li>
                                                <li className="list-group-item text-left"><NavLink to={`/translate/translate-they-${verbSingleOne}.html`}> <span className="text-dark"> they </span><span className="text-info">{"will have been " + participes}</span></NavLink>  <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                                    const utterance = new SpeechSynthesisUtterance("they will have been " + participes)
                                                    utterance.rate = .8
                                                    utterance.lang = "us-US"
                                                    speechSynthesis.speak(utterance)
                                                }}> </i>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    {/* 6*/}

                                    <div className="col-sm">

                                        <div className="card  singleverb-card  mt-5 " style={{ width: "400px" }}>
                                            <p className="text-left pl-3 text-danger pt-3"> Passive  Past Progressive</p>
                                            <ul className="list-group list-group-flush">
                                                <li className="list-group-item text-left"><NavLink to={`/translate/translate-i-${verbSingleOne}.html`} > <span className="text-dark"> I </span><span className="text-info">{"will have been being " + participes}</span></NavLink>  <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                                    const utterance = new SpeechSynthesisUtterance("I will have been being " + participes)
                                                    utterance.rate = .8
                                                    utterance.lang = "us-US"
                                                    speechSynthesis.speak(utterance)
                                                }}> </i>
                                                </li>
                                                <li className="list-group-item text-left"><NavLink to={`/translate/translate-you-${verbSingleOne}.html`}> <span className="text-dark"> you </span><span className="text-info">{"will have been being " + participes}</span></NavLink>  <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                                    const utterance = new SpeechSynthesisUtterance("you will have been being " + participes)
                                                    utterance.rate = .8
                                                    utterance.lang = "us-US"
                                                    speechSynthesis.speak(utterance)
                                                }}> </i>
                                                </li>
                                                <li className="list-group-item text-left"><NavLink to={`/translate/translate-he-${verbSingleOne}.html`}> <span className="text-dark"> he/she/it </span><span className="text-info">{"will have been being " + participes}</span></NavLink>  <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                                    const utterance = new SpeechSynthesisUtterance("she will have been being " + participes)
                                                    utterance.rate = .8
                                                    utterance.lang = "us-US"
                                                    speechSynthesis.speak(utterance)
                                                }}> </i>
                                                </li>
                                                <li className="list-group-item text-left"><NavLink to={`/translate/translate-we-${verbSingleOne}.html`}> <span className="text-dark"> we </span><span className="text-info">{"will have been being " + participes}</span></NavLink>  <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                                    const utterance = new SpeechSynthesisUtterance("we will have been being " + participes)
                                                    utterance.rate = .8
                                                    utterance.lang = "us-US"
                                                    speechSynthesis.speak(utterance)
                                                }}> </i>
                                                </li>
                                                <li className="list-group-item text-left"><NavLink to={`/translate/translate-you-${verbSingleOne}.html`}> <span className="text-dark"> you </span><span className="text-info">{"will have been being " + participes}</span></NavLink>  <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                                    const utterance = new SpeechSynthesisUtterance("you will have been being " + participes)
                                                    utterance.rate = .8
                                                    utterance.lang = "us-US"
                                                    speechSynthesis.speak(utterance)
                                                }}> </i>
                                                </li>
                                                <li className="list-group-item text-left"><NavLink to={`/translate/translate-they-${verbSingleOne}.html`}> <span className="text-dark"> they </span><span className="text-info">{"will have been being " + participes}</span></NavLink>  <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                                    const utterance = new SpeechSynthesisUtterance("they will have been being " + participes)
                                                    utterance.rate = .8
                                                    utterance.lang = "us-US"
                                                    speechSynthesis.speak(utterance)
                                                }}> </i>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>







                                </div>
                                <h4 className="text-info pt-5  ">Conditional</h4>
                                <div className="row">

                                    {/* 1*/}

                                    <div className="col-sm">

                                        <div className="card  singleverb-card  mt-5 " style={{ width: "370px" }}>
                                            <p className="text-left pl-3 text-danger pt-3"> Conditional Present</p>
                                            <ul className="list-group list-group-flush">
                                                <li className="list-group-item text-left"><NavLink to={`/translate/translate-i-${verbSingleOne}.html`} > <span className="text-dark"> I </span><span className="text-info">{"would " + verbSingleOne}</span></NavLink>  <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                                    const utterance = new SpeechSynthesisUtterance("I would " + verbSingleOne)
                                                    utterance.rate = .8
                                                    utterance.lang = "us-US"
                                                    speechSynthesis.speak(utterance)
                                                }}> </i>
                                                </li>
                                                <li className="list-group-item text-left"><NavLink to={`/translate/translate-you-${verbSingleOne}.html`}> <span className="text-dark"> you </span><span className="text-info">{"would " + verbSingleOne}</span></NavLink>  <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                                    const utterance = new SpeechSynthesisUtterance("you would " + verbSingleOne)
                                                    utterance.rate = .8
                                                    utterance.lang = "us-US"
                                                    speechSynthesis.speak(utterance)
                                                }}> </i>
                                                </li>
                                                <li className="list-group-item text-left"><NavLink to={`/translate/translate-he-${verbSingleOne}.html`}> <span className="text-dark"> he/she/it </span><span className="text-info">{"would " + verbSingleOne}</span></NavLink>  <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                                    const utterance = new SpeechSynthesisUtterance("she would " + verbSingleOne)
                                                    utterance.rate = .8
                                                    utterance.lang = "us-US"
                                                    speechSynthesis.speak(utterance)
                                                }}> </i>
                                                </li>
                                                <li className="list-group-item text-left"><NavLink to={`/translate/translate-we-${verbSingleOne}.html`}> <span className="text-dark"> we </span><span className="text-info">{"would " + verbSingleOne}</span></NavLink>  <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                                    const utterance = new SpeechSynthesisUtterance("we would " + verbSingleOne)
                                                    utterance.rate = .8
                                                    utterance.lang = "us-US"
                                                    speechSynthesis.speak(utterance)
                                                }}> </i>
                                                </li>
                                                <li className="list-group-item text-left"><NavLink to={`/translate/translate-you-${verbSingleOne}.html`}> <span className="text-dark"> you </span><span className="text-info">{"would " + verbSingleOne}</span></NavLink>  <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                                    const utterance = new SpeechSynthesisUtterance("you would " + verbSingleOne)
                                                    utterance.rate = .8
                                                    utterance.lang = "us-US"
                                                    speechSynthesis.speak(utterance)
                                                }}> </i>
                                                </li>
                                                <li className="list-group-item text-left"><NavLink to={`/translate/translate-they-${verbSingleOne}.html`}> <span className="text-dark"> they </span><span className="text-info">{"would " + verbSingleOne}</span></NavLink>  <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                                    const utterance = new SpeechSynthesisUtterance("they would " + verbSingleOne)
                                                    utterance.rate = .8
                                                    utterance.lang = "us-US"
                                                    speechSynthesis.speak(utterance)
                                                }}> </i>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    {/* 2*/}

                                    <div className="col-sm">

                                        <div className="card  singleverb-card  mt-5 " style={{ width: "370px" }}>
                                            <p className="text-left pl-3 text-danger pt-3"> Conditional Present Progressive</p>
                                            <ul className="list-group list-group-flush">
                                                <li className="list-group-item text-left"><NavLink to={`/translate/translate-i-${verbSingleOne}.html`} > <span className="text-dark"> I </span><span className="text-info">{"would be " + ing}</span></NavLink>  <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                                    const utterance = new SpeechSynthesisUtterance("I would be " + ing)
                                                    utterance.rate = .8
                                                    utterance.lang = "us-US"
                                                    speechSynthesis.speak(utterance)
                                                }}> </i>
                                                </li>
                                                <li className="list-group-item text-left"><NavLink to={`/translate/translate-you-${verbSingleOne}.html`}> <span className="text-dark"> you </span><span className="text-info">{"would be " + ing}</span></NavLink>  <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                                    const utterance = new SpeechSynthesisUtterance("you would be " + ing)
                                                    utterance.rate = .8
                                                    utterance.lang = "us-US"
                                                    speechSynthesis.speak(utterance)
                                                }}> </i>
                                                </li>
                                                <li className="list-group-item text-left"><NavLink to={`/translate/translate-he-${verbSingleOne}.html`}> <span className="text-dark"> he/she/it </span><span className="text-info">{"would be " + ing}</span></NavLink>  <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                                    const utterance = new SpeechSynthesisUtterance("she would be " + ing)
                                                    utterance.rate = .8
                                                    utterance.lang = "us-US"
                                                    speechSynthesis.speak(utterance)
                                                }}> </i>
                                                </li>
                                                <li className="list-group-item text-left"><NavLink to={`/translate/translate-we-${verbSingleOne}.html`}> <span className="text-dark"> we </span><span className="text-info">{"would be " + ing}</span></NavLink>  <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                                    const utterance = new SpeechSynthesisUtterance("we would be " + ing)
                                                    utterance.rate = .8
                                                    utterance.lang = "us-US"
                                                    speechSynthesis.speak(utterance)
                                                }}> </i>
                                                </li>
                                                <li className="list-group-item text-left"><NavLink to={`/translate/translate-you-${verbSingleOne}.html`}> <span className="text-dark"> you </span><span className="text-info">{"would be " + ing}</span></NavLink>  <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                                    const utterance = new SpeechSynthesisUtterance("you would be " + ing)
                                                    utterance.rate = .8
                                                    utterance.lang = "us-US"
                                                    speechSynthesis.speak(utterance)
                                                }}> </i>
                                                </li>
                                                <li className="list-group-item text-left"><NavLink to={`/translate/translate-they-${verbSingleOne}.html`}> <span className="text-dark"> they </span><span className="text-info">{"would be " + ing}</span></NavLink>  <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                                    const utterance = new SpeechSynthesisUtterance("they would be " + ing)
                                                    utterance.rate = .8
                                                    utterance.lang = "us-US"
                                                    speechSynthesis.speak(utterance)
                                                }}> </i>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    {/* 3*/}

                                    <div className="col-sm">

                                        <div className="card  singleverb-card  mt-5 " style={{ width: "370px" }}>
                                            <p className="text-left pl-3 text-danger pt-3"> Conditional Perfect</p>
                                            <ul className="list-group list-group-flush">
                                                <li className="list-group-item text-left"><NavLink to={`/translate/translate-i-${verbSingleOne}.html`} > <span className="text-dark"> I </span><span className="text-info">{"would have " + participes}</span></NavLink>  <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                                    const utterance = new SpeechSynthesisUtterance("I would have " + participes)
                                                    utterance.rate = .8
                                                    utterance.lang = "us-US"
                                                    speechSynthesis.speak(utterance)
                                                }}> </i>
                                                </li>
                                                <li className="list-group-item text-left"><NavLink to={`/translate/translate-you-${verbSingleOne}.html`}> <span className="text-dark"> you </span><span className="text-info">{"would have " + participes}</span></NavLink>  <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                                    const utterance = new SpeechSynthesisUtterance("you would have " + participes)
                                                    utterance.rate = .8
                                                    utterance.lang = "us-US"
                                                    speechSynthesis.speak(utterance)
                                                }}> </i>
                                                </li>
                                                <li className="list-group-item text-left"><NavLink to={`/translate/translate-he-${verbSingleOne}.html`}> <span className="text-dark"> he/she/it </span><span className="text-info">{"would have " + participes}</span></NavLink>  <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                                    const utterance = new SpeechSynthesisUtterance("she would have " + participes)
                                                    utterance.rate = .8
                                                    utterance.lang = "us-US"
                                                    speechSynthesis.speak(utterance)
                                                }}> </i>
                                                </li>
                                                <li className="list-group-item text-left"><NavLink to={`/translate/translate-we-${verbSingleOne}.html`}> <span className="text-dark"> we </span><span className="text-info">{"would have " + participes}</span></NavLink>  <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                                    const utterance = new SpeechSynthesisUtterance("we would have " + participes)
                                                    utterance.rate = .8
                                                    utterance.lang = "us-US"
                                                    speechSynthesis.speak(utterance)
                                                }}> </i>
                                                </li>
                                                <li className="list-group-item text-left"><NavLink to={`/translate/translate-you-${verbSingleOne}.html`}> <span className="text-dark"> you </span><span className="text-info">{"would have " + participes}</span></NavLink>  <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                                    const utterance = new SpeechSynthesisUtterance("you would have " + participes)
                                                    utterance.rate = .8
                                                    utterance.lang = "us-US"
                                                    speechSynthesis.speak(utterance)
                                                }}> </i>
                                                </li>
                                                <li className="list-group-item text-left"><NavLink to={`/translate/translate-they-${verbSingleOne}.html`}> <span className="text-dark"> they </span><span className="text-info">{"would have " + participes}</span></NavLink>  <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                                    const utterance = new SpeechSynthesisUtterance("they would have " + participes)
                                                    utterance.rate = .8
                                                    utterance.lang = "us-US"
                                                    speechSynthesis.speak(utterance)
                                                }}> </i>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    {/* 4*/}

                                    <div className="col-sm">

                                        <div className="card  singleverb-card  mt-5 " style={{ width: "370px" }}>
                                            <p className="text-left pl-3 text-danger pt-3"> Conditional Perfect Progressive</p>
                                            <ul className="list-group list-group-flush">
                                                <li className="list-group-item text-left"><NavLink to={`/translate/translate-i-${verbSingleOne}.html`} > <span className="text-dark"> I </span><span className="text-info">{"would have been " + ing}</span></NavLink>  <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                                    const utterance = new SpeechSynthesisUtterance("I would have been " + ing)
                                                    utterance.rate = .8
                                                    utterance.lang = "us-US"
                                                    speechSynthesis.speak(utterance)
                                                }}> </i>
                                                </li>
                                                <li className="list-group-item text-left"><NavLink to={`/translate/translate-you-${verbSingleOne}.html`}> <span className="text-dark"> you </span><span className="text-info">{"would have been " + ing}</span></NavLink>  <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                                    const utterance = new SpeechSynthesisUtterance("you would have been " + ing)
                                                    utterance.rate = .8
                                                    utterance.lang = "us-US"
                                                    speechSynthesis.speak(utterance)
                                                }}> </i>
                                                </li>
                                                <li className="list-group-item text-left"><NavLink to={`/translate/translate-he-${verbSingleOne}.html`}> <span className="text-dark"> he/she/it </span><span className="text-info">{"would have been " + ing}</span></NavLink>  <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                                    const utterance = new SpeechSynthesisUtterance("she would have been " + ing)
                                                    utterance.rate = .8
                                                    utterance.lang = "us-US"
                                                    speechSynthesis.speak(utterance)
                                                }}> </i>
                                                </li>
                                                <li className="list-group-item text-left"><NavLink to={`/translate/translate-we-${verbSingleOne}.html`}> <span className="text-dark"> we </span><span className="text-info">{"would have been " + ing}</span></NavLink>  <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                                    const utterance = new SpeechSynthesisUtterance("we would have been " + ing)
                                                    utterance.rate = .8
                                                    utterance.lang = "us-US"
                                                    speechSynthesis.speak(utterance)
                                                }}> </i>
                                                </li>
                                                <li className="list-group-item text-left"><NavLink to={`/translate/translate-you-${verbSingleOne}.html`}> <span className="text-dark"> you </span><span className="text-info">{"would have been " + ing}</span></NavLink>  <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                                    const utterance = new SpeechSynthesisUtterance("you would have been " + ing)
                                                    utterance.rate = .8
                                                    utterance.lang = "us-US"
                                                    speechSynthesis.speak(utterance)
                                                }}> </i>
                                                </li>
                                                <li className="list-group-item text-left"><NavLink to={`/translate/translate-they-${verbSingleOne}.html`}> <span className="text-dark"> they </span><span className="text-info">{"would have been " + ing}</span></NavLink>  <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                                    const utterance = new SpeechSynthesisUtterance("they would have been " + ing)
                                                    utterance.rate = .8
                                                    utterance.lang = "us-US"
                                                    speechSynthesis.speak(utterance)
                                                }}> </i>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>







                            </>
                                :
                                (irregularVerb.includes(verbSingleOne)) ?

                                    <div >
                                        <p> Infinitive :  <span className="text-danger">{verbObject.conjugated_forms[0][1]}</span></p>
                                        <p> Simple Past :  <span className="text-danger">{verbObject.conjugated_forms[1][1]}</span></p>
                                        <p>Past Participle :  <span className="text-danger">{verbObject.conjugated_forms[2][1]}</span></p>
                                        <h4 className="text-info pt-5 ">Indicative</h4>
                                        <div className="row">
                                            {verbObject.conjugation_tables.indicative.map((element, index) => {
                                                return (
                                                    <div className="col-sm" key={index}>

                                                        <div className="card  singleverb-card  mt-5 " style={{ width: "370px" }}>
                                                            <p className="text-left pl-3 text-danger pt-3">{element.heading.toUpperCase()}</p>
                                                            <ul className="list-group list-group-flush">
                                                                <li className="list-group-item text-left"><NavLink to={`/translate/translate-${element.forms[0][0]}-${element.forms[0][1].split(" ").join("-")}.html`} > <span className="text-dark"> {element.forms[0][0]} </span><span className="text-info">{element.forms[0][1]} </span></NavLink>  <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                                                    const utterance = new SpeechSynthesisUtterance(element.forms[0][0] + element.forms[0][1])
                                                                    utterance.rate = .8
                                                                    utterance.lang = "us-US"
                                                                    speechSynthesis.speak(utterance)
                                                                }}> </i>
                                                                </li>
                                                                <li className="list-group-item text-left"><NavLink to={`/translate/translate-${element.forms[1][0]}-${element.forms[1][1].split(" ").join("-")}.html`}> <span className="text-dark"> {element.forms[1][0]} </span><span className="text-info">{element.forms[1][1]} </span></NavLink>  <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                                                    const utterance = new SpeechSynthesisUtterance(element.forms[1][0] + element.forms[1][1])
                                                                    utterance.rate = .8
                                                                    utterance.lang = "us-US"
                                                                    speechSynthesis.speak(utterance)
                                                                }}> </i>
                                                                </li>
                                                                <li className="list-group-item text-left"><NavLink to={`/translate/translate-he-${element.forms[2][1].split(" ").join("-")}.html`}> <span className="text-dark"> {element.forms[2][0]} </span><span className="text-info">{element.forms[2][1]} </span></NavLink>  <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                                                    const utterance = new SpeechSynthesisUtterance("she" + element.forms[2][1])
                                                                    utterance.rate = .8
                                                                    utterance.lang = "us-US"
                                                                    speechSynthesis.speak(utterance)
                                                                }}> </i>
                                                                </li>
                                                                <li className="list-group-item text-left"><NavLink to={`/translate/translate-${element.forms[3][0]}-${element.forms[3][1].split(" ").join("-")}.html`}> <span className="text-dark"> {element.forms[3][0]} </span><span className="text-info">{element.forms[3][1]} </span></NavLink>  <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                                                    const utterance = new SpeechSynthesisUtterance(element.forms[3][0] + element.forms[3][1])
                                                                    utterance.rate = .8
                                                                    utterance.lang = "us-US"
                                                                    speechSynthesis.speak(utterance)
                                                                }}> </i>
                                                                </li>
                                                                <li className="list-group-item text-left"><NavLink to={`/translate/translate-${element.forms[4][0]}-${element.forms[4][1].split(" ").join("-")}.html`}> <span className="text-dark"> {element.forms[4][0]} </span><span className="text-info">{element.forms[4][1]} </span></NavLink>  <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                                                    const utterance = new SpeechSynthesisUtterance(element.forms[4][0] + element.forms[4][1])
                                                                    utterance.rate = .8
                                                                    utterance.lang = "us-US"
                                                                    speechSynthesis.speak(utterance)
                                                                }}> </i>
                                                                </li>
                                                                <li className="list-group-item text-left"><NavLink to={`/translate/translate-${element.forms[5][0]}-${element.forms[5][1].split(" ").join("-")}.html`}> <span className="text-dark"> {element.forms[5][0]} </span><span className="text-info">{element.forms[5][1]} </span></NavLink>  <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                                                    const utterance = new SpeechSynthesisUtterance(element.forms[5][0] + element.forms[5][1])
                                                                    utterance.rate = .8
                                                                    utterance.lang = "us-US"
                                                                    speechSynthesis.speak(utterance)
                                                                }}> </i>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                )

                                            })

                                            }
                                        </div>

                                        <h4 className="text-info pt-5">Passive</h4>
                                        <div className="row">
                                            {verbObject.conjugation_tables.passive.map((element, index) => {
                                                return (
                                                    <div className="col-sm" key={index}>

                                                        <div className="card  singleverb-card  mt-5 " style={{ width: "370px" }}>
                                                            <p className="text-left pl-3 text-danger pt-3">{element.heading.toUpperCase()}</p>
                                                            <ul className="list-group list-group-flush">
                                                                <li className="list-group-item text-left"><NavLink to={`/translate/translate-${element.forms[0][0]}-${element.forms[0][1].split(" ").join("-")}.html`}> <span className="text-dark">{element.forms[0][0]} </span><span className="text-info">{element.forms[0][1]} </span></NavLink>  <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                                                    const utterance = new SpeechSynthesisUtterance(element.forms[0][0] + element.forms[0][1])
                                                                    utterance.rate = .8
                                                                    utterance.lang = "us-US"
                                                                    speechSynthesis.speak(utterance)
                                                                }}> </i>
                                                                </li>
                                                                <li className="list-group-item text-left"><NavLink to={`/translate/translate-${element.forms[1][0]}-${element.forms[1][1].split(" ").join("-")}.html`}> <span className="text-dark"> {element.forms[1][0]} </span><span className="text-info">{element.forms[1][1]} </span></NavLink>  <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                                                    const utterance = new SpeechSynthesisUtterance(element.forms[1][0] + element.forms[1][1])
                                                                    utterance.rate = .8
                                                                    utterance.lang = "us-US"
                                                                    speechSynthesis.speak(utterance)
                                                                }}> </i>
                                                                </li>
                                                                <li className="list-group-item text-left"><NavLink to={`/translate/translate-he-${element.forms[2][1].split(" ").join("-")}.html`}> <span className="text-dark"> {element.forms[2][0]} </span><span className="text-info">{element.forms[2][1]} </span></NavLink>  <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                                                    const utterance = new SpeechSynthesisUtterance("she" + element.forms[2][1])
                                                                    utterance.rate = .8
                                                                    utterance.lang = "us-US"
                                                                    speechSynthesis.speak(utterance)
                                                                }}> </i>
                                                                </li>
                                                                <li className="list-group-item text-left"><NavLink to={`/translate/translate-${element.forms[3][0]}-${element.forms[3][1].split(" ").join("-")}.html`}> <span className="text-dark"> {element.forms[3][0]} </span><span className="text-info">{element.forms[3][1]} </span></NavLink>  <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                                                    const utterance = new SpeechSynthesisUtterance(element.forms[3][0] + element.forms[3][1])
                                                                    utterance.rate = .8
                                                                    utterance.lang = "us-US"
                                                                    speechSynthesis.speak(utterance)
                                                                }}> </i>
                                                                </li>
                                                                <li className="list-group-item text-left"><NavLink to={`/translate/translate-${element.forms[4][0]}-${element.forms[4][1].split(" ").join("-")}.html`}> <span className="text-dark"> {element.forms[4][0]} </span><span className="text-info">{element.forms[4][1]} </span></NavLink>  <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                                                    const utterance = new SpeechSynthesisUtterance(element.forms[4][0] + element.forms[4][1])
                                                                    utterance.rate = .8
                                                                    utterance.lang = "us-US"
                                                                    speechSynthesis.speak(utterance)
                                                                }}> </i>
                                                                </li>
                                                                <li className="list-group-item text-left"><NavLink to={`/translate/translate-${element.forms[5][0]}-${element.forms[5][1].split(" ").join("-")}.html`}> <span className="text-dark"> {element.forms[5][0]} </span><span className="text-info">{element.forms[5][1]} </span></NavLink>  <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                                                    const utterance = new SpeechSynthesisUtterance(element.forms[5][0] + element.forms[5][1])
                                                                    utterance.rate = .8
                                                                    utterance.lang = "us-US"
                                                                    speechSynthesis.speak(utterance)
                                                                }}> </i>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                )

                                            })

                                            }
                                        </div>
                                        <h4 className="text-info pt-5">Conditional</h4>
                                        <div className="row">
                                            {verbObject.conjugation_tables.conditional.map((element, index) => {
                                                return (
                                                    <div className="col-sm" key={index}>

                                                        <div className="card  singleverb-card  mt-5 " style={{ width: "370px" }}>
                                                            <p className="text-left pl-3 text-danger pt-3">{element.heading.toUpperCase()}</p>
                                                            <ul className="list-group list-group-flush">
                                                                <li className="list-group-item text-left"><NavLink to={`/translate/translate-${element.forms[0][0]}-${element.forms[0][1].split(" ").join("-")}.html`}> <span className="text-dark"> {element.forms[0][0]} </span><span className="text-info">{element.forms[0][1]} </span></NavLink>  <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                                                    const utterance = new SpeechSynthesisUtterance(element.forms[0][0] + element.forms[0][1])
                                                                    utterance.rate = .8
                                                                    utterance.lang = "us-US"
                                                                    speechSynthesis.speak(utterance)
                                                                }}> </i>
                                                                </li>
                                                                <li className="list-group-item text-left"><NavLink to={`/translate/translate-${element.forms[1][0]}-${element.forms[1][1].split(" ").join("-")}.html`}> <span className="text-dark"> {element.forms[1][0]} </span><span className="text-info">{element.forms[1][1]} </span></NavLink>  <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                                                    const utterance = new SpeechSynthesisUtterance(element.forms[1][0] + element.forms[1][1])
                                                                    utterance.rate = .8
                                                                    utterance.lang = "us-US"
                                                                    speechSynthesis.speak(utterance)
                                                                }}> </i>
                                                                </li>
                                                                <li className="list-group-item text-left"><NavLink to={`/translate/translate-he-${element.forms[2][1].split(" ").join("-")}.html`}> <span className="text-dark"> {element.forms[2][0]} </span><span className="text-info">{element.forms[2][1]} </span></NavLink>  <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                                                    const utterance = new SpeechSynthesisUtterance("she" + element.forms[2][1])
                                                                    utterance.rate = .8
                                                                    utterance.lang = "us-US"
                                                                    speechSynthesis.speak(utterance)
                                                                }}> </i>
                                                                </li>
                                                                <li className="list-group-item text-left"><NavLink to={`/translate/translate-${element.forms[3][0]}-${element.forms[3][1].split(" ").join("-")}.html`}> <span className="text-dark"> {element.forms[3][0]} </span><span className="text-info">{element.forms[3][1]} </span></NavLink>  <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                                                    const utterance = new SpeechSynthesisUtterance(element.forms[3][0] + element.forms[3][1])
                                                                    utterance.rate = .8
                                                                    utterance.lang = "us-US"
                                                                    speechSynthesis.speak(utterance)
                                                                }}> </i>
                                                                </li>
                                                                <li className="list-group-item text-left"><NavLink to={`/translate/translate-${element.forms[4][0]}-${element.forms[4][1].split(" ").join("-")}.html`}> <span className="text-dark"> {element.forms[4][0]} </span><span className="text-info">{element.forms[4][1]} </span></NavLink>  <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                                                    const utterance = new SpeechSynthesisUtterance(element.forms[4][0] + element.forms[4][1])
                                                                    utterance.rate = .8
                                                                    utterance.lang = "us-US"
                                                                    speechSynthesis.speak(utterance)
                                                                }}> </i>
                                                                </li>
                                                                <li className="list-group-item text-left"><NavLink to={`/translate/translate-${element.forms[5][0]}-${element.forms[5][1].split(" ").join("-")}.html`}> <span className="text-dark"> {element.forms[5][0]} </span><span className="text-info">{element.forms[5][1]} </span></NavLink>  <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                                                    const utterance = new SpeechSynthesisUtterance(element.forms[5][0] + element.forms[5][1])
                                                                    utterance.rate = .8
                                                                    utterance.lang = "us-US"
                                                                    speechSynthesis.speak(utterance)
                                                                }}> </i>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                )

                                            })

                                            }
                                        </div>


                                    </div>

                                    : <p></p>
                    }
                </div>


                <div className="singlever-right   p-2 col-12 col-md-2 d-none d-md-block">
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
        </div>
    )
}

export default SingleVerb
