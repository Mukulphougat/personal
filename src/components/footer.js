import GitHub from "../images/github.png"
import LinkedIn from "../images/linkedin.png"
function Footer() {
    return (
        <section class="footer">
            <div class="profile-links">
                <a href="https://www.linkedin.com/in/mukul-phougat-602657193/" target="_blank" class="profile"><img src={LinkedIn} width={40}/></a>
                <a href="https://github.com/Mukulphougat" target="_blank" class="profile"><img src={GitHub} width={40}/></a>
            </div>
            <section class="other-info">
                <h2 class="name">Created by Mukul Phougat</h2>
                <a href="tel:+917206301728">+91-7206301728</a>
            </section>
        </section>
    )
}
export default Footer;
