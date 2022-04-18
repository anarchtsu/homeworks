import React from 'react';
import json from './data/etsy.json'
import Listing from "./components/Listing";

function App() {
    return (<Listing items={json}/>);
}

export default App;
