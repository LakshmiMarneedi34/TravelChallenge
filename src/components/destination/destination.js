import { useNavigate } from "react-router-dom";
import Header from "../Header/header";
import Footer from "../footer/footer";
import './destination.css'
const Destination = () => {
    const Navigate=useNavigate();


    const ItalyNavigate=()=> {
        Navigate("/italy")
    }

    const TokyoOnclick=()=>{
        Navigate("/tokyo")
    }

    const BaliOnclick=()=>{
        Navigate("/bali")
    }

    const RomeOnclick=()=>{
        Navigate("/rome")
    }

    return(
        <div>
            <Header/>
            <div className="desgination">
            <h1>Explore Our Destinations</h1>
            </div>
            <div className="desgination-container">
            <div className='cards-container'>
            <div className='card-container'>
                <img className='image' src="https://placehold.co/400x300/EFEFEFF/grey?text=Italy" alt="Italy"/>
                <div className='card'>
                    <h1 className='head'>Italy</h1>
                    <p>Discover the beauty of Italy.</p>
                    <button type="button" className='button'onClick={ItalyNavigate}>Learn More</button>
                </div>
            </div>
            <div className='card-container'>
                <img className='image' src="https://placehold.co/400x300/EFEFEFF/grey?text=Tokyo" alt="Tokyo"/>
                <div className='card'>
                    <h1 className='head'>Tokyo</h1>
                    <p>Discover the beauty of Tokyo.</p>
                    <button type="button" onClick={TokyoOnclick} className='button'>Learn More</button>
                </div>
            </div>
            <div className='card-container'>
                <img className='image' src="https://placehold.co/400x300/EFEFEFF/grey?text=Bali" alt="Bali"/>
                <div className='card'>
                    <h1 className='head'>Bali</h1>
                    <p>Discover the beauty of Bali.</p>
                    <button type="button" onClick={BaliOnclick} className='button'>Learn More</button>
                </div>
            </div>
            <div className='card-container'>
                <img className='image' src="https://placehold.co/400x300/EFEFEFF/grey?text=Rome" alt="Rome"/>
                <div className='card'>
                    <h1 className='head'>Rome</h1>
                    <p>Discover the beauty of Rome.</p>
                    <button type="button" onClick={RomeOnclick}  className='button'>Learn More</button>
                </div>
            </div>
       </div>
            </div>
            <Footer/>
            
        </div>
    )
}

export default Destination