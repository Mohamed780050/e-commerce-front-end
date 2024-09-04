import {
  Route,
  createRoutesFromElements,
  createBrowserRouter,
} from "react-router-dom";
import Main from "../layouts/main";
import NotFound from "./NotFound";
import Content from "./Content";
import Signup from "./Signin";
import Login from "./Login";
import ProuductDetailsComponent from "../Components/ProuductDetailsComponent";
import ErrorRoute from "./ErrorRoute";
const routes = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Main />} errorElement={<ErrorRoute />}>
        <Route index element={<Content />} />
        <Route path="signUp" element={<Signup />} />
        <Route path="login" element={<Login />} />
        <Route path="products/:id" element={<ProuductDetailsComponent />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </>
  )
);
export default routes;
