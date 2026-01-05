type CharacterCardProps = {
  name: string
  status: string
}

export default function CharacterCard(props: CharacterCardProps) {
  return (
    <div>
      <h2>{props.name}</h2>
      <p>{props.status}</p>
    </div>
  )
}
