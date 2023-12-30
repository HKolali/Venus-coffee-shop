import './Facility.css'
import FacilityItem from './FacilityItem';
import HeaderSection from '../HeaderSection/HeaderSection';

function Facility(){
    let facilities = [
        {id: 1, image: "./images/facility/facility-1.png", title: "Ready To Go Coffee", description:"Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Error, Eaque."},
        {id: 2, image: "./images/facility/facility-2.png", title: "Breakfast And Sweets", description:"Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Error, Eaque."},
        {id: 3, image: "./images/facility/facility-3.png", title: "Coffee Beans", description:"Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Error, Eaque."},
        {id: 4, image: "./images/facility/facility-4.png", title: "Varieties Of Coffees", description:"Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Error, Eaque."}
    ];

    return(
        <div className="facility">
            <HeaderSection title='Our Facility'/>
            <div className="facility__content">
                {facilities.map((facility) => {
                    return <FacilityItem key={facility.id} {...facility}/>
                })}
            </div>
        </div>
    );
}

export default Facility;