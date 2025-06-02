import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;

const ReactQuery = () => {
  const { data, isLoading, error, isError } = useQuery({
    queryKey: ["posts"],
    queryFn: () => {
      return axios.get("http://localhost:3000/posts");
    },
    retry: 1,
    select: (data) => {
      return data.data;
    },
    gcTime: 5000,
  });

  console.log(isLoading, data, isError, error);
  return (
    <Container>
      {data?.map((item) => (
        <div key={item.id}>{item.title}</div>
      ))}
    </Container>
  );
};

export default ReactQuery;
