import React, { useState } from 'react'
import TinderCard from 'react-tinder-card';
import './TinderCards.css'

function TinderCards() {
    const [people, setPeople] = useState([
        {
            name: 'Tsunade Senju',
            url: "https://i.pinimg.com/originals/bb/85/d8/bb85d8903c0d5d963bd26b17bbaf2f90.jpg"
        },
        {
            name: 'Fubuki',
            url: "https://wallpaperaccess.com/full/1620801.png"
        },
    ]);

    const swiped = (direction, nameToDelete) => {
        console.log('removing: ' + nameToDelete);
        // setLastDirection(direction);
    }

    const outOfFrame = (name) => {
        console.log(name + 'left the screen!');
    }

    return (
        <div className='tinderCards'>
            <div className="tinderCards__cardContainer">
                {people.map(person => (
                    <TinderCard className='swipe' key={person.name} preventSwipe={['up', 'down']} onSwipe={(dir) => swiped(dir, person.name)} onCardLeftScreen={() => outOfFrame(person.name)}>
                        <div style={{backgroundImage: `url(${person.url})`}} className='card'>
                            <h3>{person.name}</h3>
                        </div>
                    </TinderCard>
                ))}
            </div>
        </div>
    )
}

export default TinderCards
