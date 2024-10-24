import cevents from "./assets/images/cevents.jpg";
import weddingmeal from "./assets/images/weddingmeal.jpg";
import birthdayparty from "./assets/images/birthdayparty.jpg";
import barservice from "./assets/images/barservice.jpg";
import drop from "./assets/images/drop.jpg";
import staff from "./assets/images/staff.jpg";
import Exhibitions from "./assets/images/Exhibitions.png";
import Trousseau from "./assets/images/Trousseau.jpg";
import Venue2 from "./assets/images/venue-gallery/2.jpg";
import Venue4 from "./assets/images/venue-gallery/4.jpg";
import Venue5 from "./assets/images/venue-gallery/5.jpg";
import Venue6 from "./assets/images/venue-gallery/6.jpg";

function App() {
  return (
    <>
      <header id="header">
        <div className="container">
          <div id="logo" className="pull-left">
            <h1 style={{ color: "white" }}>
              <a href="#intro" className="scrollto">
                Adida <span>Events</span>
              </a>
            </h1>
          </div>

          <nav id="nav-menu-container">
            <ul className="nav-menu">
              <li className="menu-active">
                <a href="#intro">Home</a>
              </li>
              <li>
                <a href="#about">About Us</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#gallery">Gallery</a>
              </li>
              <li>
                <a href="#testimonials">Testimonials</a>
              </li>
              <li>
                <a href="#contact">Contact us</a>
              </li>
            </ul>

            <button className="open-modal-btn" id="openModalBtn">
              Book an Event
            </button>

            <div id="bookingModal" className="modal">
              <div className="modal-content">
                <span className="close" id="closeModalBtn">
                  &times;
                </span>
                <form action="/submit-booking" method="POST">
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" name="name" required />

                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" name="email" required />

                  <label htmlFor="phone">Phone Number</label>
                  <input type="tel" id="phone" name="phone" required />

                  <label htmlFor="comments">Message</label>
                  <textarea
                    style={{ marginBottom: "20px" }}
                    id="comments"
                    name="comments"
                    rows="2"
                  ></textarea>

                  <button type="submit" className="form-btn" id="formbtn">
                    Book Event
                  </button>
                </form>
              </div>
            </div>
          </nav>
        </div>
      </header>

      <img src="about side.jpg" alt="" />
      <section id="intro">
        <div className="intro-container wow fadeIn">
          <h1 className="mb-4 pb-0">
            ADIDA EVENTS
            <br />
            <span>MAKING </span>YOUR DAY "Brighten Up"
          </h1>

          <a
            href="https://www.youtube.com/watch?v=d77TQupCENc"
            className="venobox play-btn mb-4"
            data-vbtype="video"
            data-autoplay="true"
          ></a>
          <a href="#about" className="about-btn scrollto">
            About The Event
          </a>
        </div>
      </section>

      <main id="main">
        <section id="about">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <h2>About The Event</h2>
                <p style={{ textAlign: "justify" }}>
                  Welcome to our company, your go-to source for construction,
                  contractual services, and event management. We specialize in
                  top-notch construction and contracting services for interior
                  design and exhibitions, with a commitment to craftsmanship and
                  client satisfaction. We also excel in curating unforgettable
                  experiences for weddings, birthdays, and special events,
                  transforming ordinary occasions into extraordinary memories
                  with creativity and attention to detail. Our services include
                  interior design, exhibition setup, event planning, decor
                  arrangements, and gift decorations. Our dedicated team of
                  professionals ensures excellence and customer satisfaction in
                  every project.
                </p>
              </div>
              <div className="col-lg-3"></div>
            </div>
          </div>
        </section>

        <section id="services">
          <div className="section-header">
            <h2>Our Services</h2>
          </div>
          <div className="service-container">
            <div className="service">
              <img src={cevents} alt="img" />
              <h3>Corporate events</h3>
              <p>
                Adida Events delivers top-notch corporate events tailored to
                your needs, from impactful conferences to dynamic team-building
                activities. Let us handle the details, ensuring a seamless and
                memorable experience for your team.
              </p>
              <button className="services-btn open-modal-btn" id="servicesBtn">
                Book Now
              </button>
            </div>

            <div className="service">
              <img src={weddingmeal} alt="img" />
              <h3>Wedding meal</h3>
              <p>
                Enjoy a delicious wedding meal with Adida Events, where every
                dish is meticulously prepared. Our menu delights guests and
                makes your celebration truly special and memorable.
              </p>
              <button className="services-btn open-modal-btn" id="servicesBtn">
                Book Now
              </button>
            </div>

            <div className="service">
              <img src={birthdayparty} alt="img" />
              <h3>Birthday parties</h3>
              <p>
                Celebrate your birthday with Adida Events. We turn your party
                into a fun and memorable occasion with vibrant setups and
                tailored events that all your guests will enjoy.
              </p>
              <button className="services-btn open-modal-btn" id="servicesBtn">
                Book Now
              </button>
            </div>

            <div className="service">
              <img src={barservice} alt="img" />
              <h3>Bar service</h3>
              <p>
                Enhance your event with Adida Events' bar services. Our expert
                bartenders craft custom cocktails and serve a variety of
                beverages, ensuring an exceptional drinking experience.
              </p>
              <button className="services-btn open-modal-btn" id="servicesBtn">
                Book Now
              </button>
            </div>

            <div className="service">
              <img src={drop} alt="img" />
              <h3>Drop off catering</h3>
              <p>
                Enjoy top-quality meals with Adida Events' drop-off catering. We
                deliver expertly prepared food to your location, making your
                event smooth and delightful.
              </p>
              <button className="services-btn open-modal-btn" id="servicesBtn">
                Book Now
              </button>
            </div>

            <div className="service">
              <img src={staff} alt="img" />
              <h3>Staff services</h3>
              <p>
                Receive exceptional service with Adida Events' staff. Our
                trained professionals ensure your event runs seamlessly,
                offering attentive and courteous support for all your needs.
              </p>
              <button className="services-btn open-modal-btn" id="servicesBtn">
                Book Now
              </button>
              {/* <button className="services-btn" id="servicesBtn">book now/button> */}
            </div>
            <div className="service">
              <img src={Exhibitions} alt="img" />
              <h3>Exhibitions</h3>
              <p>
                Adida Events Exhibition service guarantees a flawless event. We
                handle everything, from setup to breakdown, ensuring your
                exhibition leaves a lasting impact on every attendee.
              </p>
              <button className="services-btn open-modal-btn" id="servicesBtn">
                Book Now
              </button>
              {/* <button className="services-btn" id="servicesBtn">book now</button> */}
            </div>
            <div className="service">
              <img src={Trousseau} alt="img" />
              <h3>Trousseau Packing</h3>
              <p>
                Adida Events offers exquisite Trousseau packing services,
                turning your cherished items into beautifully crafted
                presentations.
              </p>
              <button className="services-btn open-modal-btn" id="servicesBtn">
                Book Now
              </button>
              {/* <button className="services-btn" id="servicesBtn">book now/button> */}
            </div>
          </div>
        </section>

        <section id="gallery" className="wow fadeInUp">
          <div className="container">
            <div className="section-header">
              <h2>Gallery</h2>
              <p>Check our gallery from the recent events</p>
            </div>
          </div>

          <div className="gallery-wrapper">
            <button className="left-btn">&#10094;</button>
            <div className="owl-carousel gallery-carousel">
              <a href={Venue2} className="venobox" data-gall="gallery-carousel">
                <img src={Venue2} alt="" />
              </a>
              <a href={Venue4} className="venobox" data-gall="gallery-carousel">
                <img src={Venue4} alt="" />
              </a>
              <a href={Venue5} className="venobox" data-gall="gallery-carousel">
                <img src={Venue5} alt="" />
              </a>
              <a href={Venue6} className="venobox" data-gall="gallery-carousel">
                <img src={Venue6} alt="" />
              </a>
            </div>
            <button className="right-btn">&#10095;</button>
          </div>
        </section>

        {/* <section id="video-gallery" className="wow fadeInUp">
          <div className="container">
            <button className="left-btn">&#10094;</button>
            <div className="video-gallery-wrapper">
              <div className="video-item">
                <video src="./videos/video2.mp4" className="video-player" muted></video>
                <button className="play-btn">&#9654;</button>
              </div>
              <div className="video-item">
                <video src="./videos/video4.mp4" className="video-player" muted></video>
                <button className="play-btn">&#9654;</button>
              </div>
              <div className="video-item">
                <video src="./videos/video5.mp4" className="video-player" muted></video>
                <button className="play-btn">&#9654;</button>
              </div>
              <div className="video-item">
                <video src="./videos/video6.mp4" className="video-player" muted></video>
                <button className="play-btn">&#9654;</button>
              </div>
            </div>
            <button className="right-btn">&#10095;</button>
          </div>
        </section> */}

        <section id="testimonials" className="section-with-bg wow fadeInUp">
          <div className="section-header">
            <h2>Testimonials</h2>
          </div>

          <div className="testimonial-wrapper">
            <button className="left-btn">&#10094;</button>
            <div className="testimonial-carousel owl-carousel">
              <div className="testimonial">
                <p>
                  "Adida events thank you for making my event wonderful. Happy
                  to connect !"
                </p>
                <h4>– Rachna Maheshwari</h4>
              </div>
              <div className="testimonial">
                <p>"Superb people, great service and huge satisfaction."</p>
                <h4>– Gagan Budhiraja</h4>
              </div>
              <div className="testimonial">
                <p>"One stop solution for all events related needs."</p>
                <h4>– Kanika Maheshwari</h4>
              </div>
            </div>
            <button className="right-btn">&#10095;</button>
          </div>
        </section>
        {/* </section> */}

        <section id="contact" className="section-bg wow fadeInUp">
          <div className="container">
            <div className="section-header">
              <h2>Contact Us</h2>
            </div>

            <div className="row contact-info">
              <div className="col-md-4">
                <i className="fa-solid fa-location-dot"></i>
                <div className="contact-address">
                  <address>
                    1/6979 street no -2 Shivaji Park shahdara Delhi-110032
                  </address>
                </div>
              </div>

              <div className="col-md-4">
                <i className="fa-solid fa-phone"></i>
                <div className="contact-phone">
                  <p>
                    <a href="tel:8800123421">8800123421</a>
                  </p>
                </div>
              </div>

              <div className="col-md-4">
                <i className="fa-solid fa-inbox"></i>
                <div className="contact-email">
                  <p>
                    <a href="mailto:adidaevents@gmail.com">
                      adidaevents@gmail.com
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="form">
              <div id="sendmessage" style={{ display: "none" }}>
                Your message has been sent. Thank you!
              </div>
              <div id="errormessage" style={{ display: "none" }}>
                Please fill in the required fields correctly.
              </div>

              <form
                action=""
                method="post"
                role="form"
                className="contactForm"
                id="contactForm"
              >
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      id="name"
                      placeholder="Your Name"
                    />
                    <div
                      className="validation"
                      style={{ display: "none", color: "red" }}
                    >
                      Please enter your name.
                    </div>
                  </div>
                  <div className="form-group col-md-6">
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      id="email"
                      placeholder="Your Email"
                    />
                    <div
                      className="validation"
                      style={{ display: "none", color: "red" }}
                    >
                      Please enter a valid email address.
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    name="subject"
                    id="subject"
                    placeholder="Subject"
                  />
                  <div
                    className="validation"
                    style={{ display: "none", color: "red" }}
                  >
                    Please enter a subject.
                  </div>
                </div>
                <div className="form-group">
                  <textarea
                    className="form-control"
                    name="message"
                    rows="5"
                    id="message"
                    placeholder="Message"
                  ></textarea>
                  <div
                    className="validation"
                    style={{ display: "none", color: "red" }}
                  >
                    Please enter a message.
                  </div>
                </div>
                <div className="text-center">
                  <button type="submit" id="submitBtn">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer id="footer">
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div
                className="col-lg-3 col-md-6 footer-info"
                style={{ margin: "-12px 0px 10px 0px" }}
              >
                <h2 style={{ color: "white" }}>
                  ADIDA <span style={{ color: "#f82249" }}>EVENTS</span>
                </h2>
                <p>
                  Adida Events is a premier event management company dedicated
                  to creating unforgettable experiences. Specializing in both
                  corporate and personal events, we bring a unique blend of
                  creativity, professionalism, and meticulous attention to
                  detail to every project.
                </p>
              </div>

              <div className="col-lg-3 col-md-6 footer-links">
                <h4>Useful Links</h4>
                <ul>
                  <li>
                    <i className="fa fa-angle-right"></i>{" "}
                    <a href="#about">About us</a>
                  </li>
                  <li>
                    <i className="fa fa-angle-right"></i>{" "}
                    <a href="#services">Services</a>
                  </li>
                  <li>
                    <i className="fa fa-angle-right"></i>{" "}
                    <a href="#gallery">Gallery</a>
                  </li>
                  <li>
                    <i className="fa fa-angle-right"></i>{" "}
                    <a href="#" id="bookevent">
                      {" "}
                      Book Event
                    </a>
                  </li>
                </ul>
              </div>

              <div className="col-lg-3 col-md-6 footer-links">
                <h4>Useful Links</h4>
                <ul>
                  <li>
                    <i className="fa fa-angle-right"></i>{" "}
                    <a href="Terms-of-service.html" target="_blank">
                      Terms of service
                    </a>
                  </li>
                  <li>
                    <i className="fa fa-angle-right"></i>{" "}
                    <a href="Privacy_policy.html" target="_blank">
                      Privacy policy
                    </a>
                  </li>
                  <li>
                    <i className="fa fa-angle-right"></i>{" "}
                    <a href="#contact"> Contact us</a>
                  </li>
                  <li>
                    <i className="fa fa-angle-right"></i>{" "}
                    <a href="#testimonials">Testimonials </a>
                  </li>
                </ul>
              </div>

              <div className="col-lg-3 col-md-6 footer-contact">
                <h4>Contact Us</h4>
                <p>
                  1/6979 street no -2 Shivaji Park shahdara Delhi-110032 <br />
                  <strong>Phone:</strong> 8800123421
                  <br />
                  <strong>Email:</strong> adidaevents@gmail.com
                  <br />
                </p>

                <div className="social-links">
                  <a
                    href="https://www.facebook.com/"
                    target="_blank"
                    className="facebook"
                  >
                    <i className="fa-brands fa-facebook"></i>
                  </a>
                  <a
                    href="https://www.instagram.com/adidaevents?igsh=MTFldmVzOWVvM24yMg%3D%3D"
                    target="_blank"
                    className="instagram"
                  >
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="col-lg-3 col-md-6 footer-links">
                <h4>Useful Links</h4>
                <ul>
                  <li><i className="fa fa-angle-right"></i> <a href="#">Home</a></li>
                  <li><i className="fa fa-angle-right"></i> <a href="#">About us</a></li>
                  <li><i className="fa fa-angle-right"></i> <a href="#">Services</a></li>
                  <li><i className="fa fa-angle-right"></i> <a href="#">Terms of service</a></li>
                  <li><i className="fa fa-angle-right"></i> <a href="#">Privacy policy</a></li>
                </ul>
              </div>  */}

        <div className="container">
          <div className="copyright">
            <strong>Adida Events</strong> Pvt. Ltd. @2024. All rights reserved.
          </div>
          {/* <div className="credits">
            
              All the links in the footer should remain intact.
              You can delete the links only if you purchased the pro version.
              Licensing information: https://bootstrapmade.com/license/
              Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/buy/?theme=TheEvent
            
            Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
          </div>  */}
        </div>
      </footer>

      <a href="#" className="back-to-top">
        <i className="fa fa-angle-up"></i>
      </a>
    </>
  );
}

export default App;
