import React from 'react'
import '../../Components Css/BuyingItemPage.css'
import KitchenDisplayBuyingItem from './KitchenDisplayBuyingItem'
import  KitchenDisplayBuyingItemDetails from './KitchenDisplayBuyingItemDetails'

function KitchenBuyingItemPage() {
  return (
    <>
    <div className="ChossedProductDetails">
    <div className="itemImageSection">
        < KitchenDisplayBuyingItem/>
    </div>

    <div className="chossedProductDetails">
        < KitchenDisplayBuyingItemDetails/>
    </div>
    </div>
    </>
  )
}

export default KitchenBuyingItemPage
