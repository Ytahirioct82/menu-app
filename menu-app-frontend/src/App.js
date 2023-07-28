import { useState, useEffect } from "react";
import Loading from "./components/Loading/Loading";
import MenuList from "./components/MenuList/MenuList";
import Error from "./components/Error/Error";
import Container from "./components/Container/Container";
import "./App.css";

function App() {
  const [menuData, setMenuData] = useState([]);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");

  const API_URL = "http://localhost:8888";

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);

        const res = await fetch(`${API_URL}/menu`);
        const json = await res.json();
        const { error, data } = json;

        if (res.ok) {
          setMenuData(data);
          setLoading(false);
        } else {
          setError(error);
          setLoading(false);
        }
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  const render = (error, loading, data) => {
    if (loading) {
      return <Loading />;
    } else if (data.length) {
      return <MenuList items={menuData} />;
    } else {
      return <Error error={error} />;
    }
  };

  return (
    <div className="App">
      <Container>{render(error, loading, menuData)}</Container>
    </div>
  );
}

export default App;
