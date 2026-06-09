// 地図作成
const map = L.map('map').setView([50, 10], 4);

// 地図タイル
L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; OpenStreetMap contributors'
  }
).addTo(map);

// スタジアムデータ
const stadiums = [

  {
    name: "Old Trafford",
    club: "Manchester United",
    league: "Premier League",
    lat: 53.4631,
    lng: -2.2913
  },

  {
    name: "Anfield",
    club: "Liverpool",
    league: "Premier League",
    lat: 53.4308,
    lng: -2.9608
  },

  {
    name: "Emirates Stadium",
    club: "Arsenal",
    league: "Premier League",
    lat: 51.5550,
    lng: -0.1085
  },
    
  {
    name: "Villa park",
    club: "Aston Villa",
    league: "Premier League",
    lat: 52.50914,
    lng: -1.88556
  },

  {
    name: "Vitality Stadium",
    club: "Bournemouth",
    league: "Premier League",
    lat: 50.73508,
    lng: -1.83814
  },

  {
    name: "Gtech Community Stadium",
    club: "Brentford",
    league: "Premier League",
    lat: 51.4908,
    lng: -0.28873
  },

  {
    name: "Brighton and Hove Albion Stadium",
    club: "Brighton and Hove Albion",
    league: "Premier League",
    lat: 50.86156,
    lng: -0.08405
  },

  {
    name: "Turf Moor",
    club: "Burnley",
    league: "Premier League",
    lat: 53.78900,
    lng: -2.22974
  },

  {
    name: "Stamford Bridge",
    club: "Chelsea",
    league: "Premier League",
    lat: 51.48144,
    lng: -0.19021
  },

    {
    name: "Selhurst Park",
    club: "Crystal Palace",
    league: "Premier League",
    lat: 51.39822,
    lng: -0.08532
  },

    {
    name: "Kenilworth Road",
    club: "Luton Town",
    league: "Premier League",
    lat: 51.88419,
    lng: -0.43168
  },

    {
    name: "Goodison Park",
    club: "Everton",
    league: "Premier League",
    lat: 53.43866,
    lng: -2.96612
  },

    {
    name: "Craven Cottage",
    club: "Fulham",
    league: "Premier League",
    lat: 51.47469,
    lng: -0.22145
  },

    {
    name: "Etihad stadium",
    club: "Manchester City",
    league: "Premier League",
    lat: 53.48305,
    lng: -2.20046
  },

    {
    name: "St James’ Park",
    club: "Newcastle United",
    league: "Premier League",
    lat: 54.97546,
    lng: -1.62160
  },

    {
    name: "City Ground",
    club: "Nottingham Forest",
    league: "Premier League",
    lat: 52.93986,
    lng: -1.13283
  },

    {
    name: "Bramall Lane",
    club: "Sheffield Wednesday",
    league: "Premier League",
    lat: 53.37071,
    lng: -1.47064
  },

    {
    name: "Tottenham Hotspur Stadium",
    club: "Tottenham Hotspur",
    league: "Premier League",
    lat: 51.60410,
    lng: -0.06603
  },

    {
    name: "London Stadium",
    club: "West Ham United",
    league: "Premier League",
    lat: 51.53841,
    lng: -0.01657
  },

    {
    name: "Molineux Stadium",
    club: "Wolverhampton Wanderers",
    league: "Premier League",
    lat: 52.59006,
    lng: -2.13018
  },

  {
    name: "Santiago Bernabéu",
    club: "Real Madrid",
    league: "La Liga",
    lat: 40.4531,
    lng: -3.6883
  },

  {
    name: "Camp Nou",
    club: "Barcelona",
    league: "La Liga",
    lat: 41.3809,
    lng: 2.1228
  },

  {
    name: "Estadio de la Cerámica",
    club: "Villarreal",
    league: "La Liga",
    lat: 39.94419,
    lng: -0.010350
  },

   {
    name: "Ramon Sanchez-Pizjuan Stadium",
    club: "Sevilla",
    league: "La Liga",
    lat: 37.38396,
    lng: -5.97058
  },

   {
    name: "Benito Villamarín Stadium",
    club: "Real Betis",
    league: "La Liga",
    lat: 37.35653,
    lng: -5.98149
  },

   {
    name: "Mestalla Stadium",
    club: "Valencia",
    league: "La Liga",
    lat: 39.47454,
    lng: -0.35835
  },

   {
    name: "Mallorca Son Moix Stadium",
    club: "Mallorca",
    league: "La Liga",
    lat: 39.58982,
    lng: 2.62991
  },

   {
    name: "Anoeta Stadium",
    club: "Real Sociedad",
    league: "La Liga",
    lat: 43.30141,
    lng: -1.97348
  },

   {
    name: "monilivi Stadium",
    club: "Granada",
    league: "La Liga",
    lat: 40.4531,
    lng: -3.6883
  },

   {
    name: "Santiago Bernabéu",
    club: "Real Madrid",
    league: "La Liga",
    lat: 40.4531,
    lng: -3.6883
  },

   {
    name: "Santiago Bernabéu",
    club: "Real Madrid",
    league: "La Liga",
    lat: 40.4531,
    lng: -3.6883
  },

   {
    name: "Santiago Bernabéu",
    club: "Real Madrid",
    league: "La Liga",
    lat: 40.4531,
    lng: -3.6883
  },

   {
    name: "Santiago Bernabéu",
    club: "Real Madrid",
    league: "La Liga",
    lat: 40.4531,
    lng: -3.6883
  },

   {
    name: "Santiago Bernabéu",
    club: "Real Madrid",
    league: "La Liga",
    lat: 40.4531,
    lng: -3.6883
  },

   {
    name: "Santiago Bernabéu",
    club: "Real Madrid",
    league: "La Liga",
    lat: 40.4531,
    lng: -3.6883
  },

   {
    name: "Santiago Bernabéu",
    club: "Real Madrid",
    league: "La Liga",
    lat: 40.4531,
    lng: -3.6883
  },

   {
    name: "Santiago Bernabéu",
    club: "Real Madrid",
    league: "La Liga",
    lat: 40.4531,
    lng: -3.6883
  },

   {
    name: "Santiago Bernabéu",
    club: "Real Madrid",
    league: "La Liga",
    lat: 40.4531,
    lng: -3.6883
  },

   {
    name: "Santiago Bernabéu",
    club: "Real Madrid",
    league: "La Liga",
    lat: 40.4531,
    lng: -3.6883
  },

   {
    name: "Santiago Bernabéu",
    club: "Real Madrid",
    league: "La Liga",
    lat: 40.4531,
    lng: -3.6883
  },

   {
    name: "Santiago Bernabéu",
    club: "Real Madrid",
    league: "La Liga",
    lat: 40.4531,
    lng: -3.6883
  },



  {
    name: "San Siro",
    club: "AC Milan / Inter",
    league: "Serie A",
    lat: 45.4781,
    lng: 9.1240
  },

  {
    name: "Allianz Arena",
    club: "Bayern Munich",
    league: "Bundesliga",
    lat: 48.2188,
    lng: 11.6247
  },

  {
    name: "Anfield",
    team: "Liverpool",
    lat: 53.4308,
    lng: -2.9608
  },

  {
    name: "Parc des Princes",
    club: "PSG",
    league: "Ligue 1",
    lat: 48.8414,
    lng: 2.2530
  }

];

// HTML取得
const stadiumList = document.getElementById("stadium-list");

// スタジアム処理
stadiums.forEach(stadium => {

  // マーカー作成
  const marker = L.marker([stadium.lat, stadium.lng])
    .addTo(map)
    .bindPopup(`
      <h3>${stadium.name}</h3>
      <p>${stadium.club}</p>
      <p>${stadium.league}</p>
    `);

  // 左リスト作成
  const li = document.createElement("li");

  li.innerHTML = `
    <strong>${stadium.name}</strong><br>
    ${stadium.club}
  `;

  // クリックで移動
  li.addEventListener("click", () => {

    map.flyTo(
      [stadium.lat, stadium.lng],
      10,
      {
        duration: 2
      }
    );

    marker.openPopup();

  });

  // リスト追加
  stadiumList.appendChild(li);

});

const li = document.createElement("li");

li.innerHTML = `
  <strong>${stadium.name}</strong><br>
  ${stadium.club}
`;

li.classList.add(
  stadium.league.toLowerCase().replace(/\s+/g, "-")
);