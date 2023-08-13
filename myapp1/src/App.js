import React from 'react';
import Navbar from './Components/Navbar';
import ItemsContainer from './Components/ItemsContainer';
import './App.css';
import ExploreItems from './Explore Components/Electronic Section/ExploreItems';
import FashionExploreItems from './Explore Components/Fashion Section/FashionExploreItems';
import GroomingExploreItems from './Explore Components/Grooming Books Section/GroomingExploreItems';
import FitnessExploreItems from './Explore Components/Sport and Fitness Section/FitnessExploreItems';
import KitchenExploreItems from './Explore Components/Kitchen Section/KitchenExploreItems';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import SelectedProductLists from './Explore Components/Electronic Section/SelectedProductLists';
import BuyingItemPage from './Explore Components/Electronic Section/BuyingItemPage';
import FashionSelectedProductLists from './Explore Components/Fashion Section/FashionSelectedProductLists';
import FashionBuyingItemPage from './Explore Components/Fashion Section/FashionBuyingItemPage';
import GroomingSelectedProductLists from './Explore Components/Grooming Books Section/GroomingSelectedProductLists';
import GroomingBuyingItemPage from './Explore Components/Grooming Books Section/GroomingBuyingItemPage';
import FitnessSelectedProductLists from './Explore Components/Sport and Fitness Section/FitnessSelectedProductLists';
import FitnessBuyingItemPage from './Explore Components/Sport and Fitness Section/FitnessBuyingItemPage';
import KitchenSelectedProductLists from './Explore Components/Kitchen Section/KitchenSelectedProductLists';
import KitchenBuyingItemPage from './Explore Components/Kitchen Section/KitchenBuyingItemPage';


import HomeKItchenEssen from './Components/HomeKItchenEssen';
import GroomingBooks from './Components/GroomingBooks';
import SportsFitness from './Components/SportsFitness';
import FashionDeals from './Components/FashionDeals';
import AddToCart from './Components/AddToCart';
import ErroComponent from './Components/ErroComponent';
import Footer from './Components/Footer';
import SeprateElectronicPage from './Components/SeprateElectronicPage';
import SeperateElectronicProductList from './Components/SeperateElectronicProductList';

function App() {
  return (
    <Router>
      <div className="header">
        <Navbar />
      </div>
     
      <div className="container1">

        <Routes>
          <Route path="/" element={<ItemsContainer />} />
          <Route path="explore-items" element={<ExploreItems />} />
          <Route path="explore-items/:productId" element={<SelectedProductLists />} />
          <Route path='selected_elctroniPage/:productId' element={<SeperateElectronicProductList />} />
          <Route path="explore-items/:productId/:itemID" element={<BuyingItemPage />} />
          <Route path="ReachHome-Page" element={<Navbar />} />
          <Route path="addTo-Cart" element={<AddToCart />} />
          {/* <Route path="*" element={<ErroComponent/>} /> */}
        </Routes>



        <Routes>
          <Route path="/" element={<GroomingBooks />} />
          <Route path="Grooming-Explore" element={<GroomingExploreItems />} />
          <Route path="Grooming-Explore/:productId" element={<GroomingSelectedProductLists />} />
          <Route path="Grooming-Explore/:productId/:itemID" element={<GroomingBuyingItemPage />} />
          {/* <Route path="*" element={<ErroComponent/>} /> */}
        </Routes>
        <Routes>
          <Route path="/" element={<HomeKItchenEssen />} />
          <Route path="Kitchen-Explore" element={<KitchenExploreItems />} />
          <Route path="Kitchen-Explore/:productId" element={<KitchenSelectedProductLists />} />
          <Route path="Kitchen-Explore/:productId/:itemID" element={<KitchenBuyingItemPage />} />
          {/* <Route path="*" element={<ErroComponent/>} /> */}
        </Routes>
        <Routes>
          <Route path="/" element={<SportsFitness />} />
          <Route path="Fitness-Explore" element={<FitnessExploreItems />} />
          <Route path="Fitness-Explore/:productId" element={<FitnessSelectedProductLists />} />
          <Route path="Fitness-Explore/:productId/:itemID" element={<FitnessBuyingItemPage />} />
          {/* <Route path="*" element={<ErroComponent/>} /> */}
        </Routes>
        <Routes>
          <Route path="/" element={<FashionDeals />} />
          <Route path="Fashion-Explore" element={<FashionExploreItems />} />
          <Route path="Fashion-Explore/:productId" element={<FashionSelectedProductLists />} />
          <Route path="Fashion-Explore/:productId/:itemID" element={<FashionBuyingItemPage />} />

        </Routes>



      </div>

      <div className="footerSection">
        <Footer />
      </div>


   

    </Router>


  );
}

export default App;


