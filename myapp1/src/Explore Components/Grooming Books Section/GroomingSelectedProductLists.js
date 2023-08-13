// import React from 'react'
import React, { useState, useEffect } from 'react';
import GroomingFilterSection from '../Grooming Books Section/GroomingFilterSection'
import GroomingSelectedLists from '../Grooming Books Section/GroomingSelectedLists'
    import '../../Components Css/SelectedProductLists.css'

function GroomingSelectedProductLists() {
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
        <div className="componentContainer">
       <div className="filterComponent" style={{ display: filterSection }}>
        <GroomingFilterSection />
       </div>

      <div className="productComponent"  style={{marginLeft:margin}}>
        <GroomingSelectedLists />
      </div>
       </div>

        </>
    )
}

export default GroomingSelectedProductLists
