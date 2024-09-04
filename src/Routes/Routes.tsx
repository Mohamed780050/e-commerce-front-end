import {
  Route,
  createRoutesFromElements,
  createBrowserRouter,
} from "react-router-dom";
import Main from "../layouts/main";
import NotFound from "./NotFound";
const routes = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Main />}></Route>
      <Route path="*" element={<NotFound />} />
    </>
  )
);
export default routes;
