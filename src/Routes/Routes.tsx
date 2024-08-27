import {
  Route,
  createRoutesFromElements,
  createBrowserRouter,
} from "react-router-dom";
import Main from "../layouts/main";
const routes = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Main />}></Route>
    </>
  )
);
export default routes;
