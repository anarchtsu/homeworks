import React, {useState} from 'react';
import Item from "./components/Item";

function App() {
    const [items, setItems] = useState([]);

    const [date, setDate] = useState('');
    const [distance, setDistance] = useState('');

    function submit(e) {
        e.preventDefault()
        const [day, month, year] = date.split('.');
        let dateObj = new Date(+year, month - 1, +day);
        if (dateObj instanceof Date && !isNaN(dateObj)) {
            const item = {id: items.length + 1, date:dateObj, distance: distance};
            setItems([...items, item])
            setDate('')
            setDistance('')
        }
    }

    function onDelete(e, id) {
        e.preventDefault()
        setItems(items.filter(item => item.id !== id))
    }

    return (
        <div>
            <form onSubmit={submit}>
                <label htmlFor="date">Дата (ДД.ММ.ГГ)</label>
                <input
                    type="text"
                    id="date"
                    onChange={(e) => {
                        setDate(e.target.value)
                    }}
                    value={date}
                    required
                />
                <label htmlFor="distance">Пройдено км</label>
                <input
                    type="text"
                    id="distance"
                    onChange={(e) => {
                        setDistance(e.target.value)
                    }}
                    value={distance}
                    required
                />
                <button>OK</button>
            </form>
            <br/>
            <div>
                <p>Дата (ДД.ММ.ГГ)</p>
                <p>Пройдено км</p>
                <p>Действия</p>
            </div>
            {(items.sort((i1, i2) => i1.date - i2.date).map(item =>
                <Item key={item.id} id={item.id} date={item.date} distanse={item.distance} onDelete={onDelete}/>
            ))}
        </div>
    );
}

export default App;
