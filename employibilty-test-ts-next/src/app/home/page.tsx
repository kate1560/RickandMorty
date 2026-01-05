'use client'
import { getCharacters } from "@/services/api"
import { Card } from "../../components/Card"
import { useEffect, useState } from "react" 
import { Character } from "@/types/character"

export default function Home() {
  const [characters, setCharacters] = useState<Character[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)


 useEffect(() => {
    setLoading(true)
    setError(null)

    getCharacters()
      .then(data => {
        setCharacters(data)
        setLoading(false)
      })
      .catch(() => {
        setError("Error al cargar personajes")
        setLoading(false)
      })
  }, [])


  if (loading) return <p>Cargando...</p>
  if (error) return <p>{error}</p>
  if (characters.length === 0) return <p>No hay personajes para mostrar</p>


  return (
    <div>
      {characters.map((char, index) => (
        <div key={index}>
          <h3>{char.name}</h3>
          <Card
            title={char.name}
            description={`${char.species} • ${char.status}`}
            imageUrl={char.image}
            status={char.status}
            species={char.species}
            onClick={() => getCharacters()}
          />
        </div>
      ))}
    </div>
  )
}
