import React, { useState } from 'react';
// import '../Components Css/ProductsChildDetails.css'

function Beauty() {

    const [List_Display, SetList_Display] = useState([])
    // const [HiddenDisplay,  SetHiddenDisplay] = useState('flex')


    const showDiv_2 = (index) => {

        // SetHiddenDisplay('flex')

        SetList_Display((previousDsply) => {
            let updatedDisplay = [...previousDsply]
            updatedDisplay[index] = 'flex';
            console.log(' i am changed ')
            return updatedDisplay;

        })


    }
    const hideDiv_2 = (index) => {
        // SetHiddenDisplay('none')


        SetList_Display((previousDsply) => {
            let updatedDisplay = [...previousDsply]
            updatedDisplay[index] = 'none';
            return updatedDisplay;

        })
    }
    const addDiv = (index) => {
        // SetHiddenDisplay('none')


        SetList_Display((previousDsply) => {
            let updatedDisplay = [...previousDsply]
            updatedDisplay[index] = 'flex';
            return updatedDisplay;

        })
    }
    const removeDiv = (index) => {
        // SetHiddenDisplay('none')


        SetList_Display((previousDsply) => {
            let updatedDisplay = [...previousDsply]
            updatedDisplay[index] = 'none';
            return updatedDisplay;

        })
    }

    
  return (
    <>
      <div className="Parent_items">
                <div id="fashion" className='flipkart_items' >
                    <p className='itemChid' onMouseOver={() => showDiv_2(0)} onMouseOut={() => hideDiv_2(0)}>Beauty & Personal Care <span><img src="arrow_icon.png" /></span></p>
                    <p className='itemChid'> Furniture Studio <span><img src="arrow_icon.png" /></span></p>
                    <p className='itemChid' onMouseOver={() => showDiv_2(1)} onMouseOut={() => hideDiv_2(1)}>Men's Grooming <span><img src="arrow_icon.png" /></span></p>
                    <p className='itemChid' onMouseOver={() => showDiv_2(2)} onMouseOut={() => hideDiv_2(2)}>Food & Drinks <span><img src="arrow_icon.png" /></span></p>
                    <p className='itemChid' onMouseOver={() => showDiv_2(3)} onMouseOut={() => hideDiv_2(3)}> Nutritions & Health Care<span><img src="arrow_icon.png" /></span></p>
                    <p className='itemChid' onMouseOver={() => showDiv_2(4)} onMouseOut={() => hideDiv_2(4)}> Baby Care<span><img src="arrow_icon.png" /></span></p>
                    <p className='itemChid' onMouseOver={() => showDiv_2(5)} onMouseOut={() => hideDiv_2(5)}>Toys & School Supplies<span><img src="arrow_icon.png" /></span></p>
                    <p className='itemChid' onMouseOver={() => showDiv_2(6)} onMouseOut={() => hideDiv_2(6)}> Sports & Fitness<span><img src="arrow_icon.png" /></span></p>
                    <p className='itemChid' onMouseOver={() => showDiv_2(7)} onMouseOut={() => hideDiv_2(7)}>Books<span><img src="arrow_icon.png" /></span></p>
                    <p className='itemChid' onMouseOver={() => showDiv_2(8)} onMouseOut={() => hideDiv_2(8)}>Music  <span><img src="arrow_icon.png" /></span></p>
                    <p className='itemChid' onMouseOver={() => showDiv_2(9)} onMouseOut={() => hideDiv_2(9)}>Stationery & Office Supplies  <span><img src="arrow_icon.png" /></span></p>
                    <p className='itemChid' onMouseOver={() => showDiv_2(10)} onMouseOut={() => hideDiv_2(10)}>Safety & Hygiene Eseentials <span><img src="arrow_icon.png" /></span></p>

                </div>

                </div>

                <div className="hidden_Child" onMouseOut={() => removeDiv(0)} onMouseOver={() => addDiv(0)} style={{ display: List_Display[0] }}>
                    <p className='ItemLists grayTag'>MORE IN BEAUTY & PERSONAL CARE </p>
                    <p className='ItemLists'>  View All </p>
                    <p className='ItemLists'> Bath & Oral Care</p>
                    <p className='ItemLists'>Personal Hygiene </p>
                    <p className='ItemLists'>Eye Makeup</p>
                    <p className='ItemLists'> Face Makeup </p>
                    <p className='ItemLists'>Lip Makeup</p>
                    <p className='ItemLists'>Hair Care</p>
                    <p className='ItemLists'>Bath Essentials</p>
                    <p className='ItemLists'> Women's Personal Hygiene</p>
                    <p className='ItemLists'>Body & Skin Care</p>
                    <p className='ItemLists'>Lucury </p>
                    <p className='ItemLists'>Top Brand Deals </p>
                </div>




                <div className="hidden_Child" onMouseOut={() => removeDiv(1)} onMouseOver={() => addDiv(1)}style={{ display: List_Display[1] }}>
                    <p className='ItemLists grayTag'> MORE IN MEN"S GROOMING </p>
                    <p className='ItemLists'> View All </p>
                    <p className='ItemLists'>  Faces Washes </p>
                    <p className='ItemLists'>  Beard Oils </p>
                    <p className='ItemLists'>Haire Styling </p>
                    <p className='ItemLists'> Shaving Essentials</p>
                    <p className='ItemLists'>Aftershave</p>
                    <p className='ItemLists'> Faces Creams & Faces Packs </p>
                    <p className='ItemLists'> Soaps & Bodywashes</p>
                    <p className='ItemLists'> Men's Grooming Combos</p>
                    <p className='ItemLists'>Sexual Wellness </p>


                </div>

                <div className="hidden_Child" onMouseOut={() => removeDiv(2)} onMouseOver={() => addDiv(2)}style={{ display: List_Display[2] }}>
                    <p className='ItemLists grayTag'> MORE IN FOOD & DRINKS  </p>
                    <p className='ItemLists'> View All </p>
                    <p className='ItemLists'>  Beverages  </p>
                    <p className='ItemLists'> Nuts & Dry Fruits </p>
                    <p className='ItemLists'>Cooking Essentials  </p>
                    <p className='ItemLists'> Breakfast Items </p>
                    <p className='ItemLists'> Snacks Corner </p>
                    <p className='ItemLists'> Jams</p>
                    <p className='ItemLists'>spreads & Honey </p>
                    <p className='ItemLists'>   Ready to Cook & Eat</p>
                    <p className='ItemLists'>   Chocolates</p>
                    <p className='ItemLists'>  Baking Essentials  </p>
                    <p className='ItemLists'> Sweets Store </p>
                    <p className='ItemLists'>  Top Brand Deals</p>


                </div>



                <div className="hidden_Child" onMouseOut={() => removeDiv(3)} onMouseOver={() => addDiv(3)}style={{ display: List_Display[3] }}>
                    <p className='ItemLists grayTag'> MORE IN NUTRITIONS & HEALTH CARE  </p>
                    <p className='ItemLists'>View All </p>
                    <p className='ItemLists'> Masks </p>
                    <p className='ItemLists'> Ayurvedic Supplements </p>
                    <p className='ItemLists'>Health Drinks  </p>
                    <p className='ItemLists'>Vitamin Supplements </p>
                    <p className='ItemLists'>  Protien Supplements </p>
                    <p className='ItemLists'> Women's Safety</p>
                    <p className='ItemLists'> Home Medicines</p>
                    <p className='ItemLists'>Home edical Supplies</p>
                    <p className='ItemLists'>  Healthcare Comos</p>
                    <p className='ItemLists'>Professional Medical Supplies</p>
                    <p className='ItemLists'> Top Brand Deals </p>


                </div>




                <div className="hidden_Child" onMouseOut={() => removeDiv(4)} onMouseOver={() => addDiv(4)}style={{ display: List_Display[4] }}>
                    <p className='ItemLists grayTag'>MORE IN BABY CAREE</p>
                    <p className='ItemLists'> View All </p>
                    <p className='ItemLists'> Baby Diapers </p>
                    <p className='ItemLists'> Baby Wipes </p>
                    <p className='ItemLists'>  Baby Bath & Grooming  </p>
                    <p className='ItemLists'>Baby Gift Sets & Combo</p>
                    <p className='ItemLists'> Baby medical & Health Care </p>
                    <p className='ItemLists'> Nursing & Breast Feeding </p>
                    <p className='ItemLists'> Feeding Bottels </p>
                    <p className='ItemLists'>  Utensils & accessories   </p>
                    <p className='ItemLists'>Baby Food</p>
                    <p className='ItemLists'>  Baby bedding </p>
                    <p className='ItemLists'>Baby Gear </p>
                    <p className='ItemLists'>   Top Brand Deals </p>

                </div>



                <div className="hidden_Child" onMouseOut={() => removeDiv(5)} onMouseOver={() => addDiv(5)}style={{ display: List_Display[5] }}>
                    <p className='ItemLists grayTag'> MORE IN TOYS & SCHOOL SUPPLIES </p>
                    <p className='ItemLists'> View All </p>
                    <p className='ItemLists'>  Remote Control Toys </p>
                    <p className='ItemLists'>  Soft Toys</p>
                    <p className='ItemLists'>   Puzzles </p>
                    <p className='ItemLists'>Board Games </p>
                    <p className='ItemLists'>  Learning & Educational Toys</p>
                    <p className='ItemLists'> Cars & Die-Cast Vehicles</p>
                    <p className='ItemLists'>Baby Toys</p>
                    <p className='ItemLists'>  Gifting Toys </p>
                    <p className='ItemLists'> School Bags & Backpacks</p>
                    <p className='ItemLists'>School Supplies </p>
                    <p className='ItemLists'>Top Brand Deals  </p>

                </div>



                <div className="hidden_Child" onMouseOut={() => removeDiv(6)} onMouseOver={() => addDiv(6)}style={{ display: List_Display[6] }}>
                    <p className='ItemLists grayTag'> MORE IN SPORTS & FITNESS </p>
                    <p className='ItemLists'> View All </p>
                    <p className='ItemLists'> Badminton  </p>
                    <p className='ItemLists'>   Cricket  </p>
                    <p className='ItemLists'> Cycling </p>
                    <p className='ItemLists'>  Football  </p>
                    <p className='ItemLists'>Fitness Equipments</p>
                    <p className='ItemLists'>  Shakers & Sippers  </p>
                    <p className='ItemLists'>Gym Gloves </p>
                    <p className='ItemLists'>Dumbbells </p>
                    <p className='ItemLists'> Yoga  </p>
                    <p className='ItemLists'>  Top Brand Deals</p>


                </div>



                <div className="hidden_Child" onMouseOut={() => removeDiv(7)} onMouseOver={() => addDiv(7)}style={{ display: List_Display[7] }}>
                    <p className='ItemLists grayTag'>MORE IN BOOKS </p>
                    <p className='ItemLists'> View All </p>
                    <p className='ItemLists'>Test prep   </p>
                    <p className='ItemLists'>Academics  </p>
                    <p className='ItemLists'> Literature & Fiction  </p>
                    <p className='ItemLists'> Non Fiction  </p>
                    <p className='ItemLists'>  Young Readers </p>
                    <p className='ItemLists'> Audio Books </p>
                    <p className='ItemLists'> Musical Keynoards  </p>
                    <p className='ItemLists'> Microphones</p>
                    <p className='ItemLists'> Stages Equipment & Aceesories </p>




                </div>



                <div className="hidden_Child" onMouseOut={() => removeDiv(8)} onMouseOver={() => addDiv(8)}style={{ display: List_Display[8] }}>
                    <p className='ItemLists grayTag'> MORE IN  MUSIC </p>
                    <p className='ItemLists'> View All </p>
                    <p className='ItemLists'> Muscial Instruments </p>
                    <p className='ItemLists'> Music & Tv Shows </p>
                    <p className='ItemLists'>   Acoustics Guitars</p>
                    <p className='ItemLists'>Keys and Synthesizer </p>
                    <p className='ItemLists'> Microphones  </p>
                    <p className='ItemLists'> Studio and Stage equipment</p>
                    <p className='ItemLists'>String Instruments </p>
                    <p className='ItemLists'> Indian instruments</p>
                    <p className='ItemLists'>  Wind Instruments </p>




                </div>
                <div className="hidden_Child" onMouseOut={() => removeDiv(9)} onMouseOver={() => addDiv(9)}style={{ display: List_Display[9] }}>
                    <p className='ItemLists grayTag'> MORE IN STATIONERY & OFFICE SUPPLIES   </p>
                    <p className='ItemLists'> View All </p>
                    <p className='ItemLists'>Pens & Gift Sets</p>
                    <p className='ItemLists'> Notebooks & Diaries</p>
                    <p className='ItemLists'>  Art Supplies</p>
                    <p className='ItemLists'>Calculators </p>
                    <p className='ItemLists'> Keychains</p>
                    <p className='ItemLists'> Card Holders </p>
                    <p className='ItemLists'>Desk Organizers </p>
                    <p className='ItemLists'>Office Supplies </p>
                    <p className='ItemLists'>Offices Eqipmenets  </p>
                    <p className='ItemLists'>Party Supplies </p>
                    <p className='ItemLists'> Top Brand Deals</p>




                </div>
                <div className="hidden_Child" onMouseOut={() => removeDiv(10)} onMouseOver={() => addDiv(10)}style={{ display: List_Display[10] }}>
                    <p className='ItemLists grayTag'>MORE IN SAFETY & HYGIENE ESSENTIALS</p>
                    <p className='ItemLists'> View All </p>
                    <p className='ItemLists'> Masks </p>
                    <p className='ItemLists'> Sanitizers </p>
                    <p className='ItemLists'>Hand Wash</p>
                    <p className='ItemLists'>Gloves  </p>
                    <p className='ItemLists'>PPE Kits</p>
                    <p className='ItemLists'>   UV Sterilizer Box </p>
                    <p className='ItemLists'>  Safety Goggles </p>
                    <p className='ItemLists'>Vitamins for Immunity </p>


                </div>





          

    </>
  )
}

export default Beauty
