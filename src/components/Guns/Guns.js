import React, { useEffect, useState } from 'react';
import Gun from '../Gun/Gun';
import './Guns.css'
const Guns = () => {
    const [guns, setMeals] = useState([]);
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/mir-hussain/guns/main/data.json')
            .then(res => res.json())
            .then(data => setMeals(data))
    }, [])
    return (
        <div className='guns-container'>
            {
                guns.map(gun => <Gun
                    key={gun.id}
                    gun={gun}
                >
                </Gun>)
            }
        </div>
    );
};

export default Guns;