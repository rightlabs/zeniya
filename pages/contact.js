import React from "react";
import Layout from "../src/layout/layout";
import Link from "next/link";
import ContactForm from "../src/components/contact_form";

export default function Contact() {
  return (
    <Layout style={"light"}>
      {/* CONTACT */}
      <div className="glax_tm_section">
        <div className="glax_tm_main_title_holder">
          <div className="container">
            <div className="title_holder">
              <h3>Contact Us</h3>
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
                  <span>Contact</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="glax_tm_section">
        <div className="container">
          <div className="glax_tm_main_contact_wrap">
            <div className="office_list">
              <ul>
                <li>
                  <div className="inner">
                    <div className="image_wrap">
                      <img src="img/contact/370x220.jpg" alt />
                      <div className="image" />
                    </div>
                    <div className="definitions_wrap">
                      <div className="office">
                        <h3>Bhiwadi Office</h3>
                        <div className="icon">
                          <img className="svg" src="img/svg/location.svg" alt />
                        </div>
                      </div>
                      <div className="short_info_wrap">
                        <div className="row">
                          <p>
                            E-1098, Ajanta Chowk, Phase-III, RIICO Indl. Area,
                            Bhiwadi-301019 (Raj.)
                          </p>
                        </div>
                        <div className="row">
                          <label>Phone:</label>
                          <span> (+91) 7340695058</span>
                        </div>
                        <div className="row">
                          <label>Email:</label>
                          <span>
                            <a href="#"> info@zeniyagroup.com</a>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="contact_text">
              <p>
                Ready to take your electrical solutions to the next level? Reach
                out to Zeniya Electech today and unlock the potential of
                collaboration. Our expert team is eager to understand your
                unique needs and provide tailored solutions that ignite success.
                Let's connect and power up your business together. Glax is a
                privately owned, internationally focussed engineering enterprise
                with world-class capabilities spanning the entire client value
                chain. We operate an integrated business model comprising the
                full range of engineering, construction and asset management
                services delivering single-source solutions for some of the
                world&apos;s most prestigious public and private organisations.
              </p>
            </div>
            <div className="glax_tm_contact_wrap">
              <div className="get_in_touch">
                <h3>Get in Touch With Us</h3>
              </div>
              <div className="inner_wrap">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /CONTACT */}
    </Layout>
  );
}
