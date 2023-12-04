import { useNavigate } from 'react-router-dom';
import Header from '../Header/header';
import Footer from '../footer/footer';
import './home.css'

const Home = () => {
    const Navigate=useNavigate();

    const onClick = () => {
        Navigate("/destination")
    }

    const TokyoOnclick=()=>{
        Navigate("/tokyo")
    }

    const LearnOnClick = () => {
        Navigate("/italy")
    }

    const BaliOnClick = () => {
        Navigate("/bali")
    }

    return(
        <>
        <Header/>
        <div className='home-container'>
            <h1>Welcome to TravelBae</h1>
            <p>Explore exciting destinations with us!</p>
       </div>
       <div className='bottom-container'>
            <h1 className='text'>Featured Destinations</h1>
            <div className='cards-container'>
            <div className='card-container'>
                <img className='image' src="https://placehold.co/400x300/EFEFEFF/grey?text=Italy" alt="Italy"/>
                <div className='card'>
                    <h1 className='head'>Italy</h1>
                    <p>Discover the beauty of Italy.</p>
                    <button type="button" className='button' onClick={LearnOnClick}>Learn More</button>
                </div>
            </div>
            <div className='card-container'>
                <img className='image' src="https://placehold.co/400x300/EFEFEFF/grey?text=Tokyo" alt="Italy"/>
                <div className='card'>
                    <h1 className='head'>Tokyo</h1>
                    <p>Discover the beauty of Tokyo.</p>
                    <button type="button" onClick={TokyoOnclick} className='button'>Learn More</button>
                </div>
            </div>
            <div className='card-container'>
                <img className='image' src="https://placehold.co/400x300/EFEFEFF/grey?text=Bali" alt="Italy"/>
                <div className='card'>
                    <h1 className='head'>Bali</h1>
                    <p>Discover the beauty of Bali.</p>
                    <button type="button" onClick={BaliOnClick} className='button'>Learn More</button>
                </div>
            </div>
       </div>
       <h1 className='text'>Discover More</h1>
       <p>Explore our handpicked destinations and create memories that last a lifetime</p>
       <button className='btn' onClick={onClick}>View All Destinantion</button>
       </div>
       <Footer/>
        </>
    )
}

export default Home