import { Link, Redirect } from "react-router-dom";

import { Container, Button } from "./styles";

function Home({ authenticated }) {
  if (authenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <Container>
      <h1>KenzieHub!</h1>
      <p>
        Organize suas tecnologias aprendidas conforme o módulo em que estiver.
      </p>
      <section>
        <Button>
          <Link to="/signup">Cadastre-se</Link>
        </Button>
        <Button>
          <Link to="/login">Login</Link>
        </Button>
      </section>
    </Container>
  );
}

export default Home;
