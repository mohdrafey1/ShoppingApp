import React from 'react';
import Buttons from './Buttons';

function Card({ title = 'item', price = 100, img, onBuy, onSell }) {
    let image = { img };

    function convertToINR(usdPrice) {
        return usdPrice * 80;
    }
    const priceINR = convertToINR(price);

    return (
        <div className="bg-white shadow-md w-full sm:w-80 sm:h-72 p-4 mb-2 flex flex-col justify-evenly items-center md:mr-2 sm:mr-2">
            <div>
                <img
                    src={`https://neal.fun/spend/images/${img}.jpg`}
                    alt="Burger"
                    className="h-24"
                />
            </div>
            <div className="text-center mt-3">
                <p className="text-3xl font-bold mt-2">{title}</p>
                <p className="text-xl text-green-400 font-bold mt-2">
                    {priceINR.toLocaleString('en-IN', {
                        style: 'currency',
                        currency: 'INR',
                    })}
                </p>
            </div>
            <Buttons price={price} onBuy={onBuy} onSell={onSell} />
        </div>
    );
}

export default Card;
