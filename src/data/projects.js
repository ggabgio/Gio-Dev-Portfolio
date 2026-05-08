import wispImg from "../assets/images/wispscreenshotgameplay.png"
import wispImg2 from "../assets/images/wispscreenshotgameplay2.png"
import wispImg3 from "../assets/images/wispscreenshotgameplay3.png"
import wispImg4 from "../assets/images/wispscreenshotgameplay4.png"
import wispImg5 from "../assets/images/wispscreenshotgameplay5.png"
import wispImg6 from "../assets/images/wispscreenshotgameplay6.png"
import wispImg7 from "../assets/images/wispscreenshotgameplay7.png"
import wispImg8 from "../assets/images/wispscreenshotgameplay8.png"
import wispWeb1 from "../assets/images/wispwebapp1.png"
import wispWeb2 from "../assets/images/wispwebapp2.png"
import wispWeb3 from "../assets/images/wispwebapp3.png"
import wispWeb4 from "../assets/images/wispwebapp4.png"
import wispWeb5 from "../assets/images/wispwebapp5.png"
import wispWeb6 from "../assets/images/wispwebapp6.png"
import wispWeb7 from "../assets/images/wispwebapp7.png"
import wispWeb8 from "../assets/images/wispwebapp8.png"
import wispWeb9 from "../assets/images/wispwebapp9.png"

export const projects = [
  {
    title: "WISP-SIMULATOR",
    description: `WISP-SIMULATOR is a 3D first-person game-based training and assessment system designed for Wireless Internet Service Providers (WISPs).
    
    It provides a virtual environment where users can learn, practice, and evaluate real-world WISP installation and maintenance procedures without requiring physical equipment.`,
    tech: ["C#", "Firebase", "Unity"],
    images: [wispImg3, wispImg2, wispImg, wispImg4, wispImg5, wispImg6, wispImg7, wispImg8],
    github: "https://github.com/ggabgio/WISP-SIMULATOR",
    youtube: "https://youtu.be/xPAjKFVzRaY"
  },
  {
    title: "WISP-SIMULATOR COMPANION WEB APP",
    description: `This system complements the WISP Training Simulator by providing a centralized platform for storing, monitoring, and reviewing user training results.
    
    It allows instructors or administrators to evaluate trainee/employee performance while allowing users to monitor their own progress.`,
    tech: ["HTML", "CSS", "JavaScript", "Firebase"],
    images: [wispWeb1, wispWeb2, wispWeb3, wispWeb4, wispWeb5, wispWeb6, wispWeb7, wispWeb8, wispWeb9],
    github: "https://github.com/ggabgio/WISP-Simulator-Companion-WebApp",
    live: "https://wispsim-030-c1718.web.app/"
  },

  {
    title: "Coming Soon",
    description: "More projects currently in development.",
    tech: ["TBD"],
    images: null,
    github: null,
  }
];