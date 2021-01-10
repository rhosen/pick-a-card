import React, { useState } from 'react'
import Card from './Card'
import './App.css'


const suits = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'A', 'J', 'Q', 'K'];
const types = ['Club', 'Diamond', 'Heart', 'Spade'];
const icons = ["♣", "♦", "♥", "♠"];
const colors = ["black", "red"];

function App() {

  const [suit, setSuit] = useState({
    name: suits[0],
    icon: icons[0],
    color: {
      color: colors[0]
    }
  });

  function handleChange(event) {
    let newValue = event.target.value;
    let newName = event.target.name;

    if (newName === "suit") {
      setSuit({
        name: newValue,
        icon: suit.icon,
        color: suit.color
      })
    } else {
      let newIcon;
      let newColor;
      if (newValue === "Club") {
        newIcon = icons[0];
      } else if (newValue === "Diamond") {
        newIcon = icons[1];
        newColor ={
          color: colors[1]
        }
      } else if (newValue === "Heart") {
        newIcon = icons[2];
        newColor ={
          color: colors[1]
        }
      } else {
        newIcon = icons[3]
      }
      setSuit({
        name: suit.name,
        icon: newIcon,
        color: newColor
      })
    }
  }

  return (
    <div className="content">
      <h1>Pick a card! Any card! </h1>
      <select name="suit" onChange={handleChange} className="webControl">
        {suits.map(s =>
          <option key={s} value={s}>{s}</option>
        )}
      </select>
      <span> of </span>
      <select name="type" onChange={handleChange} className="webControl">
        {types.map(t =>
          <option key={t} value={t}>{t}</option>
        )}
      </select>
      <Card name={suit.name} icon={suit.icon} color={suit.color} />
    </div>
  );
}

export default App;
