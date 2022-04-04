import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { Link, useHistory, Redirect } from "react-router-dom";

import api from "../../services/api";

import { Container, Form, Input, Select, Div, A } from "./styles";
import { toast } from "react-toastify";

function SignUp({ authenticated }) {
  const formSchema = yup.object().shape({
    email: yup.string().email().required("Campo obrigatório!"),
    password: yup
      .string()
      .required("Campo obrigatório!")
      .min(6, "Mínimo de 6 caracteres!")
      .matches(
        /^((?=.*[!@#$%^&*()\-_=+{};:,<.>?]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
        "Sua senha deve ter ao menos 1 letra maiúscula, 1 minúscula, 1 número e 1 caractere especial."
      ),
    confirmPassword: yup
      .string()
      .required("Campo obrigatório!")
      .oneOf([yup.ref("password")], "As senhas devem ser iguais!"),
    name: yup
      .string()
      .required("Campo obrigatório!")
      .matches(/^[a-zA-Zà-úÀ-Ú]+$/, "Preencher apenas com letras!"),
    bio: yup.string().required("Campo obrigatório!"),
    contact: yup.string().required("Campo obrigatório!"),
    course_module: yup.string().required("Campo obrigatório!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(formSchema) });

  const history1 = useHistory();

  const onSubmit = ({ email, password, name, bio, contact, course_module }) => {
    const newUserInfo = { email, password, name, bio, contact, course_module };
    api
      .post("/users", newUserInfo)
      .then((response) => {
        toast.success("Cadastro feito com sucesso!");
        history1.push("/login");
      })
      .catch((err) =>
        toast.error(
          "Erro ao cadastrar. Email já cadastrado ou falha na conexão."
        )
      );
  };

  if (authenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <Container>
      <h1>Faça o cadastro a seguir:</h1>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input placeholder="Email" {...register("email")} />
        {errors.email && <Div>{errors.email.message}</Div>}
        <Input type="password" placeholder="Senha" {...register("password")} />
        {errors.password && <Div>{errors.password.message}</Div>}
        <Input
          type="password"
          placeholder="Confirmar senha"
          {...register("confirmPassword")}
        />
        {errors.confirmPassword && <Div>{errors.confirmPassword.message}</Div>}
        <Input placeholder="Nome" {...register("name")} />
        {errors.name && <Div>{errors.name.message}</Div>}
        <Input placeholder="Fale um pouco sobre você." {...register("bio")} />
        {errors.bio && <Div>{errors.bio.message}</Div>}
        <Input
          placeholder="Escreva uma forma de contato."
          {...register("contact")}
        />
        {errors.contact && <Div>{errors.contact.message}</Div>}
        <Select {...register("course_module")}>
          <option value="Primeiro módulo (Introdução ao Frontend)">
            Primeiro módulo (Introdução ao Frontend)
          </option>
          <option value="Segundo módulo (Frontend Avançado)">
            Segundo módulo (Frontend Avançado)
          </option>
          <option value="Terceiro módulo (Introdução ao Backend)">
            Terceiro módulo (Introdução ao Backend)
          </option>
          <option value="Quarto módulo (Backend Avançado)">
            Quarto módulo (Backend Avançado)
          </option>
        </Select>
        <button type="submit">Submeter</button>
      </Form>
      <p>
        Já tem cadastro? Então vamos ao{" "}
        <Link to="/login">
          <A>Login</A>
        </Link>
        !
      </p>
    </Container>
  );
}

export default SignUp;
