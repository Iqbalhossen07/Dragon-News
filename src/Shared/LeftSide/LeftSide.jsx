


import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./LeftSide.css";

const LeftSide = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('/categories.json')
        .then(response => response.json())
        .then(data => setCategories(data))
    }, []);

    return (
        <div>
            <h2 className="text-2xl">All Categories ({categories.length})</h2>
            {categories.map(category => (
                <NavLink
                    to={`/category/${category.id}`}
                    className="block mt-3 font-medium"
                    activeClassName="active"
                    key={category.id}
                >
                    {category.name}
                </NavLink>
            ))}
        </div>
    );
};

export default LeftSide;
