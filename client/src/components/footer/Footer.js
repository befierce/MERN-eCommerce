import './Footer.css';

const Footer = () => {
    return <div className="footer_container">
        <div className="footer_container_inner">
            <div className="social-icons">
                <a href="https://instagram.com" target="_blank"><i class="fab fa-instagram"></i></a>
                <a href="https://github.com" target="_blank"><i class="fab fa-github"></i></a>
                <a href="https://twitter.com" target="_blank"><i class="fab fa-twitter"></i></a>
                <a href="https://facebook.com" target="_blank"><i class="fab fa-facebook"></i></a>
            </div>
        </div>
        <div class="copyright_container">
            <i class="fas fa-copyright"></i> Manoj bhatt

        </div>

    </div>
}

export default Footer;