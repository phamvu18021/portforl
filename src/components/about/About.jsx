import React from 'react'
import './about.scss'
import AboutImg from '../../assets/img/about.jpg'
const About = () => {
    return (
        <>
            <section id='about' className='about'>
                <div className="container">
                    <div className="about-content">
                        <div className="img-side">

                            <img src={AboutImg} alt="mee" className="img-side__main-img" />
                        </div>
                        <div className="text-side">
                            <h3>About me</h3>
                            <h4>
                                A Fresher Front-end Developer <br /> 
                            </h4>
                            <p>
                            As a fresher Front-End Developer, I possess a skill set in HTML, CSS, JavaScript, React and SCSS. I am well versed in designing and maintaining responsive websites that deliver a smooth user experience. My specialty is creating dynamic, attractive interfaces through writing clean and optimized code and using advanced development tools and techniques.
I look forward to working in a dynamic and professional environment to gain more experience and further develop my skills.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About