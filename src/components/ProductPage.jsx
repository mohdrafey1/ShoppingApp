import React from 'react';
import Header from './Header/Header';
import Info from './Money/Info';
import TotalMoney from './Money/TotalMoney';
import AllCards from './Products/AllProducts';
import Footer from './Footer/Footer';
import { useState } from 'react';

function ProductPage() {
    const [totalMoney, setTotalMoney] = useState(100000000000);
    const handleBuy = (price) => {
        setTotalMoney((prevTotalMoney) => prevTotalMoney - price);
    };

    const handleSell = (price) => {
        setTotalMoney((prevTotalMoney) => prevTotalMoney + price);
    };

    return (
        <div className="bg-gray-200">
            <Header />
            <div className="flex flex-col justify-center items-center">
                <Info />
            </div>
            <div className="flex justify-center sticky top-0 z-50">
                <TotalMoney totalMoney={totalMoney} />
            </div>
            <AllCards onBuy={handleBuy} onSell={handleSell} />
            <Footer />
        </div>
    );
}

export default ProductPage;
