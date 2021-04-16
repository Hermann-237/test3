import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import CookieConsent from "react-cookie-consent"
import './App.css';
import Header from "./components/Header"
import Index from "./components/Index"
import SingleVerb from "./components/SingleVerb"
import Footer from "./components/Footer"
import Translate from "./components/Translate"
import Contact from "./components/Contact"
import Privacy from "./components/Privacy"
import VerbList from "./components/VerbList"
import SingleVerbList from "./components/SingleVerbList"
import PageNotfound from "./components/PageNotfound"
import Conjugaison from "./components/Conjugaison"

function App() {
  function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) === ' ') c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  }
  const valeurCookies = getCookie("simplecyto")
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Redirect from="/defaultsite" to="/" />
          <Route path="/" exact >
            <Index />
          </Route>
          <Route path="/conjugation/aphabet"  >
            <VerbList />
          </Route>
          <Route path="/conjugations/aphabet/:singleVerbList" exact >
            <SingleVerbList />
          </Route>
          <Route path="/conjugation" exact >
            <Conjugaison />
          </Route>
          <Route path="/privacy-policy" exact >
            <Privacy />
          </Route>
          <Route path="/contact" exact >
            <Contact />
          </Route>
          <Route path="/conjugation/:singleVerb" exact
          >
            <SingleVerb />
          </Route>
          <Route path="/translate/:singleTranslate" exact
          >
            <Translate />
          </Route>
          <Route component={PageNotfound} />
        </Switch>
        <Footer />
        {
          (valeurCookies === null) && (<CookieConsent
            debug={true}
            location={'bottom'}
            style={{ background: "#292b2c", height: "200px", paddingTop: "15px", display: "flex", flexDirection: "row" }}
            cookieName="simplecyto"
            cookieValue={true}
            buttonText="I agree"
            expires={365}
            ariaAcceptLabel={true}
            buttonClasses="bg-info text-white px-5 ml-5 mt-sm-1"
            containerClasses="d-flex justify-content-center"
            contentClasses="col-12"
            overlay
          >
            <p>Cookies allow us to provide our services. By using our services, you agree to our use of cookies. See our  <a href="/privacy-policy" className="text-warning"> privacy policy </a>for more </p>
          </CookieConsent>)
        }
      </BrowserRouter>
    </div>
  );
}

export default App;
