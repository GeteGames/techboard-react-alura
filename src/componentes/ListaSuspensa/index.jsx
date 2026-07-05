import "./lista-formulario.estilo.css";

export function ListaSuspensaFormulario() {
  return (
    <select name="temaEvento" className="form-lista-suspensa">
      <option></option>
    </select>
  );
}

// {children.map((evento) => {
//   return <option id={evento.id} value={evento.value}>
//     {evento.nome}
//   </option>;
// })}
