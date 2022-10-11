/* eslint-disable max-lines-per-function */
/* eslint-disable max-len */
const classificationToAnimal = {
  "Vertebrate": ["Bear", "Turtle", "Whale", "Salmon", "Ostrich"],
  "Warm-blooded": ["Bear", "Whale", "Ostrich"],
  "Cold-blooded": ["Turtle", "Salmon"],
  "Mammal": ["Bear", "Whale"],
  "Bird": ["Ostrich"],
  "Classification": ["Animals", "Bear", "Turtle", "Whale", "Salmon", "Ostrich"]
};

const animalToClassification = {
  Bear: ["Vertebrate", "Warm-blooded", "Mammal"],
  Turtle: ["Vertebrate", "Cold-blooded"],
  Whale: ["Vertebrate", "Warm-blooded", "Mammal"],
  Salmon: ["Vertebrate", "Cold-blooded"],
  Ostrich:["Vertebrate", "Warm-blooded", "Bird"],
  Animal: ["Classifications", "Vertebrate", "Warm-blooded", "Cold-blooded", "Mammal", "Bird"]
};

document.addEventListener("DOMContentLoaded", event => {
  let animalClassfs = document.querySelector("#animal-classifications");
  let animals = document.querySelector("#animals");
  let clearFiltersBtn = document.querySelector("#clear");

  //LS solution extracts the "options" from the "animals" or
  //"animalClassfs" object using {options} as the first argument
  function setOptions(filteredValues, dropdownElement) {
    //deletes all the elements in the dropdown element
    dropdownElement.options.length = 0;
    //creates the new elements; I think I could have used
    //add or remove methods for dropDownElement as well; try that later
    filteredValues.forEach((value, index) => {
      dropdownElement.options[index] = new Option(value);
    });
  }

  function setDefault(event) {
    //by default, the button that we use for clear
    //submits the form (==> refresh the page in this case since we don't have
    //submit URL set)
    event.preventDefault();
    setOptions(classificationToAnimal["Classification"], animals);
    setOptions(animalToClassification["Animal"], animalClassfs);
  }

  //did not know about "change" event
  animalClassfs.addEventListener("change", event => {
    //did not know about options property and selected and .value
    //I think label instead of value also works
    let animalClassfVal = animalClassfs.options[animalClassfs.selectedIndex].value;
    setOptions(classificationToAnimal[animalClassfVal], animals);
  });

  animals.addEventListener("change", event => {
    let animalsValue = animals.options[animals.selectedIndex].value;
    setOptions(animalToClassification[animalsValue], animalClassfs);
  });

  clearFiltersBtn.addEventListener("click", setDefault);
})
