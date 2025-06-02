import { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 60px;
`;

const Header = styled.header`
  font-size: 3.2rem;
  margin-bottom: 20px;
`;

const Loader = styled.div`
  font-size: 22px;
  color: ${({ theme }) => theme.accentColor};
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.accentColor};
`;

interface IRouteParams {
  coinId: string;
}

interface ILocationState {
  state: string;
}

interface InfoData {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
}

interface PriceData {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  circulating_supply: number;
  total_supply: number;
  max_supply: number;
  beta_value: number;
  first_data_at: string;
  last_updated: string;
  quotes: object;
}

const Coin = () => {
  const [loading, setLoading] = useState(true);
  const { coinId } = useParams<IRouteParams | any>();
  const { state } = useLocation() as ILocationState;
  const [info, setInfo] = useState({});
  const [priceInfo, setPriceInfo] = useState({});

  useEffect(() => {
    (async () => {
      const infoData = await (
        await fetch(
          `https://my-json-server.typicode.com/Divjason/coinlist/coins/${coinId}`
        )
      ).json();
      const priceData = await (
        await fetch(
          `https://my-json-server.typicode.com/Divjason/coinprice/coinprice/${coinId}`
        )
      ).json();

      setInfo(infoData);
      setPriceInfo(priceData);
      console.log(infoData);
      console.log(priceData);
      setLoading(false);
    })();
  }, []);

  return (
    <Container>
      <Header>
        <Title>Coin : {state ? state : loading ? "Loading..." : coinId}</Title>
      </Header>
      {loading ? <Loader>Loading...</Loader> : <></>}
    </Container>
  );
};

export default Coin;
