//import the state hook function
import React, { useState } from 'react';
import '../App.css';

import SneakerList from './SneakerList';

// import sneaker images from folder
import yeezy700 from '../img/sneakers/yeezy-700-waverunner.jpeg';
import yeezy350 from '../img/sneakers/yeezy-350-bred.jpeg';
import benJerry from '../img/sneakers/ben-jerry-dunks.jpeg';
import bred4 from '../img/sneakers/bred-4.jpeg';
import fire4 from '../img/sneakers/fire-red-4.jpeg';
import bred11 from '../img/sneakers/bred-11.jpeg';
import travis4 from '../img/sneakers/travis-4.jpeg';
import travisHighMocha from '../img/sneakers/travis-high-mocha.jpeg';
import travisLowMocha from '../img/sneakers/travis-low-mocha.jpeg';
import blackOwAf1 from '../img/sneakers/af1-ow-black.jpeg';
import mcaOwAf1 from '../img/sneakers/af1-ow-mca.jpeg';
import uncOw1 from '../img/sneakers/unc-ow-jordan-1.jpeg';

//import fontawesome search icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

function SearchBar() {

  let sneakersJsonObject = {
    'sneakers' : [{
      "id": 1,
      "name": "Adidas Yeezy Boost 700 Wave Runner (2017/2023)",
      "sneakerImage": yeezy700,
      "condition": "Lightly Worn",
      "price": "$100",
      "brand": "adidas"
    }, {
      "id": 2,
      "name": "Adidas Yeezy Boost 350 V2 Black Red (2017/2020)",
      "sneakerImage": yeezy350,
      "condition": "Lightly Worn",
      "price": "$100",
      "brand": "adidas"
    }, {
      "id": 3,
      "name": "Nike SB Dunk Low Ben & Jerry's Chunky Dunky",
      "sneakerImage": benJerry,
      "condition": "Lightly Worn",
      "price": "$250",
      "brand": "nike"
    }, {
      "id": 4,
      "name": "Jordan 4 Retro Bred (2019)",
      "sneakerImage": bred4,
      "condition": "Lightly Worn",
      "price": "$100",
      "brand": "jordan"
    }, {
      "id": 5,
      "name": "Jordan 4 Retro Fire Red (2020)",
      "sneakerImage": fire4,
      "condition": "Good",
      "price": "$80",
      "brand": "jordan"
    }, {
      "id": 6,
      "name": "Jordan 11 Retro Playoffs Bred (2019)",
      "sneakerImage": bred11,
      "condition": "Good",
      "price": "$80",
      "brand": "jordan"
    }, {
      "id": 7,
      "name": "Jordan 4 Retro Travis Scott Cactus Jack",
      "sneakerImage": travis4,
      "condition": "Good",
      "price": "$200",
      "brand": "jordan"
    }, {
      "id": 8,
      "name": "Jordan 1 Retro High OG SP Travis Scott Mocha",
      "sneakerImage": travisHighMocha,
      "condition": "Good",
      "price": "$250",
      "brand": "jordan"
    }, {
      "id": 9,
      "name": "Jordan 1 Retro Low OG SP Travis Scott Mocha",
      "sneakerImage": travisLowMocha,
      "condition": "Good",
      "price": "$250",
      "brand": "jordan"
    },  {
      "id": 10,
      "name": "Nike Air Force 1 Low Off-White Black White",
      "sneakerImage": blackOwAf1,
      "condition": "Lightly Worn",
      "price": "$200",
      "brand": "nike"
    },  {
      "id": 11,
      "name": "Nike Air Force 1 Low Off-White MCA University Blue",
      "sneakerImage": mcaOwAf1,
      "condition": "Lightly Worn",
      "price": "$225",
      "brand": "nike"
    },  {
      "id": 12,
      "name": "Jordan 1 Retro Low OG SP Travis Scott Mocha",
      "sneakerImage": uncOw1,
      "condition": "Lightly Worn",
      "price": "$300",
      "brand": "jordan"
    }]
  }

  const [change, setChange] = useState("");
  const handleChange = (event) => {
    setChange(event.target.value);
  }


  const [search, setSearch] = useState(sneakersJsonObject.sneakers);
  const handleSearch = () => {
    const searchResultsCopy = sneakersJsonObject.sneakers.filter((kicks) => {
      let sneakerName = kicks.name.toLowerCase();
      let searchInput = change.toLowerCase(); // "change" stores input field value
      if(sneakerName.includes(searchInput)) {
        return true
      } else {
        return false;
      }
    });

    console.log(searchResultsCopy);
    setSearch(searchResultsCopy); // set, update -> in this case "search"
  }

  const [select, setSelect] = useState(sneakersJsonObject.sneakers);
  const handleSelect = (event) => {
    const selectResultsCopy = sneakersJsonObject.sneakers.filter((kicks) => {
      let selectedValue = event.target.value;
      if(selectedValue === "all" || kicks.brand === selectedValue) {
        return true;
      } else {
        return false;
      }
    });

    setSelect(selectResultsCopy); // set, update -> in this case "select"
  }

  return (
    <div>
      <div id="search-bar-container">
        <input id="search-bar-input" onChange={handleChange} placeholder="Search sneaker here..."/>
        <button id="search-btn" onClick={handleSearch}><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
        <select id="filter" onChange={handleSelect}>
          <option value="all">Select a type</option>
          <option value="nike">Nike</option>
          <option value="jordan">Jordan</option>
          <option value="adidas">Adidas</option>
        </select>
      </div>

      <SneakerList originalResults={sneakersJsonObject.sneakers} searchResults={search} selectResults={select}/>
    </div>
  )
}

export default SearchBar;