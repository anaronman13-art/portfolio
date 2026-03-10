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
    descripcion: 'Texto 1',
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
    descripcion: 'Texto 2',
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
    descripcion: 'Texto 3',
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
    descripcion: 'Texto 4',
    gallery: [
      "/trabajos/4.jpg"
    ]
  },
  {
    id: 5,
    titulo: 'Trabajo 5',
    cuadro: 'jekyll.jpg',
    portada: 'port5.jpg',
    descripcion: 'Texto 5',
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
    descripcion: 'Texto 6',
    gallery: [
      "/trabajos/3.1.jpg",
      "/trabajos/3.2.jpg",
      "/trabajos/3.3.jpg"
    ]
  },
]