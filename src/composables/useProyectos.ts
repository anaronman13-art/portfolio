import { ref } from 'vue'

export interface Proyecto {
  id: string
  titulo: string
  descripcion: string
  imagen?: string
}

const proyecto = ref<Proyecto[]>([
  {
    id: 'trabajo-1',
    titulo: 'Proyecto de ejemplo 1',
    descripcion: 'Blbalbla...',
    imagen: '/placeholder.jpg'
  },
  {
    id: 'trabajo-2',
    titulo: 'Proyecto de ejemplo 2',
    descripcion: 'Blablabla...',
    imagen: '/placeholder.jpg'
  },
  {
    id: 'trabajo-3',
    titulo: 'Proyecto de ejemplo 3',
    descripcion: 'Blablabla...',
    imagen: '/placeholder.jpg'
  }
])

export function useProyectos() {
  const getProyecto = (id: string) => {
    return proyecto.value.find(o => o.id === id)
  }

  return {
    proyecto,
    getProyecto
  }
}