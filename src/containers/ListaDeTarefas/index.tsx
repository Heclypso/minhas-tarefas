import Tarefa from '../../components/Tarefa'
import { Container } from './styles'
import * as enums from '../../utils/enums/tarefa'

const tarefas = [
  {
    titulo: 'Estudar TS',
    descricao: 'Ver a aula 3 da EBAC',
    prioridade: enums.Prioridade.IMPORTANTE,
    status: enums.Status.CONCLUIDA
  },
  {
    titulo: 'Pegar a Kaguya',
    descricao: 'Conseguir a kaguya antes do evento acabar',
    prioridade: enums.Prioridade.URGENTE,
    status: enums.Status.PENDENTE
  },
  {
    titulo: 'Falhar em tentar pegar monarca',
    descricao: 'Não conseguir pegar monarca hoje de novo',
    prioridade: enums.Prioridade.NORMAL,
    status: enums.Status.CONCLUIDA
  }
]

const ListaDeTarefas = () => {
  return (
    <Container>
      <p>
        2 tarefas marcadas como: &quot;categoria&lquot; e &quot;termo&lquot;
      </p>
      <ul>
        {tarefas.map((t) => (
          <li key={t.titulo}>
            <Tarefa
              titulo={t.titulo}
              prioridade={t.prioridade}
              status={t.status}
              descricao={t.descricao}
            />
          </li>
        ))}
      </ul>
    </Container>
  )
}

export default ListaDeTarefas
