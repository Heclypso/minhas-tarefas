import Tarefa from '../../components/Tarefa'
import { Container } from './styles'

const ListaDeTarefas = () => {
  return (
    <Container>
      <p>
        2 tarefas marcadas como: &quot;categoria&lquot; e &quot;termo&lquot;
      </p>
      <ul>
        <li>
          <Tarefa />
        </li>
        <li>
          <Tarefa />
        </li>
        <li>
          <Tarefa />
        </li>
        <li>
          <Tarefa />
        </li>
        <li>
          <Tarefa />
        </li>
      </ul>
    </Container>
  )
}

export default ListaDeTarefas
