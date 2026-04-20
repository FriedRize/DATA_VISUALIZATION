// script.js
const champions = [
    { "id": "Aatrox", "name": "Aatrox", "popularity": 9.5, "winrate": 50.2, "attack": 8, "defense": 4, "magic": 3, "img": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_0.jpg" },
    { "id": "Ahri", "name": "Ahri", "popularity": 12.4, "winrate": 52.1, "attack": 3, "defense": 4, "magic": 8, "img": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_0.jpg" },
    { "id": "Akali", "name": "Akali", "popularity": 11.2, "winrate": 48.9, "attack": 5, "defense": 3, "magic": 8, "img": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Akali_0.jpg" },
    { "id": "Caitlyn", "name": "Caitlyn", "popularity": 15.6, "winrate": 49.5, "attack": 8, "defense": 2, "magic": 2, "img": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Caitlyn_0.jpg" },
    { "id": "Darius", "name": "Darius", "popularity": 8.8, "winrate": 51.3, "attack": 9, "defense": 5, "magic": 1, "img": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Darius_0.jpg" },
    { "id": "Ezreal", "name": "Ezreal", "popularity": 25.4, "winrate": 48.2, "attack": 7, "defense": 2, "magic": 6, "img": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ezreal_0.jpg" },
    { "id": "Garen", "name": "Garen", "popularity": 10.5, "winrate": 51.3, "attack": 7, "defense": 7, "magic": 1, "img": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Garen_0.jpg" },
    { "id": "Jinx", "name": "Jinx", "popularity": 18.5, "winrate": 51.2, "attack": 9, "defense": 2, "magic": 4, "img": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Jinx_0.jpg" },
    { "id": "Kaisa", "name": "Kai'Sa", "popularity": 21.0, "winrate": 49.8, "attack": 8, "defense": 5, "magic": 3, "img": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Kaisa_0.jpg" },
    { "id": "LeeSin", "name": "Lee Sin", "popularity": 16.4, "winrate": 47.9, "attack": 8, "defense": 5, "magic": 3, "img": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/LeeSin_0.jpg" },
    { "id": "Lux", "name": "Lux", "popularity": 12.8, "winrate": 50.1, "attack": 2, "defense": 4, "magic": 9, "img": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Lux_0.jpg" },
    { "id": "Malphite", "name": "Malphite", "popularity": 8.5, "winrate": 52.4, "attack": 5, "defense": 9, "magic": 7, "img": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Malphite_0.jpg" },
    { "id": "MissFortune", "name": "Miss Fortune", "popularity": 14.8, "winrate": 52.1, "attack": 8, "defense": 3, "magic": 5, "img": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/MissFortune_0.jpg" },
    { "id": "Morgana", "name": "Morgana", "popularity": 11.2, "winrate": 50.3, "attack": 1, "defense": 6, "magic": 8, "img": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Morgana_0.jpg" },
    { "id": "Nautilus", "name": "Nautilus", "popularity": 13.1, "winrate": 50.8, "attack": 4, "defense": 6, "magic": 6, "img": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Nautilus_0.jpg" },
    { "id": "Pyke", "name": "Pyke", "popularity": 9.2, "winrate": 49.7, "attack": 9, "defense": 3, "magic": 1, "img": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Pyke_0.jpg" },
    { "id": "Teemo", "name": "Teemo", "popularity": 7.4, "winrate": 50.2, "attack": 5, "defense": 3, "magic": 7, "img": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Teemo_0.jpg" },
    { "id": "Thresh", "name": "Thresh", "popularity": 11.5, "winrate": 50.5, "attack": 5, "defense": 6, "magic": 6, "img": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Thresh_0.jpg" },
    { "id": "Vayne", "name": "Vayne", "popularity": 13.4, "winrate": 51.5, "attack": 10, "defense": 1, "magic": 1, "img": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Vayne_0.jpg" },
    { "id": "Yasuo", "name": "Yasuo", "popularity": 14.2, "winrate": 48.5, "attack": 8, "defense": 4, "magic": 4, "img": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Yasuo_0.jpg" }
];

const s1 = document.getElementById('select1');
const s2 = document.getElementById('select2');
const placeholder = document.getElementById('placeholder');

// Populate dropdowns
champions.forEach(c => {
    const o1 = new Option(c.name, c.id);
    const o2 = new Option(c.name, c.id);
    s1.add(o1);
    s2.add(o2);
});

function updateChamp(slot, id) {
    const champ = champions.find(c => c.id === id);
    const card = document.getElementById(`card${slot}`);
    
    if (!id) {
        card.classList.add('hidden');
        checkPlaceholder();
        return;
    }

    card.classList.remove('hidden');
    placeholder.classList.add('hidden');

    // Content
    document.getElementById(`name${slot}`).textContent = champ.name;
    document.getElementById(`img${slot}`).src = champ.img;
    
    // Values
    document.getElementById(`popVal${slot}`).textContent = champ.popularity + '%';
    document.getElementById(`winVal${slot}`).textContent = champ.winrate + '%';
    document.getElementById(`atkVal${slot}`).textContent = champ.attack + '/10';
    document.getElementById(`defVal${slot}`).textContent = champ.defense + '/10';
    document.getElementById(`magVal${slot}`).textContent = champ.magic + '/10';

    // Bars
    setTimeout(() => {
        document.getElementById(`popBar${slot}`).style.width = (champ.popularity * 3) + '%';
        document.getElementById(`winBar${slot}`).style.width = champ.winrate + '%';
        document.getElementById(`atkBar${slot}`).style.width = (champ.attack * 10) + '%';
        document.getElementById(`defBar${slot}`).style.width = (champ.defense * 10) + '%';
        document.getElementById(`magBar${slot}`).style.width = (champ.magic * 10) + '%';
    }, 50);
}

function checkPlaceholder() {
    if (!s1.value && !s2.value) placeholder.classList.remove('hidden');
}

s1.addEventListener('change', e => updateChamp(1, e.target.value));
s2.addEventListener('change', e => updateChamp(2, e.target.value));
