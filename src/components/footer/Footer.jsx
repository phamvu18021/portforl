import React from 'react'
import './footer.scss'
const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="footerc">
            <h3>
              Copyright © {new Date().getFullYear()}. All rights are reserved
            </h3>
            <div className="footerc__socials">

              <a
                aria-label="github"
                target="_blank"
                rel="noreferrer"
                href="https://github.com/phamvu18021"
              >
                <i class="ri-github-fill"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer