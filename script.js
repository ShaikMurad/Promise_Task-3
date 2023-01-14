
fetch('https://api.openbrewerydb.org/breweries')
  .then(response => response.json())
  .then(data => {
    let body = document.querySelector('body');
    data.forEach(brewery => {
      let div = document.createElement('div');
      div.innerHTML = `<h2>${brewery.name}</h2><p>${brewery.city}, ${brewery.state}</p>`;
      div.style.border = "2px solid blue";
      div.style.margin = "5px";
      body.appendChild(div);
    });
  })
  .catch(error => console.error(error));
