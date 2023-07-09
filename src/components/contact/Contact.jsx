import React from 'react'
import './contact.scss'
const Contact = () => {
  return (
    <>
      <section id="contact" className="contact">
        <div className="container">
          <div className="contact__content">
            <div className="contact__title">
              <p>contact</p>
              <h3>Would you like to work with me?  👇</h3>
            </div>
            <div className="contact__icons">
              <div className="contact__icon-box">
                <span>
                <i class="ri-phone-fill"></i>
                </span>
                <div className="contact__info">
                  <h3>Phone number</h3>
                  <p>0947334590</p>
                </div>
              </div>

              <div className="contact__icon-box">
                <span>
                <i class="ri-mail-send-line"></i>
                </span>
                <div className="contact__info">
                  <h3>Mail</h3>
                  <a href="mailto:phamvu182000123@gmail.com">
                    phamvu182000123@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact