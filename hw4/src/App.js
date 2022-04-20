import axios from "axios";
import {useState} from "react";
import './App.css'

class Note {
    id;
    content;

    constructor(id, content) {
        this.id = id;
        this.content = content;
    }
}

function App() {
    const URL = 'http://localhost:7777/notes'
    const [notes, setNotes] = useState([]);
    const [content, setContent] = useState('');

    const addNote = async (e) => {
        e.preventDefault()
        await axios.post(URL,{content:content})
        await updateNotes()
        setContent('')
    }

    const deleteNote = async (e, id) => {
        e.preventDefault()
        await axios.delete(URL + '/' + id)
        await updateNotes()
    }

    const updateNotes = async () => {
        let response = await axios.get(URL);
        setNotes(response.data.map(x => new Note(x.id, x.content)))
    }

    return (
        <div>
            <div style={{display: 'flex'}}>
                <h1>Notes</h1>
                <button onClick={e => {
                    e.preventDefault();
                    updateNotes();
                }} style={{borderRadius: '30px', padding: '1rem 2rem', margin: '1rem 2rem'}}>Update</button>
            </div>
            {(notes.map(note =>
                <div className="note" key={note.id}>
                    <p>{note.content}</p>
                    <button className="danger" onClick={e => deleteNote(e, note.id)}>X</button>
                </div>
            ))}
            <br/>
            <h2>New Note</h2>
            <div className="note">
                <form onSubmit={addNote}>
                    <input
                        type="text"
                        id="content"
                        onChange={(e) => {
                            setContent(e.target.value)
                        }}
                        value={content}
                        required
                    />
                    <button style={{marginLeft: '1rem', border: '1px solid black'}}>Add</button>
                </form>
            </div>
        </div>
    );
}

export default App;
