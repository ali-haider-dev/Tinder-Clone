import React, { useState, useEffect } from 'react'
import "./style.css"
import TinderCard from 'react-tinder-card'
import db from '../../Firebase'



function Card() {
    const [people, setPeople] = useState([])

    useEffect(() => {
        const unSubscribe = db.collection('people').onSnapshot(snapshot => {
            setPeople(snapshot.docs.map(doc => doc.data()))
        })
        return () => (
            unSubscribe()
        )
    }, [])

    return (
        <div>
            <div className="tindercards__cardContainer">
                {
                    people.map((person) => (
                        <TinderCard
                            className="swipe"
                            key={person.name}
                            preventSwipe={['up', 'down']}
                        >
                            <div className="card"
                                style={{ backgroundImage: `url(${person.url})` }}
                            >
                                <h3>{person.name}</h3>
                            </div>
                        </TinderCard>
                    ))
                }


            </div>


        </div>
    )
}

export default Card
