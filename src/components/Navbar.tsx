import React, {useEffect} from "react";
import "../scss/Navbar.scss";

const Navbar:
    React.FC<{
        activeItem: number;
        setActiveItem: (activeItem: number) => void;
    }> = ({activeItem, setActiveItem}) => {
    // close if clicked below 919px
    const [isMini, setIsMini] = React.useState(
        window.matchMedia("(max-width: 919px)").matches
    );

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 919px)");
        const handleResize = () => {
            setIsMini(mediaQuery.matches);
        }
        mediaQuery.addEventListener('change', handleResize);
        return () => {
            mediaQuery.removeEventListener('change', handleResize);
        }
    }, [])

    const checkRef = React.useRef<HTMLInputElement>(null);
    const unCheck = () => {
        if (checkRef.current) {
            checkRef.current.checked = false;
        }
    }

    return (
        <nav>
            <input type={"checkbox"} id={"check"} ref={checkRef}/>
            <div className={"bg-er"} />
            <label htmlFor={"check"} className={"checkbtn"}>
                <i className={"fa-solid fa-bars"}></i>
            </label>
            <label className={"logo"}><a href={"https://www.naj.one"}>naj.one</a></label>
            <ul onClick={
                (e) => {
                    // change active item
                    const id = (e.target as HTMLElement).id;
                    const activeItem = parseInt(id.split("-")[1]) - 1;
                    console.log(activeItem)
                    if (activeItem >= 0 && activeItem <= 3) {
                        setActiveItem(activeItem);
                    }
                    if (isMini) {
                        unCheck();
                    }
                }
            }>
                <li><a id={"nav-1"} className={
                    activeItem === 0 ? "active" : ""
                }>Intro</a></li>
                <li><a id={"nav-2"} className={
                    activeItem === 1 ? "active" : ""
                }>About</a></li>
                <li><a id={"nav-3"} className={
                    activeItem === 2 ? "active" : ""
                }>Project</a></li>
                <li><a id={"nav-4"} className={
                    activeItem === 3 ? "active" : ""
                }>Contact</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;
