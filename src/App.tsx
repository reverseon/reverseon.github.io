import React, {useEffect} from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import Spline from "@splinetool/react-spline";
import About from "./components/About";
import Project from "./components/Project";
import Contact from "./components/Contact";
import {useNavigate} from "react-router-dom";

const App:
    React.FC<{
        uri: string;
    }> =
    ({uri}) => {
    const navigate = useNavigate();
    const [activeNav, setActiveNav] = React.useState(0)
    const [displayBools, setDisplayBools] = React.useState([true, false, false, false])
    const [isOpens, setIsOpens] = React.useState([true, false, false, false])
    const [cubeGroup, setCubeGroup] = React.useState<any>(undefined);
    const [cube1, setCube1] = React.useState<any>(undefined);
    const [cube2, setCube2] = React.useState<any>(undefined);
    const [cube3, setCube3] = React.useState<any>(undefined);
    const [cube4, setCube4] = React.useState<any>(undefined);
    const [slab1, setSlab1] = React.useState<any>(undefined);
    const [slab2, setSlab2] = React.useState<any>(undefined);
    const [slab3, setSlab3] = React.useState<any>(undefined);
    // default page
    const cubeGroupDefaultPos = React.useRef<any>(undefined);
    const cube1DefaultPos = React.useRef<any>(undefined);
    const cube2DefaultPos = React.useRef<any>(undefined);
    const cube3DefaultPos = React.useRef<any>(undefined);
    const cube4DefaultPos = React.useRef<any>(undefined);
    const slab1DefaultPos = React.useRef<any>(undefined);
    const slab2DefaultPos = React.useRef<any>(undefined);
    const slab3DefaultPos = React.useRef<any>(undefined);
    // intro page
    const cubeGroupIntroPos = React.useRef<any>(undefined); // and everything else is default
    // project page
    const cube1ProjectPos = React.useRef<any>(undefined);
    const cube2ProjectPos = React.useRef<any>(undefined);
    const cube3ProjectPos = React.useRef<any>(undefined);
    const cube4ProjectPos = React.useRef<any>(undefined);
    // contact page
    const slab1ContactPos = React.useRef<any>(undefined);
    const slab2ContactPos = React.useRef<any>(undefined);
    const slab3ContactPos = React.useRef<any>(undefined);
    const [allLoaded, setAllLoaded] = React.useState(false);
    useEffect(() => {
        const word = uri.split("/")[1].toLowerCase()
        if (uri.split("/")[2]) {
            setActiveNav(0)
        }
        switch (word) {
            case "":
                setActiveNav(0)
                setDisplayBools([true, false, false, false])
                setIsOpens([true, false, false, false])
                break;
            case "about":
                setActiveNav(1)
                setDisplayBools([false, true, false, false])
                setIsOpens([false, true, false, false])
                // animateToDefault()
                break;
            case "project":
                setActiveNav(2)
                setDisplayBools([false, false, true, false])
                setIsOpens([false, false, true, false])
                // animateToProject()
                break;
            case "contact":
                setActiveNav(3)
                setDisplayBools([false, false, false, true])
                setIsOpens([false, false, false, true])
                // animateToContact()
                break;
            default:
                // redirect to home
                setActiveNav(0)
                setDisplayBools([true, false, false, false])
                setIsOpens([true, false, false, false])
                // window.location.href = "https://www.naj.one"
        }
    }, [uri, allLoaded])
    const lerp = (a: number, b: number, t: number) => {
        // ease in with bounce
        return a + (b - a) * (t * t * t * (t * (t * 6 - 15) + 10))
    }
    // const offsetY = -210
    // const offsetZ = -445

    const loadCam = (spline: any) => {
        if (cubeGroup !== undefined) {
            return
        }
        const cubeGroup_loc = spline.findObjectByName("Cube Group")
        const cube1_loc = spline.findObjectByName("Magenta Cube")
        const cube2_loc = spline.findObjectByName("Top Cube")
        const cube3_loc = spline.findObjectByName("Half Cube")
        const cube4_loc = spline.findObjectByName("Back Cube")
        const slab1_loc = spline.findObjectByName("Magenta Slab")
        const slab2_loc = spline.findObjectByName("Left Green Slab")
        const slab3_loc = spline.findObjectByName("Right Green Slab")
        if (
            cubeGroup_loc === undefined
            || cube1_loc === undefined
            || cube2_loc === undefined
            || cube3_loc === undefined
            || cube4_loc === undefined
            || slab1_loc === undefined
            || slab2_loc === undefined
            || slab3_loc === undefined
        ) {
            console.log("Error: Could not find all objects")
            return
        }
        const makeRefPos = (ref: any, obj: any) => {
            ref.current = {
                x: obj.position.x,
                y: obj.position.y,
                z: obj.position.z,
            }
        }

        makeRefPos(cubeGroupDefaultPos, cubeGroup_loc)
        makeRefPos(cube1DefaultPos, cube1_loc)
        makeRefPos(cube2DefaultPos, cube2_loc)
        makeRefPos(cube3DefaultPos, cube3_loc)
        makeRefPos(cube4DefaultPos, cube4_loc)
        makeRefPos(slab1DefaultPos, slab1_loc)
        makeRefPos(slab2DefaultPos, slab2_loc)
        makeRefPos(slab3DefaultPos, slab3_loc)
        makeRefPos(cubeGroupIntroPos, {
            position: {
                x: cubeGroup_loc.position.x,
                y: cubeGroup_loc.position.y - 210,
                z: cubeGroup_loc.position.z - 445,
            }
        })
        makeRefPos(cube1ProjectPos, {
            position: {
                x: cube1_loc.position.x,
                y: cube1_loc.position.y + 150,
                z: cube1_loc.position.z,
            }
        })
        makeRefPos(cube2ProjectPos, {
            position: {
                x: cube2_loc.position.x + 150,
                y: cube2_loc.position.y,
                z: cube2_loc.position.z,
            }
        })
        makeRefPos(cube3ProjectPos, {
            position: {
                x: cube3_loc.position.x,
                y: cube3_loc.position.y,
                z: cube3_loc.position.z + 150,
            }
        })
        makeRefPos(cube4ProjectPos, {
            position: {
                x: cube4_loc.position.x - 150,
                y: cube4_loc.position.y,
                z: cube4_loc.position.z,
            }
        })
        makeRefPos(slab1ContactPos, {
            position: {
                x: slab1_loc.position.x,
                y: slab1_loc.position.y + 25,
                z: slab1_loc.position.z,
            }
        })
        makeRefPos(slab2ContactPos, {
            position: {
                x: slab2_loc.position.x,
                y: slab2_loc.position.y + 30,
                z: slab2_loc.position.z,
            }
        })
        makeRefPos(slab3ContactPos, {
            position: {
                x: slab3_loc.position.x,
                y: slab3_loc.position.y + 80,
                z: slab3_loc.position.z,
            }
        })
        setCubeGroup(cubeGroup_loc)
        setCube1(cube1_loc)
        setCube2(cube2_loc)
        setCube3(cube3_loc)
        setCube4(cube4_loc)
        setSlab1(slab1_loc)
        setSlab2(slab2_loc)
        setSlab3(slab3_loc)
        setAllLoaded(true)
    }




    const stillAnimating = React.useRef(false)

    const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
    interface Position {
        x: number,
        y: number,
        z: number,
    }
    const animate = async (
        group: any, toPosGroup: Position,
        cube1: any, toPosCube1: Position,
        cube2: any, toPosCube2: Position,
        cube3: any, toPosCube3: Position,
        cube4: any, toPosCube4: Position,
        slab1: any, toPosSlab1: Position,
        slab2: any, toPosSlab2: Position,
        slab3: any, toPosSlab3: Position,
        frameCount: number) => {
        if (
            group === undefined || toPosGroup === undefined ||
            cube1 === undefined || toPosCube1 === undefined ||
            cube2 === undefined || toPosCube2 === undefined ||
            cube3 === undefined || toPosCube3 === undefined ||
            cube4 === undefined || toPosCube4 === undefined ||
            slab1 === undefined || toPosSlab1 === undefined ||
            slab2 === undefined || toPosSlab2 === undefined ||
            slab3 === undefined || toPosSlab3 === undefined
        ) {
            return
        }
        while (stillAnimating.current) {
            stillAnimating.current = false
            await sleep(1000 / 60)
        }
        stillAnimating.current = true
        const getPos = (obj: any) : Position => {
            return {
                x: obj.position.x,
                y: obj.position.y,
                z: obj.position.z,
            }
        }
        const setLerpPos = (obj: any, fromPos: Position, toPos: Position, t: number) => {
            obj.position.x = lerp(fromPos.x, toPos.x, t)
            obj.position.y = lerp(fromPos.y, toPos.y, t)
            obj.position.z = lerp(fromPos.z, toPos.z, t)
        }
        const fromPosGroup = getPos(group)
        const fromPosCube1 = getPos(cube1)
        const fromPosCube2 = getPos(cube2)
        const fromPosCube3 = getPos(cube3)
        const fromPosCube4 = getPos(cube4)
        const fromPosSlab1 = getPos(slab1)
        const fromPosSlab2 = getPos(slab2)
        const fromPosSlab3 = getPos(slab3)
        for (let i = 0; i < frameCount; i++) {
            const t = i / frameCount
            setLerpPos(group, fromPosGroup, toPosGroup, t)
            setLerpPos(cube1, fromPosCube1, toPosCube1, t)
            setLerpPos(cube2, fromPosCube2, toPosCube2, t)
            setLerpPos(cube3, fromPosCube3, toPosCube3, t)
            setLerpPos(cube4, fromPosCube4, toPosCube4, t)
            setLerpPos(slab1, fromPosSlab1, toPosSlab1, t)
            setLerpPos(slab2, fromPosSlab2, toPosSlab2, t)
            setLerpPos(slab3, fromPosSlab3, toPosSlab3, t)
            if (!stillAnimating.current) {
                return
            }
            await sleep(2000 / frameCount)
        }
        stillAnimating.current = false
    }

    useEffect(() => {
        if (!allLoaded) {
            return
        }
        cubeGroup.position.y -= 210
        cubeGroup.position.z -= 445
    }, [
        allLoaded,
    ])
    const animateToIntro = () => {
        animate(
            cubeGroup, cubeGroupIntroPos.current,
            cube1, cube1DefaultPos.current,
            cube2, cube2DefaultPos.current,
            cube3, cube3DefaultPos.current,
            cube4, cube4DefaultPos.current,
            slab1, slab1DefaultPos.current,
            slab2, slab2DefaultPos.current,
            slab3, slab3DefaultPos.current,
            120
        )
    }

    const animateToDefault = () => {
        animate(
            cubeGroup, cubeGroupDefaultPos.current,
            cube1, cube1DefaultPos.current,
            cube2, cube2DefaultPos.current,
            cube3, cube3DefaultPos.current,
            cube4, cube4DefaultPos.current,
            slab1, slab1DefaultPos.current,
            slab2, slab2DefaultPos.current,
            slab3, slab3DefaultPos.current,
            120
        )
    }

    const animateToProject = () => {
        animate(
            cubeGroup, cubeGroupDefaultPos.current,
            cube1, cube1ProjectPos.current,
            cube2, cube2ProjectPos.current,
            cube3, cube3ProjectPos.current,
            cube4, cube4ProjectPos.current,
            slab1, slab1DefaultPos.current,
            slab2, slab2DefaultPos.current,
            slab3, slab3DefaultPos.current,
            120
        )
    }

    const animateToContact = () => {
        animate(
            cubeGroup, cubeGroupDefaultPos.current,
            cube1, cube1ProjectPos.current,
            cube2, cube2ProjectPos.current,
            cube3, cube3ProjectPos.current,
            cube4, cube4ProjectPos.current,
            slab1, slab1ContactPos.current,
            slab2, slab2ContactPos.current,
            slab3, slab3ContactPos.current,
            120
        )
    }


    useEffect(() => {
        setIsOpens([
            false, false, false, false
        ])
        if (activeNav === 0) {
            // animate to intro
            animateToIntro()
            navigate("/")
        } else if (activeNav === 2) {
            // animateToProject()
            navigate("/projects")
        } else if (activeNav === 3) {
            // animateToContact()
            navigate("/contact")
        } else {
            // animate to default
            // animateToDefault()
            navigate("/about")
        }

        sleep(1000).then(() => {
            const dbCopy = [false, false, false, false]
            for (let i = 0; i <= activeNav; i++) {
                dbCopy[i] = i === activeNav
            }
            setDisplayBools(dbCopy)
            sleep(200).then(() => {
                const ioCopy = [false, false, false, false]
                for (let i = 0; i <= activeNav; i++) {
                    ioCopy[i] = true
                }
                setIsOpens(ioCopy)
            })
        })
    }, [activeNav])

    // useEffect(() => {
    //     console.log("in dpbool", displayBools)
    // }, [displayBools])
  return (
    <div className="App">
      <Navbar activeItem={activeNav}
                setActiveItem={setActiveNav}
      />
        <Spline
        style={{
            minHeight: "100vh",
            position: "fixed",
            top: 0,
            left: 0,
            zIndex: 0,
            // transform: "translate(-10px)"
        }}
        onLoad={loadCam}
        scene={"https://prod.spline.design/yFXIZtelN3VunMng/scene.splinecode"} />

        {displayBools[0] && <Intro
            className={`${isOpens[0] ? "open" : "close"}`} setActiveItem={setActiveNav}
        />}

        {
            displayBools[1] && <About
                className={`${isOpens[1] ? "open" : "close"}`}
                setActiveNav={setActiveNav}
            />
        }
        {
            displayBools[2] && <Project
                className={`${isOpens[2] ? "open" : "close"}`}
                setActiveItem={setActiveNav}
            />
        }
        {
            displayBools[3] && <Contact
                className={`${isOpens[3] ? "open" : "close"}`}
                setActiveItem={setActiveNav}
            />
        }
    </div>
  );
}

export default App;
