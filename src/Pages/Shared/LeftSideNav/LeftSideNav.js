import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSideNav = () => {

    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch('https://the-international-times-server-side.vercel.app/news-categories')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    return (
        <div>
            <h3 className='text-warning'>News Categories</h3>
            <div>
                {
                    categories.map(category =>
                        <p key={category.id}>
                            <Link to={`/catagory/${category.id}`}>{category.name}</Link>
                        </p>)
                }
            </div>
        </div>
    );
};

export default LeftSideNav;