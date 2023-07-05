import React, { useState } from "react";
import VideoPopUp from "../video-pop-up";

export default function HomeIntroduce() {
  const [isShow, setShow] = useState(false);

  return (
    <>
      <div className="glax_tm_section introduce">
        <div className="container">
          <div className="qqq">
            <div className="glax_tm_introduce_wrap">
              <div className="inner_wrap">
                <div className="main_info_wrap">
                  <span className="top_title">Zeniya</span>
                  <h3 className="title">Electech Pvt. Ltd.</h3>
                  <p className="text">
                    We are a renowned company that has been at the forefront of
                    the electrical industry since 2002. With a team of qualified
                    engineers and a focus on innovation, we specialize in
                    manufacturing high-quality Electrical Panels, Turnkey
                    Projects, and Solar Solutions. Our plant setups are designed
                    to be cost-effective and power-efficient, ensuring minimal
                    energy consumption. Committed to excellence and
                    sustainability, we strive to exceed customer expectations
                    and contribute to a greener future.
                  </p>
                </div>
                <div className="experience_box">
                  <div className="top">
                    <p>Innovative Global Industry Leader</p>
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
              </div>
              <div className="play_video">
                <a
                  style={{ cursor: "pointer" }}
                  className="popup-youtube"
                  onClick={setShow}
                />
              </div>
            </div>
            <div className="shape_top">
              <span className="first" />
              <span className="second" />
            </div>
            <div className="shape_bottom">
              <span className="first" />
              <span className="second" />
            </div>
          </div>
          {isShow && (
            <VideoPopUp
              setShow={() => setShow(false)}
              src={"//www.youtube.com/embed/G6zv3wFvpHM?autoplay=1"}
            />
          )}
        </div>
      </div>
    </>
  );
}
