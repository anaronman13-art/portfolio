export interface Trabajo {
  id: number
  titulo: string
  cuadro: string
  portada:string
  descripcion: string
  gallery: string[]
}

export const trabajos: Trabajo[] = [
  {
    id: 1,
    titulo: 'Trabajo 1',
    cuadro: '36days.jpg',
    portada: 'port1.jpg',
    descripcion: `36 days of Type es un proyecto consistente en crear una tipografía ilustrativa a partir de una idea o concepto, y aplicarla a tres letras diferentes. 
      Yo me inspiré en imágenes de ruinas de edificaciones antiguas, como pueden ser castillos medievales, para hacer las formas de estas letras, y usé la técnica del carboncillo para ilustrarlas.
      `,
    gallery: [
      "/trabajos/6.1.jpg",
      "/trabajos/6.2.jpg",
      "/trabajos/6.3.jpg"
    ]
  },
  {
    id: 2,
    titulo: 'Trabajo 2',
    cuadro: 'cartelviejos.jpg',
    portada: 'port2.jpg',
    descripcion: `"Juntos mejor" es una campaña que pretende promoverr las relaciones intergeneracionales entre personas jóvenes y personas de la tercera edad.
    Para este proyecto, debimos relizar un cartel, folleto, distitnos diseños para posts en redes sociales, así como un anuncio publicitario. A continuación se muestran ejemplos de algunos de los soportes físicos del proyecto.`,
    gallery: [
      "/trabajos/5.1.jpg",
      "/trabajos/5.2.jpg",
      "/trabajos/5.3.jpg",
      "/trabajos/5.4.jpg"
    ]
  },
  {
    id: 3,
    titulo: 'Trabajo 3',
    cuadro: 'chocolate.jpg',
    portada: 'port3.jpg',
    descripcion: `Este proyecto consistió en crear una marca de chocolates para la empresa "Bloom". 
    Para ello, tuvimos que diseñar tanto el logotipo de dichamarca como los envoltorios de sus chocolates principales: "Cacao puro 90%", "Té Chai con Jengibre (sin gluten)", "Naranja y Almedra" y "Leche y Canela".
    Totamos inspiración de los azulejos para crear formas simplificadas, optando por una paleta compuesta por únicamente dos colores para represntar cada sabor.`,
    gallery: [
      "/trabajos/2.1.jpg",
      "/trabajos/2.2.jpg",
      "/trabajos/2.3.jpg",
      "/trabajos/2.4.jpg"
    ]
  },
  {
    id: 4,
    titulo: 'Trabajo 4',
    cuadro: 'comic.jpg',
    portada: 'port4.jpg',
    descripcion: `Este trabajo consitió en la creación de un cómic digital. Para hacerlo, dibujé en un formato A3 las dos páginas, y, tras retintarlo, usé el scaner para pasarlo a digital.
    Después le añadí los colores digitalmente.`,
    gallery: [
      "/trabajos/4.jpg"
    ]
  },
  {
    id: 5,
    titulo: 'Trabajo 5',
    cuadro: 'jekyll.jpg',
    portada: 'port5.jpg',
    descripcion: `Este proyecto consisitó en la creación de la portada, contraportada, lomo, guardas e ilustraciones de dos páginas de un libro a elegir.
    En mi caso, me decanté por la famosa historia de "El extraño caso del Dr Jekyll y Mr Hyde", he hice las ilustraciónes con gouache.
    Usé, principalemnte, tonos azules y rojizos que contrastan y muestran la atmósfera oscura y violenta de la historia y, especialmente, del personaje de Hyde y sus acciones.`,
    gallery: [
      "/trabajos/1.1.jpg",
      "/trabajos/1.2.jpg",
      "/trabajos/1.3.jpg",
      "/trabajos/1.4.jpg"
    ]
  },
  {
    id: 6,
    titulo: 'Trabajo 6',
    cuadro: 'juegomesa.jpg',
    portada: 'port6.jpg',
    descripcion: `En este trabajo debíamos crear un juego de mesa que hablara sobre la salud mental. Este debía incluir un tablero, fichas de juego, cartas, una caja y unas instrucciones donde se explicaran las reglas de juego.
    Así creamos "Check-Inside", un juego donde se recorre un viaje por el cual, no solo se visitan destinos basados en distitnos biomas o terrenos (y diferenciados por colores), sino que también se proponen retos relacionados con una gran variedad de emociones que proporcionan aprendizaje sobre las mismas y que harán que el tiempo se pase volando.`,
    gallery: [
      "/trabajos/3.1.jpg",
      "/trabajos/3.2.jpg",
      "/trabajos/3.3.jpg"
    ]
  },
]