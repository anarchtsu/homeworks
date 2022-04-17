import React from "react";

const Toolbar = ({filters, onSelectFilter, selectedFilter}) => {
    return (
        <div>
            {(filters.map(filter => <button className={selectedFilter === filter ? "active" : ""}
                                            onClick={() => onSelectFilter(filter)}>{filter}</button>))}
        </div>
    );
}

export default Toolbar;
