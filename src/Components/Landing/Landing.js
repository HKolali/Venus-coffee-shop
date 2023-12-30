import './Landing.css'

function Landing(){
    return(
        <div className="landing">
            <div className="landing__content">
            <div className="landing__content-left">
                    <img src="./images/landing/landing.svg" alt="Landing Image" className="landing__content-left-image" />
                </div>
                <div className="landing__content-right">
                    <h2 className="landing__content-right-title">A Cup Of Coffee Can <br/> Complete Your Day</h2>
                    <p className="landing__content-right-description">Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Quaerat Qui Alias Velit <br/> Recusandae. Repellendus Perferendis Ipsum At Sit Ducimus Nisi Exercitationem <br/> Ipsam, Cumque Consectetur Autem Impedit Non Fugiat Suscipit Totam!</p>
                    <a href='#' className="landing__content-right-btn">Our Menu</a>
                </div>
            </div>
        </div>
    );
}

export default Landing;