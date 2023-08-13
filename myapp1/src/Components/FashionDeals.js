import React, { useState } from 'react';
    import '../Components Css/ItmesContainer.css'
    import '../Components Css/HomeKItchenEssen.css'
    import '../Components Css/FashionDeals.css'
    import { Link } from 'react-router-dom';

function FashionDeals() {

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

        let updatedPosition = slidePosition + 14.5;
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


        let updatedPosition = slidePosition - 14.5;
        setSlidePosition(updatedPosition);




    };



    return (
        <>




            <div className="HomeKitchen_Essentials">
                <div className="Homwview_all">
                    <h4>Top Fashion Deals</h4>
                    <Link className='removelinkStyle' to="/Fashion-Explore">
                        <button >View All</button>
                    </Link>

                    <img src="Fashion Top Deals/Fashion.webp" alt="" />
                </div>
                <div className="HomeKitchenProducts">
                    <div className='Homeback_btn' onClick={previousBtn} style={{ display: backBtn }}>
                        <img src="item_arrow.png" alt="" />
                    </div>




                    <ul className="HomeKitchenItem fashionDeals" style={{ transform: `translateX(${slidePosition}%)`, paddingLeft:'60rem' }}>
                      <Link className='removelinkStyle' to={`/Fashion-Explore/${'FE11'} `}>
                        <li className="elctric_product" >

                            <img src="Fashion Top Deals/bags.webp" alt="" />
                            <div className="item_details">
                                <p className='item_head'>Backpacks & Laptop Bags</p>
                                <p className='green'>Shop Now</p>
                                <p className='gray'>Provogoue, Skybags & More</p>
                            </div>
                        </li>
                        </Link>

                      <Link className='removelinkStyle' to={`/Fashion-Explore/${'FE16'} `}>
                        <li className="elctric_product">
                            <img src="Fashion Top Deals/Divastri.webp" alt="" />
                            <div className="item_details">

                                <p className='item_head'>Divastri</p>
                                <p className='green'>From ₹549</p>
                                <p className='gray'>Buy Now</p>
                            </div>
                        </li>
                        </Link>
                      <Link className='removelinkStyle' to={`/Fashion-Explore/${'FE2'} `}>
                        <li className="elctric_product">
                            <img src="Fashion Top Deals/Bra_tshirts.webp" alt="" />
                            <div className="item_details">

                                <p className='item_head'>Bra, Dresses, Tops,</p>
                                <p className='green'>From ₹199</p>
                                <p className='gray'>Clovia, Dressberry</p>
                            </div>
                        </li>
                        </Link>
                      <Link className='removelinkStyle' to={`/Fashion-Explore/${'FE14'} `}>
                        <li className="elctric_product">
                            <img src="Fashion Top Deals/Dress_top-jeans.webp" alt="" />
                            <div className="item_details">

                                <p className='item_head'>Jeans, Tops, T-shirts</p>
                                <p className='green'>From 199</p>
                                <p className='gray'>Kotty, Berrylush</p>
                            </div>
                        </li>
                        </Link>
                      <Link className='removelinkStyle' to={`/Fashion-Explore/${'FE13'} `}>
                        <li className="elctric_product">
                            <img src="Fashion Top Deals/rings.webp" alt="" />
                            <div className="item_details">

                                <p className='item_head'>Jewellaries</p>
                                <p className='green'>From ₹1,649</p>
                                <p className='gray'>Philips & Havells</p>
                            </div>
                        </li>
                        </Link>
                      <Link className='removelinkStyle' to={`/Fashion-Explore/${'FE17'} `}>
                        <li className="elctric_product">
                            <img src="Fashion Top Deals/TrendyKurtas.webp" alt="" />
                            <div className="item_details">

                                <p className='item_head'>Kurtas, Sets, & more</p>
                                <p className='green'>From ₹199</p>
                                <p className='gray'>Anmi, Krishika & more</p>
                            </div>
                        </li>
                        </Link>
                      <Link className='removelinkStyle' to={`/Fashion-Explore/${'FE15'} `}>
                        <li className="elctric_product">
                            <img src="Fashion Top Deals/Shirts.webp" alt="" />
                            <div className="item_details">

                                <p className='item_head'>Shirts</p>
                                <p className='green'>From ₹199</p>
                                <p className='gray'>Buy Now</p>
                            </div>
                        </li>
                        </Link>
                      <Link className='removelinkStyle'  to={`/Fashion-Explore/${'FE1'} `}>
                        <li className="elctric_product">
                            <img src="Fashion Top Deals/SANDALS.webp" alt="" />
                            <div className="item_details">

                                <p className='item_head'>Monitors</p>
                                <p className='green'>From ₹199</p>
                                <p className='gray'>Sandals, Slides...</p>
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

export default FashionDeals
