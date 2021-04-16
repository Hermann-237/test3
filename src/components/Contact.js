import React, { useState } from 'react'
import axios from "axios"
import { useHistory } from "react-router-dom"
import validator from "email-validator"
import Helmet from "react-helmet"


function Contact() {
    const [email, setemail] = useState("")
    const [send, setsend] = useState(false)
    const [text, settext] = useState("")
    const [ifText, setIfText] = useState(true)
    const [valeurEmail, setValeurEmail] = useState(true)
    const title = " Simplecyto | Contact from, feedback "
    const history = useHistory()
    const description = "Feedback and information request on the services and products provided by Simplecyto"
    const handleClick = (e) => {
        e.preventDefault();
        const a = validator.validate(email)
        setValeurEmail(validator.validate(email))
        if (!a) setValeurEmail(false)
        else if (text.length < 20) setIfText(false)
        else if (a && text.length > 20) {
            setValeurEmail(true)
            setsend(true)
            setIfText(true)
            axios({
                method: 'post',
                url: 'https://backendsimplicyto.herokuapp.com/contact',
                data: {
                    email,
                    text
                }
            }).then(result => {
                setemail("")
                settext("")
                setTimeout(function () {
                    history.push("/")
                }, 3000)
            })
                .catch(err => console.log(err))

        }
    }

    return (
        <>
            <Helmet>
                <title>{title}</title>
                <meta name="description" content={description} />
            </Helmet>
            <div className="container my-5 allBody ">

                <form className="mx-5">
                    <p> Email: leipziglamama@gmail.com <br /> Phone: (+49)1722 8469 67</p>
                    {
                        (send) ? <span className=" ml-4 text-info pt-2">Thank you! Your message has been saved... </span> : <span></span>
                    }
                    <div className="form-group row">
                        <label htmlFor="email">Email address</label>
                        <input type="email" className="form-control" id="email" placeholder="name@example.com" name="email" value={email} onChange={(e) => setemail(e.target.value)} />
                        {
                            (!valeurEmail) ? <span className="text-danger">This Email is not valid </span> : <span></span>
                        }
                    </div>
                    <div className="form-group row">
                        <label htmlFor="text-area">Contact us</label>
                        <textarea className="form-control" id="text-area" rows="10" name="text" value={text} onChange={(e) => settext(e.target.value)}></textarea>
                    </div>
                    <div className="form-group row">
                        <button type="button" className="btn btn-info  px-5" onClick={handleClick}>Send</button>

                        {
                            (!ifText) ? <span className="text-danger ml-4 pt-2">The text must contain at least 20 caracters </span> : <span></span>
                        }
                    </div>
                </form>
            </div>
        </>
    )
}

export default Contact
