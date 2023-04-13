import React, {useEffect} from "react";
import '../scss/Contact.scss';
import Avatar from '../assets/profpict.png';
const Contact : React.FC<
    {
        className?: string;
        setActiveItem: (activeItem: number) => void;
    }
> =
({className, setActiveItem}) => {
    useEffect(() => {
        document.title = "Thirafi Najwan - Contact";
    }, []);
    return (
        <div className={"contact " + className}>
            <div className={"contact-card"}>
                <div className={'profile-image'}>
                    <img src={Avatar} alt={'profile'}/>
                </div>
                <h2 className={"name"}>Hello 👋</h2>
                <p className={"desc"}>Let's do a little bit of chit-chat and talk about some fun stuff together!</p>
                <div className={"contact-list"}>
                    <h3>Reach Me At</h3>
                    <div>
                        <a href={"mailto:thirafi@naj.one"} className={'c-text'}>
                            <i className={"fa-solid fa-envelope"}></i>
                            thirafi@naj.one</a>
                    </div>
                    <div>
                        <a href={"https://instagram.com/thirafinajwan"} className={'c-text'}>
                            <i className={"fab fa-instagram"}></i>
                            thirafinajwan</a>
                    </div>
                    <div>
                        <a href={"https://github.com/reverseon"} className={'c-text'}>
                            <i className={"fab fa-github"}></i>
                        reverseon</a>
                    </div>
                    <div>
                        <a href={"https://linkedin.com/in/thirafinajwan"} className={'c-text'}>
                            <i className={"fab fa-linkedin"}></i>
                        thirafinajwan
                        </a>
                    </div>
                    <div>
                        <a href={"https://discord.gg"} className={'c-text'}>
                            <i className={"fab fa-discord"}></i>
                            ReverseON#0913
                        </a>
                    </div>
                </div>
                <hr />
                <div className={"creds"}>
                    <p>Profile picture was drawn by <a href={"https://twitter.com/foyhead"}>@foyhead</a> on twitter.</p>
                </div>
            </div>
        </div>
    );
}

export default Contact;