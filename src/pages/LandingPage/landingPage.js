import { Fragment, useState, useRef } from 'react';
import { NavLink, Link } from 'react-router-dom';
import {
  calenderIcon,
  chat,
  findDoctor,
  heroImage,
  location,
  logo,
  logoWhite,
  user,
} from '../../EntryFile/images';
import { LandinPageRoute } from '../../EntryFile/LandingPageRoute';
import { CustomNavlink } from '../../shared/components/navLink/navLink';
import { MobileMenu } from './mobileMenu/mobileMenu';
import './style.scss';

const LandingPage = () => {
  const [toggleMobileMenu, setToggleMobileMenu] = useState(false);

  return (
    <Fragment className="fragment">
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
              <h4>
                Quick Solution For Scheduling
                <br />
                With Doctor
              </h4>
            </div>
          </div>
          <div className="row quick-solution-card-wrapper">
            <div className="col-md-4 quick-solution-card">
              <img src={findDoctor} />
              <h5>Find a Doctor</h5>
              <p>
                Feeling some kind of way and need medical attenttion? Type in your symptoms and find
                a matching doctor!
              </p>
            </div>
            <div className="col-md-4 quick-solution-card">
              <img src={findDoctor} />
              <h5>Find a Doctor</h5>
              <p>
                Feeling some kind of way and need medical attenttion? Type in your symptoms and find
                a matching doctor!
              </p>
            </div>
            <div className="col-md-4 quick-solution-card">
              <img src={findDoctor} />
              <h5>Find a Doctor</h5>
              <p>
                Feeling some kind of way and need medical attenttion? Type in your symptoms and find
                a matching doctor!
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="live-consultation">
        <div className="live-consultation-lhs"></div>
        <div className="live-consultation-rhs">
          <div className="inner-wrapper">
            <div className="underline"></div>
            <h4>Live Consultation</h4>
            <p>
              Consult doctors online with our seamless Live Chat feature! E-Care allows you to get
              in touch with a doctor online with our online chat feature. This way you can easily
              get medical attention or advice on the hurry.
            </p>
            <button className="consult-button">consult a doctor now</button>
          </div>
        </div>
      </section>
      <section className="join-now">
        <div className="join-now-lhs">
          <div className="innner-wrapper">
            <div className="underline"></div>
            <h4>Are You A Doctor</h4>
            <p>
              Be a part of the next big thing in healthcare. Join us in our journey of
              revolutionizing healthcare delivery by harnessing technology to help millions lead
              healthier lives.
            </p>
            <button className="join-button">join us now</button>
          </div>
        </div>
        <div className="join-now-rhs"></div>
      </section>
      <section className="sponsors">
        <div className="sponsors-wrapper"></div>
      </section>
      <footer>
        <div className="footer-wrapper">
          <div className="row">
            <div className="col-lg-4 col-md-12">
              <div>
                <img src={logoWhite} />
                <p>
                  We are an e-care facility dedicated to bring portable healthcare to the society -
                  its a way provide healthcare Anytime, Anywhere.
                </p>
              </div>
            </div>
            <div className="col-lg-8 col-md-12">
              <div className="row">
                <div className="col-lg-3 text-left">
                  <h5>About</h5>
                  <div>
                    <a>About Us</a>
                  </div>
                  <div>
                    <a>Blog</a>
                  </div>
                  <div>
                    <a>FAQs</a>
                  </div>
                  <div>
                    <a>Login</a>
                  </div>
                  <div>
                    <a>Register</a>
                  </div>
                </div>
                <div className="col-lg-3 my-3">
                  <h5>Services</h5>
                  <div>
                    <a>Doctors</a>
                  </div>
                  <div>
                    <a>Clinics</a>
                  </div>
                  <div>
                    <a>Specialization</a>
                  </div>
                </div>
                <div className="col-lg-3">
                  <h5>Contact Us</h5>
                  <div>
                    <a mailto="">help@onemedy.com</a>
                  </div>
                  <div>
                    <a tel="+2348035391954">+(234)803 539 1954</a>
                  </div>
                </div>
                <div className="col-lg-3 my-2">
                  <h5>Subscribe To Our Newsletter</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="row footer-end">
            <div className="col-sm-4 lhs">
              <div>Terms and Condition</div>
              <div>Privacy Policy</div>
            </div>
            <div className="col-sm-8 rhs">2021 OneMedy</div>
          </div>
        </div>
      </footer>
    </Fragment>
  );
};

export default LandingPage;
