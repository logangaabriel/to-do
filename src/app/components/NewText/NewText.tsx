interface NewTextProps {
  color?: string; // props do componente, ? = opcional
  text?: string; // props do componente, ? = opcional
}

export default function NewText({ 
    color = 'black', // valor default
    text = 'NewText' // valor default
 }: NewTextProps // passa o tipo de props que o componente recebe
) {
  return <div style={{ color }}>{text}</div>;
}
