import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Box, Button } from "@mui/material";
import { ShoppingCart, NotepadText } from "lucide-react";
import Link from "./Link";
import useAuthentcatedQueery from "../Hooks/useAthuntacted";
import { Product } from "../interfaces/interfaces";
import CardSkeleton from "./Skeleton";

export default function ProductCard() {
  const { data, isLoading } = useAuthentcatedQueery({
    queryKey: [""],
    url: "/products",
  });
  const MyData: { Products: Product[] } = data;
  return (
    <>
      {isLoading ? (
        <CardSkeleton />
      ) : (
        MyData.Products.map((product: Product) => (
          <Box p="5px">
            <Card key={product.id}>
              <Box minWidth="350px" minHeight="350px">
                <img
                  style={{ width: "100%", height: "100%" }}
                  src={product.img}
                  alt={product.title}
                />
              </Box>
              <CardContent style={{ paddingBottom: "8px" }}>
                <Typography
                  fontWeight="bold"
                  gutterBottom
                  variant="h5"
                  component="div"
                >
                  {product.title}
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  {product.description}
                </Typography>
                <Box
                  display="flex"
                  justifyContent="space-between"
                  marginTop="8.4px"
                >
                  <Box>
                    Price:{" "}
                    <span style={{ color: "green" }}>{product.price}$</span>
                  </Box>
                  <Box>Catagory</Box>
                </Box>
              </CardContent>
              <CardActions
                style={{
                  justifyContent: "space-between",
                  paddingBottom: "20px",
                }}
              >
                <Button variant="contained" startIcon={<ShoppingCart />}>
                  Add to Cart
                </Button>
                <Link
                  id={`${product.id}`}
                  variant="contained"
                  startIcon={<NotepadText />}
                >
                  show Details
                </Link>
              </CardActions>
            </Card>
          </Box>
        ))
      )}
    </>
  );
}
