import React from "react";
import ReactDOM from "react-dom/client";
// import Style from 'style.css'
const Title = () => (
    <a href="/"><img className="logo" src="https://cdn.octopix.in/uploads/company-logo/2020/11/19/food-villa-pSJVhwoN8KxgwV9jtuB1MlosJ0ejoKfiBiVO1jJPLM61shyarbxVvjIFy3DVpbUML8eBxcUo7BOWXQcd-350x350.jpg" alt="logo" /></a>
);

const HeaderComponent = () => {
    return (
        <header>
            {Title()}
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
        </header>
    )
}


// config driven UI
const RestrautList = [

    {
        "type": "restaurant",
        "data": {
            "type": "F",
            "id": "676056",
            "name": "Kwality Walls Frozen Dessert and Ice Cream Shop",
            "uuid": "2df5be76-7b6b-47dd-9f8c-0e4921433321",
            "city": "45",
            "area": "Civil Lines",
            "totalRatingsString": "100+ ratings",
            "cloudinaryImageId": "9a1faf1fc5687af9a759d98d89f410b3",
            "cuisines": [
                "Ice Cream",
                "Desserts"
            ],
            "tags": [

            ],
            "costForTwo": 20000,
            "costForTwoString": "₹200 FOR TWO",
            "deliveryTime": 20,
            "minDeliveryTime": 20,
            "maxDeliveryTime": 20,
            "slaString": "20 MINS",
            "lastMileTravel": 3,
            "slugs": {
                "restaurant": "kwality-walls-frozen-dessert-and-ice-cream-shop-civil-lines-civil-lines-21",
                "city": "agra"
            },
            "cityState": "45",
            "address": "SUROOR SHOPPING MADE BETTER 4/3A, 4/3B, 4/3C Bagh FARZAN HARIPARWAT WARD AGRA NAGAR NIGAM FOOD SAFETY ZONE 09 AGRA UP -282002 HUL-IA4A071P2020",
            "locality": "Farzan Hariparwat Ward",
            "parentId": 582,
            "unserviceable": false,
            "veg": false,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [

            ],
            "ribbon": [
                {
                    "type": "PROMOTED"
                }
            ],
            "chain": [

            ],
            "feeDetails": {
                "fees": [
                    {
                        "name": "distance",
                        "fee": 1900,
                        "message": ""
                    },
                    {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                    },
                    {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                    }
                ],
                "totalFees": 1900,
                "message": "",
                "title": "Delivery Charge",
                "amount": "1900",
                "icon": ""
            },
            "availability": {
                "opened": true,
                "nextOpenMessage": "",
                "nextCloseMessage": ""
            },
            "longDistanceEnabled": 0,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "cid=7043568~p=7~eid=00000188-be89-a1d2-076f-0024004f0732",
            "badges": {
                "imageBased": [

                ],
                "textBased": [

                ],
                "textExtendedBadges": [

                ]
            },
            "lastMileTravelString": "3 kms",
            "hasSurge": false,
            "sla": {
                "restaurantId": "676056",
                "deliveryTime": 20,
                "minDeliveryTime": 20,
                "maxDeliveryTime": 20,
                "lastMileTravel": 3,
                "lastMileDistance": 0,
                "serviceability": "SERVICEABLE",
                "rainMode": "NONE",
                "longDistance": "NOT_LONG_DISTANCE",
                "preferentialService": false,
                "iconType": "EMPTY"
            },
            "promoted": true,
            "avgRating": "4.3",
            "totalRatings": 100,
            "new": false
        },
        "subtype": "basic"
    },
    {
        "type": "restaurant",
        "data": {
            "type": "F",
            "id": "252910",
            "name": "Chimmanlal Poori Wale",
            "uuid": "076f96a7-8d12-4b3c-9f49-af1b89a9a95d",
            "city": "45",
            "area": "Mantola",
            "totalRatingsString": "1000+ ratings",
            "cloudinaryImageId": "kotmezj2p9w0bpum1kqi",
            "cuisines": [
                "Desserts",
                "North Indian"
            ],
            "tags": [

            ],
            "costForTwo": 20000,
            "costForTwoString": "₹200 FOR TWO",
            "deliveryTime": 20,
            "minDeliveryTime": 20,
            "maxDeliveryTime": 20,
            "slaString": "20 MINS",
            "lastMileTravel": 1.2000000476837158,
            "slugs": {
                "restaurant": "chiman-lal-puri-wala-gajanan-nagar-gajanan-nagar",
                "city": "agra"
            },
            "cityState": "45",
            "address": "Chiman Lal Puri Wale, Daresi Road Jama Masjid, , Agra, Uttar Pradesh 282003",
            "locality": "Gajanan Nagar",
            "parentId": 316768,
            "unserviceable": false,
            "veg": true,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [

            ],
            "chain": [

            ],
            "feeDetails": {
                "fees": [
                    {
                        "name": "distance",
                        "fee": 1900,
                        "message": ""
                    },
                    {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                    },
                    {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                    }
                ],
                "totalFees": 1900,
                "message": "",
                "title": "Delivery Charge",
                "amount": "1900",
                "icon": ""
            },
            "availability": {
                "opened": true,
                "nextOpenMessage": "",
                "nextCloseMessage": ""
            },
            "longDistanceEnabled": 0,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "",
            "badges": {
                "imageBased": [

                ],
                "textBased": [

                ],
                "textExtendedBadges": [

                ]
            },
            "lastMileTravelString": "1.2 kms",
            "hasSurge": false,
            "aggregatedDiscountInfoV3": {
                "header": "₹125 OFF",
                "subHeader": "ABOVE ₹249",
                "discountTag": "FLAT DEAL",
                "headerTypeV2": 0
            },
            "sla": {
                "restaurantId": "252910",
                "deliveryTime": 20,
                "minDeliveryTime": 20,
                "maxDeliveryTime": 20,
                "lastMileTravel": 1.2000000476837158,
                "lastMileDistance": 0,
                "serviceability": "SERVICEABLE",
                "rainMode": "NONE",
                "longDistance": "NOT_LONG_DISTANCE",
                "preferentialService": false,
                "iconType": "EMPTY"
            },
            "promoted": false,
            "avgRating": "3.5",
            "totalRatings": 1000,
            "new": false
        },
        "subtype": "basic"
    },
    {
        "type": "restaurant",
        "data": {
            "type": "F",
            "id": "392498",
            "name": "The Manoj Restaurant",
            "uuid": "d1229fa9-0483-419f-8869-4b860153a186",
            "city": "45",
            "area": "Civil Lines",
            "totalRatingsString": "100+ ratings",
            "cloudinaryImageId": "yetz5zubre3uzrmfu60j",
            "cuisines": [
                "South Indian",
                "North Indian",
                "Chinese"
            ],
            "tags": [

            ],
            "costForTwo": 40000,
            "costForTwoString": "₹400 FOR TWO",
            "deliveryTime": 19,
            "minDeliveryTime": 19,
            "maxDeliveryTime": 19,
            "slaString": "19 MINS",
            "lastMileTravel": 1.399999976158142,
            "slugs": {
                "restaurant": "the-manoj-restaurant-civil-lines-civil-lines",
                "city": "agra"
            },
            "cityState": "45",
            "address": "1/43, 1/43/1, johri bazar, subhash bazar, Agra",
            "locality": "Johari Bazar Road",
            "parentId": 257740,
            "unserviceable": false,
            "veg": false,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [

            ],
            "chain": [

            ],
            "feeDetails": {
                "fees": [
                    {
                        "name": "distance",
                        "fee": 1900,
                        "message": ""
                    },
                    {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                    },
                    {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                    }
                ],
                "totalFees": 1900,
                "message": "",
                "title": "Delivery Charge",
                "amount": "1900",
                "icon": ""
            },
            "availability": {
                "opened": true,
                "nextOpenMessage": "",
                "nextCloseMessage": ""
            },
            "longDistanceEnabled": 0,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "",
            "badges": {
                "imageBased": [

                ],
                "textBased": [

                ],
                "textExtendedBadges": [

                ]
            },
            "lastMileTravelString": "1.3 kms",
            "hasSurge": false,
            "sla": {
                "restaurantId": "392498",
                "deliveryTime": 19,
                "minDeliveryTime": 19,
                "maxDeliveryTime": 19,
                "lastMileTravel": 1.399999976158142,
                "lastMileDistance": 0,
                "serviceability": "SERVICEABLE",
                "rainMode": "NONE",
                "longDistance": "NOT_LONG_DISTANCE",
                "preferentialService": false,
                "iconType": "EMPTY"
            },
            "promoted": false,
            "avgRating": "3.9",
            "totalRatings": 100,
            "new": false
        },
        "subtype": "basic"
    },
    {
        "type": "restaurant",
        "data": {
            "type": "F",
            "id": "102924",
            "name": "GMB - Gopika Sweets & Restaurant",
            "uuid": "c5394870-d4bf-4f9a-aab3-155298d90518",
            "city": "45",
            "area": "Tajganj",
            "totalRatingsString": "5000+ ratings",
            "cloudinaryImageId": "nak85w3u3lhcqnyggj7v",
            "cuisines": [
                "Sweets",
                "North Indian",
                "Snacks"
            ],
            "tags": [

            ],
            "costForTwo": 20000,
            "costForTwoString": "₹200 FOR TWO",
            "deliveryTime": 26,
            "minDeliveryTime": 26,
            "maxDeliveryTime": 26,
            "slaString": "26 MINS",
            "lastMileTravel": 4.5,
            "slugs": {
                "restaurant": "gmb-gopika-sweets-restaurant-tajganj-tajganj",
                "city": "agra"
            },
            "cityState": "45",
            "address": "Ground Floor, Crystal Tower, Fatehabad Rd, Bagichi, Tajganj, Agra, Uttar Pradesh 282001",
            "locality": "Fatehabad Road",
            "parentId": 87777,
            "unserviceable": false,
            "veg": true,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [

            ],
            "ribbon": [
                {
                    "type": "PROMOTED"
                }
            ],
            "chain": [

            ],
            "feeDetails": {
                "fees": [
                    {
                        "name": "distance",
                        "fee": 2400,
                        "message": ""
                    },
                    {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                    },
                    {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                    }
                ],
                "totalFees": 2400,
                "message": "",
                "title": "Delivery Charge",
                "amount": "2400",
                "icon": ""
            },
            "availability": {
                "opened": true,
                "nextOpenMessage": "",
                "nextCloseMessage": ""
            },
            "longDistanceEnabled": 0,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "cid=6919982~p=4~eid=00000188-be89-a1d2-076f-0023004f045b",
            "badges": {
                "imageBased": [

                ],
                "textBased": [

                ],
                "textExtendedBadges": [

                ]
            },
            "lastMileTravelString": "4.5 kms",
            "hasSurge": false,
            "aggregatedDiscountInfoV3": {
                "header": "20% OFF",
                "subHeader": "UPTO ₹50",
                "discountTag": "",
                "headerTypeV2": 0
            },
            "sla": {
                "restaurantId": "102924",
                "deliveryTime": 26,
                "minDeliveryTime": 26,
                "maxDeliveryTime": 26,
                "lastMileTravel": 4.5,
                "lastMileDistance": 0,
                "serviceability": "SERVICEABLE",
                "rainMode": "NONE",
                "longDistance": "NOT_LONG_DISTANCE",
                "preferentialService": false,
                "iconType": "EMPTY"
            },
            "promoted": true,
            "avgRating": "4.1",
            "totalRatings": 5000,
            "new": false
        },
        "subtype": "basic"
    },
    {
        "type": "restaurant",
        "data": {
            "type": "F",
            "id": "97066",
            "name": "Chimmanlal Puri Wale (Since -1840 - Original)",
            "uuid": "80dd9c8f-b3db-4742-a676-6239970aabc9",
            "city": "45",
            "area": "Mantola",
            "totalRatingsString": "1000+ ratings",
            "cloudinaryImageId": "pr0m1ql0zcnthjbnb29d",
            "cuisines": [
                "North Indian"
            ],
            "tags": [

            ],
            "costForTwo": 10000,
            "costForTwoString": "₹100 FOR TWO",
            "deliveryTime": 19,
            "minDeliveryTime": 19,
            "maxDeliveryTime": 19,
            "slaString": "19 MINS",
            "lastMileTravel": 1.2000000476837158,
            "slugs": {
                "restaurant": "chimmanlal-puri-wale-daresi-civil-lines",
                "city": "agra"
            },
            "cityState": "45",
            "address": "Daresi Road, Jama Masjid, Kinari Bazar, Sheb Bazar, Mantola, Agra",
            "locality": "Daresi Road",
            "parentId": 13575,
            "unserviceable": false,
            "veg": true,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [

            ],
            "chain": [

            ],
            "feeDetails": {
                "fees": [
                    {
                        "name": "distance",
                        "fee": 1900,
                        "message": ""
                    },
                    {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                    },
                    {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                    }
                ],
                "totalFees": 1900,
                "message": "",
                "title": "Delivery Charge",
                "amount": "1900",
                "icon": ""
            },
            "availability": {
                "opened": true,
                "nextOpenMessage": "",
                "nextCloseMessage": ""
            },
            "longDistanceEnabled": 0,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "",
            "badges": {
                "imageBased": [

                ],
                "textBased": [

                ],
                "textExtendedBadges": [

                ]
            },
            "lastMileTravelString": "1.2 kms",
            "hasSurge": false,
            "aggregatedDiscountInfoV3": {
                "header": "20% OFF",
                "subHeader": "UPTO ₹50",
                "discountTag": "",
                "headerTypeV2": 0
            },
            "sla": {
                "restaurantId": "97066",
                "deliveryTime": 19,
                "minDeliveryTime": 19,
                "maxDeliveryTime": 19,
                "lastMileTravel": 1.2000000476837158,
                "lastMileDistance": 0,
                "serviceability": "SERVICEABLE",
                "rainMode": "NONE",
                "longDistance": "NOT_LONG_DISTANCE",
                "preferentialService": false,
                "iconType": "EMPTY"
            },
            "promoted": false,
            "avgRating": "3.7",
            "totalRatings": 1000,
            "new": false
        },
        "subtype": "basic"
    },
    {
        "type": "restaurant",
        "data": {
            "type": "F",
            "id": "714371",
            "name": "Desi Chinese",
            "uuid": "93f8e556-5c6d-42c9-97ca-9b267b81fb5e",
            "city": "54",
            "area": "Meerut Cantt",
            "totalRatingsString": "Too Few Ratings",
            "cloudinaryImageId": "be23e81a7111bd0f784d68587741c2e6",
            "cuisines": [
                "Chinese",
                "Burgers"
            ],
            "tags": [

            ],
            "costForTwo": 10000,
            "costForTwoString": "₹100 FOR TWO",
            "deliveryTime": 26,
            "minDeliveryTime": 26,
            "maxDeliveryTime": 26,
            "slaString": "26 MINS",
            "lastMileTravel": 0.20000000298023224,
            "slugs": {
                "restaurant": "desi-chinese-meerut-cantt-meerut-cantt-2",
                "city": "meerut"
            },
            "cityState": "54",
            "address": "A 55 SHRADHA PURI PHASE 1, Ward No. 16  Jatauli, ZONE- 11, Meerut, Uttar Pradesh -  250001",
            "locality": "Jatauli",
            "parentId": 9829,
            "unserviceable": false,
            "veg": false,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [

            ],
            "chain": [

            ],
            "feeDetails": {
                "fees": [
                    {
                        "name": "distance",
                        "fee": 1900,
                        "message": ""
                    },
                    {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                    },
                    {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                    }
                ],
                "totalFees": 1900,
                "message": "",
                "title": "Delivery Charge",
                "amount": "1900",
                "icon": ""
            },
            "availability": {
                "opened": true,
                "nextOpenMessage": "",
                "nextCloseMessage": ""
            },
            "longDistanceEnabled": 0,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "",
            "badges": {
                "imageBased": [

                ],
                "textBased": [

                ],
                "textExtendedBadges": [

                ]
            },
            "lastMileTravelString": "0.2 kms",
            "hasSurge": false,
            "sla": {
                "restaurantId": "714371",
                "deliveryTime": 26,
                "minDeliveryTime": 26,
                "maxDeliveryTime": 26,
                "lastMileTravel": 0.20000000298023224,
                "lastMileDistance": 0,
                "serviceability": "SERVICEABLE",
                "rainMode": "NONE",
                "longDistance": "NOT_LONG_DISTANCE",
                "preferentialService": false,
                "iconType": "EMPTY"
            },
            "promoted": false,
            "avgRating": "--",
            "totalRatings": 0,
            "new": true
        },
        "subtype": "basic"
    },
];


const RestrautCard = ({ cloudinaryImageId, name, cuisines, lastMileTravelString }) => {
    return (
        <div className="card">
            <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" + cloudinaryImageId} alt="" />
            <h2>{name}</h2>
            <h3>{cuisines.join(", ")}</h3>
            <h4>{lastMileTravelString} minutes</h4>
        </div>
    )
}
const Body = () => {
    return (
        <div className="restrant-list">
            {
                RestrautList.map((restaurant) => {
                    return <RestrautCard {...restaurant.data} key={restaurant.data.id} />
                })
            }
            {/* <RestrautCard {...RestrautList[0].data} />
            <RestrautCard {...RestrautList[1].data} />
            <RestrautCard {...RestrautList[2].data} />
            <RestrautCard {...RestrautList[3].data} />
            <RestrautCard {...RestrautList[4].data} />
            <RestrautCard {...RestrautList[5].data} /> */}
        </div>
    )
}
const AppLayout = () => {
    return (
        // react.fragment
        <>
            {HeaderComponent()}
            {Body()}
        </>
    )
};

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<AppLayout />)



/***
 * jsx can only have one parent
 * react.fragment is like an empty tag
 */