//? imports
import { useState } from "react";
import {mockCatalog, mockCategory} from "../services/dataService";
import "./Catalog.css";
import Product from "./product";



function Catalog() {
    //? variables
    const [filter, setFilter] = useState('');

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
                    {mockCategory.map((cat => <button key={cat} onClick={() => setFilter(cat)}>{cat}</button>))}
                </div>

                {/* //? Items */}
                <div className="catalog-list">
                    {mockCatalog.filter(item => item.category === filter || !filter).map(item => <Product key={Product._id} data={item} />)}
                </div>
            </div>
        </>
    );
}

//? imports
export default Catalog;