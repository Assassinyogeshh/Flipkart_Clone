import React, { useContext, useState } from 'react';
import { CartContext } from './CartProvider';

import '../Components Css/AddToCart.css';
// import SelectedJson from '../../JSON Files/SelectdList.json';



function AddToCart() {
  const { cartItems } = useContext(CartContext);
  // const productImage = localStorage.getItem('cartItems');

  console.log(cartItems)


  const numberofProduct = cartItems.length

  const [quantities, setQuantities] = useState(cartItems);



  const decreaseCount = (index) => {
    setQuantities((prevQuantities) =>

      prevQuantities.map((item, itemIndex) =>

        index === itemIndex ? item.productCount <= 1 ? (() => {
          item.productCount = 1
          return item
        })()
          : { ...item, productCount: item.productCount - 1 } : item
      )


    )
  }

  const increaseCount = (index) => {
    setQuantities((prevQuantities) =>
      prevQuantities.map((item, itemIndex) =>
        index === itemIndex
          ? item.productCount >= 5
            ? (() => {
              alert('You have reached the limit');
              return item; // Return the original item without modifying it
            })()
            : { ...item, productCount: item.productCount + 1 } // Increment the productCount if it's not greater than 5
          : item
      )
    );
  };




  // const totalPrice = cartItems.reduce(
  //   (accumulator, item, index) =>
  //   const productPriceAsNumber = parseFloat(item.productPrice)
  //     // accumulator + quantities[index].productCount * item.productPrice,0
  //    return  accumulator + quantities[index].productCount *  item.productPrice ,0
  // );

  const totalPrice = cartItems.reduce((accumulator, item, index) => {
    const removeCommaFromPrice = item.productPrice.replace(',', '');
    const productPriceAsNumber = parseInt(removeCommaFromPrice); // or parseInt(item.productPrice)
    return accumulator + quantities[index].productCount * productPriceAsNumber;
  }, 0);

  const formattedTotalPrice = totalPrice.toLocaleString();

  return (
    <>
      <div id="Cart">
        <div className="add_Cart_Product">


          <div className="addToCartHeading">
            <h5>Flipkart({numberofProduct})</h5>
          </div>
          <div className="userAddress">
            <p>From Saved Addresses</p>
            <button className="PincodeBtn">Enter Delivery Pincode</button>
          </div>
          <div className="added_cartItem_lists">


            <div className="CartItems">
              {/* <img src={productImage} alt="" /> */}
              <ul className='cartItems'>
                {cartItems.map((item, index) => {
                  const currentPrice = quantities[index].productCount
                  // const removeCurrentPriceComma=currentPrice.replace(',','');
                  const formatedCurrentPrice = currentPrice.toLocaleString()
                  const removeItemPriceComma = item.productPrice.replace(',', '')
                  const convertPriceIntoINT = parseInt(removeItemPriceComma)

                  const calculatedItemPrice = currentPrice * convertPriceIntoINT
                  const formatedCalculatePrice = calculatedItemPrice.toLocaleString()

                  return (<li className='addedProduct' key={index}>
                    <div className="cartItem_Img" >
                      <img src={item.imageUrl} alt={item.name} />
                      <div className="countItem">
                        <span id='decrease' onClick={() => decreaseCount(index)}>-</span>
                        <span id='countItemNumber'>{quantities[index].productCount}</span>
                        <span id='increase' onClick={() => increaseCount(index)}>+</span>
                      </div>
                    </div>
                    <div className="cartItemName">
                      <h2>{item.productName}</h2>
                      <div className='ProductPrices'>
                        <span className="previousPrice" >₹{item.productOldPrice}</span>
                        {/* <span className="changePrice">₹{quantities[index].productCount ===0 ? parseInt(item.productPrice) : quantities[index].productCount * parseInt(item.productPrice)}</span> */}
                        <span className="changePrice">₹{quantities[index].productCount === 0 ? formatedCurrentPrice : formatedCalculatePrice}</span>
                        {/* <span className="changePrice">₹{check}</span> */}
                        <span className="greenOffr">₹{item.productOff}</span>
                      </div>
                    </div>


                  </li>)
                })}
              </ul>
            </div>
          </div>
          <div className="placeOrder"><button className="placeOrderBtn">Place Order</button></div>
        </div>
        <div className="total_cartProductPrice">
          <h1 className='PriceHeading'>Price Details</h1>
          <div className="calcultedPrice">
            <div className="cartItem_price">
              <p>Price (2 items)</p>
              <p>₹{formattedTotalPrice}</p>
            </div>
            <div className="cartItem_price">
              <p>Delivery Charges</p>
              <p className='green'>Free</p>
            </div>
            <div className="totalAmount">
              <p className="totalPrice">Total Amount</p>
              <p className="totalPrice">₹{formattedTotalPrice}</p>
            </div>
            <div className="safety">

              <img src="" alt="" />
              <p>Safe and Secure Payments.Easy returns.100% Authentic products.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}


export default AddToCart;
