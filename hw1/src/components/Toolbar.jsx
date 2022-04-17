import React from "react";

const Toolbar = ({ filters, onSelectFilter }) => {
    return (
        <div>
            {(filters.map(filter => <button onClick={() => onSelectFilter(filter)}>{filter}</button>))}
        </div>
    );
}

export default Toolbar;


