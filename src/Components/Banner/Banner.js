import './Banner.css'

function Banner() {
    return (
        <div className="banner">
            <div className="banner__content">
                <h1 className="banner__title">Coffee Venus</h1>
                <p className="banner__description">Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. <br /> Voluptas Reprehenderit Fugit Temporibus Molestias Fuga Repellat.</p>
                <a className="banner__btn-link">About Us</a>
            </div>
        </div>
    );
}

export default Banner;