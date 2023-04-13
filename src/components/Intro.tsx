import React, {useEffect} from "react";
import "../scss/Intro.scss";
import Button from "./Button";

const Intro: React.FC<
    {
        className?: string;
        setActiveItem: (item: number) => void;
    }
> = ({className, setActiveItem}) => {
    const myJob = ["Cloud Computing Enthusiast", "Machine Learning Aficionado", "Japanese Pop-culture Devotee"];
    const jobIdx = React.useRef(0);
    const [job, setJob] = React.useState(myJob[jobIdx.current]);
    const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

    enum JobState {
        TYPING,
        DELETING,
    }

    const [jobState, setJobState] = React.useState(JobState.TYPING);

    useEffect(() => {
        const timeout = setTimeout(() => {
            if (jobState === JobState.TYPING && myJob[jobIdx.current] !== job) {
                sleep(75).then(
                    () => setJob(myJob[jobIdx.current].substring(0, job.length + 1)))
            } else if (jobState === JobState.TYPING && myJob[jobIdx.current] === job) {
                sleep(2000).then(() => {
                    setJobState(JobState.DELETING);
                });
            } else if (jobState === JobState.DELETING && job !== "") {
                setJob(myJob[jobIdx.current].substring(0, job.length - 1));
            } else if (jobState === JobState.DELETING && job === "") {
                setJobState(JobState.TYPING);
                jobIdx.current = (jobIdx.current + 1) % myJob.length;
            }
        }, 25);
        return () => clearTimeout(timeout);
    }, [job, jobState]);

    useEffect(() => {
        document.title = "Thirafi Najwan - Home";
    }, []);

    return (
        <div className={`intro ` + className}>
            <div className={"intro-text"}>
                <h1>Hi, I'm <span className={"name"}>Thirafi Najwan</span></h1>
                <h2 className={'typewriting'}>A self-proclaimed <span className={"job blinking-cursor"} style={{
                }}>
                    {job}
                </span></h2>
                <h2>Based in <span className={"location"}
                >Bandung, Indonesia</span></h2>
                <Button className={"intro-button"} text={"About Me"} onClick={() => {
                    setActiveItem(1)
                }}
                radius={"10px"}
                backgroundImage={"linear-gradient(45deg, #00d9a2, #0078a8)"}
                        style={{
                            fontWeight: "bold",
                }}
                />

                <div className={"social-media"}>
                    <a href={"https://github.com/reverseon"}><i className="fa-brands fa-github fa-bounce"/></a>
                    <a href={"https://linkedin.com/in/thirafinajwan"}><i className={"fa-brands fa-linkedin"}/></a>
                    <a href={"https://instagram.com/thirafinajwan"}><i className={"fa-brands fa-instagram"}/></a>
                </div>
            </div>
        </div>
    );
}

export default Intro;