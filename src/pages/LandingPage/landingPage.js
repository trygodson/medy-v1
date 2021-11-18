import { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import { logo } from '../../EntryFile/images';
import { LandinPageRoute } from '../../EntryFile/LandingPageRoute';
import { CustomNavlink } from '../../shared/components/navLink/navLink';
import './style.scss';

const LandingPage = () => {
  return (
    <Fragment>
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid ">
          <a className="navbar-brand" href="#">
            <img src={logo} />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" style={{ background: 'black' }}></span>
          </button>

          <div className="collapse navbar-collapse something" id="navbarNavAltMarkup">
            <div className="navbar-nav ">
              {LandinPageRoute.map((route, i) => (
                <CustomNavlink name={route.name} to={route.to} key={i} />
              ))}
              <div className="button-wrapper">
                <NavLink className="button" to="/">
                  SIGN IN
                </NavLink>
                <NavLink className="button sign-up" to="/">
                  SIGN UP
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <section>
        <div></div>
      </section>
    </Fragment>
  );
};

export default LandingPage;
