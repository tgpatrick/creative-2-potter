let key = "$2a$10$QHwfAxhkCyCE2IT8m3AfkuVmKcYNg9TN.PXUeUSQv7W38Su0iIn5u";
let ravenclaw = "#002e7a";
let slytherin = "#38571a";
let hufflepuff = "#666100";
let gryffindor = "#831100";
let lightText = "#dadada";
let darkText = "#060606";

function reSort(e) {
  e.preventDefault();

  document.getElementById('sortimg').src = "/loading.gif";
  document.getElementById('yourHouse').innerHTML = "";

  let url = "https://www.potterapi.com/v1/sortingHat";
  fetch(url)
    .then(function(response) {
      if (response.status != 200) {
        console.log("Error: " + response.statusText);
        return {
          text: "Muggle"
        }
      }
      return response.json();
    }).then(function(json) {
      updateHouse(json);
    })
}

function getCharacters(e) {
  e.preventDefault();

  let url = "https://www.potterapi.com/v1/characters" + "?key=" + key;
  fetch(url)
    .then(function(response) {
      if (response.status != 200) {
        return {
          text: "Error fetching characters: " + response.statusText
        }
      }
      return response.json();
    }).then(function(json) {
      console.log(json);
    })
}

function getSpells(e) {
  e.preventDefault();

  let url = "https://www.potterapi.com/v1/spells" + "?key=" + key;
  fetch(url)
    .then(function(response) {
      if (response.status != 200) {
        console.log("Error: " + response.statusText);
        return {
          text: "Error fetching spells: " + response.statusText
        }
      }
      return response.json();
    }).then(function(json) {
      console.log(json);
    })
}

function updateHouse(house) {
  let color;
  let background;
  let gradient;
  let smallShadow;
  let bigShadow;
  if (house == "Ravenclaw") {
    color = lightText;
    background = ravenclaw;
    gradient = "linear-gradient(145deg, #003183, #00296e)";
    smallShadow = "7px 7px 14px #002563, -7px -7px 14px #003791";
    bigShadow = "30px 30px 60px #002563, -30px -30px 60px #003791";
  } else if (house == "Slytherin") {
    color = lightText;
    background = slytherin;
    gradient = "linear-gradient(145deg, #3c5d1c, #324e17)";
    smallShadow = "7px 7px 14px #2d4615, -7px -7px 14px #43681f";
    bigShadow = "30px 30px 60px #2d4615, -30px -30px 60px #43681f";
  } else if (house == "Hufflepuff") {
    color = darkText;
    background = hufflepuff;
    gradient = "linear-gradient(145deg, #6d6800, #5c5700)";
    smallShadow = "7px 7px 14px #534f00, -7px -7px 14px #797300";
    bigShadow = "30px 30px 60px #534f00, -30px -30px 60px #797300";
  } else if (house == "Gryffindor") {
    color = lightText;
    background = gryffindor;
    gradient = "linear-gradient(145deg, #8c1200, #760f00)";
    smallShadow = "7px 7px 14px #6a0e00, -7px -7px 14px #9c1400";
    bigShadow = "30px 30px 60px #6a0e00, -30px -30px 60px #9c1400";
  } else {
    color = "#dadada";
    background = "#444444";
    gradient = "linear-gradient(145deg, #494949, #3d3d3d)";
    smallShadow = "px 7px 14px #373737, -7px -7px 14px #727272;";
    bigShadow = "30px 30px 59px #373737, -30px -30px 59px #515151";
  }
  let header = document.getElementById('header');
  let hat = document.getElementById('sortinghat');
  let yourHouse = document.getElementById('yourHouse');
  let body = document.getElementById('body');
  let results = document.getElementById('results');
  let characterButton = document.getElementById('characterButton');
  let spellsButton = document.getElementById('spellsButton');
  let footer = document.getElementById('footer');
  editNeuStyle(header, color, background, bigShadow);
  editNeuStyle(hat, color, gradient, smallShadow);
  yourHouse.innerHTML = house;
  body.style.color = color;
  body.style.background = background;
  editNeuStyle(results, color, background, bigShadow);
  editNeuStyle(characterButton, color, gradient, smallShadow);
  editNeuStyle(spellsButton, color, gradient, smallShadow);
  editNeuStyle(footer, color, gradient, smallShadow);

  document.getElementById('sortimg').src = "/hat.png";
}

function editNeuStyle(item, color, background, shadow) {
  item.style.color = color;
  item.style.background = background;
  item.style.boxShadow = shadow;
}

document.getElementById('sortinghat').addEventListener('click', reSort);
document.getElementById('characterButton').addEventListener('click', getCharacters);
document.getElementById('spellsButton').addEventListener('click', getSpells);