import React, { useState } from 'react'
import Slide41 from './Slide41'
import { Row } from 'reactstrap'

export default function Listtour() {
    const [list, setList] = useState(
        [
            {
                id: 1,
                title: "Three Temples Bangkok City Tour Must Visit",
                category: "New York",
                price: 149.99,
                img: "https://react-bootstrap-lovat.vercel.app/img/tour-1.png",
            },
            {
                id: 2,
                title: "Essence of Vietnam South to North",
                category: "New York",
                price: 167.19,
                img: "https://react-bootstrap-lovat.vercel.app/img/tour-2.png",
            },
            {
                id: 3,
                title: "Osa Peninsula to Dominical City Tour",
                category: "New York",
                price: 134.99,
                img: "https://react-bootstrap-lovat.vercel.app/img/tour-3.png",
                special: true
            },
            {
                id: 4,
                title: "Mt Fuji, Hakone, Lake Ashi Cruise",
                category: "New York",
                price: 50.15,
                img: "https://react-bootstrap-lovat.vercel.app/img/tour-4.png",
            },

        ]
    )
    return (
        <Row>
            {
                list.map((item, index) => (
                    <Slide41 key={index} pro={item} />
                ))
            }
        </Row>
    )
}
