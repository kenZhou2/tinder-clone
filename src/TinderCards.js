import React, {useState}  from 'react';
import TinderCard from "react-tinder-card";
import "./TinderCards.css";

function TinderCards() {
    const [people, setPeople] = useState([
        {
            name: 'Elon Musk', 
            url: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FElon_Musk&psig=AOvVaw18TlC4WobQXDx2ut-PDb2J&ust=1642576300229000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCMjH8NjfuvUCFQAAAAAdAAAAABAD",
        }
    ]);

    const swiped = (direction, nameToDelete) => {
        console.log("removing: " + nameToDelete); 
    } 

    const swiped = (name) => {
        console.log(name + "left the screen "); 
    } 

    return (
        <div className="tinderCards">
           
            {people.map( (person) => (
                <TinderCard
                    className='swipe'
                    key={person.name}
                    preventSwipe={["up", "down"]}
                    onSwipe={(dir) => swiped(dir, person.name)}
                    onCardLeftScreen = {() => outOfFrame(person.name)}

                ></TinderCard>
            ))}
        </div>
    );
}

export default TinderCards
