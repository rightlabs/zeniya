import React from "react";
import { Parallax } from "react-parallax";

export default function Responsibility() {
  return (
    <>
      <div className="glax_tm_section">
        <div className="glax_tm_main_responsibility_wrap">
          <Parallax bgImage="img/slider/8.jpg" strength={300}>
            <div className="glax_tm_universal_parallax_wrap">
              <div className="main_content responsibility">
                <div className="container">
                  <div className="content_inner_wrap">
                    <div className="glax_tm_experience_box">
                      <div className="top">
                        <p>
                          Our <br /> <span>Uniqueness</span>
                        </p>
                      </div>
                      <div className="bottom">
                        <div className="number">
                          <span>20</span>
                        </div>
                        <div className="definition">
                          <p>Years of experience</p>
                        </div>
                      </div>
                    </div>
                    <div className="experience_list">
                      <ul>
                        <li>
                          <span>Wide experience for executing HV works</span>
                        </li>
                        <li>
                          <span>No Outsourcing</span>
                        </li>
                        <li>
                          <span>
                            in-house team for specialized testing &
                            commissioning
                          </span>
                        </li>
                        <li>
                          <span>Strong PPC</span>
                        </li>
                        <li>
                          <span>
                            Unparalleled Reliability and Dependability.
                          </span>
                        </li>
                        <li>
                          <span>
                            Cutting-edge Technology, Empowering Solutions.
                          </span>
                        </li>
                        <li>
                          <span>
                            Driving Efficiency and Excellence in Electrical
                            Solutions.
                          </span>
                        </li>
                        {/* <li>
                          <span>Responsive and Respectful</span>
                        </li>
                        <li>
                          <span>Personalised solutions</span>
                        </li>
                        <li>
                          <span>Functional Objectives</span>
                        </li>
                        <li>
                          <span>Integrated Design</span>
                        </li>
                        <li>
                          <span>Urban Context</span>
                        </li>
                        <li>
                          <span>Critical thinking</span>
                        </li>
                        <li>
                          <span>Problem solving</span>
                        </li> */}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Parallax>
        </div>
      </div>
    </>
  );
}
