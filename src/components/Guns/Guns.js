import React, { useEffect, useState } from 'react';
import Gun from '../Gun/Gun';
import './Guns.css'
const Guns = ({cartCount}) => {
    const [guns, setMeals] = useState([]);
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/mir-hussain/guns/main/data.json')
            .then(res => res.json())
            .then(data => setMeals(data))
    }, []);
    const showDetails = (gun)=>{
        console.log("clicked");
    }
    return (
        <div className='guns-container'>
            {
                guns.map(gun => <Gun
                    key={gun.id}
                    gun={gun}
                    cartCount={cartCount}
                    showDetails={showDetails}
                    
                >
                </Gun>)
            }
        </div>
    );
};

export default Guns;