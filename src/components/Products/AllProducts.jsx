import React from 'react';
import Card from './Card';

function AllCards({ onBuy, onSell }) {
    return (
        <div className="mx-auto w-full lg:w-1000 flex flex-wrap lg:justify-between md:justify-center sm:justify-center">
            <Card
                title={'burger'}
                price={99}
                img={'big-mac'}
                onBuy={onBuy}
                onSell={onSell}
            />
            <Card
                title={'sleeper'}
                price={159}
                img={'flip-flops'}
                onBuy={onBuy}
                onSell={onSell}
            />
            <Card
                title={'Coco-Cola'}
                price={299}
                img={'coca-cola-pack'}
                onBuy={onBuy}
                onSell={onSell}
            />
            <Card
                title={'Movie Ticket'}
                price={599}
                img={'movie-ticket'}
                onBuy={onBuy}
                onSell={onSell}
            />
            <Card
                title={'Book'}
                price={1199}
                img={'book'}
                onBuy={onBuy}
                onSell={onSell}
            />
            <Card
                title={'Lobster Dinner'}
                price={2999}
                img={'lobster-dinner'}
                onBuy={onBuy}
                onSell={onSell}
            />
            <Card
                title={'Video Game'}
                price={6999}
                img={'video-game'}
                onBuy={onBuy}
                onSell={onSell}
            />
            <Card
                title={'Amazon-Echo'}
                price={9999}
                img={'amazon-echo'}
                onBuy={onBuy}
                onSell={onSell}
            />
            <Card
                title={'NetFlix'}
                price={15999}
                img={'year-of-netflix'}
                onBuy={onBuy}
                onSell={onSell}
            />
            <Card
                title={'Air Jordans'}
                price={21999}
                img={'air-jordans'}
                onBuy={onBuy}
                onSell={onSell}
            />
            <Card
                title={'Airpods'}
                price={25999}
                img={'airpods'}
                onBuy={onBuy}
                onSell={onSell}
            />
            <Card
                title={'Gaming Console'}
                price={49999}
                img={'gaming-console'}
                onBuy={onBuy}
                onSell={onSell}
            />
        </div>
    );
}

export default AllCards;
