import { Box, Stack } from "@mui/material";
import { Home } from "lucide-react";
function Header() {
  return (
    <Stack
      flexDirection={"row"}
      justifyContent={"space-between"}
      alignItems={"center"}
      padding="10px"
      bgcolor="silver"
      color="white"
      marginBottom={"10px"}
    >
      <Box>
        <Home />
      </Box>
      <Stack
        flexDirection={"row"}
        width={"120px"}
        justifyContent={"space-between"}
      >
        <Box>Sign In</Box>
        <Box>LogIn</Box>
      </Stack>
    </Stack>
  );
}
export default Header;
