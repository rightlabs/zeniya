import React from "react";
import Link from "next/link";
import { projects } from "../../data/projects";
console.log(projects());

export default function HomeProject({ flag }) {
  return (
    <>
      <div className="glax_tm_section">
        <div className="glax_tm_home_project_wrapper_all">
          <div className="container">
            <div className="glax_tm_twice_box_wrap fn_w_sminiboxes">
              <div className="inner_box">
                <div className="leftbox project fn_w_sminibox">
                  <div className="constructify_fn_sticky_section">
                    <div className="title_holder">
                      <h3>Our Latest Projects</h3>
                    </div>
                    <div className="description projectDesp">
                      {flag == "epc division" ? (
                        <p>EPC Division</p>
                      ) : (
                        <p>Panel Manufacturing Division</p>
                      )}
                    </div>
                    <div className="glax_tm_button_more_wrap">
                      <Link href={flag == "epc division" ? "/1" : "/0"}>
                        <a>
                          View All Projects
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
                      </Link>
                    </div>
                  </div>
                </div>

                {/* EPC Division Projects */}
                {flag == "epc division" ? (
                  <div className="rightbox fn_w_sminibox">
                    <div className="constructify_fn_sticky_section">
                      <ul>
                        {/* Projects */}
                        {projects()[1].projects.map((project, i) => {
                          if (i < 3)
                            return (
                              <li>
                                <div className="inner">
                                  <div className="image_wrap">
                                    <img
                                      src="img/portfolio/750x500.jpg"
                                      alt=""
                                    />
                                    <div
                                      className="image"
                                      style={{
                                        backgroundImage: `url(${project.img})`,
                                      }}
                                    />
                                    <div className="overlay_color" />
                                    <span className="plus" />
                                    <div className="title_holder">
                                      <h3>{project?.name}</h3>
                                      <div className="glax_tm_view_more_wrap">
                                        <div>
                                          <a>
                                            <span className="text">
                                              {project?.desp}
                                            </span>
                                            <span className="arrow">
                                              <img
                                                className="svg"
                                                src="img/svg/arrow-right.svg"
                                                alt=""
                                              />
                                            </span>
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            );
                        })}
                      </ul>
                    </div>
                  </div>
                ) : (
                  //  Panel Manufacturing Division Projects
                  <div className="rightbox fn_w_sminibox">
                    <div className="constructify_fn_sticky_section">
                      <ul>
                        {/* First Project */}
                        {projects()[0].projects.map((project, i) => {
                          if (i < 3)
                            return (
                              <li>
                                <div className="inner">
                                  <div className="image_wrap">
                                    <img
                                      src="img/portfolio/750x500.jpg"
                                      alt=""
                                    />
                                    <div
                                      className="image"
                                      style={{
                                        backgroundImage: `url(${project.img})`,
                                      }}
                                    />
                                    <div className="overlay_color" />
                                    <span className="plus" />
                                    <div className="title_holder">
                                      <h3>{project?.name}</h3>
                                      <div className="glax_tm_view_more_wrap">
                                        <div>
                                          <a>
                                            <span className="text">
                                              {project?.desp}
                                            </span>
                                            <span className="arrow">
                                              <img
                                                className="svg"
                                                src="img/svg/arrow-right.svg"
                                                alt=""
                                              />
                                            </span>
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            );
                        })}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
