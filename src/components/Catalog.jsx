//? imports
import { useEffect, useState } from "react";
import dataService from "../services/dataService";

import "./Catalog.css";
import Product from "./Product";



function Catalog() {
    //? variables
    const [filter, setFilter] = useState('');
    const [allProds, setAllProds] = useState([]);
    const [allCategories, setAllCategories] = useState([]);

    //? functions
    async function loadProducts() {
        let allProds = await dataService.getCatalog();
        setAllProds(allProds);
    }

    async function loadCategories() {
        let allCategories = await dataService.getCategories();
        setAllCategories(allCategories);
    }


    //? do somthing when the component loads = useEffect
    useEffect(() => {
        loadProducts();
        loadCategories();
    }, [])

    //? return
    return (
        <>
            <div className='catalog-content'>
                <div className="catalogTitleContainer">
                    <div className="catalogTitleInfo">
                        <h1>Our Products</h1>
                        <p>Browse through our selection of fresh, locally-sourced products. We pride ourselves on quality and sustainability.</p>
                    </div>
                </div>

                {/* //? filters */}
                <div className="filters">
                    <button className="allBtn" onClick={() => setFilter('')}>All</button>
                    {allCategories.map((cat, idx) => (
                        <button key={`${cat}-${idx}`} onClick={() => setFilter(cat)}>
                            {cat}
                        </button>
                    ))}
                </div>

                { allProds.length < 1 ? <label>Loading...</label> : null }

                {/* //? Items */}
                <div className="catalog-list">
                    {allProds
                        .filter(item => item.category === filter || !filter)
                        .map((item, idx) => <Product key={item._id || idx} data={item} />)}
                </div>
            </div>
        </>
    );
}

//? imports
export default Catalog;