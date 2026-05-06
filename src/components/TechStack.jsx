import react from "../assets/icons/react.svg";
import html5 from "../assets/icons/html5.svg";
import css from "../assets/icons/css.svg";
import js from "../assets/icons/JS.svg";
import nodeJS from "../assets/icons/nodeJS.svg"
import firebase from "../assets/icons/firebase.svg"
import python from "../assets/icons/python.svg"
import unity from "../assets/icons/unity.svg"
import githubwhite from "../assets/icons/githubwhite.svg"
import photoshop from "../assets/icons/photoshop.svg"
import premiere from "../assets/icons/premiere.svg"
import canva from "../assets/icons/canva.svg"
import csharp from "../assets/icons/csharp.svg"


const techs = [
    { name: "", icon: <img src={html5} alt="HTML5" className="svg-icon" /> },
    { name: "", icon: <img src={css} alt="CSS" className="svg-icon" /> },
    { name: "", icon: <img src={js} alt="JS" className="svg-icon" /> },
    { name: "", icon: <img src={react} alt="React" className="svg-icon" /> },
    { name: "", icon: <img src={csharp} alt="C#" className="svg-icon" /> },
    { name: "", icon: <img src={nodeJS} alt="NodeJS" className="svg-icon" /> },
    { name: "", icon: <img src={firebase} alt="Firebase" className="svg-icon" /> },
    { name: "", icon: <img src={python} alt="Py" className="svg-icon" /> },
    { name: "", icon: <img src={unity} alt="Unity Engine" className="svg-icon" /> },
];

const tools = [
    { name: "", icon: <img src={githubwhite} alt="GitHub" className="svg-icon" /> },
    { name: "", icon: <img src={photoshop} alt="AdobePS" className="svg-icon" /> },
    { name: "", icon: <img src={premiere} alt="AdobePR" className="svg-icon" /> },
    { name: "", icon: <img src={canva} alt="Canva" className="svg-icon" /> },
];

const TechStack = () => {
    return(
        <div className="tech-stack">
            <div className="stack-section">
                <h3 className = "techs-title">Technologies</h3>
                <div className="tech-row">
                    {techs.map((tech, index) => (
                        <div key={index} className="tech-item">
                            {tech.icon}
                            <span>{tech.name}</span>
                        </div> 
        ))}
        </div>
    </div>

    <div className = "tools-section">
        <h3 className = "tools-title">Tools</h3>
    <div className = "tech-row tools">
        {tools.map((tool, index) => (
            <div key={index}className="tech-item">
                {tool.icon}
                <span>{tool.name}</span>
            </div>
        ))}
        </div>
    </div>
  </div>

    );
};

export default TechStack;



