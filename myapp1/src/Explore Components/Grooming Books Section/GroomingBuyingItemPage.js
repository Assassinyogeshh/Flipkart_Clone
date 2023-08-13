import React from 'react'
import '../../Components Css/BuyingItemPage.css'
import GroomingDisplayBuyItem from './GroomingDisplayBuyingItem'
import GroomingDisplayBuyingItemDetails from './GroomingDisplayBuyingItemDetails'

function GroomingBuyingItemPage() {
  return (
    <>
    <div className="ChossedProductDetails">
    <div className="itemImageSection">
    <GroomingDisplayBuyItem/>
    </div>

    <div className="chossedProductDetails">
      <GroomingDisplayBuyingItemDetails/>
    </div>
    </div>
    </>
  )
}

export default GroomingBuyingItemPage
