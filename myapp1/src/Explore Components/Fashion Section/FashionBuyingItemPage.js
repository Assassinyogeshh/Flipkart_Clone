import React from 'react'
import '../../Components Css/BuyingItemPage.css'
import FashionDisplayBuyingItem from './FashionDisplayBuyingItem'
import FashionDisplayBuyingItemDetails from './FashionDisplayBuyingItemDetails'

function FashionBuyingItemPage() {
  return (
    <>
    <div className="ChossedProductDetails">
    <div className="itemImageSection">
        <FashionDisplayBuyingItem/>
    </div>

    <div className="chossedProductDetails">
        <FashionDisplayBuyingItemDetails/>
    </div>
    </div>
    </>
  )
}

export default FashionBuyingItemPage
