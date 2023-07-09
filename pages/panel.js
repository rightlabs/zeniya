import Link from "next/link";
import React, { useState } from "react";
import Layout from "../src/layout/layout";

export default function ServiceSingle() {
  const [Accordion, setAccordion] = useState(1);
  const AccordionToggle = (index) => {
    setAccordion(index);
  };

  const products = [
    "H.T. Panel 11 K.V. & 33 K.V.",
    "Control & Relay Panel",
    "Power Control Center",
    "Motor Control Center",
    "APFC Panel",
    "Bus Duct",
    "D.G. Synchronization Panel",
    "VFD & PLC Panels",
    "Load Break Switch",
    "Compact Substation",
    "Power & Lighting Distribution Boards",
    "Feeder Pillar Panel",
    "Meter Board Panel",
    "Bus Trunking & Rising Main",
    "Starter Panel",
    "Marshalling Kiosks",
    "Drawout Panel",
  ];

  const facilities = [
    {
      name: "State-of-the-art manufacturing facility",
      desc: "50000 sq.ft area with advanced infrastructure and modern equipment.",
      tag: "Panel Manufacturing Division",
    },
    {
      name: "CNC Turret Punch Press",
      desc: "High-precision punching machine for accurate fabrication and production.",
      tag: "Panel Manufacturing Division",
    },
    {
      name: "CNC Shearing Machine",
      desc: "Two sets of CNC shearing machines for precise and efficient sheet metal cutting.",
      tag: "Panel Manufacturing Division",
    },
    {
      name: "CNC Bending Machine",
      desc: "Two sets of CNC bending machines for precise sheet metal bending.",
      tag: "Panel Manufacturing Division",
    },
    {
      name: "Hydraulic Bus Bar Shearing & Bending Machine",
      desc: "Specialized machine for efficient cutting and bending of bus bars.",
      tag: "Panel Manufacturing Division",
    },
    {
      name: "Hydraulic Punching Machine",
      desc: "Powerful hydraulic punching machine for precise hole punching in panels.",
      tag: "Panel Manufacturing Division",
    },
    {
      name: "Hydraulic Knurling Machine",
      desc: "Machine for creating knurled patterns on panels for improved grip.",
      tag: "Panel Manufacturing Division",
    },
    {
      name: "9 Tank Pre Treatment System",
      desc: "Advanced pre-treatment system for surface preparation before coating.",
      tag: "Panel Manufacturing Division",
    },
    {
      name: "Conveyerized Powder Coating System",
      desc: "Efficient powder coating system with a conveyerized process for uniform and durable finishes.",
      tag: "Panel Manufacturing Division",
    },
    {
      name: "Battery Operated Controlled Tightening Tools",
      desc: "Precise and controlled tightening tools powered by batteries for secure and accurate fastening.",
      tag: "Panel Manufacturing Division",
    },
    {
      name: "DG Set 62.5 KVA & UPS 5.6 KVA",
      desc: "Power backup systems to ensure uninterrupted operation during power outages.",
      tag: "Panel Manufacturing Division",
    },
    {
      name: "MIG Welding Machines",
      desc: "MIG welding machines for efficient and high-quality metal welding.",
      tag: "Panel Manufacturing Division",
    },
    {
      name: "Hacksaw Cutter",
      desc: "Hand-operated hacksaw cutter for precise cutting of metal and other materials.",
      tag: "Panel Manufacturing Division",
    },
    {
      name: "Hand Drills",
      desc: "Handheld drills for drilling holes in panels and other materials.",
      tag: "Panel Manufacturing Division",
    },
    {
      name: "Jigsaw Machines",
      desc: "Electric jigsaw machines for precise and intricate cutting in various materials.",
      tag: "Panel Manufacturing Division",
    },
    {
      name: "Powder Drill Machines",
      desc: "Powerful drill machines for efficient drilling operations in panels and other materials.",
      tag: "Panel Manufacturing Division",
    },
    {
      name: "Busbar Sleeve Shrink Machine",
      desc: "Specialized machine for applying heat-shrink sleeves on busbars for insulation and protection.",
      tag: "Panel Manufacturing Division",
    },
  ];

  const testing = [
    {
      id: 1,
      name: "Primary Current Injection Kit 5000 Amp",
      desc: "High-capacity current injection kit for primary testing of electrical systems.",
    },
    {
      id: 2,
      name: "Secondary Current Injection Kit",
      desc: "Secondary current injection kit for precise testing and calibration of electrical equipment.",
    },
    {
      id: 3,
      name: "Contact Make Break Test Bench",
      desc: "Bench for testing the performance and reliability of contact make-break mechanisms.",
    },
    {
      id: 4,
      name: "DC/AC Variable Voltage Bench",
      desc: "Bench with variable voltage output for testing electrical devices and systems.",
    },
    {
      id: 5,
      name: "5KV/10KV/80KV H.V. Tester",
      desc: "High-voltage tester with multiple voltage options for testing insulation strength.",
    },
    {
      id: 6,
      name: "Digital Paint Coat Gauge Elcometer",
      desc: "Digital gauge for measuring the thickness of paint coatings on surfaces.",
    },
    {
      id: 7,
      name: "Polarity Tester",
      desc: "Tester for checking the correct polarity of electrical connections.",
    },
    {
      id: 8,
      name: "Milli Volt Test Drop Meter",
      desc: "Meter for measuring voltage drop in electrical circuits at millivolt levels.",
    },
    {
      id: 9,
      name: "Relay O/L Testing & Calibration Bench",
      desc: "Bench for testing and calibrating relays for overcurrent protection.",
    },
    {
      id: 10,
      name: "Salt Spray Test Kit",
      desc: "Kit for conducting salt spray tests to assess corrosion resistance of materials.",
    },
    {
      id: 11,
      name: "Digital Conductivity Meter for Aluminium / Copper Busbar",
      desc: "Meter for measuring the conductivity of aluminium and copper busbars.",
    },
    {
      id: 12,
      name: "Mechanical Endurance Test Bench",
      desc: "Bench for subjecting electrical components to mechanical stress and endurance testing.",
    },
    {
      id: 13,
      name: "Chemical Lab for Measurement of Concentration",
      desc: "Lab for accurately measuring the concentration of chemicals used in the 9 tank sheet treatment process.",
    },
  ];

  const quality = [
    {
      1: "Excellence",
      2: "Commitment to delivering panels that meet high standards.",
    },

    {
      1: "Stringent Control",
      2: "Maintaining rigorous quality control measures.",
    },

    {
      1: "Continuous Improvement",
      2: "Regularly enhancing manufacturing processes.",
    },

    {
      1: "Compliance",
      2: "Compliance: Adherence to industry standards and regulations.",
    },

    {
      1: "Customer Satisfaction",
      2: "Prioritizing customer needs and providing support.",
    },
  ];

  const onButtonClick = (pdf) => {
    // using Java Script method to get PDF file

    fetch(`${pdf}`).then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = `${pdf}`;
        alink.click();
      });
    });
  };

  return (
    <Layout style="light">
      {/* SERVICE SINGLE */}
      <div className="glax_tm_section">
        <div className="glax_tm_main_title_holder">
          <div className="container">
            <div className="title_holder">
              <h3>Panel Manufacturing Division</h3>
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
                  <Link href="/panel">
                    <a>Panel Manufacturing Division</a>
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
                      src="https://res.cloudinary.com/dypttf0yz/image/upload/v1688908490/Zeniya/panel/Main-LT-PAnel-Sunbeam-Auto-Ltd-Gujarat_uzxkwx.jpg"
                      alt=""
                    />
                  </div>
                  <div className="image_definition">
                    <p>
                      <span className="shape">
                        <span>T</span>
                      </span>
                      apping into the pulse of industry needs, Zeniya Electech
                      takes pride in offering exceptional panel manufacturing
                      services. With our cutting-edge technology and unwavering
                      commitment to quality, we revolutionize power
                      distribution, control, and automation solutions. From
                      inception to execution, our panels are meticulously
                      designed and produced to deliver reliable, efficient, and
                      seamless integration into various industries. We
                      understand that each sector has unique requirements, which
                      is why our panels are tailored to meet your specific
                      needs, empowering you to optimize operations and maximize
                      productivity. Trust Zeniya for industry-leading panels
                      that lay the foundation for your success.
                    </p>
                    <p>
                      At Zeniya Electech, we believe in the power of
                      transformation. Our panel manufacturing services elevate
                      your operations to new heights of efficiency and
                      excellence. With unparalleled expertise and
                      state-of-the-art facilities, we ensure that each panel is
                      crafted with precision and reliability in mind. By
                      choosing Zeniya, you gain access to robust solutions that
                      enhance power management, streamline processes, and
                      improve safety across your industry. Let us be your
                      trusted partner in panel manufacturing, empowering you to
                      unlock your true potential and stay ahead in today's
                      competitive landscape. Experience the transformative
                      impact of Zeniya panel manufacturing and witness the
                      difference it can make for your business.
                    </p>
                    <p>
                      ZEPL is a leading manufacturer & supplier of LT/HT
                      Electrical Panels in India. Various industries now require
                      efficient and custom-made power solutions to manage their
                      energy requirement. These power solutions require
                      high-quality switchboards and panels to efficiently manage
                      any fluctuation in electricity. ZEPL has managed to
                      deliver quality and reliability through its advanced
                      energy solutions services under the able leadership of Mr.
                      Yogesh Jain, the Director & CEO of ZEPL.
                    </p>
                  </div>
                </div>

                {/* Products Range */}
                <div className="service_features">
                  <h3>Products Range</h3>
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
                    <h3>
                      {" "}
                      Transforming Industries with Zeniya Panel Manufacturing
                      Services
                    </h3>
                    {/* <p></p> */}
                  </div>
                  <div className="glax_tm_button_wrap">
                    <Link href="/0">
                      <a>See Completed Projects</a>
                    </Link>
                  </div>
                </div>

                {/* Line */}
                <div className="glax_tm_line" />

                {/* Manufacturing Facilities */}
                <div className="glax_tm_other_services_wrap">
                  <h3>Manufacturing Facilities</h3>
                  <h4 style={{ fontSize: "20px", margin: "-10px 0 20px 0" }}>
                    In-house team for specialized testing & commissioning
                  </h4>
                  <p style={{ fontSize: "15px", marginBottom: "20px" }}>
                    We Have state of the art machineries, modernized assembly
                    layout, complete inhouse – Fabrication, Powder Coating,
                    Testing & inspection Facilities.
                  </p>

                  <div className="service_features">
                    <ul>
                      {facilities?.map((facility, i) => (
                        <li>
                          <div className="inner">
                            <div className="definition">
                              <p>{facility.name}</p>
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

                <div className="glax_tm_line" />

                {/* Testing Facilities */}
                <div className="accordion_wrap_all">
                  <div className="title">
                    <h3>Testing Facilities</h3>
                    <h4 style={{ fontSize: "20px", margin: "-10px 0 20px 0" }}>
                      In-house team for specialized testing & commissioning
                    </h4>
                    <p style={{ fontSize: "15px", marginBottom: "20px" }}>
                      We also have a dedicated team for Testing and
                      Commissioning of all kind of Electrical installations
                      functioning as a separate business vertical.
                    </p>
                  </div>

                  <div className="accordion_wrap">
                    <div className="glax_tm_accordion">
                      {testing.map((facility, i) => (
                        <div
                          className={`accordion_in ${
                            Accordion == facility.id ? "acc_active" : ""
                          }`}
                        >
                          <div
                            onClick={() => AccordionToggle(facility.id)}
                            className="acc_head"
                          >
                            {facility.name}
                            <div className="wow_shape">
                              <span className="wow_effect" />
                            </div>
                          </div>
                          <div
                            className="acc_content"
                            style={
                              Accordion == facility.id
                                ? {}
                                : { display: "none" }
                            }
                          >
                            {facility.desc}
                          </div>
                        </div>
                      ))}
                    </div>
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

                {/* CPRI Test reports */}
                <div className="glax_tm_brochures_wrap">
                  <div className="title_holder">
                    <span>CPRI Test Reports</span>
                  </div>
                  <ul>
                    {/* 1 */}
                    <li onClick={() => onButtonClick("panel/1.pdf")}>
                      <div className="inner">
                        <div className="icon">
                          <img
                            className="svg"
                            src="img/svg/file-pdf.svg"
                            alt=""
                          />
                        </div>
                        <span className="text">
                          Download Degree of Protection IP-54
                        </span>
                        <span className="arrow" />
                      </div>
                    </li>

                    {/* 2 */}
                    <li onClick={() => onButtonClick("panel/2.pdf")}>
                      <div className="inner">
                        <div className="icon">
                          <img
                            className="svg"
                            src="img/svg/file-pdf.svg"
                            alt=""
                          />
                        </div>
                        <span className="text">
                          Download Degree of Protection IP-65
                        </span>
                        <span className="arrow" />
                      </div>
                    </li>

                    {/* 3 */}
                    <li onClick={() => onButtonClick("panel/3.pdf")}>
                      <div className="inner">
                        <div className="icon">
                          <img
                            className="svg"
                            src="img/svg/file-pdf.svg"
                            alt=""
                          />
                        </div>
                        <span className="text">
                          Download Short Circuit Test 50KA
                        </span>
                        <span className="arrow" />
                      </div>
                    </li>

                    {/* 4 */}
                    <li onClick={() => onButtonClick("panel/4.pdf")}>
                      <div className="inner">
                        <div className="icon">
                          <img
                            className="svg"
                            src="img/svg/file-pdf.svg"
                            alt=""
                          />
                        </div>
                        <span className="text">
                          Download Short Circuit Test 70KA
                        </span>
                        <span className="arrow" />
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
