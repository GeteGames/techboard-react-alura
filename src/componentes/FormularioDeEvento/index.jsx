import "./formulario-de-evento.estilos.css";
import { CampoDeEntrada } from "../CampoDeEntrada";
import { CampoDeFormulario } from "../CampoDeFormulario";
import { Label } from "../Label";
import { TituloFormulario } from "../TituloDeFormulario";
import { ListaSuspensaFormulario } from "../ListaSuspensa";
import { Botao } from "../Botao";

export function FormularioDeEvento({ temas }) {
  // { nome: "Selecione uma opção", value: "", id: "" },

  return (
    <form className="form-evento" action="#">
      <TituloFormulario>Preencha para criar um evento:</TituloFormulario>
      <div className="campos">
        <CampoDeFormulario>
          <Label htmlFor="nomeEvento">Qual o nome do evento?</Label>
          <CampoDeEntrada
            type="text"
            id="nomeEvento"
            placeholder="Summer dev hits"
            name="nomeEvento"
          />
        </CampoDeFormulario>
        <CampoDeFormulario>
          <Label htmlFor="capa">Qual endereço da imagem de capa?</Label>
          <CampoDeEntrada
            type="text"
            id="capa"
            placeholder="https://..."
            name="capa"
          />
        </CampoDeFormulario>
        <CampoDeFormulario>
          <Label htmlFor="dataEvento">Data do evento</Label>
          <CampoDeEntrada
            type="date"
            id="dataEvento"
            placeholder="Summer dev hits"
            name="dataEvento"
          />
        </CampoDeFormulario>

        <CampoDeFormulario>
          <Label htmlFor="tema">Tema do evento</Label>
          <ListaSuspensaFormulario
            id="tema"
            name="tema"
            itens={temas}
          ></ListaSuspensaFormulario>
        </CampoDeFormulario>
        <div className="acoes">
          <Botao>Criar evento</Botao>
        </div>
      </div>
    </form>
  );
}
