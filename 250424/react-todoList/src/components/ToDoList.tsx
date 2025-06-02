import { useForm } from "react-hook-form";
import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

interface FormContents {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  repassword: string;
  userName: string;
}

const ToDoList = () => {
  const { register, handleSubmit } = useForm();

  const onValid = (data: any) => {
    console.log(data);
  };

  return (
    <Form onSubmit={handleSubmit(onValid)}>
      <input {...register("email")} type="email" placeholder="Email" />
      <input {...register("firstName")} type="text" placeholder="First Name" />
      <input {...register("lastName")} type="text" placeholder="Last Name" />
      <input {...register("userName")} type="text" placeholder="User Name" />
      <input {...register("password")} type="password" placeholder="Password" />
      <input
        {...register("repassword")}
        type="password"
        placeholder="Re Password"
      />
      <button>Add</button>
    </Form>
  );
};

export default ToDoList;
