import { Outlet } from "react-router-dom";
import Header from "../Routes/Header";
import { Container } from "@mui/material";

function Main() {
  return (
    <div>
      <Header />
      <Container>
        <Outlet />
      </Container>
    </div>
  );
}
export default Main;
