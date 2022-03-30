import React from 'react';
import logo from './logo.svg';
import { useState } from 'react';
import Armor from './components/armor';

function App() {

    const [data, setData] = useState(null)
    const [page, setPage] = useState(0)
    async function handleClick(e) {
        e.preventDefault()

            fetch(`https://eldenring.fanapis.com/api/${e.target.id}s?limit=20&page=${page}`)
            .then(response => response.json())
            .then(res => {
                setData(res.data)})
    }
    return (
        <div>
            <div>
                <button id='armor' onClick={e => handleClick(e)}>Armor</button>
                <button id='weapon' onClick={e => handleClick(e)}>Weapons</button>
                <button id='item' onClick={e => handleClick(e)}>Items</button>
                <button id='creature' onClick={e => handleClick(e)}>Creatures</button>
            </div>
          { data === null ? null : data.map((i) => (<Armor armor={i}/>)) }
        </div>
    );
}

export default App;
