import OffcanvasExample from "../Component/OffcanvasExample";
import Done from '../assets/Done.png'
import Pay from '../assets/Pay.png'
import Discount from '../assets/Discount.png'

function Home() {
    return (
        <>
            <section>
            <div className="section-2">
                <div className="section-3">
                    <OffcanvasExample/>
                </div>
            </div>
            </section>
            <div className="section-1">
                <div className="section-2">
                    <div className="section-3">
                        <div className="non">
                            <div className="buy">
                                <h1><span>Buy Or Sell A Home</span> <br /> Of Your Choice With Us.</h1>
                            </div>
                            <div className="have">
                                <p>Have you ever wondered what type of house to buy? Or how to go about selling your houses. Property<span>Pro</span> is here to make things easier for you.</p>
                            </div>
                            <div className="start">
                                <button className="get">Get Started</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="last-1">
                    	<div className="grid-1">
                            <div className="one">
                                <div className="one-1"> <img src={Done} alt="" /></div>
                                <p>Certificate Of Occupancy</p>
                            </div>
                            <div className="one">
                                <div className="one-1"><img src={Pay} alt="" /></div>
                                <p>Easy Payment Method</p>
                            </div>
                            <div className="one">
                               <div className="one-1"> <img src={Discount} alt="" /></div>
                               <p>50% discount on every transaction you make.</p>
                            </div>
                       </div>      
                </div>
            </div>
        </>
        
    )
  }
  
  export default Home;
  