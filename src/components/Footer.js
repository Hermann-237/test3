import { Link } from "react-router-dom"


function Footer() {
  const newdate = (new Date()).getFullYear()
  return (
    <div className="footer-section">
      <footer className="">
        <hr className="my-4"></hr>

        <div className="  d-flex flex-column flex-sm-row container">


          <div className="nav-item">
            <Link className="nav-link my-link px-5 py-3 " to="/privacy-policy">
              Privacy Policy
                </Link>
          </div>
          <div className="nav-item">
            <p className="nav-link text-white px-5 py-3 text-info">Copyright ©  2020-{newdate} Simplicyto Company S.L. All rights reserved </p>
          </div>




        </div>
      </footer>
    </div>
  )
}

export default Footer
