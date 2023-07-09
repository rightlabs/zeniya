import React from "react";
import Layout from "../src/layout/layout";
import Link from "next/link";
import CounterUp from "../src/counterUp";

export default function About() {
  return (
    <Layout style={"light"}>
      {/* ABOUT */}
      <div className="glax_tm_section">
        <div className="glax_tm_main_title_holder">
          <div className="container">
            <div className="title_holder">
              <h3>About Us</h3>
            </div>
            <div className="builify_tm_breadcrumbs">
              <ul>
                <li>
                  <Link href="/">
                    <a>Zeniya Electech Home</a>
                  </Link>
                </li>
                <li className="shape">
                  <span />
                </li>
                <li>
                  <span>About Us</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="glax_tm_section">
        <div className="glax_tm_about_wrap">
          <div className="container">
            <div className="subtitle">
              <p>
                Welcome to Zeniya Electech, your partner in powering the future.
                We are a dynamic and innovative company specializing in
                cutting-edge electrical solutions that elevate businesses to new
                heights. With our expertise, advanced technology, and unwavering
                commitment to excellence, we ignite innovation, reliability, and
                efficiency in every project. Join us on this electrifying
                journey and experience the power of Zeniya Electech for all your
                electrical needs.
              </p>
            </div>
            <div className="about_service_list">
              <h3>Ignite Your Electrical Solutions with Zeniya Electech</h3>
              <p>
                With a proven track record of delivering exceptional results,
                Zeniya Electech has established itself as a leader in the
                electrical industry. Our dedicated team of professionals brings
                together a wealth of knowledge and expertise to tackle the most
                complex challenges. Whether it's our state-of-the-art panel
                manufacturing division or our comprehensive EPC solutions, we go
                above and beyond to exceed client expectations. As we continue
                to push the boundaries of innovation and embrace emerging
                technologies, we invite you to be a part of our success story.
                Trust Zeniya Electech for unparalleled quality, reliability, and
                a partnership that powers your vision forward.
              </p>
            </div>
          </div>
          <div className="glax_tm_about_counter_wrap">
            <div className="container">
              <div className="inner_counter">
                <div className="leftbox">
                  <div
                    className="glax_tm_counter_wrap"
                    data-col={4}
                    data-delay={300}
                  >
                    <ul className="glax_tm_counter_list">
                      <li>
                        <div className="inner">
                          <h3>
                            <span>
                              <CounterUp
                                className="glax_tm_counter"
                                count={30}
                                time={5}
                              />
                              +
                            </span>
                          </h3>
                          <span>Projects Completed</span>
                        </div>
                      </li>
                      <li>
                        <div className="inner">
                          <h3>
                            <span>
                              <CounterUp
                                className="glax_tm_counter"
                                count={100}
                                time={5}
                              />
                              K
                            </span>
                          </h3>
                          <span>Company Clients</span>
                        </div>
                      </li>
                      <li>
                        <div className="inner">
                          <h3>
                            <span>
                              <CounterUp
                                className="glax_tm_counter"
                                count={100}
                                time={5}
                              />
                              +
                            </span>
                          </h3>
                          <span>Professional Workers</span>
                        </div>
                      </li>
                      <li>
                        <div className="inner">
                          <h3>
                            <span>
                              <CounterUp
                                className="glax_tm_counter"
                                count={10}
                                time={5}
                              />
                              +
                            </span>
                          </h3>
                          <span>Company Awards</span>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="rightbox">
                  <div className="inner_rightbox">
                    <span className="top_title">You have a reason</span>
                    <h3 className="title">Just Choose Us!</h3>
                    <p className="text">
                      We aim to drive transformation and empower businesses
                      through innovative electrical solutions that propel
                      success. Trust Zeniya Electech to be your catalyst for
                      growth and excellence.
                    </p>
                    <div className="counter_image_wrap gallery_zoom">
                      <ul>
                        <li>
                          <div className="inner">
                            <a className="zoom" href="img/about/11.jpg">
                              <div className="image" />
                            </a>
                            <div className="overlay">
                              <div className="in">
                                <span />
                              </div>
                            </div>
                            <a
                              className="about_zoom zoom"
                              href="/img/about/11.jpg"
                            />
                          </div>
                        </li>
                        <li>
                          <div className="inner">
                            <a className="zoom" href="img/about/12.jpg">
                              <div className="image" />
                            </a>
                            <div className="overlay">
                              <div className="in">
                                <span />
                              </div>
                            </div>
                            <a
                              className="about_zoom zoom"
                              href="img/about/12.jpg"
                            />
                          </div>
                        </li>
                        <li>
                          <div className="inner">
                            <a className="zoom" href="img/about/13.jpg">
                              <div className="image" />
                            </a>
                            <div className="overlay">
                              <div className="in">
                                <span />
                              </div>
                            </div>
                            <a
                              className="about_zoom zoom"
                              href="img/about/13.jpg"
                            />
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="counter_png" />
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="about_service_list client">
              <h3>Our Vision</h3>
              <p>
                Our vision at Zeniya Electech is to become a globally recognized
                leader in the electrical industry. We aim to be at the forefront
                of providing cutting-edge electrical solutions that enable
                businesses to thrive in a connected and technology-driven world.
                By constantly pushing the boundaries of innovation, embracing
                emerging technologies, and delivering exceptional value, we
                strive to be the go-to partner for businesses seeking reliable
                and sustainable electrical solutions. We envision a future where
                Zeniya Electech is synonymous with excellence, innovation, and
                transformative electrical solutions worldwide.
              </p>
            </div>
          </div>
          <div className="container">
            <div className="about_service_list">
              <h3>Our Mission</h3>
              <p>
                At Zeniya Electech, our mission is to deliver exceptional value
                to our clients through innovative, reliable, and sustainable
                electrical solutions. We are dedicated to exceeding customer
                expectations and fostering long-term partnerships based on
                trust, integrity, and mutual success. We aim to contribute to
                the advancement of industries by leveraging our expertise,
                cutting-edge technology, and commitment to excellence. Through
                our unwavering focus on customer satisfaction, continuous
                improvement, and socially responsible practices, we strive to
                make a positive impact on the businesses we serve and the
                communities we operate in.
              </p>
            </div>
          </div>
          <div className="glax_tm_section">
            <div className="container">
              <div className="glax_tm_about_team_wrap">
                <ul>
                  <li>
                    <div className="inner">
                      <div className="image_wrap">
                        <img src="img/about/250x190.jpg" alt />
                        <div className="image" />
                      </div>
                      <div className="main_definitions">
                        <h3>Yogesh Kumar Jain</h3>
                        <span>Managing Director</span>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="inner">
                      <div className="image_wrap">
                        <img src="img/about/250x190.jpg" alt />
                        <div className="image" />
                      </div>
                      <div className="main_definitions">
                        <h3>James Hind</h3>
                        <span>Finance Director</span>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="inner">
                      <div className="image_wrap">
                        <img src="img/about/250x190.jpg" alt />
                        <div className="image" />
                      </div>
                      <div className="main_definitions">
                        <h3>Venu Raju</h3>
                        <span>Engineering Director</span>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="inner">
                      <div className="image_wrap">
                        <img src="img/about/250x190.jpg" alt />
                        <div className="image" />
                      </div>
                      <div className="main_definitions">
                        <h3>Paul Withers</h3>
                        <span>Senior Independent Director</span>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="inner">
                      <div className="image_wrap">
                        <img src="img/about/250x190.jpg" alt />
                        <div className="image" />
                      </div>
                      <div className="main_definitions">
                        <h3>Chris Girling</h3>
                        <span>Independent Director</span>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="inner">
                      <div className="image_wrap">
                        <img src="img/about/250x190.jpg" alt />
                        <div className="image" />
                      </div>
                      <div className="main_definitions">
                        <h3>Mark Hill</h3>
                        <span>Non-executive Chairman</span>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /ABOUT */}
    </Layout>
  );
}
