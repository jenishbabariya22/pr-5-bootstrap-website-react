import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <div className="text-center text-lg-start bg-body-tertiary text-muted">
      <div className='container' >
        <div className='row'>
          {/* Footer */}
          <footer >
            {/* Section: Social media */}
            <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
              {/* Left */}
              <div className="me-5 d-none d-lg-block">
                <span>Get connected with us on social networks:</span>
              </div>
              {/* Left */}
              {/* Right */}
              <div>
                <a href className="me-4 text-reset">
                  <FaFacebookF />
                </a>
                <a href className="me-4 text-reset">
                  <FaTwitter />
                </a>
                <a href className="me-4 text-reset">
                  <FaGoogle />
                </a>
                <a href className="me-4 text-reset">
                  <FaInstagram />
                </a>
                <a href className="me-4 text-reset">
                  <IoLogoWhatsapp />
                </a>
                <a href className="me-4 text-reset">
                  <FaGithub />
                </a>
              </div>
              {/* Right */}
            </section>
            {/* Section: Social media */}
            {/* Section: Links  */}
            <section className>
              <div className="container text-center text-md-start mt-5">
                {/* Grid row */}
                <div className="row mt-3">
                  {/* Grid column */}
                  <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                    {/* Content */}
                    <img src="https://htmldemo.net/bakerfresh/bakerfresh/assets/images/logo.svg" alt="" />
                    <ul style={{ listStyle: "none", paddingTop: "15px" }}>
                      <li >
                        <a href="" style={{ paddingRight: "10px", color: "black", fontSize: "20px" }}><FaFacebookF /></a>
                        <a href="" style={{ paddingRight: "10px", color: "black", fontSize: "20px" }}><FaTwitter /></a>
                        <a href="" style={{ paddingRight: "10px", color: "black", fontSize: "20px" }}><IoLogoWhatsapp /></a>
                        <a href="" style={{ paddingRight: "10px", color: "black", fontSize: "20px" }}><FaInstagram /></a>
                      </li>
                    </ul>
                  </div>
                  {/* Grid column */}
                  {/* Grid column */}
                  <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                    {/* Links */}
                    <h6 className="text-uppercase fw-bold mb-4">
                      CATEGORIES
                    </h6>
                    <p>
                      <a href="#!" className="text-reset">Cupcake</a>
                    </p>
                    <p>
                      <a href="#!" className="text-reset">Pastry</a>
                    </p>
                    <p>
                      <a href="#!" className="text-reset">Muffin</a>
                    </p>
                    <p>
                      <a href="#!" className="text-reset">waffle</a>
                    </p>
                  </div>
                  {/* Grid column */}
                  {/* Grid column */}
                  <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                    {/* Links */}
                    <h6 className="text-uppercase fw-bold mb-4">
                      SERVICES
                    </h6>
                    <p>
                      <a href="#!" className="text-reset">Delivery</a>
                    </p>
                    <p>
                      <a href="#!" className="text-reset">Payment</a>
                    </p>
                    <p>
                      <a href="#!" className="text-reset">Returns</a>
                    </p>
                    <p>
                      <a href="#!" className="text-reset">Privacy</a>
                    </p>
                  </div>
                  {/* Grid column */}
                  {/* Grid column */}
                  <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                    {/* Links */}
                    <h6 className="text-uppercase fw-bold mb-4" style={{ paddingLeft: "16px" }}>Contact</h6>
                    <p><i className="fas fa-home me-3" /> New York, NY 10012, US</p>
                    <p>
                      <i className="fas fa-envelope me-3" />
                      info@example.com
                    </p>
                    <p><i className="fas fa-phone me-3" /> + 01 234 567 88</p>
                    <p><i className="fas fa-print me-3" /> + 01 234 567 89</p>
                  </div>
                  {/* Grid column */}
                </div>
                {/* Grid row */}
              </div>
            </section>
            {/* Section: Links  */}
            {/* Copyright */}
            <div className="text-center p-4" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
              © 2021 Copyright :
              <a className="text-reset fw-bold" href="https://mdbootstrap.com/"> Bakerfresh</a>
            </div>
            {/* Copyright */}
          </footer>
          {/* Footer */}
        </div>
      </div >
    </div >
  )

}

export default Footer
