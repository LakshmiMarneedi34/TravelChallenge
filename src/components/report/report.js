import Header from '../Header/header.js'
import Footer from '../footer/footer.js'
import './report.css'

const Report = () =>{
    return(
        <>
            <Header/>
                <div className='bg-container'>
                    <h1 className='main-heading'>Travel Report</h1>
                    <p className='short-para'>Explore insights and statistics about our travel destinations.</p>
                </div>
                <div className='white-container'>
                    <h1 className='destination-heading'>Destinations Overview</h1>
                    <p className='paragraph'>Here is a summary of key information about our travel destinations:</p>
                    <ul>
                        <li>Total number of destinations: 4</li>
                        <li>Most popular destination: Bali</li>
                        <li>Total number of visitors: 100</li>
                    </ul>
                    <h1 className='destination-heading'>Customer Feedback</h1>
                    <p className='paragraph'>Read what our customers have to say about their travel experiences:</p>
                    <ul className='list-item'>
                        <li>"I had an amazing time exploring Rome. The sights were breathtaking, and the people were so welcoming. Definitely a trip to remember!"</li>
                        <span className='span'>__John Doe</span>
                    </ul>
                    <ul className='list-item'>
                        <li>"The travel arrangements were seamless, and the recommended activities in Bali were spot on. Thank you for a fantastic experience!"</li>
                        <span className='span'>__Jane Smith</span>
                    </ul>
                </div>
            <Footer/>
        </>
    )
}

export default Report