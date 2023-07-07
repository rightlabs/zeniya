import React from "react";
import Link from "next/link";

export default function HomeService() {
  return (
    <>
      <div className="glax_tm_section">
        <div className="container">
          <h2 className="service__heading">Key Divisions</h2>
          <div className="glax_tm_home_service_list">
            <ul className="glax_tm_miniboxes">
              <li>
                <div className="inner_list glax_tm_minibox">
                  <div className="icon_wrap">
                    <img
                      className="svg"
                      src="img/svg/service-flasks.svg"
                      alt=""
                    />
                  </div>
                  <div className="title_holder">
                    <h3>Panel Manufacturing Division</h3>
                  </div>
                  <div className="description">
                    <p>
                      Our Panel Manufacturing division specializes in producing
                      high-quality electrical panels for various applications,
                      ensuring reliable power distribution, control, and
                      automation solutions that enhance operational efficiency
                      and safety.
                    </p>
                  </div>
                  <div className="glax_tm_button_more_wrap">
                    <a href="#">
                      More Details
                      <span className="arrow_wrap">
                        <span className="first">
                          <img
                            className="svg"
                            src="img/svg/arrow-right.svg"
                            alt=""
                          />
                        </span>
                        <span className="second">
                          <img
                            className="svg"
                            src="img/svg/arrow-right.svg"
                            alt=""
                          />
                        </span>
                      </span>
                    </a>
                  </div>
                  <Link href="/service-single">
                    <a className="service_link" />
                  </Link>
                </div>
              </li>
              <li className="secondItem">
                <div className="inner_list glax_tm_minibox">
                  <div className="icon_wrap">
                    <img
                      className="svg"
                      src="img/svg/service-tower.svg"
                      alt=""
                    />
                  </div>
                  <div className="title_holder">
                    <h3>EPC Division</h3>
                  </div>
                  <div className="description">
                    <p>
                      Our EPC division offers end-to-end engineering,
                      procurement, and construction solutions, providing
                      seamless project execution and delivering turnkey
                      solutions for industries such as power, infrastructure,
                      and renewable energy.
                    </p>
                  </div>
                  <div className="glax_tm_button_more_wrap">
                    <a href="#">
                      More Details
                      <span className="arrow_wrap">
                        <span className="first">
                          <img
                            className="svg"
                            src="img/svg/arrow-right.svg"
                            alt=""
                          />
                        </span>
                        <span className="second">
                          <img
                            className="svg"
                            src="img/svg/arrow-right.svg"
                            alt=""
                          />
                        </span>
                      </span>
                    </a>
                  </div>
                  <Link href="/service-single">
                    <a className="service_link" />
                  </Link>
                </div>
              </li>
              {/* <li>
                <div className="inner_list glax_tm_minibox">
                  <div className="icon_wrap">
                    <img
                      className="svg"
                      src="img/svg/service-transformer.svg"
                      alt=""
                    />
                  </div>
                  <div className="title_holder">
                    <h3>Energy and Commodities Industry</h3>
                  </div>
                  <div className="description">
                    <p>
                      Under a Construction Management contract, the client
                      secures the services of a construction manager to work
                      with the design...
                    </p>
                  </div>
                  <div className="glax_tm_button_more_wrap">
                    <a href="#">
                      More Details
                      <span className="arrow_wrap">
                        <span className="first">
                          <img
                            className="svg"
                            src="img/svg/arrow-right.svg"
                            alt=""
                          />
                        </span>
                        <span className="second">
                          <img
                            className="svg"
                            src="img/svg/arrow-right.svg"
                            alt=""
                          />
                        </span>
                      </span>
                    </a>
                  </div>
                  <Link href="/service-single">
                    <a className="service_link" />
                  </Link>
                </div>
              </li> */}
              {/* <li>
                                <div className="inner_list glax_tm_minibox">
                                    <div className="icon_wrap">
                                        <img className="svg" src="img/svg/service-oil.svg" alt="" />
                                    </div>
                                    <div className="title_holder">
                                        <h3>The Shale Oil &amp; Gas Revolution</h3>
                                    </div>
                                    <div className="description">
                                        <p>In this section, we let clients select a design-build arrangement when they want to work with one contract entity...</p>
                                    </div>
                                    <div className="glax_tm_button_more_wrap">
                                        <a href="#">
                                            More Details
                                            <span className="arrow_wrap">
                                                <span className="first"><img className="svg" src="img/svg/arrow-right.svg" alt="" /></span>
                                                <span className="second"><img className="svg" src="img/svg/arrow-right.svg" alt="" /></span>
                                            </span>
                                        </a>
                                    </div>
                                    <Link  href="/service-single"><a className="service_link" /></Link>
                                </div>
                            </li> */}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
