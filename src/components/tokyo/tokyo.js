import Header from "../Header/header";
import Footer from "../footer/footer";
import './tokyo.css'
const Tokyo = () => {
    return(
        <div>
            <Header/>
            <div className="tokyo-card">
                <h1 className="tokyo-heading">Tokyo</h1>
                <p className="para-tokyo">Explore the Beauty of Tokyo</p>
            </div>
            <div className="tokyo-inner-container">
                <h1 className="tokyo-wel-heading">Welcome to Tokyo!</h1>
                <p>Tokyo, the capital city of Japan, is a vibrant metropolis where modernity and tradition coexist. From futuristic skyscrapers to historic temples, Tokyo offers a unique blend of experiences for every traveler.</p>
                <h1 className="tokyo-wel-heading">Explore Tokyo's Landmarks</h1>
                <div className="tokyo-city-container">
                    <div>
                        <img src="https://placehold.co/400x300/EFEFEFF/grey?text=Shibuya" alt="Shibuya"/>
                        <p className="text-para">Visit the iconic Shibuya Crossing, one of the busiest pedestrian crossings in the world.</p>
                    </div>
                    <div>
                        <img src="https://placehold.co/400x300/EFEFEFF/grey?text=Asakusa" alt="Asakusa"/>
                       <p className="text-para">Experience the traditional side of Tokyo in Asakusa, home to the historic Senso-ji Temple.</p>
                    </div>
                </div>
                <h1 className="tokyo-wel-heading">Indulge in Tokyo's Culinary Delights</h1>
                <p>Explore the diverse and delicious world of Japanese cuisine, from sushi and ramen to street food delights.</p>
            </div>
            <Footer/>
        </div>
    );
}

export default Tokyo