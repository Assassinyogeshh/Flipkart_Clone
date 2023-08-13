import React, { useState } from 'react';
// import '../Components Css/Electronic.css'
import '../Components Css/ProductsChildDetails.css'


export default function Electronics() {

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
                    <p className='itemChid' onMouseOver={() => showDiv_2(0)} onMouseOut={() => hideDiv_2(0)}>Audio   <span><img src="arrow_icon.png" /></span></p>
                    <p className='itemChid'> Electronics GST Store  <span><img src="arrow_icon.png" /></span></p>
                    <p className='itemChid' onMouseOver={() => showDiv_2(1)} onMouseOut={() => hideDiv_2(1)}> Cameras & Accessories <span><img src="arrow_icon.png" /></span></p>
                    <p className='itemChid' onMouseOver={() => showDiv_2(2)} onMouseOut={() => hideDiv_2(2)}>Computer Peripherals  <span><img src="arrow_icon.png" /></span></p>
                    <p className='itemChid' onMouseOver={() => showDiv_2(3)} onMouseOut={() => hideDiv_2(3)}> Gaming<span><img src="arrow_icon.png" /></span></p>
                    <p className='itemChid' onMouseOver={() => showDiv_2(4)} onMouseOut={() => hideDiv_2(4)}>  Laptop Accessories<span><img src="arrow_icon.png" /></span></p>
                    <p className='itemChid' onMouseOver={() => showDiv_2(5)} onMouseOut={() => hideDiv_2(5)}> Laptop and Desktop<span><img src="arrow_icon.png" /></span></p>
                    <p className='itemChid' onMouseOver={() => showDiv_2(6)} onMouseOut={() => hideDiv_2(6)}>Mobile Accessory<span><img src="arrow_icon.png" /></span></p>
                    <p className='itemChid' onMouseOver={() => showDiv_2(7)} onMouseOut={() => hideDiv_2(7)}>Powerbank <span><img src="arrow_icon.png" /></span></p>
                    <p className='itemChid' onMouseOver={() => showDiv_2(8)} onMouseOut={() => hideDiv_2(8)}>Smart Home automation  <span><img src="arrow_icon.png" /></span></p>
                    <p className='itemChid' onMouseOver={() => showDiv_2(9)} onMouseOut={() => hideDiv_2(9)}>Smart Wearables <span><img src="arrow_icon.png" /></span></p>
                    <p className='itemChid' onMouseOver={() => showDiv_2(10)} onMouseOut={() => hideDiv_2(10)}>Storage  <span><img src="arrow_icon.png" /></span></p>
                    <p className='itemChid' onMouseOver={() => showDiv_2(11)} onMouseOut={() => hideDiv_2(11)}>Tablets <span><img src="arrow_icon.png" /></span></p>

                </div>

                </div>

                <div className="hidden_Child"  onMouseOut={() => removeDiv(0)} onMouseOver={() => addDiv(0)} style={{ display: List_Display[0] }}>
                    <p className='ItemLists grayTag'> MORE IN AUDIO </p>
                    <p className='ItemLists'> All </p>
                    <p className='ItemLists'> BLetooth HeadPHones</p>
                    <p className='ItemLists'>Wired Headphones </p>
                    <p className='ItemLists'>True Wireless Earbuds</p>
                    <p className='ItemLists'>Bluetooth Speakers </p>
                    <p className='ItemLists'>Soundbars</p>
                    <p className='ItemLists'>Home Theatres</p>
                    <p className='ItemLists'>TV Streaming Devices</p>
                    <p className='ItemLists'>  Remote Control</p>
                    <p className='ItemLists'>DTH Set top box</p>
                    <p className='ItemLists'>Headphones Pouch & Case Covers </p>
                </div>




                <div className="hidden_Child"  onMouseOut={() => removeDiv(1)} onMouseOver={() => addDiv(1)} style={{ display: List_Display[1] }}>
                    <p className='ItemLists grayTag'>  MORE IN CAMERAS & ACCESSORIES</p>
                    <p className='ItemLists'> All </p>
                    <p className='ItemLists'> DSLR & Mirrorless</p>
                    <p className='ItemLists'>  Point & Shoot </p>
                    <p className='ItemLists'>Instant Cameras  </p>
                    <p className='ItemLists'> Camcorders</p>
                    <p className='ItemLists'>Camera tripods </p>
                    <p className='ItemLists'>Camera Lenses</p>
                    <p className='ItemLists'> Drone </p>
                    <p className='ItemLists'>  Flashes</p>
                    <p className='ItemLists'>Gimbals</p>
                    <p className='ItemLists'>Binoculars</p>
                    <p className='ItemLists'> Other Camera Accessories</p>

                </div>

                <div className="hidden_Child"  onMouseOut={() => removeDiv(2)} onMouseOver={() => addDiv(2)} style={{ display: List_Display[2] }}>
                    <p className='ItemLists grayTag'>   MORE IN COMPUTER PERIPHERALS</p>
                    <p className='ItemLists'> All </p>
                    <p className='ItemLists'> Printers </p>
                    <p className='ItemLists'> Monitors </p>
                    <p className='ItemLists'>Projectors </p>
                    <p className='ItemLists'> Portable Projectors</p>
                    <p className='ItemLists'>  Toners  </p>
                    <p className='ItemLists'>Ink Cartridges</p>
                    <p className='ItemLists'> Ink Bottles </p>
                    <p className='ItemLists'>   Recipt Printers </p>
                    <p className='ItemLists'> Lamination Machines</p>
                    <p className='ItemLists'> Note Counting Machines </p>
                    <p className='ItemLists'> Barcode Scanners  </p>
                    <p className='ItemLists'> Currency Detectors </p>

                </div>



                <div className="hidden_Child"  onMouseOut={() => removeDiv(3)} onMouseOver={() => addDiv(3)} style={{ display: List_Display[3] }}>
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




                <div className="hidden_Child"  onMouseOut={() => removeDiv(4)} onMouseOver={() => addDiv(4)} style={{ display: List_Display[4] }}>
                    <p className='ItemLists grayTag'>MORE IN LAPTOP ACCESSORIES</p>
                    <p className='ItemLists'> All </p>
                    <p className='ItemLists'> Mouse </p>
                    <p className='ItemLists'> Laptop Keyboard </p>
                    <p className='ItemLists'>   Router Data Cards </p>
                    <p className='ItemLists'>UPS </p>
                    <p className='ItemLists'> USB Gadgets </p>
                    <p className='ItemLists'> Security Software </p>
                    <p className='ItemLists'>  Laptop Battery </p>
                    <p className='ItemLists'>  Laptop Adadpter </p>
                    <p className='ItemLists'> Wireless USB Adapter,</p>
                    <p className='ItemLists'>   Processor </p>
                    <p className='ItemLists'> Other Accessories</p>

                </div>



                <div className="hidden_Child"  onMouseOut={() => removeDiv(5)} onMouseOver={() => addDiv(5)} style={{ display: List_Display[5] }}>
                    <p className='ItemLists grayTag'>   MORE IN LAPTOP AND DESKTOP</p>
                    <p className='ItemLists'> All </p>
                    <p className='ItemLists'>  Laptops </p>
                    <p className='ItemLists'>  Gaming laptops </p>
                    <p className='ItemLists'>  Desktop PCs </p>
                    <p className='ItemLists'>All in One PCs</p>
                    <p className='ItemLists'>    Mini PCs </p>
                    <p className='ItemLists'> Tower PCs</p>
                    <p className='ItemLists'>PC Finder</p>
                    <p className='ItemLists'>  GST Invoice on Laptops </p>
                    <p className='ItemLists'>  Laptop Buying Guide</p>

                </div>



                <div className="hidden_Child"  onMouseOut={() => removeDiv(6)} onMouseOver={() => addDiv(6)} style={{ display: List_Display[6] }}>
                    <p className='ItemLists grayTag'> MORE IN MOBILE ACCESSORY  </p>
                    <p className='ItemLists'> All </p>
                    <p className='ItemLists'> Plain Cases </p>
                    <p className='ItemLists'>   Designer Cases </p>
                    <p className='ItemLists'>  Screen Guards </p>
                    <p className='ItemLists'> Camera lens Protectors</p>
                    <p className='ItemLists'>   Tablet Accessories </p>
                    <p className='ItemLists'> MobileCable </p>
                    <p className='ItemLists'> MobileChargingMobileCharger</p>
                    <p className='ItemLists'> MobilePouches</p>
                    <p className='ItemLists'> MobileFlash</p>
                    <p className='ItemLists'>  MobileUSBGadget</p>
                    <p className='ItemLists'>  Mobiles Acessories Combos</p>


                </div>



                <div className="hidden_Child"  onMouseOut={() => removeDiv(7)} onMouseOver={() => addDiv(7)} style={{ display: List_Display[7] }}>
                    <p className='ItemLists grayTag'> MORE IN POWERBANK </p>
                    <p className='ItemLists'> All </p>
                    <p className='ItemLists'> Powerbank </p>


                </div>



                <div className="hidden_Child"  onMouseOut={() => removeDiv(8)} onMouseOver={() => addDiv(8)} style={{ display: List_Display[8] }}>
                    <p className='ItemLists grayTag'>     MORE IN SMART HOME AUTOMATION </p>
                    <p className='ItemLists'> All </p>
                    <p className='ItemLists'> Smart Assistants </p>
                    <p className='ItemLists'> Smart Lights</p>
                    <p className='ItemLists'>    Smart Cameras </p>
                    <p className='ItemLists'>Smart Switches</p>
                    <p className='ItemLists'>  Smart Door Locks </p>
                    <p className='ItemLists'> Sensors & Alarms </p>



                </div>
                <div className="hidden_Child"  onMouseOut={() => removeDiv(9)} onMouseOver={() => addDiv(9)} style={{ display: List_Display[9] }}>
                    <p className='ItemLists grayTag'>  MORE IN SMART WEARABLES </p>
                    <p className='ItemLists'> All </p>
                    <p className='ItemLists'>Smart Watches</p>
                    <p className='ItemLists'>  Smart Bands </p>
                    <p className='ItemLists'>   smart Glasses  </p>




                </div>
                <div className="hidden_Child"  onMouseOut={() => removeDiv(10)} onMouseOver={() => addDiv(10)} style={{ display: List_Display[10] }}>
                    <p className='ItemLists grayTag'> MORE IN STORAGE </p>
                    <p className='ItemLists'> All </p>
                    <p className='ItemLists'> Pendrive </p>
                    <p className='ItemLists'> MobileMemoryCard </p>
                    <p className='ItemLists'>ExternalHardDrive </p>
                    <p className='ItemLists'> InternalHardDrive </p>



                </div>
                <div className="hidden_Child"  onMouseOut={() => removeDiv(11)} onMouseOver={() => addDiv(11)} style={{ display: List_Display[11] }}>
                    <p className='ItemLists grayTag'>MORE IN TABLETS </p>
                    <p className='ItemLists'> All </p>
                    <p className='ItemLists'> Tablets With Call Facilty </p>
                    <p className='ItemLists'>Tablets Without Call Facillity</p>




                </div>



         
    </>
  )
}
