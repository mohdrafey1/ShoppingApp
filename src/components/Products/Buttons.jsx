import React, { useState } from 'react';

function Buttons({ price, onBuy, onSell }) {
    const [quantity, setQuantity] = useState(0);

    const handleBuy = () => {
        onBuy(price);
        setQuantity((prevQuantity) => prevQuantity + 1);
    };

    const handleSell = () => {
        if (quantity > 0) {
            onSell(price);
        }
        setQuantity((prevQuantity) => Math.max(0, prevQuantity - 1));
    };

    const handleInputChange = (e) => {
        const value = parseInt(e.target.value, 10);
        setQuantity(0);
        if (!isNaN(value)) {
            setQuantity(value);
        }
    };

    return (
        <div className="flex justify-between items-center w-250">
            <button
                className={`w-24 h-10 mr-2 ${
                    quantity === 0 ? 'bg-gray-200' : 'bg-blue-500'
                } text-white text-lg rounded`}
                onClick={handleSell}
            >
                Sell
            </button>
            <input
                type="text"
                value={quantity}
                onChange={handleInputChange}
                className="w-24 h-10 px-4 border border-gray-300 rounded text-center"
                readOnly
            />
            <button
                className="w-24 h-10 ml-2 bg-green-500 text-white text-lg rounded"
                onClick={handleBuy}
            >
                Buy
            </button>
        </div>
    );
}

export default Buttons;
