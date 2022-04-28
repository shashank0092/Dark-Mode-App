import React from 'react';
import { color } from '../App';
import { useContext } from 'react';
export function Navbar(props) {

  const data1 = useContext(color);
  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-${data1} bg-${data1}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="/">TextTutils</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="/">About</a>
              </li>


            </ul>
            <div className="form-check form-switch">
              <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.colorChange} />
              <label className={`form-check-label text-${data1==='light'?'dark':'light'}`} htmlFor="flexSwitchCheckDefault">Dark Mode</label>
            </div>
          </div>
        </div>
      </nav>

    </>
  )
}

export default Navbar;