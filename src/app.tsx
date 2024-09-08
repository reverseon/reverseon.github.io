import './app.css'
import portrait_image from './assets/portrait.png'
import go_svg from './assets/go.svg'
import typescript_svg from './assets/ts.svg'
import python_svg from './assets/py.svg'
import linux_svg from './assets/linux.svg'
import image_plus from './assets/image-plus.svg'
import link from './assets/link.svg'
import consensus from './assets/consensus.png'
import pastebin from './assets/pastebin.svg'
import React from 'preact/compat'

export function App() {
  const toolref = React.useRef<HTMLDivElement>(null)
  const projectref = React.useRef<HTMLDivElement>(null)

  const MAIN_ACCENT_COLOR = '#88D66C'
  const MAIN_ACCENT_COLOR_FILTER = `invert(81%) sepia(73%) saturate(335%) hue-rotate(45deg) brightness(88%) contrast(89%)`
  return (
    <>
    <main>
      <div className="highlight">
        {/* <div id="image-absol-container"></div> */}
        <div className="hl-image" style={{
          fontFamily: 'Lexend, sans-serif',
          display: 'flex',
          justifyContent: 'center',
        }}>
          <div className="canvas-grouping">
            <div id="white-background"></div>
            <div className="hl-image-badge" id="name-badge">
              Thirafi<br /><span style={{color:MAIN_ACCENT_COLOR}}>Najwan</span>.
            </div>
            <div className="hl-badge-icon-group" id="interested-badge">
              <div className="hl-image-badge">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-box-seam-fill" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M15.528 2.973a.75.75 0 0 1 .472.696v8.662a.75.75 0 0 1-.472.696l-7.25 2.9a.75.75 0 0 1-.557 0l-7.25-2.9A.75.75 0 0 1 0 12.331V3.669a.75.75 0 0 1 .471-.696L7.443.184l.01-.003.268-.108a.75.75 0 0 1 .558 0l.269.108.01.003zM10.404 2 4.25 4.461 1.846 3.5 1 3.839v.4l6.5 2.6v7.922l.5.2.5-.2V6.84l6.5-2.6v-.4l-.846-.339L8 5.961 5.596 5l6.154-2.461z"/>
                </svg>
                Interested&nbsp;in
              </div>
              <div className="hl-image-badge" style={{
                color: MAIN_ACCENT_COLOR,
              }}>
                Distributed
              </div>
              <div className="hl-image-badge" style={{
                color: MAIN_ACCENT_COLOR,
              }}>
                System
              </div>
            </div>
            <div className="hl-badge-icon-group" id="mainly-use">
              <div className="hl-image-badge">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-boxes" viewBox="0 0 16 16">
                  <path d="M7.752.066a.5.5 0 0 1 .496 0l3.75 2.143a.5.5 0 0 1 .252.434v3.995l3.498 2A.5.5 0 0 1 16 9.07v4.286a.5.5 0 0 1-.252.434l-3.75 2.143a.5.5 0 0 1-.496 0l-3.502-2-3.502 2.001a.5.5 0 0 1-.496 0l-3.75-2.143A.5.5 0 0 1 0 13.357V9.071a.5.5 0 0 1 .252-.434L3.75 6.638V2.643a.5.5 0 0 1 .252-.434zM4.25 7.504 1.508 9.071l2.742 1.567 2.742-1.567zM7.5 9.933l-2.75 1.571v3.134l2.75-1.571zm1 3.134 2.75 1.571v-3.134L8.5 9.933zm.508-3.996 2.742 1.567 2.742-1.567-2.742-1.567zm2.242-2.433V3.504L8.5 5.076V8.21zM7.5 8.21V5.076L4.75 3.504v3.134zM5.258 2.643 8 4.21l2.742-1.567L8 1.076zM15 9.933l-2.75 1.571v3.134L15 13.067zM3.75 14.638v-3.134L1 9.933v3.134z"/>
                </svg>
                Mainly&nbsp;Use
              </div>
              <div className="hl-image-badge">
                <img src={go_svg} style={{
                  filter: MAIN_ACCENT_COLOR_FILTER,
                }}></img>
                <img src={typescript_svg} style={{
                  filter: MAIN_ACCENT_COLOR_FILTER,
                }}></img>
                <img src={python_svg} style={{
                  filter: MAIN_ACCENT_COLOR_FILTER,
                }}></img>
                <img src={linux_svg} style={{
                  filter: MAIN_ACCENT_COLOR_FILTER,
                }}></img>
              </div>
            </div>
            <div className="hl-badge-icon-group" id="location-badge">
              <div className="hl-image-badge">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                  <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/>
                </svg>
                Jakarta
              </div>
              <div className="hl-image-badge" style={{
                color: MAIN_ACCENT_COLOR,
              }}>
                Indonesia
              </div>
            </div>
            <img src={portrait_image} style={{
              marginTop: '2em',
              width: '438px',
              // filter: 'grayscale(100%)',
              aspectRatio: '5/6',
              objectFit: 'cover',
              objectPosition: 'top',
            }} alt="Thirafi's Portrait Image" />
            <div id="hl-image-subtext" style={{
              marginTop: '1em',
              marginLeft: '24px',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              fontWeight: '400',
            }}>
              <div>Software Engineer</div>
              <div style={{
                marginTop: '0.3em',
              }}>Backend Web Development</div>
            </div>
          </div>
        </div>
        <div className="hl-text">
          <h3>
            Mostly a 
            <span style={{
              color: MAIN_ACCENT_COLOR,
            }}> Backend Engineer</span> 
            , sometimes a 
            <span style={{
              color: MAIN_ACCENT_COLOR,
            }}> Cloud Architect</span>
            , and a little bit of
            <span style={{
              color: MAIN_ACCENT_COLOR,
            }}> Sysadmin </span>
            if needed.
          </h3>
          <p>
            Hi, I am Thirafi Najwan, a software engineer based in Jakarta, Indonesia. I have a passion for building scalable and reliable distributed systems. I have experience in building backend services, APIs, and microservices using Go, TypeScript, and Python. I am also familiar with Linux and cloud services such as AWS and GCP.
          </p>
          <div id="hl-text-button">
            <button
            onClick={() => {
              toolref.current?.scrollIntoView({behavior: 'smooth'})
            }}
            >My Usual Tools</button>
            <button
            onClick={() => {
              projectref.current?.scrollIntoView({behavior: 'smooth'})
            }}
            >See My Projects</button>
            <div className="social-links">
              <svg 
              onClick={() => {
                window.open('https://www.linkedin.com/in/thirafinajwan/')
              }}
              xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
              </svg>
              <svg 
              onClick={() => {
                window.open('https://www.github.com/reverseon')
              }}
              xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
              </svg>
              <svg 
              onClick={() => {
                window.open('mailto:thirafi@naj.one')
              }}
              xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-envelope-at" viewBox="0 0 16 16">
                <path d="M2 2a2 2 0 0 0-2 2v8.01A2 2 0 0 0 2 14h5.5a.5.5 0 0 0 0-1H2a1 1 0 0 1-.966-.741l5.64-3.471L8 9.583l7-4.2V8.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2zm3.708 6.208L1 11.105V5.383zM1 4.217V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v.217l-7 4.2z"/>
                <path d="M14.247 14.269c1.01 0 1.587-.857 1.587-2.025v-.21C15.834 10.43 14.64 9 12.52 9h-.035C10.42 9 9 10.36 9 12.432v.214C9 14.82 10.438 16 12.358 16h.044c.594 0 1.018-.074 1.237-.175v-.73c-.245.11-.673.18-1.18.18h-.044c-1.334 0-2.571-.788-2.571-2.655v-.157c0-1.657 1.058-2.724 2.64-2.724h.04c1.535 0 2.484 1.05 2.484 2.326v.118c0 .975-.324 1.39-.639 1.39-.232 0-.41-.148-.41-.42v-2.19h-.906v.569h-.03c-.084-.298-.368-.63-.954-.63-.778 0-1.259.555-1.259 1.4v.528c0 .892.49 1.434 1.26 1.434.471 0 .896-.227 1.014-.643h.043c.118.42.617.648 1.12.648m-2.453-1.588v-.227c0-.546.227-.791.573-.791.297 0 .572.192.572.708v.367c0 .573-.253.744-.564.744-.354 0-.581-.215-.581-.8Z"/>
              </svg>
              <svg 
              onClick={() => {
                window.open('https://www.instagram.com/thirafinajwan')
              }}
              xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
              </svg>
            </div>
          </div>
          <small>This page is a loose implementation of (and inspired by) this <a target='_blank' href='https://dribbble.com/shots/16484193-Personal-Portofolio-Landing-Page'>Dribble Design</a>.
          </small>
        </div>
      </div>
      <div className="tools-bg" ref={toolref}>
        <div className='tools'>
          <div className="tools-text">
            <h1>Tools That I am<br />Familiar With</h1>
            <p>Here are some of the tools that I use frequently. A more complete tools that I'm using are listed in my GitHub profile.</p>
            <button
            onClick={() => {
              window.open('https://www.github.com/reverseon')
            }}
            >See My GitHub</button>
          </div>
          <div className="tools-icons">
            <div className="tools-icon">
              <div className="tools-title"><span>01.</span><span>Golang</span></div>
              <p>
                I am familiar with building REST APIs and microservices using Go. My go-to framework for REST API is Gin and for microservices is Fabric.
              </p>
            </div>
            <div className="tools-icon">
              <div className="tools-title"><span>02.</span><span>NodeJS</span></div>
              <p>
                I have experience in building REST APIs using NodeJS with TypeScript. Especially using NestJS and ExpressJS frameworks. 
              </p>
            </div>
            <div className="tools-icon">
              <div className="tools-title"><span>03.</span><span>Linux</span></div>
              <p>
                I am familiar with Linux and have experience in setting up and maintaining Linux servers. I mainly use Ubuntu but any debian-based distro is fine.
              </p>
            </div>
            <div className="tools-icon">
              <div className="tools-title"><span>04.</span><span>Cloud Infrastructure</span></div>
              <p>
                I am certified Google Cloud Associate Cloud Engineer.
                I have experience in setting up and maintaining cloud infrastructure using AWS and GCP. 
              </p>
            </div>
            <div className="tools-icon">
              <div className="tools-title"><span>05.</span><span>Databases</span></div>
              <p>
                I am familiar with using SQL and NoSQL databases in a projects. I have experience in using PostgreSQL, MySQL, Microsoft SQL Server, and MongoDB.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="projects-bg" ref={projectref}>
        <div className="projects">
          <div className="projects-text">
            <h1>My Personal Projects</h1>
            <p>Here are some of the projects that I've worked on. A more complete list of projects can be found in my <a target='_blank' href='https://www.github.com/reverseon'>GitHub</a> profile.</p>
          </div>
          <div className="projects-cards">
            <div className="project-card">
              <div className="image-container">
                <img src={image_plus} alt="Image Plus Icon" />
              </div>
              <h1>Image Hosting Service</h1>
              <h3>img.thr.fi</h3>
              <h5>Built using Serverless Technology (Cloudflare Workers and R2)</h5>
              <p>
              My attempt to implement MVC architecture in serverless environment. Using Cloudflare R2 to store the image and Cloudflare Workers to serve the Webpage. The source is available on my GitHub. 
              </p>
              <button
              onClick={() => {
                window.open('https://img.thr.fi')
              }}
              >
                Visit Web
              </button>
            </div>
            <div className="project-card">
              <div className="image-container">
                <img src={link} alt="Internet Icon" />
              </div>
              <h1>URL Shortener</h1>
              <h3>thr.fi</h3>
              <h5>Built using Gin (Golang), Redis, and React.</h5>
              <p>
                This is a simple URL shortener service that I built using Golang and Redis. The frontend is built using React. It has authentication as well as management for the shortened URLs. The source is available on my GitHub.
              </p>
              <button
              onClick={() => {
                window.open('https://thr.fi')
              }}
              >
                Visit Web
              </button>
            </div>
            <div className="project-card">
              <div className="image-container">
                <img src={pastebin} alt="Pastebin Icon" />
              </div>
              <h1>Self-contained Pastebin</h1>
              <h3>scpbin.thr.fi</h3>
              <h5>Built completely using React</h5>
              <p>
                This is a simple pastebin service that I built using pReact. It is a self-contained pastebin service that doesn't require any backend. The source is available on my GitHub.
              </p>
              <button
              onClick={() => {
                window.open('https://scpbin.thr.fi')
              }}
              >
                Visit Web
              </button>
            </div>
            <div className="project-card">
              <div className="image-container">
                <img src={consensus} alt="Consensus Icon" />
              </div>
              <h1>Raft Protocol Implementation</h1>
              <h3>github.com/reverseon/raft-implementation-rust</h3>
              <h5>Built using Actix (Rust) and gRPC</h5>
              <p>
                This is a simple implementation of the Raft Consensus Protocol in Rust. It is built using Actix for the server and gRPC for the communication between the nodes. The source is available on my GitHub.
              </p>
              <button
              onClick={() => {
                window.open('https://github.com/reverseon/raft-implementation-rust')
              }}
              >
                Visit Repository
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bg">
        <p className="footer">
          Made in 2024. Inspired by this <a target='_blank' href='https://dribbble.com/shots/16484193-Personal-Portofolio-Landing-Page'>Dribble Design</a>. All Icons provided by <a target='_blank' href='https://svgrepo.com'>SVGRepo</a>.
        </p>
      </div>
    </main>
    </>
  )
}
