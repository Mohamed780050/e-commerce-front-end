import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import Axios from "../config/Axios";
import CardSkeleton from "./Skeleton";
import { Product } from "../interfaces/interfaces";

async function getThisProduct(id: string | undefined) {
  try {
    const reponse = await Axios.get(`/products/${id}`);
    return reponse.data;
  } catch (err) {
    console.log(err);
  }
}

function ProuductDetailsComponent() {
  const { id } = useParams();
  const { data, isLoading } = useQuery({
    queryKey: [""],
    queryFn: () => getThisProduct(id),
  });
  const Product: Product = data?.Product;
  console.log(id);
  console.log(data);
  return <>{isLoading ? <CardSkeleton /> : <div>{Product?.title}</div>}</>;
}
export default ProuductDetailsComponent;
