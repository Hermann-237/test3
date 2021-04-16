import { NavLink } from "react-router-dom"





function Header() {

  return (
    <div>

      <nav className="navbar navbar-expand-lg navbar-light  mx-5 ">
        <NavLink className="navbar-brand" to="/"><img src="/logo.png" className="logo-1" alt="" /></NavLink>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <NavLink activeClassName="simo" className="nav-link my-link px-3 py-1" to="/conjugation" exact>
                Conjugations
                </NavLink>
            </li>
            <li className="nav-item">
              <NavLink activeClassName="simo" className="nav-link my-link px-3 py-1" to="/conjugation/aphabet" exact>
                Verbs's list
                </NavLink>
            </li>
            <li className="nav-item">
              <NavLink activeClassName="simo" className="nav-link my-link px-5 py-1 " to="/contact">
                Contact
                </NavLink>
            </li>
          </ul>
        </div>
      </nav>
      <hr className="my-4"></hr>
    </div>
  );
}

export default Header
