import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './LeftSide.css'

const LeftSide = () => {
    const [categories, setCategories] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/categories')
        .then(res => res.json())
        .then(data => setCategories(data))
        .catch(err => alert(err))
    },[])
    return (
        <div>
            {
                categories.map(ct => <Link className='menu-link' key={ct.id} to={`category/${ct.id}`}> <p>{ct.name}</p></Link>)
            }
        </div>
    );
};

export default LeftSide;