import { useQuery } from "@tanstack/react-query";
import Axios from "../config/Axios";
import { IAuthentcatedQueery } from "../interfaces/interfaces";

function useAuthentcatedQueery({
  queryKey = [],
  url = "",
  config = {},
}: IAuthentcatedQueery) {
  async function getInfo() {
    try {
      const response = await Axios.get(url, config);
      return response.data;
    } catch (err) {
      console.log(err);
    }
  }
  return useQuery({
    queryKey: queryKey,
    queryFn: getInfo,
  });
}
export default useAuthentcatedQueery;
