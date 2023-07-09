import React from "react";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";

export default function Portfolio({ data }) {
  const [isActive, setActive] = useState(false);
  const activeTrueFalse = () => setActive(!isActive);

  const [Tab, setTab] = useState(0);
  const TabActive = (index) => {
    setTab(index);
  };

  return (
    <>
      {/* PROJECTS */}
      <div className="glax_tm_section">
        <div className="glax_tm_main_title_holder">
          <div className="container">
            <div className="title_holder">
              <h3>{data?.title}</h3>
              <h4 className="allProjects">Completed Projects</h4>
            </div>
            <div className="builify_tm_breadcrumbs">
              <ul>
                <li>
                  <Link href="/">
                    <a>Zeniya Electech</a>
                  </Link>
                </li>
                <li className="shape">
                  <span />
                </li>
                <li>
                  <span>Completed Projects</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="glax_tm_section">
        <div className="container">
          <div className="glax_tm_projects_wrap">
            {/* <div className="filter_wrap">
              <div onClick={activeTrueFalse} className="all_projects">
                <span>
                  <Link href="#">
                    <a>All Projects</a>
                  </Link>
                </span>
              </div>
              <div className={isActive ? "filter_list opened" : "filter_list"}>
                <ul
                  onClick={activeTrueFalse}
                  className="glax_tm_portfolio_filter"
                >
                  <li onClick={() => TabActive(0)}>
                    <div>
                      <a className="current" data-filter="*">
                        All
                      </a>
                    </div>
                  </li>
                  {data.projects.map((project, i) => {
                    return (
                      <li onClick={() => TabActive(i + 1)}>
                        <div>
                          <a className="current" data-filter="*">
                            {project.name}
                          </a>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div> */}

            {/* ! Projects */}
            <div className="glax_tm_portfolio_list gallery_zoom">
              {data?.projects?.map((project, i) => {
                return (
                  <div
                    style={
                      Tab == i + 1 || Tab == 0
                        ? { opacity: "block" }
                        : { display: "none" }
                    }
                    className="filter-item architecture"
                  >
                    <div className="inner">
                      <div className="image_wrap">
                        <img src="img/portfolio/750x500.jpg" alt="" />
                        <div
                          className="image"
                          style={{
                            backgroundImage: `url(${project.img})`,
                          }}
                        />
                        <div className="overlay_color" />
                        <span className="plus" />
                        <div className="title_holder">
                          <h3>{project.name}</h3>
                          <div className="glax_tm_view_more_wrap">
                            <div>
                              <a>
                                <span className="text">{project.desp}</span>
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
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      {/* <div className="glax_tm_section">
        <div className="container">
          <div className="glax_tm_pagination">
            <ul>
              <li>
                <span>Prev</span>
              </li>
              <li className="active">
                <Link href="#">
                  <a>Next</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div> */}
      {/* /PROJECTS */}
    </>
  );
}
