import React, { useState } from 'react'
import '../Components Css/Products.css'
// import ProductsChildDetails from './Components/ProductsChildDetails';
import Fashion from './Fashion'
import Electronics from './Electronics'
import Home_Furniture from './Home_Furniture'
import Beauty from './Beauty'

function Products() {
  const [display, SetDisplay] = useState([])
  //  let defaultDisplay= display1.display 
  //  let changedDisplay= SetDisplay.updtDisplay

  const showDiv = (index) => {
    SetDisplay((previousDisply) => {
      let currentList = [...previousDisply]
      currentList[index] = 'block'
      return currentList
    })
    console.log('clicked')

  }
  const hideDiv = (index) => {

    SetDisplay((previousDisply) => {
      let currentList = [...previousDisply]
      currentList[index] = 'none'
      return currentList
    })
  }
 const style={
  height: '10px',
  width: '11px',
  margin:'4px',
  transform:'rotate(180deg)'
 }

  return (
    <>
      <div className="allitems">

        <ul id="first_item_container">
          <li className="items"  >
            <img src="items/grocery.webp" alt="" />
            <p className='itemName'> Grocery </p>
          </li>
          <li className="items">
            <img src="items/mobile.webp" alt="" />
            <p className='itemName'> Mobiles</p>
          </li>
          <li className="items" onMouseOver={() => showDiv(0)} onMouseLeave={() => hideDiv(0)}>
            <img src="items/fashion.webp" alt="" />
            <p className='itemName'>Fashion <img style={style} src="/download.png" alt="" /></p>
            <div className='HiddenLists' onMouseLeave={() => hideDiv(0)} style={{ display: display[0] }}><Fashion /></div>

            <div>

            </div>
          </li>
          <li className="items" onMouseOver={() => showDiv(1)} onMouseLeave={() => hideDiv(1)}>
            <img src="items/electronics.webp" alt="" />
            <p className='itemName'> Electronics <img style={style} src="/download.png"  alt="" /></p>
            <div className='HiddenLists' onMouseLeave={() => hideDiv(1)} style={{ display: display[1] }}> <Electronics /> </div>
          </li>
          <li className="items" onMouseOver={() => showDiv(2)} onMouseLeave={() => hideDiv(2)}>
            <img src="items/home.webp" alt="" />
            <p className='itemName'>Home  <img style={style} src="/download.png"  alt="" /> </p>
            <div className='HiddenLists' onMouseLeave={() => hideDiv(2)} style={{ display: display[2] }}><Home_Furniture /></div>
          </li>
          <li className="items">
            <img src="items/appliances.webp" alt="" />
            <p className='itemName'> Appliances</p>
          </li>
          <li className="items">
            <img src="items/travel.webp" alt="" />
            <p className='itemName'>Travel </p>
          </li>
          <li className="items">
            <img src="items/top_offers.webp" alt="" />
            <p className='itemName'>Top Offers </p>
          </li>
          <li className="items" onMouseOver={() => showDiv(3)} onMouseLeave={() => hideDiv(3)}>
            <img src="items/beaty_toys&more.webp" alt="" />
            <p className='itemName'> Beauty, Toys & More  <img style={style} src="/download.png"  alt="" /></p>
            <div className='HiddenLists2' onMouseLeave={() => hideDiv(3)} style={{ display: display[3] }}><Beauty /></div>
          </li>

          <li className="items">
            <img src="items/two_wheelers.webp" alt="" />
            <p className='itemName'>Two Wheelers </p>
          </li>
        </ul>

      </div>



    </>
  )
}

export default Products
