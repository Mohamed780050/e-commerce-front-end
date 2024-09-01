import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Box, Button } from "@mui/material";
import { ShoppingCart, NotepadText } from "lucide-react";
import Link from "./Link";

export default function ProductCard() {
  return (
    <Card sx={{ maxWidth: 350 }}>
      <Box width="350px" height="350px">
        <img
          style={{ width: "100%", height: "100%" }}
          src="/Photos/iPhone-14-view-1.webp"
          alt=""
        />
      </Box>
      <CardContent style={{ paddingBottom: "8px" }}>
        <Typography fontWeight="bold" gutterBottom variant="h5" component="div">
          iPhone 14
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
        <Box display="flex" justifyContent="space-between" marginTop="8.4px">
          <Box>Price:</Box>
          <Box>Catagory</Box>
        </Box>
      </CardContent>
      <CardActions style={{ justifyContent: "space-between" }}>
        <Button variant="contained" startIcon={<ShoppingCart />}>
          Add to Cart
        </Button>
        <Link variant="contained" startIcon={<NotepadText />}>
          Add to Cart
        </Link>
      </CardActions>
    </Card>
  );
}
