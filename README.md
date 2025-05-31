# PROYECTO DEL SEGUNDO PARCIAL
Proyecto del segundo parcial de la materia "Desarrollo basado en plataformas".  
Este proyecto consiste en una empresa llamada “automax” de renta de autos que quiere promocionar sus unidades por internet, para esto la empresa tiene al rededor de 25 autos de los cuales cuenta con modelo, año, marca y precio por día de renta.  
## Prerequisites
Para ejecutar este proyecto necesitas tener instalado:
```
- Bash
- Docker
- Git
```
### Installing
Clona este repositorio en tu máquina local (asegúrate de tener en tu cuenta de github al menos una llave SSH en funcionamiento):
```
git clone git@github.com:VeroTT2500/DBEP-Proyecto-2.git
```
Para ejecutar la aplicación:
```

```
Para construir y ejecutar el contenedor Docker:
```

```
## ACERCA DE
### HTML
* Definimos el tipo de documento como HTML5 y el idioma como español.
* Usa codificación UTF-8 para soportar caracteres especiales.
* Hace que el diseño sea adaptable a dispositivos móviles.
* A continuación tenemos el título Acerca de - AutoMax.
* Enlazamos con estilos.css para su diseño.
* En el cuerpo tenemos el nombre de la empresa y una barra de navegación con enlaces a otras páginas del sitio.
* Agregamos la información de la visión, misión y valores.
* Al final tenemos un pie de página con los derechos de autor.
### CSS
* En el body eliminamos los márgenes, definimos la fuente Segoe UI, con otras fuentes como alternativas, el fondo es muy parecido al blanco, las letras son de un gris oscuro, el texto es centrado y la altura entre líneas es cómoda para leer.
* Para h1, h2 y h3 pusimos distintos tonos de gris y distintos tamaños de fuente.
* En el header el fondo es negro, la distribución es horizontal, hay espacio entre el título y el menú, el texto es centrado y se adapta en pantallas pequeñas.
* En nav a, el color es azul claro con efecto de transición cuando el mouse pasa por encima, cambiando a blanco.
* En p, el texto es ligeramente mas grande de lo normal, con máximo ancho para que no se extienda demasiado, y centrado con margen horizontal y vertical automático.
* En ul y li, el fondo es gris, el texto es blanco, está centrado, espaciado y con los bordes redondeados.
* El footer es un fondo negro con texto pequeño, blanco, centrado y espaciado verticalmente.
* Tiene animaciones al cargar secciones que hace que se desvanezca desde abajo y estando completamente visible después de un segundo.
## CONTACTO
### HTML
* Definimos el tipo de documento como HTML5 y el idioma como español.
* Usa codificación UTF-8 para soportar caracteres especiales.
* Hace que el diseño sea adaptable a dispositivos móviles.
* A continuación tenemos el título Contacto - AutoMax.
* Enlazamos con estilos.css para su diseño.
* Muestra el nombre de la empresa, seguido de un menú con enlaces a: Inicio, Acerca de, Solo para ti.
* Hay otro título Contacto, en el que se muestra después la información de la dirección, teléfono y correo electrónico de AutoMax.
* Muestra un mapa con la ubicación específica: 28.702794, -106.1421091.
* Al final tenemos un pie de página con los derechos de autor.
### CSS
El css de aquí, presenta las mismas características que el css de Acerca de.
## DETALLE
### JS
* Contiene el array de autos con los datos: marca, modelo, año, precio y descripción.
* Selecciona un contenedor con el id "vehículos".
* Por cada auto en el arreglo, se crea un div con la clase "flip-card".
* En el contenido interno de la tarjeta, se realiza el "volteo", pudiendo ver las caras trasera y delantera. En la cara frontal vemos toda la información del auto, mientras que en la cara trasera podemos ver una imagen del auto.
* Añade la tarjeta al contenedor en el HTML, para que se vea en la página.
### HTML
* Definimos el tipo de documento como HTML5 y el idioma como español.
* Usa codificación UTF-8 para soportar caracteres especiales.
* Hace que el diseño sea adaptable a dispositivos móviles.
* A continuación tenemos el título Detalle de Vehículos - AutoMax.
* Enlazamos con estilos.css para su diseño.
* Muestra el nombre de la empresa, seguido de un menú con enlaces a: Inicio, Acerca de, Contacto.
* Está escrito "Descubre la selección especial que tenemos para ti" y "Estos son nuestros vehículos más escogidos"
* Mostramos los autos del arreglo de autos.
* Al final tenemos un pie de página con los derechos de autor.
### CSS
* Tiene todo lo de los anteriores css del proyecto, pero cuenta con más características.
* En la sección de vehículos, usa flex para alinear las tarjetas de vehículos en filas y gap para separarlas.
* En las tarjetas de los autos, estas tienen sombra, borde suave, fondo claro y bastante padding.
* En la sección de flip-card, las tarjetas giran en 3D al pasar el mouse, mostrando la información mencionada en ambas caras, quedando a la vista sólo una cara a la vez. La cara trasera está girada 180° para que al girar la tarjeta quede visible. La descripción del auto está en letra cursiva.
## LANDING PAGE
### JS
* Tenemos una lista de 27 autos con sus respectivas propiedades (marca, modelo, año y precio).
* Selecciona un contenedor con el id "vehículos".
* Por cada auto en el arreglo, se crea un div con la clase "flip-card".
* En el contenido interno de la tarjeta, se realiza el "volteo", pudiendo ver las caras trasera y delantera. En la cara frontal vemos toda la información del auto, mientras que en la cara trasera podemos ver una imagen del auto.
* Añade la tarjeta al contenedor en el HTML, para que se vea en la página.
### HTML
* Definimos el tipo de documento como HTML5 y el idioma como español.
* Usa codificación UTF-8 para soportar caracteres especiales.
* Hace que el diseño sea adaptable a dispositivos móviles.
* A continuación tenemos el título AutoMax - Renta de Autos.
* Enlazamos con estilos.css para su diseño.
### CSS
## Built With
```
* GNU bash, version 5.2.21(1)
* Docker version 28.1.1
* Git version 2.43.0
```
## Contributing
Por el momento este proyecto es académico por lo que no se aceptan contribuciones externas.
## Versioning
```
v1.0 - Versión inicial del proyecto
```
## Authors
* **Miguel David Rodríguez González 343786** - *Colaborador* - [Milkimiguel](https://github.com/Milkimiguel)
* **Rebeca Portillo Saenzpardo 368094** - *Colaboradora* - [Rebeca434](https://github.com/Rebeca434)
* **Laura Cecilia Holguín Campos 360743** - *Colaboradora* - [CeciliaHC](https://github.com/CeciliaHC)
* **Ana Verónica Torres Torres 367812** - *Colaboradora* - [VeroTT2500](https://github.com/VeroTT2500)
## License
Este proyecto no cuenta con ninguna licencia específica.
