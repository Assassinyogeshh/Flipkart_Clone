import React from 'react'
import '../../Components Css/BuyingItemPage.css'
import DisplayBuyingItem from './DisplayBuyingItem'
import DisplayBuyingItemDetails from './DisplayBuyingItemDetails'

function BuyingItemPage() {
  return (
    <>
      <div className="ChossedProductDetails">
        <div className="itemImageSection">
          <DisplayBuyingItem />
        </div>

        <div className="chossedProductDetails2">
          <DisplayBuyingItemDetails />
        </div>
      </div>
    </>
  )
}

export default BuyingItemPage
