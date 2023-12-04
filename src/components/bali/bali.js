import Header from "../Header/header";
import Footer from "../footer/footer";
import './bali.css'
const Bali = () => {
    return(
        <div>
            <Header/>
            <div className="bali-card">
                <h1 className="bali-heading">Bali</h1>
                <p className="para-bali">Explore the Beauty of Bali</p>
            </div>
            <div className="bali-inner-container">
                <h1 className="bali-wel-heading">Welcome to Bali!</h1>
                <p>Bali, an Indonesian island known for its forested volcanic mountains, iconic rice paddies, beaches, and coral reefs. Immerse yourself in the vibrant culture, lush landscapes, and spiritual ambiance of Bali.</p>
                <h1 className="bali-wel-heading">Explore Bali's Natural Wonders</h1>
                <div className="bali-city-container">
                    <div>
                        <img src="https://placehold.co/400x300/EFEFEFF/grey?text=Ubud" alt="Ubud"/>
                        <p className="text-para">Visit the cultural heart of Bali in Ubud, surrounded by lush rice terraces and traditional crafts.</p>
                    </div>
                    <div>
                        <img src="https://placehold.co/400x300/EFEFEFF/grey?text=Kuta" alt="Kuta"/>
                       <p className="text-para">Experience the vibrant nightlife and famous beaches in Kuta, perfect for surf enthusiasts and sun-seekers.</p>
                    </div>
                </div>
                <h1 className="bali-wel-heading">Immerse Yourself in Balinese Culture</h1>
                <p>Participate in traditional ceremonies, witness captivating dance performances, and savor the unique flavors of Balinese cuisine.</p>
            </div>
            <Footer/>
        </div>
    );
}

export default Bali