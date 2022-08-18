let country = document.querySelector('#country');
let cities = document.querySelector('#cities');
let usaOption = document.querySelector('option[value="usa"]');
let p = document.querySelector('p');

let countriesObj = {
    ger: ["Berlin", "Dusseldorf", "Munchen", "Dortmund"],
    usa: ["New-York","Washington", "Chicago", "San Francisco"],
    ukr: ["Kyiv", "Lviv", "Kharkiv", "Odesa"]
};

const delOptionsFromSelectElement = function () {
    while (cities.children[0]) {
        cities.children[0].remove();
    }
}

const addOptionsToSelectElement = function(citiesArr) {
    for (const cityName of citiesArr) {
        let optionElement = document.createElement('option');
        optionElement.value = cityName;
        optionElement.innerHTML = cityName;
        cities.append(optionElement);
    }    

}

const writeInfoToPElement = function () {
    let optionText = document.querySelector(`option[value=${country.value}]`).innerHTML;
    p.textContent = `${optionText} , ${cities.value}`;
}

const fillCitiesSelectElement = function () {
    delOptionsFromSelectElement();
    addOptionsToSelectElement(countriesObj[country.value]);
    writeInfoToPElement();
}



fillCitiesSelectElement();
country.addEventListener('change', fillCitiesSelectElement);
cities.addEventListener('change', writeInfoToPElement);
