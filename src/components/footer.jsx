import { FiGithub, FiLinkedin, FiInstagram } from "react-icons/fi";
import "../styles/footer.css";

const Footer = () => {
    return (
        <footer id="contact" className="footer">
            
            <div className="footer-container">

                {/* DL CV button*/}
                <div className="footer-left">
                    <a href="/GABRIEL-CV.pdf" download className="cv-button">
                    Download CV 
                    </a>
                </div>
                {/* Copyrights */}
                <div className="footer-center">
                    ©{new Date().getFullYear()} Leogelio Gabriel. All Rights Reserved.
                </div>
                {/* Social Links */}
                <div className="footer-right">
                    <a href="https://github.com/ggabgio" target="_blank" rel="noreferrer">
                    <FiGithub />
                    </a>
                    
                    <a href="https://www.linkedin.com/in/leogelio-gabriel-00g123/" target="_blank" rel="noreferrer">
                    <FiLinkedin />
                    </a>

                    <a href="https://www.instagram.com/_ggabgio/" target="_blank" rel="noreferrer">
                    <FiInstagram />
                    </a>
                </div>
            </div>
        </footer>
    );
};
export default Footer;