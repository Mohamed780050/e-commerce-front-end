import { Grid2 } from "@mui/material";
import ProductCard from "../Components/Card";

function Content() {
  return (
    <Grid2
      display={"grid"}
      container
      gap="15px"
      gridTemplateColumns={"repeat(auto-fill, minmax(350px, 1fr))"}
    >
      <ProductCard />
    </Grid2>
  );
}
export default Content;
