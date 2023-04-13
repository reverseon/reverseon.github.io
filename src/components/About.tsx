import React, {useEffect} from "react";
import "../scss/About.scss";
import Button from "./Button";
const About: React.FC<
    {
        className?: string;
        setActiveNav: (item: number) => void;
    }
> = (
    {
        className,
        setActiveNav,
    }
) => {
    useEffect(() => {
        document.title = "Thirafi Najwan - About";
    }, []);
    return (
        <div className={"about " + className}>
            <div className={"about-card"}>
                <h2>I will describe myself as...</h2>
                <div className={"about-content"}>
                    <div className={"about-content-item"}>
                        <p>
                            a curious learner with a strong interest in all things Artificial Intelligence and Cloud Computing.
                            And when I'm not geeking out over that, you'll probably find me indulging in my love for Japanese pop culture, especially anime and manga.
                            Currently, I'm in my third year of pursuing a bachelor's degree in Computer Science at Institut Teknologi Bandung.
                        </p>
                    </div>
                    <div className={"divider"} />
                    <h3>Tools</h3>
                    <small className={"subtitle"}>that I'm comfortable working with</small>
                    <div className={"about-content-item"}>
                        <div className={"skill-icon-wrapper"}>
                            <div className={"python-card overlay"}>
                                <div className={"skill-card"}>
                                    Python <i className="fab fa-python"></i>
                                    <small>using library like PyTorch, Pandas, Sklearn, TensorFlow, FastAPI, etc.</small>
                                </div>
                            </div>
                            <div className={"node-card overlay"}>
                                <div className={"skill-card"}>
                                    NodeJS/TS <i className="fa-brands fa-node-js"></i>
                                </div>
                            </div>

                            <div className={"docker-card overlay"}>
                                <div className={"skill-card"}>
                                    Docker <i className="fa-brands fa-docker"></i>
                                </div>
                            </div>
                            <div className={"cloudflare-card overlay"}>
                                <div className={"skill-card"}>
                                    Cloudflare <i className="fa-brands fa-cloudflare"></i>
                                </div>
                            </div>
                            <div className={"react-card overlay"}>
                                <div className={"skill-card"}>
                                    React <i className="fa-brands fa-react"></i>
                                </div>
                            </div>
                            <div className={"ubuntu-card overlay"}>
                                <div className={"skill-card"}>
                                    Ubuntu <i className="fa-brands fa-ubuntu"></i>
                                    <small>or any Debian-based system</small>
                                </div>
                            </div>
                            <div className={"digitalocean-card overlay"}>
                                <div className={"skill-card"}>
                                    DigitalOcean <i className="fa-brands fa-digital-ocean"></i>
                                </div>
                            </div>
                            <div className={"web-card overlay"}>
                                <div className={"skill-card"}>
                                    HTML/CSS/JS <i className="fa-brands fa-html5"></i>
                                    <small>including SASS/SCSS</small>
                                </div>
                            </div>
                            <div className={"git-card overlay"}>
                                <div className={"skill-card"}>
                                    Git <i className="fa-brands fa-git"></i>
                                    <small>CI/CD with GitHub, GitLab, BitBucket, etc.</small>
                                </div>
                            </div>
                            <div className={"opa-wrapper"}>
                                <div className={"bootstrap-card overlay"}>
                                    <div className={"skill-card"}>
                                        Bootstrap <i className="fa-brands fa-bootstrap"></i>
                                        <small>Material UI / Tailwind OK</small>
                                    </div>
                                </div>
                            </div>
                            <div className={"sql-card overlay"}>
                                <div className={"skill-card"}>
                                    Database <i className="fa-solid fa-database"></i>
                                    <small>MySQL, PostgreSQL, and MongoDB</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={"divider"} />
                    <small className={"subtitle"}>
                        By the way, this website was built with React using Glassmorphism principle. The background 3D model was made using Spline.
                    </small>
                    <Button backgroundImage={"linear-gradient(45deg, #00d9a2, #0078a8)"} text={"Check out my other project!"}
                            radius={"10px"}
                            style={{
                                marginTop: "1rem", marginLeft: "auto",
                            }}
                            onClick={() => {
                                setActiveNav(2);
                            }}
                    />
                </div>

            </div>
        </div>
    )
}

export default About;