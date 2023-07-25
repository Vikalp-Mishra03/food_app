import React from 'react'
import RestrautCard from "./RestrautCard"
import {RestrautList} from "../config"
export default function Body() {
    return (
        <div>

            <div className="restrant-list">
                {
                    RestrautList.map((restaurant) => {
                        return <RestrautCard {...restaurant.data} key={restaurant.data.id} />
                    })
                }
            </div>
        </div>
    )
}
