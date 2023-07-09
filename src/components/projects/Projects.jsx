
import ProCard from "../projectcard/ProCard";
import Movie from "../../assets/img/imgmain.png";
import Shop from "../../assets/img/emcshop.png";
import React from 'react'
import './projects.scss'
const Projects = () => {
  return (
    <>
<>
      <section id="projects" className="projects">
        <div className="container">
          <div className="project-content">
            <p>portfolio</p>
            <h3>Each project is a unique piece of development 🧩</h3>
            <div className="projects-grid">
              <ProCard
                title="Movie website"
                img={Movie}
                description="A convenient website to watch movies online. Simple interface, easy to use.Log in to use other functions such as creating a list of favorite movies, a list of watched movies, commenting, liking, sharing, voting for the movies you like. "
                techno1="React"
                techno2="SCSS"
                code="https://github.com/phamvu18021/pj-movie"
                demo="https://phamvu18021.github.io/pj-movie/"
                scrollY="-83%"
                icon="🎬"
              />

              <ProCard
                title={"ecommerce"}
                img={Shop}
                description="A Ecommerce sell some stupid thing."
                techno1="React"
                techno2="SCSS"
                code="https://github.com/phamvu18021/wuxia-demo"
                demo="https://phamvu18021.github.io/wuxia-demo/"
                scrollY="-74%"
                icon="🪙"
                cName="reversed-proj"
              />


            </div>
          </div>
          {/* <h2 className="new-projects">New projects coming soon.. 🤠</h2> */}
        </div>
      </section>
    </>

    </>
  )
}

export default Projects


