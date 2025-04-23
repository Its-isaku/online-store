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
                <h1>Take a look to our catalog!</h1>

                {/* //? filters */}
                <div className="filters">
                    <button className="allBtn" onClick={() => setFilter('')}>All</button>
                    {mockCategory.map((cat => <button onClick={() => setFilter(cat)}>{cat}</button>))}
                </div>

                {/* //? Items */}
                <div className="catalog-list">
                    {mockCatalog.filter(item => item.category === filter || !filter).map(item => <Product data={item} />)}
                </div>
            </div>
        </>
    );
}

//? imports
export default Catalog;