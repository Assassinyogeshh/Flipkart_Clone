import React, { useState } from 'react';
import '../Components Css/ItmesContainer.css'
import '../Components Css/SportsFitness.css'
import '../Components Css/HomeKItchenEssen.css'
import { Link } from 'react-router-dom';

function SportsFitness() {
    const [slidePosition, setSlidePosition] = useState(0);
    const [display, setDisplay] = useState({ firstbtn: 'none', secondBtn: 'flex' });
    let backBtn = display.firstbtn;
    let nxtBtn = display.secondBtn;
    const [count, setCount] = useState(0);


    // const Card1 = CardSP;




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

        let updatedPosition = slidePosition + 17.5;
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


        let updatedPosition = slidePosition - 17.5;
        setSlidePosition(updatedPosition);




    };


    // const word = "CardSP";
    return (
        <>




            <div className="HomeKitchen_Essentials">

                <div className="Homwview_all">
                    <h4>Sports & Fitness</h4>

                    <Link className='removelinkStyle' to="/Fitness-Explore">
                        <button >View All</button>
                    </Link>
                    <img src="Sports & Fitness Essential" alt="" />
                </div>

                <div className="HomeKitchenProducts">
                    <div className='Homeback_btn' onClick={previousBtn} style={{ display: backBtn }}>
                        <img src="item_arrow.png" alt="" />
                    </div>





                    <ul className="HomeKitchenItem sports" style={{ transform: `translateX(${slidePosition}%)` }}>


                        <Link className='removelinkStyle' to="/Fitness-Explore/SF19">
                            <li className="elctric_product" >

                                <img src="Sports & Fitness Essentials/WaterBotte&Flask.webp" alt="" />
                                <div className="item_details">
                                    <p className='item_head'>Water Bottels & more</p>
                                    <p className='green'>Min. 50% Off</p>
                                </div>
                            </li>
                        </Link>

                        <Link className='removelinkStyle' to="/Fitness-Explore/SF1">
                            <li className="elctric_product">
                                <img src="Sports & Fitness Essentials/Cycle.webp" alt="" />
                                <div className="item_details">

                                    <p className='item_head'>Cycle</p>
                                    <p className='green'>Min. 50% Off</p>
                                </div>
                            </li>
                        </Link>
                        <Link className='removelinkStyle' to="/Fitness-Explore/SF2">
                            <li className="elctric_product">
                                <img src="Sports & Fitness Essentials/Fitness Acessories.webp" alt="" />
                                <div className="item_details">

                                    <p className='item_head'>Fitness Acessories</p>
                                    <p className='green'>Min. 50% Off</p>
                                </div>
                            </li>
                        </Link>
                        <Link className='removelinkStyle' to="/Fitness-Explore/SF14">
                            <li className="elctric_product">
                                <img src="Sports & Fitness Essentials/Gloves.webp" alt="" />
                                <div className="item_details">

                                    <p className='item_head'> Riding Gloves</p>
                                    <p className='green'>Min. 50% Off</p>
                                </div>
                            </li>
                        </Link>
                        <Link className='removelinkStyle' to="/Fitness-Explore/SF7">
                            <li className="elctric_product">
                                <img src="Sports & Fitness Essentials/Pump.webp" alt="" />
                                <div className="item_details">

                                    <p className='item_head'>Cycling Accessories</p>
                                    <p className='green'>Min. 50% Off</p>
                                </div>
                            </li>
                        </Link>
                        <Link className='removelinkStyle' to="/Fitness-Explore/SF4">
                            <li className="elctric_product">
                                <img id='football' src="Sports & Fitness Essentials/Football.webp" alt="" />
                                <div className="item_details">

                                    <p className='item_head'>Football</p>
                                    <p className='green'>Min. 50% Off</p>
                                </div>
                            </li>
                        </Link>
                        <Link className='removelinkStyle' to="/Fitness-Explore/SF6">
                            <li className="elctric_product">
                                <img src="Sports & Fitness Essentials/CarromBoard.webp" alt="" />
                                <div className="item_details">

                                    <p className='item_head'>Carrom Board</p>
                                    <p className='green'>Min. 50% Off</p>
                                </div>
                            </li>
                        </Link>
                        <Link className='removelinkStyle' to="/Fitness-Explore/SF3">
                            <li className="elctric_product">
                                <img src="Sports & Fitness Essentials/Fishing.webp" alt="" />
                                <div className="item_details">

                                    <p className='item_head'>Fishing Accessories</p>
                                    <p className='green'>Min. 50% Off</p>
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

export default SportsFitness
