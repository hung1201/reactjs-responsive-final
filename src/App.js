import React from 'react'

const App = () => {
  return (
    <>
             <header>
          <nav className="navbar custom-nav navbar-fixed-top" role="navigation">
            <div className="container-fluid">
              <div className="nav-wrapper">
                <div className="navbar-header">
                  <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#menu"> 
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar" />
                    <span className="icon-bar" />
                    <span className="icon-bar" />
                  </button>
                  <a href="#home" className="navbar-brand">
                    <p>HUNGNH</p>
                  </a>
                </div>
                <div className="collapse navbar-collapse" id="menu">
                  <ul className="nav navbar-nav">
                    <li><a className="smooth-scroll" href="#home">Home</a></li>
                    <li><a className="smooth-scroll" href="#services">Services</a></li>
                    <li><a className="smooth-scroll" href="#about">About</a></li>
                    <li><a className="smooth-scroll" href="#work">Work</a></li>
                    <li><a className="smooth-scroll" href="#team">Team</a></li>
                    <li><a className="smooth-scroll" href="#reviews">Reviews</a></li>
                    <li><a className="smooth-scroll" href="#price">Price</a></li>
                    <li><a className="smooth-scroll" href="#stats">Stats</a></li>
                    <li><a className="smooth-scroll" href="#clients">Clients</a></li>
                    <li><a className="smooth-scroll" href="#contact">Contact</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </nav>
        </header>
        <section id="home">
          <div id="home-cover" className="bg-parallax animate__animated animate__fadeIn ">
            <div id="home-content-box">
              <div id="home-content-box-inner" className="text-center">
                <div id="home-heading" className="animate__animated animate__lightSpeedInRight">
                  <h3>HUNGNH <br /> Responsive Website of HungNH</h3>
                </div>
                <div id="home-btn" className="animate__animated animate__lightSpeedInLeft">
                  <a href="#work" className="btn btn-lg btn-general btn-white" role="button">
                    View Work
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="services">
          <div className="content-box">
            <div className="content-title wow fadeInDown">
              <h3>Services</h3>
              <div className="content-title-underline" />
            </div>
            <div className="container">
              <div className="row">
                <div data-wow-duration=".5s" className="col-md-4 col-sm-6 wow fadeIn" data-wow-delay="0.2s">
                  <div className="service-item">
                    <div className="service-item-icon">
                      <i className="fa fa-paint-brush fa-3x" />
                    </div>
                    <div className="service-item-title">
                      <h3>Web Design</h3>
                    </div>
                    <div className="service-item-desc">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                  </div>
                </div>
                <div data-wow-duration=".5s" className="col-md-4 col-sm-6 wow fadeIn" data-wow-delay="0.6s">
                  <div className="service-item">
                    <div className="service-item-icon">
                      <i className="fa fa-laptop fa-3x" />
                    </div>
                    <div className="service-item-title">
                      <h3>Web Development</h3>
                    </div>
                    <div className="service-item-desc">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                  </div>
                </div>
                <div data-wow-duration=".5s" className="col-md-4 col-sm-6 wow fadeIn" data-wow-delay="1s">
                  <div className="service-item">
                    <div className="service-item-icon">
                      <i className="fa fa-tablet fa-3x" />
                    </div>
                    <div className="service-item-title">
                      <h3>Mobile Apps</h3>
                    </div>
                    <div className="service-item-desc">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                  </div>
                </div>
                <div data-wow-duration=".5s" className="col-md-4 col-sm-6 wow fadeIn" data-wow-delay="2.2s">
                  <div className="service-item">
                    <div className="service-item-icon">
                      <i className="fa fa-search fa-3x" />
                    </div>
                    <div className="service-item-title">
                      <h3>Web Development</h3>
                    </div>
                    <div className="service-item-desc">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                  </div>
                </div>
                <div data-wow-duration=".5s" className="col-md-4 col-sm-6 wow fadeIn" data-wow-delay="1.8s">
                  <div className="service-item">
                    <div className="service-item-icon">
                      <i className="fa fa-table fa-3x" />
                    </div>
                    <div className="service-item-title">
                      <h3>Web Development</h3>
                    </div>
                    <div className="service-item-desc">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                  </div>
                </div>
                <div data-wow-duration=".5s" className="col-md-4 col-sm-6 wow fadeIn" data-wow-delay="1.4s">
                  <div className="service-item">
                    <div className="service-item-icon">
                      <i className="fa fa-support fa-3x" />
                    </div>
                    <div className="service-item-title">
                      <h3>Web Development</h3>
                    </div>
                    <div className="service-item-desc">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="about">
          <div id="about-bg-diagonal" className="bg-parallax" />
          <div className="container">
            <div className="row">
              <div className="col-md-4  col-sm-4 col-xs-3">
                <div id="about-content-box">
                  <div id="about-content-box-outer">
                    <div id="about-content-box-inner">
                      <div className="content-title wow fadeInDown" data-wow-duration=".5s">
                        <h3>About</h3>
                        <div className="content-title-underline" />
                      </div>
                      <div id="about-desc" className="wow fadeIn" data-wow-delay=".5s">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quibusdam architecto quaerat natus ab ipsum delectus modi inventore quidem! Voluptas voluptates quasi porro ea eum neque deleniti aliquam reprehenderit repudiandae?
                        </p>
                      </div>
                      <div id="about-btn" className="wow slideInLeft" data-wow-duration=".5s" data-wow-delay=".9s">
                        <a href="#work" className="btn btn-lg btn-general btn-blue" role="button">About me</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="work">
          <div className="content-box">
            <div className="content-title wow fadeInDown">
              <h3>Our Work</h3>
              <div className="content-title-underline" />
            </div>
          </div>
          <div className="container-fluid">
            <div className="row no-gutters">
              <div className="col-md-3 col-sm-4 col-xs-6">
                <div className="img-wrapper wow fadeIn " data-wow-delay=".2s" data-wow-duration=".5s">
                  <a href="img/work/1.jpg">
                    <img src="img/work/1.jpg" className="img-responsive" />
                  </a>
                </div>
              </div>
              <div className="col-md-3 col-sm-4 col-xs-6">
                <div className="img-wrapper wow fadeIn " data-wow-delay=".4s" data-wow-duration=".5s">
                  <a href="img/work/2.jpg">
                    <img src="img/work/2.jpg" className="img-responsive" />
                  </a>
                </div>
              </div>
              <div className="col-md-3 col-sm-4 col-xs-6">
                <div className="img-wrapper wow fadeIn " data-wow-delay=".6s" data-wow-duration=".5s">
                  <a href="img/work/image-new.png">
                    <img src="img/work/image-new.png" className="img-responsive" />
                  </a>
                </div>
              </div>
              <div className="col-md-3 col-sm-4 col-xs-6">
                <div className="img-wrapper wow fadeIn " data-wow-delay=".8s" data-wow-duration=".5s">
                  <a href="img/work/4.jpg">
                    <img src="img/work/4.jpg" className="img-responsive" />
                  </a>
                </div>
              </div>
              <div className="col-md-3 col-sm-4 col-xs-6">
                <div className="img-wrapper wow fadeIn " data-wow-delay="1s" data-wow-duration=".5s">
                  <a href="img/work/5.jpg">
                    <img src="img/work/5.jpg" className="img-responsive" />
                  </a>
                </div>
              </div>
              <div className="col-md-3 col-sm-4 col-xs-6">
                <div className="img-wrapper wow fadeIn " data-wow-delay="1.2s" data-wow-duration=".5s">
                  <a href="img/work/6.jpg">
                    <img src="img/work/6.jpg" className="img-responsive" />
                  </a>
                </div>
              </div>
              <div className="col-md-3 col-sm-4 col-xs-6">
                <div className="img-wrapper wow fadeIn " data-wow-delay="1.4s" data-wow-duration=".5s">
                  <a href="img/work/7.jpg">
                    <img src="img/work/7.jpg" className="img-responsive" />
                  </a>
                </div>
              </div>
              <div className="col-md-3 col-sm-4 col-xs-6">
                <div className="img-wrapper wow fadeIn " data-wow-delay="1.6s" data-wow-duration=".5s">
                  <a href="img/work/8.jpg">
                    <img src="img/work/8.jpg" className="img-responsive" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="team">
          <div className="content-box">
            <div className="content-title wow fadeInDown">
              <h3>Our Team</h3>
              <div className="content-title-underline" />
            </div>
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div id="team-members" className="owl-carousel owl-theme wow fadeInUp" data-wow-duration=".5s">
                    <div className="team-member">
                      <img className="img-responsive" src="img/team/team-1.jpg" />
                      <div className="team-member-info text-center">
                        <h4 className="team-member-name">Nguyễn Hùng</h4>
                        <h4 className="team-member-designation">Quéo Đê vê lốp bơ</h4>
                        <ul className="social-list">
                          <li><a href="#" className="social-icon icon-gray"><i className="fa fa-facebook" /></a></li>
                          <li><a href="#" className="social-icon icon-gray"><i className="fa fa-twitter" /></a></li>
                          <li><a href="#" className="social-icon icon-gray"><i className="fa fa-instagram" /></a></li>
                        </ul>
                      </div>
                    </div>
                    <div className="team-member">
                      <img className="img-responsive" src="img/team/team-2.jpg" />
                      <div className="team-member-info text-center">
                        <h4 className="team-member-name">Nguyễn Hùng</h4>
                        <h4 className="team-member-designation">Quéo Đê vê lốp bơ</h4>
                        <ul className="social-list">
                          <li><a href="#" className="social-icon icon-gray"><i className="fa fa-facebook" /></a></li>
                          <li><a href="#" className="social-icon icon-gray"><i className="fa fa-twitter" /></a></li>
                          <li><a href="#" className="social-icon icon-gray"><i className="fa fa-instagram" /></a></li>
                        </ul>
                      </div>
                    </div>
                    <div className="team-member">
                      <img className="img-responsive" src="img/team/team-3.jpg" />
                      <div className="team-member-info text-center">
                        <h4 className="team-member-name">Nguyễn Hùng</h4>
                        <h4 className="team-member-designation">Quéo Đê vê lốp bơ</h4>
                        <ul className="social-list">
                          <li><a href="#" className="social-icon icon-gray"><i className="fa fa-facebook" /></a></li>
                          <li><a href="#" className="social-icon icon-gray"><i className="fa fa-twitter" /></a></li>
                          <li><a href="#" className="social-icon icon-gray"><i className="fa fa-instagram" /></a></li>
                        </ul>
                      </div>
                    </div>
                    <div className="team-member">
                      <img className="img-responsive" src="img/team/team-4.jpg" />
                      <div className="team-member-info text-center">
                        <h4 className="team-member-name">Nguyễn Hùng</h4>
                        <h4 className="team-member-designation">Quéo Đê vê lốp bơ</h4>
                        <ul className="social-list">
                          <li><a href="#" className="social-icon icon-gray"><i className="fa fa-facebook" /></a></li>
                          <li><a href="#" className="social-icon icon-gray"><i className="fa fa-twitter" /></a></li>
                          <li><a href="#" className="social-icon icon-gray"><i className="fa fa-instagram" /></a></li>
                        </ul>
                      </div>
                    </div>
                    <div className="team-member">
                      <img className="img-responsive" src="img/team/team-5.jpg" />
                      <div className="team-member-info text-center">
                        <h4 className="team-member-name">Nguyễn Hùng</h4>
                        <h4 className="team-member-designation">Quéo Đê vê lốp bơ</h4>
                        <ul className="social-list">
                          <li><a href="#" className="social-icon icon-gray"><i className="fa fa-facebook" /></a></li>
                          <li><a href="#" className="social-icon icon-gray"><i className="fa fa-twitter" /></a></li>
                          <li><a href="#" className="social-icon icon-gray"><i className="fa fa-instagram" /></a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="reviews">
          <div id="reviews-cover" className="bg-parallax">
            <div className="content-box">
              <div className="content-title content-title-white wow animated fadeInDown">
                <h3>What Our Customers Say</h3>
                <div className="content-title-underline" />
              </div>
              <div className="container">
                <div className="row wow animated fadeInUp" data-wow-delay=".5s">
                  <div className="col-md-12">
                    <div id="customers-reviews" className="text-center owl-carousel owl-theme">
                      <div className="review">
                        <img src="/img/client/client-1.jpg" className="img-responsive img-circle" />
                        <blockquote className="text-center">
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione eos, maxime molestiae consequatur distinctio omnis dolorem quos! Animi delectus molestias quo soluta.
                          </p>
                        </blockquote>
                        <div className="review-author">
                          <p>
                            <strong>Nguyễn Hùng</strong>
                            <span>CEO &amp; Founder</span>
                          </p>
                        </div>
                      </div>
                      <div className="review">
                        <img src="/img/client/client-2.jpg" className="img-responsive img-circle" />
                        <blockquote>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione eos, maxime molestiae consequatur distinctio omnis dolorem quos! Animi delectus molestias quo soluta.
                          </p>
                        </blockquote>
                        <div className="review-author">
                          <p>
                            <strong>Nguyễn Hùng</strong>
                            <span>CEO &amp; Founder</span>
                          </p>
                        </div>
                      </div>
                      <div className="review">
                        <img src="/img/client/client-3.jpg" className="img-responsive img-circle" />
                        <blockquote>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione eos, maxime molestiae consequatur distinctio omnis dolorem quos! Animi delectus molestias quo soluta.
                          </p>
                        </blockquote>
                        <div className="review-author">
                          <p>
                            <strong>Nguyễn Hùng</strong>
                            <span>CEO &amp; Founder</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="price">
          <div className="content-box">
            <div className="content-title wow fadeInDown">
              <h3>Our Prices</h3>
              <div className="content-title-underline" />
            </div>
            <div className="container">
              <div className="row">
                <div className="col-md-4 wow zoomIn" data-wow-duration=".5s" data-wow-delay=".2s">
                  <div className="pricing-box text-center">
                    <h4 className="pricing-title">Basic</h4>
                    <h3 className="pricing-value">69 <sup>$</sup> </h3>
                    <ul className="pricing-spec">
                      <li>
                        <p>500 Cars</p>
                      </li>
                      <li>
                        <p>200 Motors</p>
                      </li>
                      <li>
                        <p>340 Houses</p>
                      </li>
                      <li>
                        <p>999 Laptops</p>
                      </li>
                    </ul>
                    <div className="pricing-btn">
                      <a href="#" className="btn btn-lg btn-general btn-blue">
                        Purchase
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 wow bounceInUp" data-wow-duration=".8s" data-wow-delay=".3s">
                  <div className="pricing-box pricing-box-lg text-center">
                    <h4 className="pricing-title">Basic</h4>
                    <h3 className="pricing-value">69 <sup>$</sup> </h3>
                    <ul className="pricing-spec">
                      <li>
                        <p>500 Cars</p>
                      </li>
                      <li>
                        <p>200 Motors</p>
                      </li>
                      <li>
                        <p>340 Houses</p>
                      </li>
                      <li>
                        <p>999 Laptops</p>
                      </li>
                    </ul>
                    <div className="pricing-btn">
                      <a href="#" className="btn btn-lg btn-general btn-white">
                        Purchase
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 wow slideInRight" data-wow-duration=".5s" data-wow-delay=".2s">
                  <div className="pricing-box text-center">
                    <h4 className="pricing-title">Basic</h4>
                    <h3 className="pricing-value">69 <sup>$</sup> </h3>
                    <ul className="pricing-spec">
                      <li>
                        <p>500 Cars</p>
                      </li>
                      <li>
                        <p>200 Motors</p>
                      </li>
                      <li>
                        <p>340 Houses</p>
                      </li>
                      <li>
                        <p>999 Laptops</p>
                      </li>
                    </ul>
                    <div className="pricing-btn">
                      <a href="#" className="btn btn-lg btn-general btn-blue">
                        Purchase
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="stats">
          <div id="stats-cover" className="bg-parallax">
            <div className="content-box">
              <div className="content-title content-title-white wow fadeInDown">
                <h3>Never Stop Improving</h3>
                <div className="content-title-underline" />
              </div>
              <div className="container">
                <div className="row text-center">
                  <div className="col-md-3 col-sm-6 wow slideInLeft">
                    <div className="stats-item">
                      <i className="fa fa-cloud-download fa-5x" />
                      <h2><span className="counter">6969</span><span>+</span></h2>
                      <p>Downloads</p>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-6 wow slideInUp">
                    <div className="stats-item">
                      <i className="fa fa-comment-o fa-5x" />
                      <h2><span className="counter">6969</span><span>+</span></h2>
                      <p>Comments</p>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-6 wow slideInDown">
                    <div className="stats-item">
                      <i className="fa fa-heart-o fa-5x" />
                      <h2><span className="counter">6969</span><span>+</span></h2>
                      <p>Likes</p>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-6 wow slideInRight">
                    <div className="stats-item">
                      <i className="fa fa-file-video-o fa-5x" />
                      <h2><span className="counter">6969</span><span>+</span></h2>
                      <p>Videos</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="clients">
          <div className="content-box">
            <div className="content-title wow fadeInDown">
              <h3>Clients</h3>
              <div className="content-title-underline" />
            </div>
            <div className="container">
              <div className="row wow fadeInUp">
                <div className="col-md-12">
                  <div id="clients-list" className=" owl-carousel owl-theme">
                    <div className="client">
                      <img src="img/client/logos/logo-1.jpg" className="img-responsive" />
                    </div>
                    <div className="client">
                      <img src="img/client/logos/logo-2.jpg" className="img-responsive" />
                    </div>
                    <div className="client">
                      <img src="img/client/logos/logo-3.jpg" className="img-responsive" />
                    </div>
                    <div className="client">
                      <img src="img/client/logos/logo-4.jpg" className="img-responsive" />
                    </div>
                    <div className="client">
                      <img src="img/client/logos/logo-5.jpg" className="img-responsive" />
                    </div>
                    <div className="client">
                      <img src="img/client/logos/logo-6.jpg" className="img-responsive" />
                    </div>
                    <div className="client">
                      <img src="img/client/logos/logo-7.jpg" className="img-responsive" />
                    </div>
                    <div className="client">
                      <img src="img/client/logos/logo-8.jpg" className="img-responsive" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <footer>
          <div id="contact">
            <div className="container">
              <div className="row wow fadeInUp">
                <div className="col-md-6">
                  <div id="contact-left">
                    <h3>HUNGNH</h3>
                    <p>Lorem ipsum <strong>dolor sit</strong> amet consectetur adipisicing <strong>dolor</strong> molestias accusantium necessitatibus sequi<strong> sit</strong> voluptatibus!</p>
                    <div id="contact-info">
                      <address>
                        <strong>Headquaters</strong><br />
                        <p>2021 Hollywood, Los Angeles, <br /> United State of America</p><br />
                      </address>
                      <div id="phone-fax-email">
                        <p>
                          <strong>Phone:</strong> <span>(98)123 9872</span><br />
                          <strong>Fax:</strong> <span>(98)123 987 213</span><br />
                          <strong>Email:</strong> <span>hung1201@gmail.com</span><br />
                        </p>
                      </div>
                    </div>
                    <ul className="social-list">
                      <li><a href="#" className="social-icon icon-white"><i className="fa fa-facebook" /></a></li>
                      <li><a href="#" className="social-icon icon-white"><i className="fa fa-twitter" /></a></li>
                      <li><a href="#" className="social-icon icon-white"><i className="fa fa-instagram" /></a></li>
                      <li><a href="#" className="social-icon icon-white"><i className="fa fa-youtube" /></a></li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-6">
                  <div id="contact-right">
                    <h3>Contact Us</h3>
                    <form action="#">
                      <input type="text" name="name" placeholder="Full name" className="form-control" />
                      <input type="text" name="email" placeholder="Email address" className="form-control" />
                      <textarea rows={5} type="text" name="message" placeholder="Message..." className="form-control" defaultValue={""} />
                      <div id="send-btn">
                        <a href="#" className="btn btn-lg btn-general btn-white" role="button">SEND</a>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="footer-bottom">
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <div id="copy-rights">
                    <p>Copyright © 2021 All rights reserved</p>
                  </div>
                </div>
                <div className="col-md-6 hidden-sm hidden-xs">
                  <div id="footer-menu">
                    <ul>
                      <li><a href="#home">Home</a></li>
                      <li><a href="#services">Services</a></li>
                      <li><a href="#work">Work</a></li>
                      <li><a href="#team">Team</a></li>
                      <li><a href="#reviews">Reviews</a></li>
                      <li><a href="#pricing">Pricing</a></li>
                      <li><a href="#stats">Stats</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <a href="#home" id="back-to-top" className="btn btn-sm btn-blue btn-back-to-top">
            <i className="fa fa-angle-up" />
          </a>
        </footer> 
    </>
  )
}

export default App
