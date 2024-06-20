import { useState, useEffect } from 'react';

export const ControlledForm = () => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [hairCol, setHairCol] = useState('');

    useEffect(() => {
        if(name.length < 2) {
            console.log('name must be longer')
        }
    }, [name])

    return (
        <form>
            <input name="name" type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)}/>
            <input name="age" type="number" placeholder="Age" value={age} onChange={e => setName(e.target.value)}/>
            <input name="hairCol" type="text" placeholder="hairCol" value={hairCol} onChange={e => setName(e.target.value)}/>
            <button>submit</button>
        </form>
    )
}