import React from 'react';
import '../css/main.css'

const Listing = ({items}) => {
    function getPrice(item) {
        let price = ''
        if (item.currency_code === 'USD')
            price = '$ ' + item.price
        else if (item.currency_code === 'EUR')
            price = '€ ' + item.price
        else
            price = item.price + ' ' + item.currency_code
        return price
    }

    function getQuantityClassName(quantity) {
        let level = ''
        if (quantity < 10)
            level = 'low'
        else if (quantity <= 20)
            level = 'medium'
        else
            level = 'high'
        return "item-quantity level-" + level
    }

    return (
        <div className="item-list">
            {items.filter(item => item.MainImage && item.MainImage.url_570xN)
                .map(item =>
                    <div className="item" key={item.listing_id}>
                        <div className="item-image">
                            <a href={item.url}>
                                <img src={item.MainImage.url_570xN} alt="alt"/>
                            </a>
                        </div>
                        <div className="item-details">
                            <p className="item-title">{item.title.length > 50 ? item.title.substring(0, 50) + "..." : item.title}</p>
                            <p className="item-price">{getPrice(item)}</p>
                            <p className={getQuantityClassName(item.quantity)}>{item.quantity + ' left'}</p>
                        </div>
                    </div>
                )}
        </div>
    );
};

export default Listing;