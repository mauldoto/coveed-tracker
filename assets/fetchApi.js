fetch("https://api.covid19api.com/summary")
    .then(response => {
        if (response.status == 429) {
            alert("Ooops, API gratis punya limit ya gan hehe!!!");
            return
        } else {
            return response.json()
        }
    })
    .then(data => {
        let global = data.Global;
        addToGlobalCase(global.TotalConfirmed, global.TotalDeaths, global.TotalRecovered)
    });

let select = document.querySelector("#countries");
select.addEventListener('change', function(e){
    let showLoading = document.querySelector(".loading");
    showLoading.setAttribute('class', 'loading')
    fetch("https://api.covid19api.com/summary")
    .then(response => {
        if (response.status == 429) {
            alert("Ooops, API gratis punya limit ya gan hehe!!!");
            showLoading.setAttribute('class', 'loading hide')
            return
        } else {
            return response.json()
        }
    })
    .then(data => {
        country = data.Countries.filter(arr => arr.CountryCode == e.target.value);
        changeWordResult(country[0].Country)
        addToNewCase(country[0].NewConfirmed, country[0].NewDeaths, country[0].NewRecovered)
        addToTotalCase(country[0].TotalConfirmed, country[0].TotalDeaths, country[0].TotalRecovered)
        showLoading.setAttribute('class', 'loading hide')
    });
});

function addToGlobalCase(newConfirm, newDeath, newRecored){
    let cardIntro = document.querySelector(".card-intro");
    let card = document.createElement('div');
    card.setAttribute('class', 'row-global');
    newConfrm = `   <div class="card-content">
                    <h4>Terkonfirmasi</h4>
                    <p class="positive">${newConfirm.toLocaleString('id-ID')}</p>
                    </div>
                    <div class="card-content">
                    <h4>Meninggal</h4>
                    <p class="death">${newDeath.toLocaleString('id-ID')}</p>
                    </div>
                    <div class="card-content">
                    <h4>Sembuh</h4>
                    <p class="recovered">${newRecored.toLocaleString('id-ID')}</p>
                    </div>`;
    card.innerHTML = (newConfrm);
    cardIntro.appendChild(card);
}

function changeWordResult(value) {
    let title = document.querySelector(".result-word");
    title.setAttribute('class', 'result-word')
    title.innerHTML = `Result for: ${value}`;
}

function addToNewCase(newConfirm, newDeath, newRecored){
    let newCase = document.getElementById("newCase");
    newCase.children[1] ? newCase.children[1].remove():null;
    let card = document.createElement('div');
    card.setAttribute('class', 'case-content');
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
    card.innerHTML = (newConfrm);
    newCase.appendChild(card);
}

function addToTotalCase(TotalConfirm, TotalDeath, TotalRecored) {
    let totalCase = document.getElementById("totalCase");
    totalCase.children[1] ? totalCase.children[1].remove():null;
    let card = document.createElement('div');
    card.setAttribute('class', 'case-content');
    TotalConfrm = ` <div class="case-card">
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
    card.innerHTML = (TotalConfrm);
    totalCase.appendChild(card);
}


