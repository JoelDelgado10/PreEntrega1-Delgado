import Logo from '../../assets/Logo.png';
import ScrollToTop from "react-scroll-to-top";

const Footer = () => {
    return (
        <footer className="footer">
            <img src={Logo} alt="Logo"></img>
            <p>Proyecto creado por Joel Delgado <i className="fa-solid fa-heart fa-2xs"></i> </p>
            <div></div>
            <ScrollToTop smooth className='btnScrollUp' />
        </footer>
    )
}

export default Footer;