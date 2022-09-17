let cl = console.log;


let result = '';
countries.forEach((country) => {
    result +=`

        <div class="col">
            <div class="card">
                <div class="img-container">
                    <img src="${country.flag}" alt="">
                </div>
                <h3 class="countryname">${country.name}</h3>
                <p>
                    Capital : ${country.capital}
                </p>
                <p>
                    Languages : ${country.languages}
                </p>
                <p>
                    Population : ${country.population}
                </p>
            </div>
        </div>`
})
var info = document.getElementById('info');
info.innerHTML=result;