import React from 'react';
import '../../Components Css/ExploreItems.css';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import jsonDataFitness from '../../JSON Files/JsonSportsFitness.json';

function KitchenExploreItems() {
  const card = jsonDataFitness.CardHK;

  return (
    <>
      <div className="productsContainer">
        <div className="sectionHeading">
          <h1>{card.PageHead}</h1>
          <h6 className="grayheading">20 Items</h6>
        </div>

        <div className="productLists">
          <ul className="electricItemLists">
            {card.items.map((item,index) => (
              <Link to={`/Kitchen-Explore/${item.ItemId}`} className="remove-style" key={index}>
                <li className="ElectronicItems" style={{ border: 'none' }}>
                  <div className="itemImg" style={{ border: 'none' }}>
                    <img src={item.IMG} alt="" style={{ border: 'none' }} />
                  </div>
                  <div className="Eitem_details">
                    <p className="Eitem_head">{item.ItemName}</p>
                    <p className="Egreen">{item.Green}</p>
                    <p className="Egray">{item.Gray}</p>
                  </div>
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default KitchenExploreItems;
