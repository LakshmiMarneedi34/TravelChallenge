import Header from "../Header/header";
import Footer from "../footer/footer";
import './rome.css'
const Rome = () => {
    return(
        <div>
            <Header/>
            <div className="rome-card">
                <h1 className="rome-heading">Rome</h1>
                <p className="para-rome">Explore the Beauty of Rome</p>
            </div>
            <div className="rome-inner-container">
                <h1 className="rome-wel-heading">Welcome to Rome!</h1>
                <p>Rome, the capital city of Italy, is a treasure trove of history, art, and culture. From ancient wonders like the Colosseum to the splendor of the Vatican City, Rome is a destination that captivates visitors with its timeless beauty.</p>
                <h1 className="rome-wel-heading">Explore the Rich History</h1>
                <div className="rome-city-container">
                    <div>
                        <img src="https://placehold.co/400x300/EFEFEFF/grey?text=Colosseum" alt="Colosseum"/>
                        <p className="text-para">Step back in time as you visit the iconic Colosseum, a symbol of ancient Roman engineering and entertainment.</p>
                    </div>
                    <div>
                        <img src="https://placehold.co/400x300/EFEFEFF/grey?text=RomanForum" alt="RomanForum"/>
                       <p className="text-para">Explore the ruins of the Roman Forum, where political, religious, and commercial activities once thrived.</p>
                    </div>
                </div>
                <h1 className="rome-wel-heading">Experience Vatican City</h1>
                <p>Discover the artistic and spiritual treasures of Vatican City, including St. Peter's Basilica and the Sistine Chapel.</p>
            </div>
            <Footer/>
        </div>
    );
}

export default Rome