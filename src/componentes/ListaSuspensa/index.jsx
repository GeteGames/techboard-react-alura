import "./lista-formulario.estilo.css";

export function ListaSuspensaFormulario({ children }) {

  return (
    <select name="temaEvento" className="form-lista-suspensa">
      {children.map((evento) => {
        return <option id={evento.id} value={evento.value}>
          {evento.nome}
        </option>;
      })}
    </select>
  );
}
