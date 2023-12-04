import {useNavigate} from 'react-router-dom'
import {useState} from 'react'
import './header.css'

const Header = () => {
    const [homeActive,setHomeActive] = useState(false);
    const [DestiantionActive,setDestianationActive] =  useState(false);
    const [report,setReport] = useState(false);
    const Navigate=useNavigate();

    const homeOnclick=()=> {
        Navigate("/");
        setHomeActive(true);
        
    }

    const destinationOnclick = () => {
        Navigate("/destination")
        setDestianationActive(true)
        
        
    }

    const reportOnclick = () => {
        Navigate("/report")
        setReport(true);
        
    }

    const classNamebtn = homeActive? 'white-button' : '';
    const DestinantionClass = DestiantionActive ? 'white-button':'';
    const classReport = report? 'white-button' : '';
    return(
            <nav className='nav-container'>
            <h1 className='nav-heading'>TravelBae</h1>
            <div>
                <button className={`button-elements ${classNamebtn}`} type="button" onClick={homeOnclick}>
                    Home
                </button>
                <button className={`button-elements ${DestinantionClass}`} type="button" onClick={destinationOnclick}>destination</button>
                <button className={`button-elements ${classReport}`} type="button" onClick={reportOnclick}>report</button>
            </div>
            </nav>
    )
}

export default Header