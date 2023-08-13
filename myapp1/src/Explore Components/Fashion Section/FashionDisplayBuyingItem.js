import React, { useContext } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import '../../Components Css/DisplayBuyingItem.css'
import { Link } from 'react-router-dom'
import { CartContext } from '../../Components/CartProvider'
import SelectedJson from '../../JSON Files/SelectdList.json';






function FashionDisplayBuyingItem() {

    const { productId, itemID } = useParams();
    let keydata = null;
    let conditionMet = false;

    Object.keys(SelectedJson).forEach((key) => {


        const products = SelectedJson[key];
        products.forEach((objectKey) => {
            if (conditionMet) {
                return;
            }

            const num = objectKey.num;

            if (key === productId && num === itemID) {
                console.log("the condition is met");
                keydata = products;
                conditionMet = true;
            } else {
                console.log("condition is not met");
            }
        });

        if (conditionMet) {
            return;
        }
    });

    const firstObjData = keydata[itemID]

    const data = firstObjData.imagePaths

     const daat1 = firstObjData.productIMG
     console.log(daat1)

    const { addToCart } = useContext(CartContext);

    const handleAddtoCart = () => {
        const newItem = {
            id:firstObjData.id,
          productName:firstObjData.name,
          productPrice:firstObjData.price,
          imageUrl: firstObjData.productIMG, 
          productOldPrice:firstObjData.oldPrice,
          productOff:firstObjData.offer,
         productCount:1
        };
addToCart(newItem)
      };
      


    const [HoverImg, setHoverImg] = useState(Array(4).fill('none'))

    const hoverImgStyle = {
        display: HoverImg
    }

    const showHoverImg = (index) => {
        setHoverImg((previousHover) => {
            const imgUpdater = previousHover.map((value, idx) =>
                idx === index ? 'flex' : 'none'
            );
            console.log(imgUpdater)
            return imgUpdater
        })
    }

    return (
        <>
            <div className="BuyingItemImages">


                <div className="smallItemImages">

                    <div className="selectedItemImages">
                        {data.map((imgObj, index) => {

                            return (<img src={imgObj} onMouseOver={() => showHoverImg(index)} alt="cant find images" key={index} />)

                        })}
                    </div>
                </div>
                <div className="bigItemImages">
                    <div className="selctedShowImage" >
                      <img src={firstObjData.productIMG} />
                        {data.map((imgObj, index) => {
                            return (<img src={imgObj} onMouseOver={() => showHoverImg(index)} alt="" style={{ display: hoverImgStyle.display[index] , margin:'-26rem' }} key={index} />)
                        })}

                       
                    

                        
                    </div>
                    <div className="buy_add_product">
                        <img src="Asus Monitor.webp" alt="" />
                        <Link className='removelinkStyle' to="/addTo-Cart" >
                            <button onClick={handleAddtoCart} className="addtoCartBtn">  <span className="cartItemImg"><img src="/shopping-cart.png" alt="" /></span> <p> GO TO CART</p>
                            </button>
                        </Link>
                        <button className="BuyButton">
                            <span className="BuyItemImg"><img src="shopping-cart.png" alt="" /></span> <p>BUY NOW</p>
                        </button>
                    </div>
                        

                </div>
            </div>
        </>
    )
}

export default FashionDisplayBuyingItem

  

