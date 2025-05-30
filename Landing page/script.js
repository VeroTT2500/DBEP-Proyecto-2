
const autos = [
  { marca: "Toyota", modelo: "Corolla", anio: 2022, precio: 700 },
  { marca: "Ford", modelo: "Mustang", anio: 2023, precio: 1800 },
  { marca: "Chevrolet", modelo: "Tracker", anio: 2021, precio: 900 },
  { marca: "Nissan", modelo: "Sentra", anio: 2020, precio: 600 },
  { marca: "Kia", modelo: "Rio", anio: 2022, precio: 650 },
  { marca: "Toyota", modelo: "Corolla", anio: 2022, precio: 700 },
  { marca: "Ford", modelo: "Mustang", anio: 2023, precio: 1800 },
  { marca: "Chevrolet", modelo: "Tracker", anio: 2021, precio: 900 },
  { marca: "Nissan", modelo: "Sentra", anio: 2020, precio: 600 },
  { marca: "Kia", modelo: "Rio", anio: 2022, precio: 650 },
  { marca: "Toyota", modelo: "Corolla", anio: 2022, precio: 700 },
  { marca: "Ford", modelo: "Mustang", anio: 2023, precio: 1800 },
  { marca: "Chevrolet", modelo: "Tracker", anio: 2021, precio: 900 },
  { marca: "Nissan", modelo: "Sentra", anio: 2020, precio: 600 },
  { marca: "Kia", modelo: "Rio", anio: 2022, precio: 650 },
  { marca: "Toyota", modelo: "Corolla", anio: 2022, precio: 700 },
  { marca: "Ford", modelo: "Mustang", anio: 2023, precio: 1800 },
  { marca: "Chevrolet", modelo: "Tracker", anio: 2021, precio: 900 },
  { marca: "Nissan", modelo: "Sentra", anio: 2020, precio: 600 },
  { marca: "Kia", modelo: "Rio", anio: 2022, precio: 650 },
  { marca: "Toyota", modelo: "Corolla", anio: 2022, precio: 700 },
  { marca: "Ford", modelo: "Mustang", anio: 2023, precio: 1800 },
  { marca: "Chevrolet", modelo: "Tracker", anio: 2021, precio: 900 },
  { marca: "Nissan", modelo: "Sentra", anio: 2020, precio: 600 },
  { marca: "Kia", modelo: "Rio", anio: 2022, precio: 650 },
  { marca: "Nissan", modelo: "Sentra", anio: 2020, precio: 600 },
  { marca: "Kia", modelo: "Rio", anio: 2022, precio: 650 },
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
        <img src="imagenes/${auto.modelo.toLowerCase()}.png" alt="${auto.marca} ${auto.modelo}" />
      </div>
    </div>
  `;
  contenedor.appendChild(card);
});
