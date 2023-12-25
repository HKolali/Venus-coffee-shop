import './Facility.css'
import FacilityItem from './FacilityItem';

function Facility(){
    let facilities = [
        {image: "./images/facility/facility-1.png", title: "Ready To Go Coffee", description:"Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Error, Eaque."},
        {image: "./images/facility/facility-2.png", title: "Breakfast And Sweets", description:"Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Error, Eaque."},
        {image: "./images/facility/facility-3.png", title: "Coffee Beans", description:"Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Error, Eaque."},
        {image: "./images/facility/facility-4.png", title: "Varieties Of Coffees", description:"Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Error, Eaque."}
    ];

    return(
        <div className="facility">
            <div className="facility__header">
                <img src="./images/heading.png" alt="" className="facility__header-image"/>
                <h3 className="facility__header-title">Our Facility</h3>
            </div>
            <div className="facility__content">
                <FacilityItem {...facilities[0]}/>
                <FacilityItem {...facilities[1]}/>
                <FacilityItem {...facilities[2]}/>
                <FacilityItem {...facilities[3]}/>
            </div>
        </div>
    );
}

export default Facility;