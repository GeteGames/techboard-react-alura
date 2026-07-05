import "./lista-formulario.estilo.css";

export function ListaSuspensaFormulario({ itens, ...rest }) {
  return (
    <select
      {...rest}
      className="form-lista-suspensa"
      defaultValue=""
    >
      <option value="" disabled>
        Selecione uma opção
      </option>
      {itens.map((item) => {
        return (
          <option key={item.id} value={item.id}>
            {item.nome}
          </option>
        );
      })}
    </select>
  );
}
