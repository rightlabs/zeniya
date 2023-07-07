import React, { useState } from "react";
import VideoPopUp from "../video-pop-up";
import Image from "next/image";

export default function WhyChooseUs() {
  const [isShow, setShow] = useState(false);
  return (
    <>
      <div className="glax_tm_section">
        <div className="glax_tm_rating_wrap">
          <div className="container">
            <div className="inner">
              <div className="leftbox">
                <div className="title">
                  <h3>
                    Welcome to Zeniya Electech: <br />
                    Empowering Excellence
                  </h3>
                </div>
                <div className="text">
                  <p>
                    At Zeniya Electech, we are passionate about delivering
                    cutting-edge electrical solutions that empower businesses to
                    thrive. With our deep expertise and commitment to
                    innovation, we provide industry-leading products and
                    services that drive efficiency, reliability, and success.
                    Join us on this electrifying journey and experience the
                    power of Zeniya Electech.
                  </p>
                </div>
                <div className="glax_tm_project_video">
                  <span>
                    <img className="svg" src="img/svg/play.svg" alt="" />
                  </span>
                  <a className="project_time">Our Vision</a>
                  <a
                    style={{ cursor: "pointer" }}
                    onClick={setShow}
                    className="project_video_button popup-youtube"
                  />
                </div>
                {isShow && (
                  <VideoPopUp
                    setShow={() => setShow(false)}
                    src={"//www.youtube.com/embed/4nDHrVsqdog?autoplay=1"}
                  />
                )}
              </div>
              <div className="ratingbox">
                <div className="rating_wrap">
                  <div className="inner_wrap">
                    <div className="star">
                      <img src="img/rating/rate.png" alt="" />
                    </div>
                    <div className="number">
                      <span>9.7</span>
                    </div>
                    <div className="title">
                      <p>Customer Rating</p>
                    </div>
                  </div>
                </div>
                <div className="rating_text">
                  <div className="inner">
                    <span>Full reviews at Trustpilot</span>
                  </div>
                </div>
              </div>
              <div className="rightbox">
                <div className="bg_image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
