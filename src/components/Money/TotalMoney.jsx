import React from 'react';

function TotalMoney({ totalMoney }) {
    let money = totalMoney * 80;
    return (
        <div className="w-full lg:w-1000 mb-4 bg-gradient-to-r from-green-500 to-teal-400 p-6 flex justify-center items-center">
            <p className="text-center text-3xl sm:text-5xl font-serif text-white">
                {totalMoney <= 0
                    ? 'Money Ended'
                    : ` ${money.toLocaleString('en-IN', {
                          style: 'currency',
                          currency: 'INR',
                      })}`}
            </p>
        </div>
    );
}

export default TotalMoney;
