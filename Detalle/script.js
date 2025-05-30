const autos = [
  {
    marca: "Toyota",
    modelo: "Corolla",
    anio: 2022,
    precio: 700,
    descripcion: "Ideal para quienes buscan seguridad, eficiencia y una conducción suave. Perfecto para la ciudad y carretera."
  },
  {
    marca: "Ford",
    modelo: "Mustang",
    anio: 2023,
    precio: 1800,
    descripcion: "Un ícono del rendimiento. Vive la adrenalina de un motor potente con diseño deportivo y elegante."
  },
  {
    marca: "Chevrolet",
    modelo: "Tracker",
    anio: 2021,
    precio: 900,
    descripcion: "Comodidad y tecnología en cada trayecto. Un SUV compacto con espíritu aventurero y diseño moderno."
  }
];

const contenedor = document.getElementById("vehiculos");

autos.forEach(auto => {
  const card = document.createElement("div");
  card.className = "flip-card";
  card.innerHTML = `
    <div class="flip-card-inner">
      <div class="flip-card-front">
        <h3>${auto.marca} ${auto.modelo}</h3>
        <p class="detalle">Año: <span>${auto.anio}</span></p>
        <p class="detalle">Precio por día: <span>$${auto.precio} MXN</span></p>
        <p class="descripcion-auto">${auto.descripcion}</p>
      </div>
      <div class="flip-card-back">
        <img src="imagenes/${auto.modelo.toLowerCase()}.png" alt="${auto.marca} ${auto.modelo}" />
      </div>
    </div>
  `;
  contenedor.appendChild(card);
});

