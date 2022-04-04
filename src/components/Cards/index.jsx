import { Container, Button } from "./styles";

function Cards({ task, deleteTask }) {
  return (
    <Container>
      <div key={task.id}>
        <h3>Tecnologia: {task.title}</h3>
        <p>Status: {task.status}</p>
        <Button onClick={() => deleteTask(task.id)}>Deletar</Button>
      </div>
    </Container>
  );
}

export default Cards;
