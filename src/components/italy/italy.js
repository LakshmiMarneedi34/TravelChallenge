import Header from "../Header/header";
import Footer from "../footer/footer";
import './italy.css'
const Italy = () => {
    return(
        <div>
            <Header/>
            <div className="italy-card">
                <h1 className="italy-heading">Italy</h1>
                <p className="para-italy">Explore the Beauty of Italy</p>
            </div>
            <div className="italy-inner-container">
                <h1 className="welcome-heading">Welcome to Italy!</h1>
                <p>Italy, a country in Southern Europe, is known for its rich history, art, culture, and cuisine. From the ancient ruins of Rome to the beautiful canals of Venice, Italy offers a diverse and enchanting experience for travelers.</p>
                <h1 className="welcome-heading">Discover the Charm of Italian Cities</h1>
                <div className="city-container">
                    <div>
                        <img src="https://placehold.co/400x300/EFEFEFF/grey?text=Rome" alt="Rome"/>
                        <p>Explore the historic streets of Rome and marvel at iconic landmarks like the Colosseum and Vatican City.</p>
                    </div>
                    <div>
                        <img src="https://placehold.co/400x300/EFEFEFF/grey?text=Venice" alt="Rome"/>
                       <p>Experience the romantic atmosphere of Venice with its charming canals and historic architecture.</p>
                    </div>
                </div>
                <h1 className="welcome-heading">Savor Italian Cuisine</h1>
                <p>Indulge in the delicious flavors of Italian cuisine, from authentic pasta and pizza to exquisite wines and gelato.</p>
            </div>
            <Footer/>
        </div>
    );
}

export default Italy