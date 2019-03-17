function tjekNavn(event) {
  event.preventDefault();
  const elements = document.forms[0].elements;
  const navn = elements[1].value;
  const country = elements[2].selectedOptions[0].value;
  if (navn.length < 2) {
    return;
  }
  fetch(`https://api.genderize.io/?name=${navn}&country_id=${country}`)
    .then(response => response.json())
    .then(json => document.getElementById('resultat').innerHTML = JSON.stringify(json, null, 2));
}
