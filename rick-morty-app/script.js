const fetchPromise = fetch("https://rickandmortyapi.com/api/character")
    .then(response => response.json())
    .then(data => displayCharacter(data.results));

function displayCharacter(arrayOfCharacters) {
    console.log(arrayOfCharacters);
    const characterView = document.getElementById('toAppend');
    arrayOfCharacters.forEach(char => {
        characterView.innerHTML = characterView.innerHTML +
            `
            <div class="card m-2" style="width: 18rem;">
                <img class="card-img-top" src="${char.image}" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">${char.name}</h5>
                    <p class="card-text">species: ${char.species}</p>
                    <p class="card-text">location: ${char.location.name}</p>
                    <p class="card-text">origin: ${char.origin.name}</p>
                    <a href="${char.episode}" class="btn btn-primary">Description</a>
                </div>
            </div>
        `
    });
}

//filter
let formText = document.querySelector('form');
let optionsValue = document.getElementById('filter-options');
let outputValue = document.getElementById('toAppend');

// formText.addEventListener('submit', (event) => {
//     event.preventDefault();


// });