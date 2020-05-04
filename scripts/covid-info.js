fetch('https://api.covid19api.com/summary')
    .then(async (response) => {
        const covidInfo = await response.json();
        const belarusInfo = covidInfo.Countries.find(x => x.Country === "Belarus");

        console.log(belarusInfo);

        const html = `<div style="display: flex">
                        <div style="margin-right: 20px">
                            <h2 style="text-decoration: underline">Мир</h2>
                            ${getInfoTemplate(covidInfo.Global)}
                        </div>
                        <div>
                            <h2 style="text-decoration: underline">Республика Беларусь</h2>
                            ${getInfoTemplate(belarusInfo)}
                        </div>
                      </div>`;

        document.getElementById('covid-info').innerHTML = html;
    })
    .then((data) => {
        console.log(data);
    });

function getInfoTemplate(info) {
    return `<h2>Всего случаев заражения: ${info.TotalConfirmed}.</h2>
            <h2>Новых случаев заражения: ${info.NewConfirmed}.</h2>
            <h2>Всего смертей: ${info.TotalDeaths}.</h2>
            <h2>Новых смертей: ${info.NewDeaths}.</h2>
            <h2>Всего выздоровело: ${info.TotalRecovered}.</h2>
            <h2>Новых выздоровевших: ${info.NewRecovered}.</h2>`;

}
