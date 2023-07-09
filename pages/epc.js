import Link from "next/link";
import React, { useState } from "react";
import Layout from "../src/layout/layout";

export default function ServiceSingle() {
  const products = [
    "132KV, 33KV 11KV & Sub-Stations",
    "Cable Laying In Trench Or In Ground",
    "Cable Jointing And Termination",
    "Insulations Testing of Electrical Equipments",
    "Switch Boards & Switch Gears",
    "Earthing & Earth Grids",
    "Electrical Design & Testing",
    "Industries Installation",
    "Industrial Wiring",
    "Lighting & Power",
    "Temporary Site Establishment",
    "Capacitor Banks",
    "Electrical Instruments",
    "PLC & SCADA Wiring",
    "Data Cabling",
    "Solar Project",
    "DG Stack",
  ];

  const quality = [
    {
      1: "Excellence",
      2: "Commitment to delivering EPC solutions that meet high standards.",
    },

    {
      1: "Stringent Control",
      2: "Maintaining rigorous quality control measures throughout the project lifecycle.",
    },

    {
      1: "Continuous Improvement",
      2: "Regularly enhancing project execution processes and methodologies.",
    },

    {
      1: "Compliance",
      2: "Adherence to industry standards and regulatory requirements.",
    },

    {
      1: "Customer Satisfaction",
      2: "Prioritizing customer needs and exceeding expectations in project delivery.",
    },
  ];

  return (
    <Layout style="light">
      {/* SERVICE SINGLE */}
      <div className="glax_tm_section">
        <div className="glax_tm_main_title_holder">
          <div className="container">
            <div className="title_holder">
              <h3>EPC Division</h3>
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
                  <Link href="/epc">
                    <a>EPC Division</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="glax_tm_section">
        <div className="container">
          <div className="glax_tm_service_single_wrap">
            <div className="glax_tm_twicebox_wrap">
              <div className="leftbox">
                {/* Main Content Para's */}
                <div className="main_image_wrap">
                  <div className="image_wrap">
                    <img
                      src="https://res.cloudinary.com/dypttf0yz/image/upload/v1688908617/Zeniya/epc/cable-and-cable-bridge-at-rajratan-wire-indor-site_bjkock.jpg"
                      alt=""
                    />
                  </div>
                  <div className="image_definition">
                    <p>
                      <span className="shape">
                        <span>T</span>
                      </span>
                      apping into the core needs of industries, Zeniya
                      Electech's EPC division is committed to transforming
                      businesses through comprehensive Engineering, Procurement,
                      and Construction (EPC) solutions. With a dedicated team of
                      seasoned professionals, advanced technology, and adherence
                      to industry best practices, we deliver turnkey projects of
                      the highest quality. From power and infrastructure to
                      renewable energy, we undertake projects of diverse scales
                      and complexities, ensuring seamless execution and on-time
                      delivery. Tailoring our solutions to meet the unique
                      requirements of each client, we optimize efficiency,
                      minimize costs, and exceed expectations. Trust Zeniya's
                      EPC division to lead your project from concept to
                      completion, empowering you to thrive in today's dynamic
                      business landscape.
                    </p>
                    <p>
                      At Zeniya Electech, we take pride in our unwavering
                      commitment to excellence in EPC project execution. Our
                      seasoned professionals bring forth their expertise,
                      experience, and creativity to deliver outstanding results.
                      We meticulously plan and manage every aspect of the
                      project, from initial design and engineering to
                      procurement and construction, ensuring seamless
                      coordination and efficient resource allocation. With our
                      state-of-the-art technology and industry-leading
                      practices, we stay ahead of the curve and deliver projects
                      that are not only structurally sound but also aligned with
                      environmental sustainability goals. Partner with Zeniya's
                      EPC division and experience the transformative power of
                      our comprehensive solutions in driving the success of your
                      projects.
                    </p>
                    <p>
                      We undertake turnkey Electrical contracts involving
                      supply, installation, testing and commissioning of
                      electrical panel, cable, cable tray, singal & control
                      cable, junction box, cable gland, earthing work, lighting
                      work, calibration of all types of process control panel.
                    </p>
                  </div>
                </div>

                {/* Products Range */}
                <div className="service_features">
                  <h3>Our Turnkey Services</h3>
                  <ul>
                    {products?.map((product, i) => (
                      <li>
                        <div className="inner">
                          <div className="definition">
                            <p>{product}</p>
                          </div>
                          <div className="icon">
                            <img
                              className="svg"
                              src="img/svg/check.svg"
                              alt=""
                            />
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Projects CTA */}
                <div className="glax_tm_short_contact">
                  <div className="text">
                    <h3> Transforming Industries with Zeniya EPC Solutions</h3>
                    {/* <p></p> */}
                  </div>
                  <div className="glax_tm_button_wrap">
                    <Link href="/1">
                      <a>See Completed Projects</a>
                    </Link>
                  </div>
                </div>

                <div className="glax_tm_line" />

                {/* Quality Assurance */}
                <div className="glax_tm_other_services_wrap">
                  <h3>Quality Assurance Policy</h3>

                  <div className="service_features">
                    <ul>
                      {quality?.map((point, i) => (
                        <li>
                          <div className="inner">
                            <div className="definition">
                              <h4 style={{ fontSize: "18px" }}>{point[1]}</h4>
                              <p>{point[2]}</p>
                            </div>
                            <div className="icon">
                              <img
                                className="svg"
                                src="img/svg/check.svg"
                                alt=""
                              />
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="rightbox">
                {/* Key Divisions */}
                <div className="glax_tm_categories">
                  <div className="title_holder_wrap">
                    <h3>Key Divisions</h3>
                  </div>
                  <div className="list_wrap">
                    <ul>
                      <li>
                        <Link href="/panel">
                          <a>Panel Manufacturing Division</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/epc">
                          <a>EPC Division</a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Contact CTA */}
                <div className="glax_tm_request_estimate_wrap">
                  <div className="image_wrap">
                    <img src="img/services/300x460.jpg" alt="" />
                    <div className="image" />
                  </div>
                  <div className="definition">
                    <div className="text">
                      <p>
                        Lets get started! Elevate Your Operations with Zeniya
                        Panel Manufacturing
                      </p>
                    </div>
                    <div className="button">
                      <Link href="/contact">
                        <a>Contact Us</a>
                      </Link>
                    </div>
                    <div className="first_shape">
                      <span className="first" />
                      <span className="second" />
                      <span className="third" />
                    </div>
                    <div className="second_shape">
                      <span className="first" />
                      <span className="second" />
                      <span className="third" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
