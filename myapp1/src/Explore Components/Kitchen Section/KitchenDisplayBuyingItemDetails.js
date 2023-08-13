import React from 'react'
import { useParams } from 'react-router-dom'
import '../../Components Css/DisplayBuyingItemDetails.css'
import SelectedJson from '../../JSON Files/SelectdList.json';

function KitchenDisplayBuyingItemDetails() {

  
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

  // const data = firstObjData.imagePaths

  //  const daat1 = firstObjData.productIMG
  //  console.log(daat1)


  return (
    <>
      <div className="ByingProductDetails">
        <div className="chosdItemHeading" >
          {/* <h1>PHILIPS BT3101/15 Trimmer 45 min Runtime 10 Length Settings  (Black, White)</h1> */}
          <h1>{firstObjData.name}</h1>
        </div>
        <div className="chosdItemRating">
          <button className="chosdprdctrating">{firstObjData.rating}  <img id='starIMG' style={{height:'1rem', width:'1rem', backgroundColor:'green'}} src='/green_star.png'/></button>
          <div className="chosdItemRatinReview">
            <p>{firstObjData.ratingsCount}</p>
            {/* <p>&</p> */}
            <p>{firstObjData.reviewsCount}</p>
            <img src="/assured.png" alt="" />
          </div>
        </div>

        <div className='chosedProductPrice_Offer'>
          <p className=' grrenFontOffr'>Special price</p>
          <div className="currentPrice">
            <p id='price_item'>₹{firstObjData.price}</p>
            <p className="PrevisPrice">₹{firstObjData.oldPrice}</p>
            <p className='grrenFontOffr'>{firstObjData.offer}</p>
          </div>
        </div>

        <div className="availabeOffer">
          <h5>Available offers</h5>
          <span className="BankOffer"><img src="availabelOfferIMG.webp" alt="" /><span className='offerbank'>Bank Offer</span><p>Flat ₹1,250 Off on HDFC Bank Credit Card EMI Trxns on orders priced between ₹15,000 to ₹39,999T&C</p></span>
          <span className="BankOffer"><img src="availabelOfferIMG.webp" alt="" /><span className='offerbank'>Bank Offer</span><p>Flat ₹3,000 Off on HDFC Bank Credit Card EMI Trxns on orders priced between ₹40,000 to ₹49,999T&C</p></span>
          <span className="BankOffer"><img src="availabelOfferIMG.webp" alt="" /><span className='offerbank'>Bank Offer</span><p>Flat ₹4,000 Off on HDFC Bank Credit Card EMI Transactions on orders of ₹50,000 and aboveT&C</p></span>
          <span className="BankOffer"><img src="availabelOfferIMG.webp" alt="" /><span className='offerbank'>Special Price</span><p>Get extra 24% off (price inclusive of cashback/coupon)T&C</p></span>
        </div>
      </div>

      <div className="viewTotalProductRatings">
        <div className="productRatingHeading">
          <h1>Ratings & Reviews</h1>
          <button className="rate">Rate Product</button>
        </div>
     <div className="ContaininTwoSeprateRatings">
        <div className="GivenRatingProducts">
          <span className="hiddencountRating other_hiddenRating">
            <p className='largeFont'>{firstObjData.rating} <img id='black_starIMG' style={{height:'1rem', width:'1rem', backgroundColor:'green'}} src='/black_star.png'/></p>
            <p className='grayrating'>{firstObjData.ratingsCount}</p>
            <p className='grayviews'>{firstObjData.reviewsCount}</p>
          </span>
          <span className="HiddencustomerRatings">
            <span className="ratingRank"><p>5*</p><span className='ratingColor'>  <span className='greenRating'></span></span><p className="numberOfRatings">123</p></span>
            <span className="ratingRank"><p>4*</p><span className="ratingColor"><span className='greenRating2'></span></span><p className="numberOfRatings">21</p></span>
            <span className="ratingRank"><p>3*</p><span className="ratingColor"><span className='greenRating3'></span></span><p className="numberOfRatings">12</p></span>
            <span className="ratingRank"><p>2*</p><span className="ratingColor"><span className='yellowRating'></span></span><p className="numberOfRatings">2</p></span>
            <span className="ratingRank"><p>1*</p><span className="ratingColor"><span className='redRating'></span></span><p className="numberOfRatings">1</p></span>
          </span>
        </div>

        

        
        </div>
      </div>

    </>
  )
}

export default KitchenDisplayBuyingItemDetails
