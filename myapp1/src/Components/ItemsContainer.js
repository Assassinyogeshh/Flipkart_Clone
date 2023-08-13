import React, { useState, useEffect } from 'react';
import '../Components Css/ItmesContainer.css'
import { Link } from 'react-router-dom';
import Products from './Products';
// import Products from './Components/Products.js';

function ItemsContainer() {

  const [position, newPosition] = useState(0);
  const [slidePosition, setSlidePosition] = useState(0);
  const [display, setDisplay] = useState({ firstbtn: 'none', secondBtn: 'flex' });
  let backBtn = display.firstbtn;
  let nxtBtn = display.secondBtn;
  const [count, setCount] = useState(0);



  useEffect(() => {
    const interval = setInterval(() => {
      const updatedPosition = position - 84.5;
      newPosition(updatedPosition);

      const upcomingItems = document.querySelector('.upcoming_items');

      if (updatedPosition === -422.5) {
        upcomingItems.style.transition = 'none';
        newPosition(0);
      } else {
        upcomingItems.style.transition = 'all 0.5s ease-in-out';
      }
    }, 5000);


    return () => {
      clearInterval(interval);
    };
  }, [position]);






  const slideForwd = () => {


    const upcomingItems = document.querySelector('.upcoming_items');
    // const numberOfChildren = upcomingItems.children.length;

    // let lastChildLength = numberOfChildren - 1

    let updatedPosition = position - 84.5;
    newPosition(updatedPosition);
    console.log(updatedPosition);

    upcomingItems.style.transition = 'all 0.5s ease-in-out'

    if (updatedPosition === -422.5) {
      upcomingItems.style.transition = 'none'
      newPosition(0)


    }

  };


  const slideBack = () => {


    let updatedPosition = position + 84.5

    const upcomingItems = document.querySelector('.upcoming_items')
    upcomingItems.style.transition = 'all 0.5s ease-in-out';


    newPosition(updatedPosition);
    console.log(count)




    if (updatedPosition === 84.5) {
      newPosition(-338);
      upcomingItems.style.transition = 'none'
      // console.log(firstChildLength + 'second state')

    }

    else {

    }



  }




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

    let updatedPosition = slidePosition + 25;
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


    let updatedPosition = slidePosition - 25;
    setSlidePosition(updatedPosition);




  };



  return (
    <>


      <div className=' itemsall'>
        < Products />
      </div>

      <div className="latest_products">
        <div className='slideBk' onClick={slideBack}>   <img src="item_arrow.png" alt="" /></div>
        <ul className="products" >
          
          <li className="upcoming_items" style={{ transform: `translateX(${position}rem)` }}>
            <img src="lates_row/realme.webp" alt="" />
            <img src="lates_row/acerlaptop.webp" alt="" />
            <img src="lates_row/plane1.webp" alt="" />
            <img src="lates_row/plane2.webp" alt="" />
            <img src="lates_row/laptop1.webp" alt="" />
          </li>
        </ul>
        <div className="slideFrwd" onClick={slideForwd} style={{ backgroundColor: 'red' }}>   <img src="item_arrow.png" alt="" /></div>
      </div>

      <div className="elctronics_row">
        <div className="view_all">
          <h4>Best of Electronics</h4>
          <Link className='removelinkStyle' to="/explore-items">
            <button >View All</button>
          </Link>

          <img src="electronic_row/haadphone1.webp" alt="" />
        </div>
        <div className="Products">
          <div className='back_btn' onClick={previousBtn} style={{ display: backBtn }}>
            <img src="item_arrow.png" alt="" />
          </div>



         
          <ul className="elctronicItems" style={{ transform: `translateX(${slidePosition}%)` }}>
             <Link className='removelinkStyle' to="/selected_elctroniPage/EF14">
            <li className="elctric_product" >

              <img src="electronic_row/camera.webp" alt="" />
              <div className="item_details">
                <p className='item_head'>Top Mirrorless Cameras</p>
                <p className='green'>Shop Now</p>
                <p className='gray'>Canon, Sony, Fujifilm</p>
              </div>
            </li>
            </Link>

 <Link className='removelinkStyle' to="/explore-items/EF13">
            <li className="elctric_product">
              <img src="electronic_row/hairdryer.webp" alt="" />
              <div className="item_details">

                <p className='item_head'>Best of Hair Dryers</p>
                <p className='green'>From ₹549</p>
                <p className='gray'>realme,Philips&More</p>
              </div>
            </li>
            </Link>
             <Link className='removelinkStyle' to="/selected_elctroniPage/EF15">
            <li className="elctric_product">
              <img src="electronic_row/moniter1.webp" alt="" />
              <div className="item_details">

                <p className='item_head'>BENQ Monitors</p>
                <p className='green'>From ₹8000</p>
                <p className='gray'>Top Rated</p>
              </div>
            </li>
            </Link>
             <Link className='removelinkStyle' to="/explore-items/EF3">
            <li className="elctric_product">
              <img src="electronic_row/powerbank.webp" alt="" />
              <div className="item_details">

                <p className='item_head'>Premium PowerBanks</p>
                <p className='green'>Shop Now</p>
                <p className='gray'>Mi, realme & more</p>
              </div>
            </li>
            </Link>
             <Link className='removelinkStyle' to="/explore-items/EF16">
            <li className="elctric_product">
              <img src="electronic_row/shavers.webp" alt="" />
              <div className="item_details">

                <p className='item_head'>Best of  Shavers</p>
                <p className='green'>From ₹1,649</p>
                <p className='gray'>Philips & Havells</p>
              </div>
            </li>
            </Link>
             <Link className='removelinkStyle' to="/selected_elctroniPage/EF15">
            <li className="elctric_product">
              <img src="electronic_row/projector.jpg" alt="" />
              <div className="item_details">

                <p className='item_head'>Projectors</p>
                <p className='green'>From ₹9999</p>
                <p className='gray'>ZEBRONICS</p>
              </div>
            </li>
            </Link>
             <Link className='removelinkStyle' to="/selected_elctroniPage/EF11">
            <li className="elctric_product">
              <img src="electronic_row/printers.webp" alt="" />
              <div className="item_details">

                <p className='item_head'>Printers</p>
                <p className='green'>From ₹10999</p>
                <p className='gray'>Epson</p>
              </div>
            </li>
            </Link>
             <Link className='removelinkStyle' to="/selected_elctroniPage/EF10">
            <li className="elctric_product">
              <img src="electronic_row/monitor.webp" alt="" />
              <div className="item_details">

                <p className='item_head'>Monitors</p>
                <p className='green'>From ₹9999</p>
                <p className='gray'>Acer</p>
              </div>
            </li>
            </Link>
          </ul>


          <div className='forwd_btn' onClick={nextBtn} style={{ display: nxtBtn }} >
            <img src="item_arrow.png" alt="" />

          </div>
        </div>


        <div className="addvetisment">

          <img src="electronic_row/plane3.webp" alt="" />

        </div>

      </div>

    </>
  );
}

export default ItemsContainer;
