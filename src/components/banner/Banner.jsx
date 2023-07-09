import React from 'react'
import './banner.scss'


// import Waving from "../images/waving.png";
import Html from "../../assets/icons/html.svg";
import Css from "../../assets/icons/css3.svg";
import Js from "../../assets/icons/javascript.svg";
import Reacta from "../../assets/icons/react.svg";

import Sass from "../../assets/icons/scss.svg";

const Banner = () => {

    const skillsIcons = [
        {
            img: Html,
            title: "HTML5",
        },
        {
            img: Css,
            title: "CSS3",
        },
        {
            img: Js,
            title: "Java Script",
        },
        {
            img: Reacta,
            title: "React",
        },
        {
            img: Sass,
            title: "SCSS",
        },
    ];
    return (

        <>
            <section className='hero' id='home'>
                <div className='containerdf'>
                    <div className="content">

                        <div className="main_hero">
                            <div className="main_text">
                                <h1>Front-end React Developer</h1>
                                <p>Hi, I'm Pham Tuan Vu. A front-end react developer </p>
                            </div>
                            <div className="main_img">

                            </div>
                        </div>


                        <div className="skills">
                            <p>Tech Stack</p>
                            <div className="logos">
                                <ul>
                                    {skillsIcons.map((icon) => (
                                        <li key={icon.title}>
                                            <img src={icon.img} title={icon.title} alt="skill-icon" />
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )


}

export default Banner