import Link from "next/link";
import React from "react";
import Layout from "../src/layout/layout";

export default function Service() {
  return (
    <Layout style={"light"}>
      <div className="glax_tm_section">
        <div className="glax_tm_main_title_holder">
          <div className="container">
            <div className="title_holder">
              <h3>Privacy Policy</h3>
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
                  <span>Privacy Policy</span>
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
                    At Naveen Sales Corporation ("the Company"), we are
                    committed to protecting the privacy and confidentiality of
                    the personal information you provide to us. This Privacy
                    Policy outlines how we collect, use, disclose, and safeguard
                    your personal information when you visit our website or
                    engage with our services.
                    <ul>
                      <li>
                        Information Collection: We may collect personal
                        information such as your name, contact details, email
                        address, and other relevant information when you
                        voluntarily provide it to us through forms or inquiries
                        on our website.
                      </li>
                      <li>
                        Use of Information: We may use the collected information
                        to respond to your inquiries, provide the requested
                        services, improve our website and services, personalize
                        your experience, and communicate with you about relevant
                        updates and promotions.
                      </li>
                      <li>
                        Information Sharing: We do not sell, trade, or transfer
                        your personal information to third parties without your
                        consent, except for trusted third parties who assist us
                        in operating our website or conducting our business, as
                        long as they agree to keep your information
                        confidential.
                      </li>
                      <li>
                        Data Security: We employ industry-standard security
                        measures to protect your personal information from
                        unauthorized access, misuse, disclosure, or alteration.
                        However, no data transmission over the internet or
                        electronic storage system is entirely secure, and we
                        cannot guarantee absolute security.
                      </li>
                      <li>
                        Cookies and Tracking Technologies: Our website may use
                        cookies and similar tracking technologies to enhance
                        your browsing experience, analyze website traffic, and
                        customize content. You can adjust your browser settings
                        to refuse cookies or indicate when a cookie is being
                        sent.
                      </li>
                      <li>
                        External Links: Our website may contain links to
                        external websites that are not operated by us. We are
                        not responsible for the content, privacy practices, or
                        policies of such third-party websites. We encourage you
                        to review the privacy policies of those websites before
                        providing any personal information.
                      </li>
                      <li>
                        Changes to the Privacy Policy: We reserve the right to
                        update or modify this Privacy Policy at any time without
                        prior notice. Any changes will be effective immediately
                        upon posting on our website. It is your responsibility
                        to review this Privacy Policy periodically for any
                        updates.
                      </li>
                    </ul>
                    <br />
                    <br />
                    <p>
                      By using our website and providing us with your personal
                      information, you consent to the collection, use, and
                      disclosure of your information as described in this
                      Privacy Policy. If you have any questions or concerns
                      about our Privacy Policy or the handling of your personal
                      information, please contact us at{" "}
                      <b>naveen.sales1@gmail.com</b>
                    </p>
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
