import { useState } from "react";
import './procard.scss'
const ProCard = props => {
    const title = props.title;
    const img = props.img;
    const description = props.description;
    const techno1 = props.techno1;
    const techno2 = props.techno2
    const code = props.code
    const demo = props.demo
    const scrollY = props.scrollY
    const cName = props.cName
    const icon = props.icon

    const [scroll, setScroll] = useState(false);
    return (
        <>
            <div className={`pro pro__1 ${cName}`}>
                <div className="pro__img">
                    <a target="_blank" href={demo} rel="noreferrer">
                        <img
                            src={img}
                            alt="website"
                            style={{
                                transform: scroll ? `translateY(${scrollY})` : "translateY(0%)",
                                transition: "transform 10s ease-in-out",
                            }}
                            onMouseEnter={() => setScroll(true)}
                            onMouseLeave={() => setScroll(false)}
                        />
                    </a>
                </div>
                <div className="pro__text">
                    <h3>
                        {title} {icon}
                    </h3>
                    <p>{description}</p>
                    <div className="stack">
                        <p>{techno1}</p>
                        <p>{techno2}</p>
                    </div>
                    <div className="links">
                        <a target="_blank" href={code} rel="noreferrer">
                            Code <i class="ri-github-fill"></i>
                        </a>
                        <a target="_blank" href={demo} rel="noreferrer">
                            Live Demo
                            <i class="ri-link"></i>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProCard;