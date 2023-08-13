import React from 'react'
import '../../Components Css/BuyingItemPage.css'
import FitnessDisplayBuyingItem from './FitnessDisplayBuyingItem'
import  FitnessDisplayBuyingItemDetails from './FitnessDisplayBuyingItemDetails'

function FitnessBuyingItemPage() {
  return (
    <>
    <div className="ChossedProductDetails">
    <div className="itemImageSection">
        < FitnessDisplayBuyingItem/>
    </div>

    <div className="chossedProductDetails">
        < FitnessDisplayBuyingItemDetails/>
    </div>
    </div>
    </>
  )
}

export default FitnessBuyingItemPage
