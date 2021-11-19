import { Fragment, useState, useRef } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { calenderIcon, chat, heroImage, location, logo, user } from '../../EntryFile/images';
import { LandinPageRoute } from '../../EntryFile/LandingPageRoute';
import { CustomNavlink } from '../../shared/components/navLink/navLink';
import { MobileMenu } from './mobileMenu/mobileMenu';
import './style.scss';

const LandingPage = () => {
  const [toggleMobileMenu, setToggleMobileMenu] = useState(false);

  return (
    <Fragment>
      <header>
        <nav className="navbar navbar-expand-lg ">
          <div className="container-fluid ">
            <a className="navbar-brand" href="#">
              <img src={logo} />
            </a>
            <button
              className="toggler-button"
              onClick={() => setToggleMobileMenu(!toggleMobileMenu)}
            >
              <span className="navbar-toggler-icon" style={{ color: 'black' }}></span>
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
              <div className={`mobile-navbar ${toggleMobileMenu ? 'open' : ''}`}>
                <div className="">
                  {LandinPageRoute.map((route, i) => (
                    <CustomNavlink name={route.name} to={route.to} key={i} />
                  ))}
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
        <section className="hero-section">
          <div className="container-fluid">
            <div className="circle">
              <img src={heroImage} />
            </div>
            <div className="container-fluid call-to">
              <div className="retro">
                <div className="hero-content">
                  <h1 className="hero-title">
                    HealthCare <br />
                    From Home
                  </h1>
                  <div className="hero-subtitle">
                    <div className="hero-details">
                      <div className="hero-subdetails">
                        <div className="icon">
                          <img src={calenderIcon} />
                        </div>
                        <div className="some-details">
                          <h4>Make An Appointment</h4>
                          <p>Make schedule with your favourite doctors anytime</p>
                        </div>
                      </div>
                      <div className="hero-subdetails">
                        <div className="icon">
                          <img src={chat} />
                        </div>
                        <div className="some-details">
                          <h4>Online consultation</h4>
                          <p>Make schedule with your favourite doctors anytime</p>
                        </div>
                      </div>
                    </div>
                    <div className="hero-details">
                      <div className="hero-subdetails">
                        <div className="icon">
                          <img src={user} />
                        </div>
                        <div className="some-details">
                          <h4>Find Your Best Doctor</h4>
                          <p>Make schedule with your favourite doctors anytime</p>
                        </div>
                      </div>
                      <div className="hero-subdetails">
                        <div className="icon">
                          <img src={location} />
                        </div>
                        <div className="some-details">
                          <h4>Spread In Various Places</h4>
                          <p>We are Patnered with Pharmacy spread around the country</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="reach-a-doctor-container">
                  <h4 className="reach-doctor-text">Reach a Doctor</h4>
                  <div className="reach-doctor-input-wrapper">
                    <input className="reach-doctor-input" placeholder="Search For Health Keyword" />
                  </div>
                  <div className="reach-button-wrapper">
                    <Link className="hero-button" to="/">
                      Consult Online
                    </Link>
                    <Link className="hero-button book" to="/">
                      Book Online
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </header>
      <section className="quick-solution">
        <div className="quick-solution-wrapper">
          <div className="quick-solution-top">
            <div className="quick-solution-top-text">
              <div className="underline"></div>
              <h4>Quick Solution For Scheduling With Doctor</h4>
            </div>
          </div>
          <div className="quick-solution-card-wrapper">
            <div className="quick-solution-card">
              <img />
              <h5>Find a Doctor</h5>
              <p>
                Feeling some kind of way and need medical attenttion? Type in your symptoms and find
                a matching doctor!
              </p>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default LandingPage;
