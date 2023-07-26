import React from 'react'
import RestrautCard from "./RestrautCard"
import { RestrautList } from "../config"
import { useState } from 'react'

function filterData(searchText, restaurant) {
    const filterData = restaurant.filter((restaurant) =>
        restaurant.data.name.includes(searchText)
    );
    return filterData;
}
export default function Body() {
    const [restaurant, setRestaurant] = useState(RestrautList)

    // searchText is a local state variable
    const [searchText, setSearchText] = useState('')   // it use to create state variable98u
    return (
        <>
            <div className="search-container">
                <input type="text" className='search-input' placeholder='Search' value={searchText} onChange={(e) => { setSearchText(e.target.value) }} />
                <button className='search' onClick={() => {
                    const data = filterData(searchText, restaurant)
                    setRestaurant(data)
                }} >Search</button>
            </div>
            <div>

                <div className="restrant-list">
                    {
                        restaurant.map((restaurant) => {
                            return <RestrautCard {...restaurant.data} key={restaurant.data.id} />
                        })
                    }
                </div>
            </div>
        </>
    )
}
