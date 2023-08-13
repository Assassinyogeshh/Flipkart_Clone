import React, { useState } from 'react';
// import '../Components Css/ProductsChildDetails.css'


export default function Home_Furniture() {

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
                    <p className='itemChid' onMouseOver={() => showDiv_2(0)} onMouseOut={() => hideDiv_2(0)}>Home Furnishings    <span><img src="arrow_icon.png" /></span></p>
                    <p className='itemChid'> Furniture Studio <span><img src="arrow_icon.png" /></span></p>
                    <p className='itemChid' onMouseOver={() => showDiv_2(1)} onMouseOut={() => hideDiv_2(1)}>Living Room Furniture <span><img src="arrow_icon.png" /></span></p>
                    <p className='itemChid' onMouseOver={() => showDiv_2(2)} onMouseOut={() => hideDiv_2(2)}> Kitchen & Dining <span><img src="arrow_icon.png" /></span></p>
                    <p className='itemChid' onMouseOver={() => showDiv_2(3)} onMouseOut={() => hideDiv_2(3)}>Bedroom Furniture  <span><img src="arrow_icon.png" /></span></p>
                    <p className='itemChid' onMouseOver={() => showDiv_2(4)} onMouseOut={() => hideDiv_2(4)}>MORE IN HOME DECOR<span><img src="arrow_icon.png" /></span></p>
                    <p className='itemChid' onMouseOver={() => showDiv_2(5)} onMouseOut={() => hideDiv_2(5)}>  Tools & Utility<span><img src="arrow_icon.png" /></span></p>
                    <p className='itemChid' onMouseOver={() => showDiv_2(6)} onMouseOut={() => hideDiv_2(6)}> Work Space Furniture<span><img src="arrow_icon.png" /></span></p>
                    <p className='itemChid' onMouseOver={() => showDiv_2(7)} onMouseOut={() => hideDiv_2(7)}>Lightings & Electricals<span><img src="arrow_icon.png" /></span></p>
                    <p className='itemChid' onMouseOver={() => showDiv_2(8)} onMouseOut={() => hideDiv_2(8)}> Space Saving Furniture  <span><img src="arrow_icon.png" /></span></p>
                    <p className='itemChid' onMouseOver={() => showDiv_2(9)} onMouseOut={() => hideDiv_2(9)}>Cleaning & Bath <span><img src="arrow_icon.png" /></span></p>
                    <p className='itemChid' onMouseOver={() => showDiv_2(10)} onMouseOut={() => hideDiv_2(10)}>Kids Furniture <span><img src="arrow_icon.png" /></span></p>
                    <p className='itemChid' onMouseOver={() => showDiv_2(11)} onMouseOut={() => hideDiv_2(11)}>Pet & Gardening  <span><img src="arrow_icon.png" /></span></p>

                </div>

                </div>

                <div className="hidden_Child" onMouseOut={() => removeDiv(0)} onMouseOver={() => addDiv(0)} style={{ display: List_Display[0] }}>
                    <p className='ItemLists grayTag'>MORE IN HOME FURNISHINGS </p>
                    <p className='ItemLists'> All </p>
                    <p className='ItemLists'>  Bed Linenes</p>
                    <p className='ItemLists'>Bedsheets </p>
                    <p className='ItemLists'>Blankets</p>
                    <p className='ItemLists'>Curtains & Accessories</p>
                    <p className='ItemLists'>Bath Linen</p>
                    <p className='ItemLists'>Floor coverings</p>
                    <p className='ItemLists'>Covers & protectors</p>
                    <p className='ItemLists'> Cushions & Pillows</p>
                    <p className='ItemLists'>Kitchen Linen Sets</p>
                    <p className='ItemLists'>Table Linen Sets </p>
                    <p className='ItemLists'>Sofa & curtain fabrics  </p>
                    <p className='ItemLists'> Branded Collections </p>
                </div>




                <div className="hidden_Child" onMouseOut={() => removeDiv(1)} onMouseOver={() => addDiv(1)} style={{ display: List_Display[1] }}>
                    <p className='ItemLists grayTag'> MORE IN LIVING ROOM FURNITURE</p>
                    <p className='ItemLists'> All </p>
                    <p className='ItemLists'> Sofa Sets & Sectionals </p>
                    <p className='ItemLists'>  TV Units </p>
                    <p className='ItemLists'>Dining Sets  </p>
                    <p className='ItemLists'> Coffee Tables</p>
                    <p className='ItemLists'>Sofa Beds </p>
                    <p className='ItemLists'> Recliners</p>
                    <p className='ItemLists'> Living Room Chairs</p>
                    <p className='ItemLists'> Cabinet & Drawers</p>
                    <p className='ItemLists'>Bookshelves </p>
                    <p className='ItemLists'>Shoe Racks</p>
                    <p className='ItemLists'> Office Tables</p>
                    <p className='ItemLists'> Office Chairs</p>

                </div>

                <div className="hidden_Child" onMouseOut={() => removeDiv(2)} onMouseOver={() => addDiv(2)} style={{ display: List_Display[2] }}>
                    <p className='ItemLists grayTag'>  MORE IN KITCHEN & DINING </p>
                    <p className='ItemLists'> All </p>
                    <p className='ItemLists'>  Cookware </p>
                    <p className='ItemLists'> Lunchboxes </p>
                    <p className='ItemLists'>Bottles & Flasks </p>
                    <p className='ItemLists'> Knives </p>
                    <p className='ItemLists'>  Choppers & Cutters  </p>
                    <p className='ItemLists'>Gas Stoves & Accessories</p>
                    <p className='ItemLists'> Kitchen tools </p>
                    <p className='ItemLists'>   Tableware & Dinnerware </p>
                    <p className='ItemLists'>  Container & Kitchen Storage</p>
                    <p className='ItemLists'> Barware </p>
                    <p className='ItemLists'> Bakeware </p>
                    <p className='ItemLists'>  Handjuicers & Grinders </p>
                    <p className='ItemLists'> Disposable Supplies</p>
                    <p className='ItemLists'> Outdoor cooking </p>

                </div>



                <div className="hidden_Child" onMouseOut={() => removeDiv(3)} onMouseOver={() => addDiv(3)} style={{ display: List_Display[3] }}>
                    <p className='ItemLists grayTag'>   MORE IN GAMING </p>
                    <p className='ItemLists'> All </p>
                    <p className='ItemLists'> Gaming Consoles</p>
                    <p className='ItemLists'> Gaming Mouse </p>
                    <p className='ItemLists'>Gaming Keyboard  </p>
                    <p className='ItemLists'>Gamespads </p>
                    <p className='ItemLists'>  Games </p>
                    <p className='ItemLists'>Accessory Kits</p>
                    <p className='ItemLists'> Gaming Acessories Combo</p>
                    <p className='ItemLists'> Gaming Mousepads</p>
                    <p className='ItemLists'>  Controllers</p>
                    <p className='ItemLists'> Other Gaming Accessories</p>
                    <p className='ItemLists'> Gaming Components</p>


                </div>




                <div className="hidden_Child" onMouseOut={() => removeDiv(4)} onMouseOver={() => addDiv(4)} style={{ display: List_Display[4] }}>
                    <p className='ItemLists grayTag'>MORE IN BEDROOM FURNITURE</p>
                    <p className='ItemLists'> All </p>
                    <p className='ItemLists'> Mattresses </p>
                    <p className='ItemLists'> Beds </p>
                    <p className='ItemLists'>  Wardrobes </p>
                    <p className='ItemLists'>Side Tables </p>
                    <p className='ItemLists'> TV Units </p>
                    <p className='ItemLists'> office Tables </p>
                    <p className='ItemLists'>  office Chairs </p>
                    <p className='ItemLists'>  Bookshelves  </p>
                    <p className='ItemLists'>Bar Cabinates</p>
                    <p className='ItemLists'>   Bar Stools </p>
                    <p className='ItemLists'>Rocking Chairs</p>
                    <p className='ItemLists'>  Benches</p>

                </div>



                <div className="hidden_Child" onMouseOut={() => removeDiv(5)} onMouseOver={() => addDiv(5)} style={{ display: List_Display[5] }}>
                    <p className='ItemLists grayTag'> MORE IN HOME DECOR  </p>
                    <p className='ItemLists'> All </p>
                    <p className='ItemLists'>  Lightings  Stickers & Wallpapers  </p>
                    <p className='ItemLists'>   Paintings & Posters </p>
                    <p className='ItemLists'>   Clocks </p>
                    <p className='ItemLists'>ShowPieces & Decoratives</p>
                    <p className='ItemLists'>    Wall Decor</p>
                    <p className='ItemLists'> Flowers & Vases </p>
                    <p className='ItemLists'>Home Fragrances</p>
                    <p className='ItemLists'>   WindChimes & Dream catcher </p>
                    <p className='ItemLists'>  Photo frames & Albums</p>
                    <p className='ItemLists'>Diyas </p>
                    <p className='ItemLists'>Candles & Holders </p>
                    <p className='ItemLists'> Festive & Giftng </p>

                </div>



                <div className="hidden_Child" onMouseOut={() => removeDiv(6)} onMouseOver={() => addDiv(6)} style={{ display: List_Display[6] }}>
                    <p className='ItemLists grayTag'> MORE IN TOOLS & UTILITY  </p>
                    <p className='ItemLists'> All </p>
                    <p className='ItemLists'> Hand Tools </p>
                    <p className='ItemLists'>    Power Tools Measuring Tools </p>
                    <p className='ItemLists'> Home Storage & Organizers </p>
                    <p className='ItemLists'>  Umbrellas </p>
                    <p className='ItemLists'> Appliance Trolley & Stands</p>
                    <p className='ItemLists'>  Cloth Dryer Stand </p>
                    <p className='ItemLists'> Appliance Filter & Cartridges</p>
                    <p className='ItemLists'> Laundary Organization</p>
                    <p className='ItemLists'> Lock & Security </p>
                    <p className='ItemLists'>   Fire & personal Safety</p>
                    <p className='ItemLists'>  Paint Supplies & Equipments</p>


                </div>



                <div className="hidden_Child" onMouseOut={() => removeDiv(7)} onMouseOver={() => addDiv(7)} style={{ display: List_Display[7] }}>
                    <p className='ItemLists grayTag'>MORE IN LIGHTINING & ELECTRICALS</p>
                    <p className='ItemLists'> All </p>
                    <p className='ItemLists'> Bubs  </p>
                    <p className='ItemLists'> Emergency Lights </p>
                    <p className='ItemLists'> Torches </p>
                    <p className='ItemLists'> TubeLights  </p>
                    <p className='ItemLists'>  Extension Cords </p>
                    <p className='ItemLists'> Outdoor Lamps </p>
                    <p className='ItemLists'> Batteries  </p>
                    <p className='ItemLists'> ElectricalWire  </p>
                    <p className='ItemLists'> ElctricalSocket  </p>
                    <p className='ItemLists'> ElectricDoorBell  </p>
                    <p className='ItemLists'> Solar Lights  </p>
                    <p className='ItemLists'>  Panels & Batteries  </p>
                    <p className='ItemLists'> Electrical Hardware  </p>



                </div>



                <div className="hidden_Child" onMouseOut={() => removeDiv(8)} onMouseOver={() => addDiv(8)} style={{ display: List_Display[8] }}>
                    <p className='ItemLists grayTag'> MORE IN SPACE SAVING FURNITURE </p>
                    <p className='ItemLists'> All </p>
                    <p className='ItemLists'> Portable Laptop Tables </p>
                    <p className='ItemLists'> Collapsable Wardrobes </p>
                    <p className='ItemLists'>   Bean Bags & Covers</p>
                    <p className='ItemLists'>Shoe Racks </p>
                    <p className='ItemLists'>  Cabinet Drawers  </p>
                    <p className='ItemLists'> Inflatable Sofas</p>
                    <p className='ItemLists'>Hammock Swings  </p>
                    <p className='ItemLists'> Home Temples </p>
                    <p className='ItemLists'> Booksheleves </p>
                    <p className='ItemLists'> TV Mounts </p>
                    <p className='ItemLists'> Kitchen Trolley</p>
                    <p className='ItemLists'>Kitchen Cabinet  </p>



                </div>
                <div className="hidden_Child" onMouseOut={() => removeDiv(9)} onMouseOver={() => addDiv(9)} style={{ display: List_Display[9] }}>
                    <p className='ItemLists grayTag'>  MORE IN CLEANING & BATH Mops  </p>
                    <p className='ItemLists'> All </p>
                    <p className='ItemLists'>Cleaning Supplies</p>
                    <p className='ItemLists'> House Hold supplies </p>
                    <p className='ItemLists'> Air Fresheners</p>
                    <p className='ItemLists'>Cleaning Gloves </p>
                    <p className='ItemLists'> Liquid Detergents </p>
                    <p className='ItemLists'>Taps & Faucet </p>
                    <p className='ItemLists'>Toothbrush Holder </p>
                    <p className='ItemLists'>Bathroom Rack & Shelves </p>
                    <p className='ItemLists'>Shower Heads </p>
                    <p className='ItemLists'> Bath & Kitchen Fittings </p>
                    <p className='ItemLists'> Bathrrom Accessories </p>




                </div>
                <div className="hidden_Child" onMouseOut={() => removeDiv(10)} onMouseOver={() => addDiv(10)} style={{ display: List_Display[10] }}>
                    <p className='ItemLists grayTag'>MORE IN KIDS FURNITURE</p>
                    <p className='ItemLists'> All </p>
                    <p className='ItemLists'>  Bunk Beds </p>
                    <p className='ItemLists'> Kids'Seating </p>
                    <p className='ItemLists'>Kids'Table </p>
                    <p className='ItemLists'> Kids'Chairs </p>
                    <p className='ItemLists'> Kids'sofas </p>
                    <p className='ItemLists'> Bookshelves </p>
                    <p className='ItemLists'> Chest of Drwers </p>
                    <p className='ItemLists'> Cupboards </p>
                    <p className='ItemLists'> Shoe Racks </p>
                    <p className='ItemLists'> kids'Bean Bags </p>
                    <p className='ItemLists'>Portable Pool </p>
                    <p className='ItemLists'> Sofa Beds</p>



                </div>
                <div className="hidden_Child" onMouseOut={() => removeDiv(11)} onMouseOver={() => addDiv(11)} style={{ display: List_Display[11] }}>
                    <p className='ItemLists grayTag'>MORE IN PET & GARDENING </p>
                    <p className='ItemLists'> All </p>
                    <p className='ItemLists'> Plant Seeds </p>
                    <p className='ItemLists'>Soil Manure</p>
                    <p className='ItemLists'> Pots & Planters </p>
                    <p className='ItemLists'> garden tool set </p>
                    <p className='ItemLists'> waatering Eqipments</p>
                    <p className='ItemLists'>Dog Essentials </p>
                    <p className='ItemLists'> Car Essentials </p>
                    <p className='ItemLists'>Fish & aquatic </p>
                    <p className='ItemLists'>Pet Frooming & Hygiene </p>
                    <p className='ItemLists'> Pet Toys</p>
                    <p className='ItemLists'> Pet Health & Safety </p>





                </div>



          
    </>
  )
}
