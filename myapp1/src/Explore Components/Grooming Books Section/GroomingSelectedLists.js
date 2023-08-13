


import { useEffect, useState} from 'react';
import React from 'react';
import '../../Components Css/SelectedLists.css';
import { useParams } from 'react-router-dom';

import { Link } from 'react-router-dom';
import SelectedJson from '../../JSON Files/SelectdList.json';

function GroomingSelectedLists() {

  const { productId } = useParams();
  const selectedJsons = SelectedJson[productId];
 
  const [displayRating, setDisplayRating] = useState([]);
  const [currentItemIMG, setCurrentIMG] = useState([]);
  const [isMouseOver, setIsMouseOver] = useState([]);
  const [selectedPage, setSelectedpage] = useState(Array(11).fill({backgroundColor:'white', color:'black'}))

  function showHiddenRatings(index) {
    setDisplayRating((previous) => {
      const newState = [...previous];
      newState[index] = 'flex';
      return newState;
    });
  }

  function hideRatings(index) {
    setDisplayRating((previous) => {
      const newState = [...previous];
      newState[index] = 'none';
      return newState;
    });
  }

  function showNextIMG(index) {
    setCurrentIMG((prevPosition) => {
      const calculate = prevPosition[index] - 120;
      console.log(calculate);
      if (calculate === -480) {
        return { ...prevPosition, [index]: 0 };
      }
      return { ...prevPosition, [index]: calculate };
    });
  }

  function handleMouseEnter(index) {
    setIsMouseOver((previous) => ({
      ...previous,
      [index]: true,
    }));
    console.log(index)
  }

  function handleMouseLeave(index) {

    setIsMouseOver((previous) => ({
      ...previous,
      [index]: false,
    }));

    setCurrentIMG((prevPosition) => ({
      ...prevPosition,
      [index]: 0,
    }));
    console.log(index)

  }

  useEffect(() => {
    let intervals = {};

    Object.keys(isMouseOver).forEach((index) => {
      if (isMouseOver[index]) {
        intervals[index] = setInterval(() => showNextIMG(index), 1000);
      }
    });

    return () => {
      Object.values(intervals).forEach((interval) => clearInterval(interval));
    };
  }, [isMouseOver]);

  useEffect(() => {
    setDisplayRating(Array(selectedJsons.length).fill('none'));
    setCurrentIMG(Array(selectedJsons.length).fill(0));
    setIsMouseOver(Array(selectedJsons.length).fill(false));
  }, []);


 const selectedPageNumber = (index) => {
  setSelectedpage((previousNum) => {
    const updatedPage = previousNum.map((color, i) => ({backgroundColor: i === index ? '#2874f0' : 'white', 
   color:i===index? 'white': 'black'}));
    return updatedPage;
 

  });
};
 
  return (
    <>
     <div className="currentProductListName">
        <div className="productListName">
          <span className='listName'> Health & Personal Care Appliances</span>
          <span className='numberOfItmes'>(Showing 1 – 40 products of 46,382 products)</span>
        </div>
        <div className="sortProducts">
          <span>Sort By</span>
          <span>Popularity</span>
          <span>Price -- Low to High</span>
          <span>Price High to Low</span>
          <span>Newest First</span>
        </div>
      </div>

      <div className="CurrentProducts">
        <div className="currentProdunctsLists">
            <ul className="CurrentItemLists">
          {selectedJsons.map((selectedObj, index) => (
              <Link to={`/Grooming-Explore/${productId}/${selectedObj.num}`}   key={index} id='link_Styl_remove' >
                <li className="currentProductDetails">
                  <div className="properImage">
                  <div className="itemImages" onMouseLeave={() => handleMouseLeave([index])} onMouseOver={() => handleMouseEnter([index])} style={{ transform: `translateX(${currentItemIMG[index]}%)` }}    >
                    {selectedObj.imagePaths.map((imgPath, imgIndex) => (
                      <img src={imgPath} key={imgIndex} alt="Its to much work to download the image" />      
                       ))}
                        </div>
                        </div>
                  <div className="ItemDetails">
                    <p className='itemheading'>{selectedObj.name}</p>
                    <div className="itemRating">
                      <span className="countRating" onMouseOver={() => showHiddenRatings([index])}>{selectedObj.rating} <img id='starIMG' style={{height:'1rem', width:'1rem', backgroundColor:'green'}} src='/green_star.png'/></span>
                      <div className="hiddenItemrating" onMouseLeave={() => hideRatings([index])} style={{ display: displayRating[index] }}>
                        <span className="hiddencountRating">
                          <p className='largeFont'>{selectedObj.rating} <img style={{height:'1rem', width:'1rem'}} src="/black_star.png"/></p>
                          <p className='grayrating'>{selectedObj.ratingsCount}</p>
                          <p className='grayviews'>{selectedObj.reviewsCount}</p>
                        </span>
                        <span className="HiddencustomerRatings">
                          {selectedObj.customerRatings.map((ratingObj, ratingIndex) => (
                            <span className="ratingRank" key={ratingIndex}>
                              <p>{ratingObj.rating}</p>
                              <span className='ratingColor'>
                                <span className={`greenRating${ratingObj.rating}`}></span>
                              </span>
                              <p className="numberOfRatings">{ratingObj.count}</p>
                            </span>
                          ))}
                        </span>
                      </div>
                      <p className='numberofBuyers'>({selectedObj.ratingsCount})</p>
                      <span className='itemAssured'><img src="/assured.png" alt="" /></span>
                    </div>
                    <div className="itemPrice">
                      <span className='newPrice' style={{color:'black'}}>₹{selectedObj.price}</span>
                      <span className='oldPrice' style={{color:'black'}}>{selectedObj.oldPrice}</span>
                      <span className='latestOffer' style={{color:'#388e3c'}}>{selectedObj.offer}</span>
                    </div>
                    <span className='itemOffer'>Bank Offer</span>
                  </div> 

                   </li>
              </Link>
          ))}
            </ul>
        </div>
        <div className="multiple_page">
          <ul className="numberOfpages">
            <li className="page_number" onClick={()=>selectedPageNumber(1)} style={{backgroundColor:selectedPage[1].backgroundColor, color:selectedPage[1].color}}>1</li>
            <li className="page_number" onClick={()=>selectedPageNumber(2)} style={{backgroundColor:selectedPage[2].backgroundColor, color:selectedPage[2].color}}>2</li>
            <li className="page_number" onClick={()=>selectedPageNumber(3)} style={{backgroundColor:selectedPage[3].backgroundColor, color:selectedPage[3].color}}>3</li>
            <li className="page_number" onClick={()=>selectedPageNumber(4)} style={{backgroundColor:selectedPage[4].backgroundColor, color:selectedPage[4].color}}>4</li>
            <li className="page_number" onClick={()=>selectedPageNumber(5)} style={{backgroundColor:selectedPage[5].backgroundColor, color:selectedPage[5].color}}>5</li>
            <li className="page_number" onClick={()=>selectedPageNumber(6)} style={{backgroundColor:selectedPage[6].backgroundColor, color:selectedPage[6].color}}>6</li>
            <li className="page_number" onClick={()=>selectedPageNumber(7)} style={{backgroundColor:selectedPage[7].backgroundColor, color:selectedPage[7].color}}>7</li>
            <li className="page_number" onClick={()=>selectedPageNumber(8)} style={{backgroundColor:selectedPage[8].backgroundColor, color:selectedPage[8].color}}>8</li>
            <li className="page_number" onClick={()=>selectedPageNumber(9)} style={{backgroundColor:selectedPage[9].backgroundColor, color:selectedPage[9].color}}>9</li>
            <li className="page_number" onClick={()=>selectedPageNumber(10)} style={{backgroundColor:selectedPage[10].backgroundColor, color:selectedPage[10].color}}>10</li>
          </ul>
           <p className="next_page">NEXT</p>
        </div>
      </div>
    </>
  );
}


export default GroomingSelectedLists;










