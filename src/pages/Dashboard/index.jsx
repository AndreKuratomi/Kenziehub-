import { useEffect, useState } from "react";
import { Redirect, Link } from "react-router-dom";
import { useForm } from "react-hook-form";

import api from "../../services/api";

import Cards from "../../components/Cards";

import {
  Main,
  Container,
  Input,
  Button,
  ButtonLogout,
  Section,
} from "./styles";

function Dashboard({ authenticated, setAuthenticated }) {
  const [tasks, setTasks] = useState([]);
  const [token] = useState(
    JSON.parse(localStorage.getItem("@Kenziehub:token")) || ""
  );
  const [id] = useState(localStorage.getItem("@Kenziehub:id") || "");

  const { register, handleSubmit } = useForm();

  const loadTasks = () => {
    //função que mostrará os cards
    api
      .get(`/users/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setTasks(response.data.techs);
      })
      .catch((err) => "Erro de conexão.");
  };

  useEffect(() => loadTasks(), []);

  const deleteTask = (id) => {
    const filter = tasks.filter((elt) => elt.id !== id);

    api
      .delete(`/users/techs/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(setTasks(filter));
  };

  const onSubmitFunction = ({ title, status }) => {
    api
      .post(
        "/users/techs",
        {
          title: title,
          status: status,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => setTasks([...tasks, response.data]))
      .catch((err) => "Erro de conexão.");
  };

  if (!authenticated) {
    return <Redirect to="/login" />;
  }

  const logout = () => {
    localStorage.clear();
    return setAuthenticated(false);
  };

  return (
    <Main>
      <h1>Dashboard!</h1>
      <Container onSubmit={handleSubmit(onSubmitFunction)}>
        <Input
          placeholder="Cadastre suas tecnologias..."
          {...register("title")}
        />
        <Input placeholder="...junto com seu status." {...register("status")} />
        <Button type="submit">Adicionar</Button>
      </Container>
      <Section>
        {tasks &&
          tasks.map((task) => <Cards task={task} deleteTask={deleteTask} />)}
      </Section>
      <button onClick={logout}>
        <Link to="/">Logout</Link>
      </button>
    </Main>
  );
}

export default Dashboard;
