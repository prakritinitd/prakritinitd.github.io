const postBearers = document.getElementById('postBearers');
const alumni2021 = document.getElementById('alumni2021');
const alumni2022 = document.getElementById('alumni2022');
const members2023 = document.getElementById('members2023')
const members2025 = document.getElementById('members2025')
const members2026 = document.getElementById('members2026')

const sortByName = (array) => {
    return array.slice(0).sort(function (a, b) {
        var x = a.name.toLowerCase();
        var y = b.name.toLowerCase();
        return x < y ? -1 : x > y ? 1 : 0;
    });
}

postBearersList.map((data, index) => {
    postBearers.innerHTML += `
        <div class="rj-card">
            <img src="${data.img}">
            <div class="rj-card-details">
                <h3>${data.name}</h3>
                <p>${data.post}</p>
            </div>
        </div>
    `
});

sortByName(members2021List).map((data, index) => {
    alumni2021.innerHTML += `
        <div class="rj-card rj-card-sm">
            <img src="${data.img}">
            <div class="rj-card-details">
                <h3>${data.name}</h3>
                <p>${data.post}</p>
            </div>
        </div>
    `
});

sortByName(members2022List).map((data, index) => {
    alumni2022.innerHTML += `
    <div class="rj-card rj-card-sm">
        <img src="${data.img}">
        <div class="rj-card-details">
            <h3>${data.name}</h3>
            <p>${data.post}</p>
        </div>
    </div>
`
});
sortByName(members2023List).map((data, index) => {
    members2023.innerHTML += `
        <div class="rj-card rj-card-sm">
            <img src="${data.img}">
            <div class="rj-card-details">
                <h3>${data.name}</h3>
                <p>${data.post}</p>
            </div>
        </div>
    `
});

sortByName(members2025List).map((data, index) => {
    members2024.innerHTML += `
    <div class="rj-card rj-card-sm">
        <img src="${data.img}">
        <div class="rj-card-details">
            <h3>${data.name}</h3>
            <p>${data.post}</p>
        </div>
    </div>
`
});

sortByName(members2026List).map((data, index) => {
    members2025.innerHTML += `
    <div class="rj-card rj-card-sm">
        <img src="${data.img}">
        <div class="rj-card-details">
            <h3>${data.name}</h3>
            <p>${data.post}</p>
        </div>
    </div>
`
});