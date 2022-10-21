import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

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
                categories.map(ct => <Link key={ct.id} to={`category/${ct.id}`}> <p>{ct.name}</p></Link>)
            }
        </div>
    );
};

export default LeftSide;