// import React from 'react'
import React, { useState, useEffect } from 'react';
import  KitchenFilterSection from '../Kitchen Section/KitchenFilterSection'
import  KitchenSelectedLists from '../Kitchen Section/KitchenSelectedLists'
    import '../../Components Css/SelectedProductLists.css'

function KitchenSelectedProductLists() {
  const [filterSection, setFilterSection] = useState('flex');
  const[margin, setMargin]=useState('0');

  const showFilter = () => {
    setFilterSection((preDisplay) => {
      const checkDisplay = preDisplay === 'none' ? 'flex' : 'none';

      setMargin(checkDisplay=== 'flex' ? '-11.4rem': '0')
      return checkDisplay;
    });
  };

  useEffect(() => {
    const media414 = window.matchMedia('(max-width: 414px)');
    const media360 = window.matchMedia('(max-width: 360px)');

    const handleDisplay = () => {
      if (media414.matches || media360.matches) {
        setFilterSection('none');
      } else {
        setFilterSection('flex');
      }
    };

    media414.addEventListener('change', handleDisplay);
    media360.addEventListener('change', handleDisplay);

    if (media414.matches || media360.matches) {
      setFilterSection('none');
    } else {
      setFilterSection('flex');
    }

    return () => {
      media414.removeEventListener('change', handleDisplay);
      media360.removeEventListener('change', handleDisplay);
    };
  }, []);
    return (
        <>
          <span className="hamburger" onClick={showFilter}>
        <img src="/hamburger.png" alt="" />
      </span>
        <div className="componentContainer" style={{ display: filterSection }}>
       <div className="filterComponent">
        < KitchenFilterSection />
       </div>

      <div className="productComponent" style={{marginLeft:margin}}>
        < KitchenSelectedLists />
      </div>
       </div>

        </>
    )
}

export default KitchenSelectedProductLists
