import React from 'react';

function TotalMoney({ totalMoney }) {
    return (
        <div className="w-full lg:w-1000 mb-4 bg-gradient-to-r from-green-500 to-teal-400 p-6 flex justify-center items-center">
            <p className="text-center text-5xl font-serif text-white">
                {totalMoney <= 0
                    ? 'Money Ended'
                    : `₹ ${totalMoney.toLocaleString()}`}
            </p>
        </div>
    );
}

export default TotalMoney;
