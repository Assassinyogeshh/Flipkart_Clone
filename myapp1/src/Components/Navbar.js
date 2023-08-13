import { useContext } from 'react'
import React from 'react'
import '../Components Css/Navbar.css'
import { Link} from 'react-router-dom'
import { CartContext } from './CartProvider';


export default function Navbar() {


  const { cartItems } = useContext(CartContext);
 
  const totalItem= cartItems.length
 
const cart_style={
  fontSize:'11px',
 backgroundColor:'#fb641b',
 height:'15px',
 width:'16px',
 borderRadius:'10px',
 display:'flex',
 justifyContent:'center',
 alignItems:'center',
 marginRight:'1px'
}


  return (
    <>
      <div className="for_responsive">
        <Link  to="/">
          <div className='logo'><img src='/Navbar/flipkart_logo.jpg' /></div>    </Link>
        <div className='search_bar'>
          <input type='text' placeholder='Search for products, brands and more'></input>
          <button className='srchBtn'>

            <img className='searchBtn' src='/Navbar/search_icon.png'></img>

          </button>
        </div>
        <button className='login_btn' >Login </button>

        <p className='bc'>Become a Seller</p>


        <button className='moreBtn'> <p>More</p>
          <img src="/arrow_icon.png" alt="" /></button>
        <Link className='link' to="/addTo-Cart">
          <div className='cart_option'><img src='/Navbar/CART.png'></img>
          <span className='numberOfItmes' style={cart_style}>{totalItem}</span>
            <p className='cart_name'>Cart</p></div>
        </Link>
      </div>
    </>
  )
}
