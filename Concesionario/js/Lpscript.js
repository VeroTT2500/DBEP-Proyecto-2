
const autos = [
  { marca: "Toyota", modelo: "Corolla", anio: 2022, precio: 700 },
  { marca: "Ford", modelo: "Mustang", anio: 2023, precio: 1800 },
  { marca: "Chevrolet", modelo: "Tracker", anio: 2021, precio: 900 },
  { marca: "Nissan", modelo: "Sentra", anio: 2020, precio: 600 },
  { marca: "Kia", modelo: "Rio", anio: 2022, precio: 650 },
  { marca: "Cadillac", modelo: "CTS", anio: 2015, precio: 2000 },
  { marca: "Mitsubishi", modelo: "Lancer", anio: 2010, precio: 1500 },
  { marca: "Chevrolet", modelo: "Sonic", anio: 2017, precio: 900 },
  { marca: "TVR", modelo: "Griffith", anio: 2018, precio: 50000 },
  { marca: "Mazda", modelo: "Miata", anio: 2012, precio: 3000 },
  { marca: "Volkswagen", modelo: "Tiguan", anio: 2024, precio: 1000 },
  { marca: "Subaru", modelo: "Brz", anio: 2005, precio: 3000 },
  { marca: "Seat", modelo: "Ibiza", anio: 2021, precio: 1200 },
  { marca: "Mazda", modelo: "Mazda3", anio: 2012, precio: 1200 },
  { marca: "Ford", modelo: "Ka", anio: 2006, precio: 650 },
  { marca: "Honda", modelo: "Beat", anio: 2004, precio: 700 },
  { marca: "TVR", modelo: "Sagaris", anio: 2004, precio: 5000 },
  { marca: "Volksawagen", modelo: "Beetle", anio: 2024, precio: 1000 },
  { marca: "Tesla", modelo: "Cybertruck", anio: 2025, precio: 9000 },
  { marca: "Ford", modelo: "Focus", anio: 2018, precio: 1000 },
  { marca: "Kia", modelo: "Soul", anio: 2019, precio: 1300 },
  { marca: "Nissan", modelo: "Tsuru", anio: 1999, precio: 100 },
  { marca: "Hennessey", modelo: "Venom", anio: 2021, precio: 900 },
  { marca: "Volkswagen", modelo: "Vento", anio: 2022, precio: 700 },
  { marca: "Vencer", modelo: "Sarthe", anio: 2015, precio: 20000 },
  { marca: "Bentley", modelo: "Continental", anio: 2020, precio: 18000 },
  { marca: "Peel", modelo: "P50", anio: 1962, precio: 50 },
];

const contenedor = document.getElementById("vehiculos");

autos.forEach(auto => {
  const card = document.createElement("div");
  card.className = "flip-card";
  card.innerHTML = `
    <div class="flip-card-inner">
      <div class="flip-card-front">
        <h3>${auto.marca} ${auto.modelo}</h3>
        <p>Año: ${auto.anio}</p>
        <p>Precio por día: $${auto.precio} MXN</p>
      </div>
      <div class="flip-card-back">
        <img src="img/${auto.modelo.toLowerCase()}.png" alt="${auto.marca} ${auto.modelo}" />
      </div>
    </div>
  `;
  contenedor.appendChild(card);
});
