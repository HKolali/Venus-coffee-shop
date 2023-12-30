import './Footer.css'
import FooterItem from './FooterItem';

function Footer() {
    let footerItems = [
        { id: 1, image: "./images/footer/envelop.png", title: "Our Email", description: "kolali.hossein@gmail.com" },
        { id: 2, image: "./images/footer/working-hours.png", title: "Opening Hours", description: "07:30am To 09:00pm" },
        { id: 3, image: "./images/footer/location.png", title: "Shop Location", description: "Tehran, Punak" },
        { id: 4, image: "./images/footer/phone-call.png", title: "Our Number", description: "+98 9378318021" }
    ];

    return (
        <div className="footer">
            <div className="footer__content">
                {footerItems.map((footerItem) => {
                    return <FooterItem key={footerItem.id} {...footerItem} />
                })}
            </div>
            <div className="footer__privacy">
                <p className="footer__privacy-text">© Copyright @ 2023 By <span>Abdolhossein Kolali</span> | All Rights Reserved!</p>
            </div>
        </div>
    );
}

export default Footer;