import React, {useEffect} from "react";
import "../scss/Project.scss";
import Button from "./Button";


const Project: React.FC<
    {
        className?: string;
        setActiveItem: (item: number) => void;
    }
> = ({className, setActiveItem}) => {
    useEffect(() => {
        document.title = "Thirafi Najwan - Project";
    }, []);
    return (
        <div className={`project ` + className}>
            <div className={"project-title"}>
                <h1>Projects</h1>
                <small>Click each card to see the details. See more on <a href={"https://github.com/reverseon"}>GitHub</a></small>
                <hr className={'divider'}/>
            </div>
            <div className={"project-list"}>
                <a className={"project-item"} href={"https://github.com/reverseon/S3-Interface"}>
                    <div className={"project-item-title"}>
                        <h2>S3 HTTP Interface</h2>
                    </div>
                    <div className={"project-tech-stack"}>
                        <Button className={"project-tech-stack-item"} text={"Spring Boot"} backgroundImage={
                            "linear-gradient(to bottom, #43853d, #7bbe6a)"
                        }
                            radius={"12px"}
                                padding={"10px 20px"}
                                cursor={"default"}
                        />
                    </div>
                    <hr className={"divider"}/>
                    <p className={"project-item-subtitle"}>Minimalist backend service through HTTP to upload media to S3-compliant services.</p>
                </a>
                <a className={"project-item"} href={"https://stats.p.naj.one"}>
                    <div className={"project-item-title"}>
                        <h2>Kaggle Descriptive Statistics Generator</h2>
                    </div>
                    <div className={"project-tech-stack"}>
                        <Button className={"project-tech-stack-item"} text={"FastAPI"} backgroundImage={
                            "linear-gradient(to bottom, #009688, #35d0ba)"
                        }
                                radius={"12px"}
                                padding={"10px 20px"}
                                cursor={"default"}
                        />
                        <Button className={"project-tech-stack-item react-card"} text={"React"}
                                radius={"12px"}
                                padding={"10px 20px"}
                                cursor={"default"}
                        />
                    </div>
                    <hr className={"divider"}/>
                    <p className={"project-item-subtitle"}>Generate descriptive statistics straight from Kaggle dataset URL.</p>
                </a>
                <a className={"project-item"} href={"https://pochu.naj.one/genfinder"}>
                    <div className={"project-item-title"}>
                        <h2>GenFinder</h2>
                    </div>
                    <div className={"project-tech-stack"}>
                        <Button className={"project-tech-stack-item web-card"} text={"HTML/CSS/JS"}
                                radius={"12px"}
                                padding={"10px 20px"}
                                cursor={"default"}
                        />
                        <Button className={"project-tech-stack-item"} text={"Google Sheet"}
                                backgroundImage={"linear-gradient(to bottom right, #0f9d58, #0079c1)"}
                                radius={"12px"}
                                padding={"10px 20px"}
                                cursor={"default"}
                        />
                    </div>
                    <hr className={"divider"}/>
                    <p className={"project-item-subtitle"}>A name finder to search POCHU Genshiken member. Served with Google Sheets API as backend.</p>
                </a>
                <a className={"project-item"} href={"https://github.com/reverseon/image-compressor"}>
                    <div className={"project-item-title"}>
                        <h2>Image Compressor</h2>
                    </div>
                    <div className={"project-tech-stack"}>
                        <Button className={"project-tech-stack-item web-card"} text={"HTML/CSS/JS"}
                                radius={"12px"}
                                padding={"10px 20px"}
                                cursor={"default"}
                        />
                    </div>
                    <hr className={"divider"}/>
                    <p className={"project-item-subtitle"}>An Image Compressor website with SVD compression algorithm built from scratch.</p>
                </a>
            </div>
            <Button className={"navigation"} text={"Get In Touch?"} onClick={() => {setActiveItem(3)}}
                    backgroundImage={"linear-gradient(45deg, #00d9a2, #0078a8)"}
                    radius={"12px"}
            />
        </div>
    )
}

export default Project;