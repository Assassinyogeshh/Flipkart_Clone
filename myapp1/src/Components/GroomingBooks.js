import React, { useState } from 'react';
import '../Components Css/ItmesContainer.css'
import '../Components Css/HomeKItchenEssen.css'
import { Link } from 'react-router-dom';

function GroomingBooks() {
    const [slidePosition, setSlidePosition] = useState(0);
    const [display, setDisplay] = useState({ firstbtn: 'none', secondBtn: 'flex' });
    let backBtn = display.firstbtn;
    let nxtBtn = display.secondBtn;
    const [count, setCount] = useState(0);








    const previousBtn = () => {
        setCount(prevCount => prevCount - 1);

        if (count === 1) {
            setDisplay((nxtSet) => ({
                ...nxtSet,
                firstbtn: 'none',
            }))
        }
        if (count === 2) {
            setDisplay((nxtSet) => ({
                ...nxtSet,
                secondBtn: 'flex',
            }))
        }

        let updatedPosition = slidePosition + 19;
        setSlidePosition(updatedPosition);

    };

    const nextBtn = () => {

        setCount(prevCount => prevCount + 1);


        if (count === 0) {
            setDisplay((nxtSet) => ({
                ...nxtSet,
                firstbtn: 'flex',
            }))
        }

        if (count === 1) {
            setDisplay((prevState) => ({
                ...prevState,
                secondBtn: 'none',
            }))
        }


        let updatedPosition = slidePosition - 19;
        setSlidePosition(updatedPosition);




    };



    return (
        <>




            <div className="HomeKitchen_Essentials">
                <div className="Homwview_all">
                    <h4>Grooming Books & More</h4>
                    <Link className='removelinkStyle' to="/Grooming-Explore">
                        <button >View All</button>
                   </Link>

                    <img src="Grooming Books , Auto & more/ViewKItchen.webp" alt="" />
                </div>
                <div className="HomeKitchenProducts">
                    <div className='Homeback_btn' onClick={previousBtn} style={{ display: backBtn }}>
                        <img src="item_arrow.png" alt="" />
                    </div>




                    <ul className="HomeKitchenItem" style={{ transform: `translateX(${slidePosition}%)` }}>
                       <Link className='removelinkStyle' to={'/Grooming-Explore/GB17'}>
                        <li className="elctric_product" >

                            <img src="Grooming Books , Auto & more/Pens.webp" alt="" />
                            <div className="item_details">
                                <p className='item_head'>Pens</p>
                                <p className='green'>Shop Now</p>
                                <p className='gray'>Buy Now</p>
                            </div>
                        </li>
                         </Link>


                         <Link className='removelinkStyle' to={'/Grooming-Explore/GB4'}>
                        <li className="elctric_product">
                            <img src="Grooming Books , Auto & more/remoteCars.webp" alt="" />
                            <div className="item_details">

                                <p className='item_head'>Remote Control Cars</p>
                                <p className='green'>From ₹199</p>
                                <p className='gray'>Shop Now</p>
                            </div>
                        </li>
                         </Link>

                         <Link className='removelinkStyle' to={'/Grooming-Explore/GB6'}>
                        <li className="elctric_product">
                            <img src="Grooming Books , Auto & more/BatmenMdel.webp" alt="" />
                            <div className="item_details">

                                <p className='item_head'>Batmen Model</p>
                                <p className='green'>From ₹99</p>
                                <p className='gray'>Shop Now</p>
                            </div>
                        </li>
                         </Link>

                         <Link className='removelinkStyle' to={'/Grooming-Explore/GB6'} style={{height:'90%'}}>
                        <li className="elctric_product">
                            <img src="Grooming Books , Auto & more/teady.webp"style={{height:'46%'}} alt="" />
                            <div className="item_details">

                                <p className='item_head'>Teady</p>
                                <p className='green'>From ₹299</p>
                                <p className='gray'>Buy Now</p>
                            </div>
                        </li>
                         </Link>

                         <Link className='removelinkStyle' to={'/Grooming-Explore/GB7'}>
                        <li className="elctric_product">
                            <img src="Grooming Books , Auto & more/Cycle1.webp" alt="" />
                            <div className="item_details">

                                <p className='item_head'>Cycle</p>
                                <p className='green'>Shop Now</p>
                                <p className='gray'>Buy Now</p>
                            </div>
                        </li>
                         </Link>

                         <Link className='removelinkStyle' to={'/Grooming-Explore/GB20'}>
                        <li className="elctric_product">
                            <img src="Grooming Books , Auto & more/CarWasher.webp"  alt="" />
                            <div className="item_details">

                                <p className='item_head'>Car Washer</p>
                                <p className='green'>Shop Now</p>
                                <p className='gray'>Buy Now</p>
                            </div>
                        </li>
                         </Link>

                         <Link className='removelinkStyle' to={'/Grooming-Explore/GB2'}>
                        <li className="elctric_product">
                            <img src="Grooming Books , Auto & more/TradMill.webp" alt="" />
                            <div className="item_details">

                                <p className='item_head'>TreadMill</p>
                                <p className='green'>From ₹10999</p>
                                <p className='gray'>Shop Now</p>
                            </div>
                        </li>
                         </Link>

                         <Link className='removelinkStyle' to={'/Grooming-Explore/GB13'}>
                        <li className="elctric_product">
                            <img src="Grooming Books , Auto & more/Helmet.webp" alt="" />
                            <div className="item_details">

                                <p className='item_head'>Helmet</p>
                                <p className='green'>From ₹799</p>
                                <p className='gray'>Buy Now</p>
                            </div>
                        </li>
                         </Link>

                    </ul>


                    <div className='Homeforwd_btn' onClick={nextBtn} style={{ display: nxtBtn }} >
                        <img src="item_arrow.png" alt="" />

                    </div>
                </div>


               

            </div>
      
    </>
  )
}

export default GroomingBooks
