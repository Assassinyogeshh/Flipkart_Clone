import React, { useState } from 'react';
import '../Components Css/ItmesContainer.css'
import '../Components Css/HomeKItchenEssen.css'
import { Link } from 'react-router-dom';

function HomeKItchenEssen() {


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

                    <h4>Home & Kitchen Essentials</h4>
                    <Link className='removelinkStyle' to="/Kitchen-Explore">
                        <button >View All</button>
                    </Link>

                    <img src="/Home & Kitchen Essentials/ViewKItchen.webp" alt="" />
                </div>
                <div className="HomeKitchenProducts">
                    <div className='Homeback_btn' onClick={previousBtn} style={{ display: backBtn }}>
                        <img src="item_arrow.png" alt="" />
                    </div>


                    <ul className="HomeKitchenItem" style={{ transform: `translateX(${slidePosition}%)` }}>



                        <Link className='removelinkStyle' to="/Kitchen-Explore/HK3">

                            <li className="elctric_product" >

                                <img src="/Home & Kitchen Essentials/Clock.webp" alt="" />
                                <div className="item_details">
                                    <p className='item_head'>Clock</p>
                                    <p className='green'>From ₹399</p>
                                    <p className='gray'>Buy Now</p>
                                </div>
                            </li>
                        </Link>

                        <Link className='removelinkStyle' to="/Kitchen-Explore/HK2">

                            <li className="elctric_product">
                                <img src="/Home & Kitchen Essentials/Power&HandTool Kit.webp" alt="" />
                                <div className="item_details">

                                    <p className='item_head'>Power & Hand Tool Kit</p>
                                    <p className='green'>From ₹549</p>
                                    <p className='gray'>Buy Now</p>
                                </div>
                            </li>
                        </Link>
                        <Link className='removelinkStyle' to="/Kitchen-Explore/HK5">

                            <li className="elctric_product">
                                <img src="/Home & Kitchen Essentials/ShowPiece.webp" alt="" />
                                <div className="item_details">

                                    <p className='item_head'>Show Piece</p>
                                    <p className='green'>From 299</p>
                                    <p className='gray'>Top Rated</p>
                                </div>
                            </li>
                        </Link>
                        <Link className='removelinkStyle' to="/Kitchen-Explore/HK15">

                            <li className="elctric_product">
                                <img src="/Home & Kitchen Essentials/Matteres Protectors.webp" alt="" />
                                <div className="item_details">

                                    <p className='item_head'>Matteres Protectors</p>
                                    <p className='green'>Shop Now</p>
                                    <p className='gray'>Buy Now</p>
                                </div>
                            </li>
                        </Link>
                        <Link className='removelinkStyle' to="/Kitchen-Explore/HK14">

                            <li className="elctric_product">
                                <img className='smallImg' src="/Home & Kitchen Essentials/diyas.jpg" alt="" />
                                <div className="item_details">

                                    <p className='item_head'>Mosquito Notes</p>
                                    <p className='green'>From ₹1,649</p>
                                    <p className='gray'>Buy Now</p>
                                </div>
                            </li>
                        </Link>
                        <Link className='removelinkStyle' to="/Kitchen-Explore/HK9">

                            <li className="elctric_product">
                                <img src="/Home & Kitchen Essentials/Plants.webp" alt="" />
                                <div className="item_details">

                                    <p className='item_head'>Plants</p>
                                    <p className='green'>From ₹99</p>
                                    <p className='gray'>Buy Now</p>
                                </div>
                            </li>
                        </Link>
                        <Link className='removelinkStyle' to="/Kitchen-Explore/HK6">

                            <li className="elctric_product">
                                <img src="/Home & Kitchen Essentials/LivePlant.webp" alt="" />
                                <div className="item_details">

                                    <p className='item_head'>Live Plants</p>
                                    <p className='green'>Shop Now</p>
                                    <p className='gray'>Buy Now</p>
                                </div>
                            </li>
                        </Link>
                        <Link className='removelinkStyle' to="/Kitchen-Explore/HK4">

                            <li className="elctric_product">
                                <img className='smallImg' src="/Home & Kitchen Essentials/wall decor.jpg" alt="" />
                                <div className="item_details">

                                    <p className='item_head'>Sanitizer Sprayers</p>
                                    <p className='green'>From ₹999</p>
                                    <p className='gray'>Buy Now</p>
                                </div>
                            </li>
                        </Link>
                    </ul>


                    <div className='Homeforwd_btn' onClick={nextBtn} style={{ display: nxtBtn }} >
                        <img src="/item_arrow.png" alt="" />

                    </div>
                </div>




            </div>

        </>
    );
}

export default HomeKItchenEssen
