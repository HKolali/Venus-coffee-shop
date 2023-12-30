import './ContactUs.css'
import HeaderSection from '../HeaderSection/HeaderSection'

function ContactUs(){
    return(
        <div className="contact-us">
            <HeaderSection title='Contact Us' />
            <div className="contact-us__content">
            <div className="contact-us__content-left">
                    <img src="./images/contact/contact.svg" alt="contact Image" className="contact-us__content-left-image" />
                </div>
                <div className="contact-us__content-right">
                    
                </div>
            </div>
        </div>
    );
}

export default ContactUs;