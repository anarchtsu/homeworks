import React from 'react';

const Item = ({id, date, distance, onDelete}) => {
    return (
        <div className="item" style={{justifyContent: 'space-around', display: 'flex'}}>
            <p>{date.getDate() + '.' + (date.getMonth() + 1).toString().padStart(2, '0') + '.' + date.getFullYear()}</p>
            <p>{distance}</p>
            <button onClick={e => onDelete(e, id)}>X</button>
        </div>
    );
};

export default Item;