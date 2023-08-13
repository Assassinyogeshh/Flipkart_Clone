import React, { useState } from 'react'
import '../Components Css/ProductsChildDetails.css'

function Fashion() {
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

            <div className="Parent_items" >
                <div id="fashion" className='flipkart_items' >
                            <p className='itemChid' onMouseOver={() => showDiv_2(0)} onMouseOut={() => hideDiv_2(0)}>Men's Top Wear  <span><img src="arrow_icon.png" /></span></p>
                            <p className='itemChid' onMouseOver={() => showDiv_2(1)} onMouseOut={() => hideDiv_2(1)}>Men's Bottom Wear  <span><img src="arrow_icon.png" /></span></p>
                            <p className='itemChid' onMouseOver={() => showDiv_2(2)} onMouseOut={() => hideDiv_2(2)}>Women Ethnic <span><img src="arrow_icon.png" /></span></p>
                            <p className='itemChid' onMouseOver={() => showDiv_2(3)} onMouseOut={() => hideDiv_2(3)}>Women Western  <span><img src="arrow_icon.png" /></span></p>
                            <p className='itemChid' onMouseOver={() => showDiv_2(4)} onMouseOut={() => hideDiv_2(4)}>Men Footwear<span><img src="arrow_icon.png" /></span></p>
                            <p className='itemChid' onMouseOver={() => showDiv_2(5)} onMouseOut={() => hideDiv_2(5)}> Women Footwear <span><img src="arrow_icon.png" /></span></p>
                            <p className='itemChid' onMouseOver={() => showDiv_2(6)} onMouseOut={() => hideDiv_2(6)}> Watches and Accessories <span><img src="arrow_icon.png" /></span></p>
                            <p className='itemChid' onMouseOver={() => showDiv_2(7)} onMouseOut={() => hideDiv_2(7)}> Bags, Suitcases & Luggage <span><img src="arrow_icon.png" /></span></p>
                            <p className='itemChid' onMouseOver={() => showDiv_2(8)} onMouseOut={() => hideDiv_2(8)}>Kids <span><img src="arrow_icon.png" /></span></p>
                            <p className='itemChid' onMouseOver={() => showDiv_2(9)} onMouseOut={() => hideDiv_2(9)}>Essentials <span><img src="arrow_icon.png" /></span></p>
                            <p className='itemChid' onMouseOver={() => showDiv_2(10)} onMouseOut={() => hideDiv_2(10)}>Winter <span><img src="arrow_icon.png" /></span></p>
                        </div>
                    </div>

                    {/* <div className='seperateHiddenLists' > */}

                    <div className="hidden_Child" onMouseOut={() => removeDiv(0)} onMouseOver={() => addDiv(0)} style={{ display: List_Display[0] }}>
                        <p className='ItemLists grayTag' >More IN MEN'S TOP WEAR </p>
                        <p className='ItemLists'> All </p>
                        <p className='ItemLists'> Men's T-Shirts</p>
                        <p className='ItemLists'>Men's Casual Shirts </p>
                        <p className='ItemLists'>Men's Formal Shirts</p>
                        <p className='ItemLists'>Men's Kurtas </p>
                        <p className='ItemLists'>Men's Ethnic Sets</p>
                        <p className='ItemLists'>Men's Blazers</p>
                        <p className='ItemLists'>Men's Raincoat</p>
                        <p className='ItemLists'> Men's Windcheaters</p>
                        <p className='ItemLists'>Men's Suit</p>
                        <p className='ItemLists'>Men's Fabrics</p>
                    </div>

                    <div className="hidden_Child" onMouseOut={() => removeDiv(1)} onMouseOver={() => addDiv(1)} style={{ display: List_Display[1] }}>
                        <p className='ItemHeading grayTag'> MORE IN MEN'S BOTTOM WEAR </p>
                        <p className='ItemLists'> All </p>
                        <p className='ItemLists'> Men's Jeans</p>
                        <p className='ItemLists'> Men's Trousers </p>
                        <p className='ItemLists'>Men's Trackpants</p>
                        <p className='ItemLists'> Men's Shorts</p>
                        <p className='ItemLists'>Men's Cargos s</p>
                        <p className='ItemLists'>Men's Threefourths s</p>
                        <p className='ItemLists'>Men's Pyjamas & Loungepants</p>
                        <p className='ItemLists'>  Men's Dhoti</p>
                        <p className='ItemLists'>Men's Ethnic Pyjama</p>

                    </div>


                    <div className="hidden_Child" onMouseOut={() => removeDiv(2)} onMouseOver={() => addDiv(2)} style={{ display: List_Display[2] }}>
                        <p className='ItemHeading grayTag'> MORE IN WOMEN ETHNIC</p>
                        <p className='ItemLists'> All </p>
                        <p className='ItemLists'> Women Sarees</p>
                        <p className='ItemLists'> Women Kurtas & Kurtis </p>
                        <p className='ItemLists'>Women Kurta Sets & Salwar Suits </p>
                        <p className='ItemLists'>  Ehtnic Dresses Women Dress Materials</p>
                        <p className='ItemLists'>Women Gowns </p>
                        <p className='ItemLists'>Women Lehenga Cholis</p>
                        <p className='ItemLists'>Women Leggings & Patialas </p>
                        <p className='ItemLists'>  Women Palazzos & Shararas</p>
                        <p className='ItemLists'>Women Blouse</p>
                        <p className='ItemLists'>Women Dupatta</p>

                    </div>

                    <div className="hidden_Child" onMouseOut={() => removeDiv(3)} onMouseOver={() => addDiv(3)} style={{ display: List_Display[3] }}>
                        <p className='ItemHeading grayTag'>   MORE IN WOMEN WESTERN</p>
                        <p className='ItemLists'> All </p>
                        <p className='ItemLists'>  Women Tops</p>
                        <p className='ItemLists'> Women Dresses </p>
                        <p className='ItemLists'>Women T-shirts & Polo T-shirts </p>
                        <p className='ItemLists'> Women Jeans</p>
                        <p className='ItemLists'> Women Nighties & Nigth Dresses  </p>
                        <p className='ItemLists'>Women Nightsuit</p>
                        <p className='ItemLists'>Women Track Pants </p>
                        <p className='ItemLists'>   Women Trouser</p>
                        <p className='ItemLists'> Women Jumpsuit</p>
                        <p className='ItemLists'>Women Shapewear </p>
                        <p className='ItemLists'> Women Sports Bra </p>

                    </div>



                    <div className="hidden_Child" onMouseOut={() => removeDiv(4)} onMouseOver={() => addDiv(4)} style={{ display: List_Display[4] }}>
                        <p className='ItemHeading grayTag'>   MORE IN MEN FOOTWEAR</p>
                        <p className='ItemLists'> All </p>
                        <p className='ItemLists'>  Men's Sports Shoes</p>
                        <p className='ItemLists'> Men's Casual Shoes </p>
                        <p className='ItemLists'> Men's Sandals & Floaters </p>
                        <p className='ItemLists'>Men's Slippers & Flip Flops</p>
                        <p className='ItemLists'>  Men's Formal Shoes  </p>
                        <p className='ItemLists'>Active Footwear</p>
                        <p className='ItemLists'> Combo Footwear</p>
                        <p className='ItemLists'>   Shoe Care</p>


                    </div>


                    <div className="hidden_Child" onMouseOut={() => removeDiv(5)} onMouseOver={() => addDiv(5)} style={{ display: List_Display[5] }}>
                        <p className='ItemHeading grayTag'>   MORE IN WOMEN FOOTWEAR</p>
                        <p className='ItemLists'> All </p>
                        <p className='ItemLists'>   Women Flats </p>
                        <p className='ItemLists'> Women Heels </p>
                        <p className='ItemLists'>  Women Wedges </p>
                        <p className='ItemLists'> Women Slipper Flip Flops</p>
                        <p className='ItemLists'>  Women Casual Shoes  </p>
                        <p className='ItemLists'>Women Sports Shoes</p>
                        <p className='ItemLists'> Women Ballerinas</p>
                        <p className='ItemLists'>   Women Ethnic Shoes</p>
                        <p className='ItemLists'>   Women Sneakers</p>
                        <p className='ItemLists'>   Women Walking  Shoes  Women Boots</p>

                    </div>



                    <div className="hidden_Child" onMouseOut={() => removeDiv(6)} onMouseOver={() => addDiv(6)} style={{ display: List_Display[6] }}>
                        <p className='ItemHeading grayTag'>    MORE IN WATCHES AND ACCESSORIES</p>
                        <p className='ItemLists'> All </p>
                        <p className='ItemLists'>   Men & Women Watches </p>
                        <p className='ItemLists'> Men & Women Sunglasses </p>
                        <p className='ItemLists'>  Wallets </p>
                        <p className='ItemLists'>Men & Women Belts</p>
                        <p className='ItemLists'>   Women Fashion Jewellery </p>
                        <p className='ItemLists'> Men Fashion Jewellery</p>
                        <p className='ItemLists'> Precious Jewellery </p>
                        <p className='ItemLists'>  Precious Coins & bars </p>
                        <p className='ItemLists'>   Precious Articles</p>
                        <p className='ItemLists'>    Frames & Contact Lenses</p>
                        <p className='ItemLists'>    Kids Accessories</p>

                    </div>



                    <div className="hidden_Child" onMouseOut={() => removeDiv(7)} onMouseOver={() => addDiv(7)} style={{ display: List_Display[7] }}>
                        <p className='ItemHeading grayTag'>    MORE IN BAGS SUITCASES & LUGGAGE</p>
                        <p className='ItemLists'> All </p>
                        <p className='ItemLists'>   Bags & Backpacks </p>
                        <p className='ItemLists'> Suitcases & Trollleys </p>
                        <p className='ItemLists'>  Duffebags </p>
                        <p className='ItemLists'>Rucksacks</p>
                        <p className='ItemLists'>   Handbags </p>
                        <p className='ItemLists'> Slingbags</p>
                        <p className='ItemLists'>  Women's  Clutches & Wallets </p>
                        <p className='ItemLists'>  Messenger Bags </p>
                        <p className='ItemLists'>  Travel Accessories</p>

                    </div>



                    <div className="hidden_Child" onMouseOut={() => removeDiv(8)} onMouseOver={() => addDiv(8)} style={{ display: List_Display[8] }}>
                        <p className='ItemHeading grayTag'>     MORE IN KIDS </p>
                        <p className='ItemLists'> All </p>
                        <p className='ItemLists'>  Girls Dresses </p>
                        <p className='ItemLists'>  Boys & Girls Tshirts </p>
                        <p className='ItemLists'>  Boys & Girls Combosets </p>
                        <p className='ItemLists'> Boys & Girls Ethnic Wear</p>
                        <p className='ItemLists'>   Boys & Girls Shorts </p>
                        <p className='ItemLists'>  BOys & Girls Trackpants </p>
                        <p className='ItemLists'>  Boys & girls Innerwear </p>
                        <p className='ItemLists'>  Infant Wear</p>
                        <p className='ItemLists'>  kids Slipper Flips Flops</p>
                        <p className='ItemLists'>  Kids Sports Shoes</p>

                    </div>



                    <div className="hidden_Child" onMouseOut={() => removeDiv(9)} onMouseOver={() => addDiv(9)} style={{ display: List_Display[9] }}>
                        <p className='ItemHeading grayTag'>  MORE IN ESSENTIALS </p>
                        <p className='ItemLists'> All </p>
                        <p className='ItemLists'>  Men's Briefs & Trunks </p>
                        <p className='ItemLists'> Men's Vests </p>
                        <p className='ItemLists'>   Men's Boxers </p>
                        <p className='ItemLists'> Women Lingerie Sets</p>
                        <p className='ItemLists'>    Women Bra  </p>
                        <p className='ItemLists'> Women Panty </p>
                        <p className='ItemLists'>   Women Sarees </p>
                        <p className='ItemLists'>  Women Kurtas</p>
                        <p className='ItemLists'> Women Kurts Sets & Salwar Suits</p>
                        <p className='ItemLists'> Boys Innerwear</p>
                        <p className='ItemLists'>  Girls Innerwear</p>
                        <p className='ItemLists'> Women Slipper Flip Flops</p>

                    </div>



                    <div className="hidden_Child" onMouseOut={() => removeDiv(10)} onMouseOver={() => addDiv(10)} style={{ display: List_Display[10] }}>
                        <p className='ItemHeading grayTag'>    MORE IN WINTER </p>
                        <p className='ItemLists'> All </p>
                        <p className='ItemLists'>  Men's Jackets </p>
                        <p className='ItemLists'> Men's Sweatshirts </p>
                        <p className='ItemLists'>    Men's Sweaters </p>
                        <p className='ItemLists'>Men's Thermals</p>
                        <p className='ItemLists'>   Women's Jackets </p>
                        <p className='ItemLists'>  Women's Sweatshirts </p>
                        <p className='ItemLists'>    Women's Sweater & Cardigans </p>
                        <p className='ItemLists'> Women's Shrugs</p>
                        <p className='ItemLists'>  Kids Sweatshirts</p>
                        <p className='ItemLists'>  Women Kurtas </p>
                        <p className='ItemLists'>  kids Jacketsr</p>


                    </div>


                    {/* </div> */}

                </>
                )
    }

                export default Fashion





