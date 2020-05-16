let select = document.querySelector("#countries");
select.addEventListener('change', function(e){
    fetch("https://api.covid19api.com/summary")
    .then(response => response.json())
    .then(data => {
        country = data.Countries.filter(arr => arr.CountryCode == e.target.value);
        console.log(country[0])
        addToNewCase(country[0].NewConfirmed, country[0].NewDeaths, country[0].NewRecovered)
        addToTotalCase(country[0].TotalConfirmed, country[0].TotalDeaths, country[0].TotalRecovered)
    });
});

function addToNewCase(newConfirm, newDeath, newRecored){
    let newCase = document.getElementById("newCase");
    newCase.innerHTML = '';

    newConfrm = `   <div class="case-card">
                    <h4>Terkonfirmasi</h4>
                    <p class="positive">${newConfirm.toLocaleString('id-ID')}</p>
                    </div>
                    <div class="case-card">
                    <h4>Meninggal</h4>
                    <p class="death">${newDeath.toLocaleString('id-ID')}</p>
                    </div>
                    <div class="case-card">
                    <h4>Sembuh</h4>
                    <p class="recovered">${newRecored.toLocaleString('id-ID')}</p>
                    </div>`;
    newCase.innerHTML = (newConfrm);
   
}

function addToTotalCase(TotalConfirm, TotalDeath, TotalRecored) {
    let totalCase = document.getElementById("totalCase");
    totalCase.innerHTML = '';

    TotalConfrm = `   <div class="case-card">
                    <h4>Terkonfirmasi</h4>
                    <p class="positive">${TotalConfirm.toLocaleString('id-ID')}</p>
                    </div>
                    <div class="case-card">
                    <h4>Meninggal</h4>
                    <p class="death">${TotalDeath.toLocaleString('id-ID')}</p>
                    </div>
                    <div class="case-card">
                    <h4>Sembuh</h4>
                    <p class="recovered">${TotalRecored.toLocaleString('id-ID')}</p>
                    </div>`;
    totalCase.innerHTML = (TotalConfrm);
}


