import './TeamItem.css'

function TeamItem({ image, title }) {
    return (
        <div className="team-item">
            <div className="team-item__employee">
                <img src={image} alt="" className='team-item__employee-image' />
                <div class="layer">
                </div>
                <div className="team-item__employee-social">
                    <img src="./images/icon/instagram.png" alt="instagram" className="team-item__employee-social-icon" id='instagram' />
                    <img src="./images/icon/linkedin.png" alt="linkedin" className="team-item__employee-social-icon" id='linkedin' />
                    <img src="./images/icon/telegram.png" alt="telegram" className="team-item__employee-social-icon" id='telegram' />
                    <img src="./images/icon/whatsapp.png" alt="whatsapp" className="team-item__employee-social-icon" id='whatsapp' />
                </div>
            </div>
            <h3 className="team-item__title">{title}</h3>
        </div>
    );
}

export default TeamItem;