import React from 'react';

const Item = ({id, date, distance, onDelete}) => {
    return (
        <div>
            <p>{date.toString()}</p>
            <p>{distance}</p>
            <button onClick={e => onDelete(e, id)}>X</button>
        </div>
    );
};

export default Item;