import Link from "next/link";
import React from "react";
import Layout from "../src/layout/layout";

export default function Service() {
  return (
    <Layout style={"light"}>
      {/* SERVICES*/}
      <div className="glax_tm_section">
        <div className="glax_tm_main_title_holder">
          <div className="container">
            <div className="title_holder">
              <h3>Disclaimer</h3>
            </div>
            <div className="builify_tm_breadcrumbs">
              <ul>
                <li>
                  <Link href="/">
                    <a>NSC Home</a>
                  </Link>
                </li>
                <li className="shape">
                  <span />
                </li>
                <li>
                  <span>Disclaimer</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="glax_tm_section">
        <div className="container">
          <div className="glax_tm_services_wrap">
            <div className="glax_tm_twicebox_wrap">
              <div className="leftbox">
                <div className="glax_tm_service_title_holder">
                  {/* <h3>What we offer</h3> */}
                  <p>
                    The information provided on this website is for general
                    informational purposes only. Naveen Sales Corporation ("the
                    Company") makes no representations or warranties of any
                    kind, express or implied, about the completeness, accuracy,
                    reliability, suitability, or availability of the
                    information, products, services, or related graphics
                    contained on the website for any purpose. Any reliance you
                    place on such information is strictly at your own risk. In
                    no event will the Company be liable for any loss or damage,
                    including without limitation, indirect or consequential loss
                    or damage, or any loss or damage whatsoever arising from
                    loss of data or profits arising out of, or in connection
                    with, the use of this website. Through this website, you may
                    be able to link to other websites that are not under the
                    control of the Company. The inclusion of any links does not
                    necessarily imply a recommendation or endorsement of the
                    views expressed within them.
                    <br />
                    <br />
                    Every effort is made to keep the website up and running
                    smoothly. However, the Company takes no responsibility for,
                    and will not be liable for, the website being temporarily
                    unavailable due to technical issues beyond our control. The
                    content and materials on this website are subject to change
                    without notice. The Company does not guarantee that the
                    information provided on the website is up to date. All
                    trademarks, logos, and images used on this website are the
                    property of their respective owners and are used for
                    identification purposes only. By using this website, you
                    agree to comply with and be bound by the above disclaimer.
                    If you disagree with any part of this disclaimer, please
                    refrain from using our website. For any further information
                    or clarification, please contact us at &nbsp;
                    <b>naveen.sales1@gmail.com</b>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
