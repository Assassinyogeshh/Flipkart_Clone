import React from 'react'
import '../../Components Css/FilterSection.css'
import { useState } from 'react'

function FitnessFilterSection() {

const[display, setDisplay]=useState(Array(5).fill('none'))

const [defaultArrow, setArrow]=  useState(Array(5).fill('0'))

const showHiddenFilter=(index)=>{
    setDisplay((previous)=>{
        const allElement= [...previous]
        allElement[index]=allElement[index]==='none'?'flex':'none';
        setArrow((arroPrevious)=>{
            const allArrow=[...arroPrevious]
            allArrow[index]=allElement[index]==='flex'? -180: 0
            return allArrow
        })
         return allElement
    })
}

    return (
        <>


            <div className="Filter">
                <span className='filterHeading'>Filters</span>
                <div className="categories">
                    <h6>CATEGORIES</h6>
                    <div className="selectCategorie">
                        <div>
                            <div className='hiddenCatigories'>

                            {/* <img className='seprateArrow' src="/item_arrow.png" alt="" /> */}
                                <h4>Health & Personal Car...</h4>
                            </div>

                            <div className="hiddenList">

                                <p className="hidden-categories">  <img className='seprateArrow' src="/item_arrow.png" alt="" />Personal Care Applian...</p>
                                <p className="hidden-categories">  <img className='seprateArrow' src="/item_arrow.png" alt="" />Health Care</p>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="assured">
                    <span className='checkAssured' >
                        <input type='checkbox' />
                        <img src="assured.png" alt="" />
                    </span>
                    <span>?</span>
                </div>

                <div className="brand">
                    <span className="brandOptions" onClick={()=>showHiddenFilter(0)}>
                        <h4>BRAND</h4>
                        <img src="/item_arrow.png" style={{ transform: `rotate(${defaultArrow[0]}deg)`, opacity:'0.5' }} alt="" />
                    </span>
                    <div className="hiddenBrand" style={{display:display[0] , overflow:'hidden'}} > 
                        <input type="text" placeholder='Search Brand' />
                        <span className="hiddenCheckBox">
                            <label>
                                <input type="checkbox" name="" id="" /> Kemei
                            </label>

                            <label>
                                <input type="checkbox" name="" id="" /> HAVELLs
                            </label>

                            <label>
                                <input type="checkbox" name="" id="" /> Syska
                            </label>

                            <label>
                                <input type="checkbox" name="" id="" /> PHILIPS
                            </label>

                            <label>
                                <input type="checkbox" name="" id="" /> Cr.Morepen
                            </label>

                            <label>
                                <input type="checkbox" name="" id="" /> Oral-B
                            </label>
                        </span>
                        <p>8768 MORE</p>
                    </div>
                </div>
                <div className="ratings">
                    <div className="hiddenRatiings">
                        <h4>Customer Ratings</h4>
                        <label className='hiddenratings'><input type="checkbox" /> 4 <img style={{height:'0.6rem', width:'0.6rem'}}  src="/black_star.png" alt="" /> & above</label>
                        <label className='hiddenratings'><input type="checkbox" /> 3 <img style={{height:'0.6rem', width:'0.6rem'}} src="/black_star.png" alt="" /> & above</label>
                    </div>

                </div>
                <div className="offers">
                    <span className="offersSpan"  onClick={()=>showHiddenFilter(1)}>
                        <h4>OFFERS</h4>
                        <img src="/item_arrow.png" style={{ transform: `rotate(${defaultArrow[1]}deg)`, opacity:'0.5' }} alt="" />
                    </span>
                    <div className="hiddenOffers" style={{display:display[1], overflow:'hidden'}}>

                        <label className="hiddenoffers"><input type="checkbox" /> Buy More, Save More</label>
                        <label className="hiddenoffers"><input type="checkbox" /> No Cost EMI</label>
                        <label className="hiddenoffers"><input type="checkbox" /> Special Price</label>
                    </div>
                </div>

                <div className="discount">

                    <span className="discountSpan"  onClick={()=>showHiddenFilter(2)}>
                        <h4>DISCOUNT</h4>
                        <img src="/item_arrow.png" style={{ transform: `rotate(${defaultArrow[2]}deg)`, opacity:'0.5' }} alt="" />
                    </span>
                    <div className="hiddenDiscount" style={{display:display[2], overflow:'hidden'}}>

                        <label className="Hiddendiscount"><input type="checkbox" /> 50% or more</label>
                        <label className="Hiddendiscount"><input type="checkbox" /> 40% or more</label>
                        <label className="Hiddendiscount"><input type="checkbox" /> 30% or more</label>
                        <label className="Hiddendiscount"><input type="checkbox" /> 20% or more</label>
                        <label className="Hiddendiscount"><input type="checkbox" /> 10% or more</label>              </div>
                </div>


                <div className="gst">
                    <span className="GSTSpan"  onClick={()=>showHiddenFilter(3)}>
                        <h4>GST Invoice Available</h4>
                        <img src="/item_arrow.png"style={{ transform: `rotate(${defaultArrow[3]}deg)`, opacity:'0.5' }} alt="" />
                    </span>
                    <label className="HiddenGST" style={{display:display[3], overflow:'hidden'}}><input type="checkbox" /> GST Invoice Availabel</label>

                </div>
                <div className="Availability">
                    <span className="availableSpan"  onClick={()=>showHiddenFilter(4)}>
                        <h4>Availability</h4>
                        <img src="/item_arrow.png" style={{ transform: `rotate(${defaultArrow[4]}deg)`, opacity:'0.5' }} alt="" />
                    </span>
                    <label className="stock" style={{display:display[4], overflow:'hidden'}}><input type="checkbox" /> Include Out of Stock</label>
                </div>
            </div >

        </>
    )
}

export default FitnessFilterSection
