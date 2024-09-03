import {
  Skeleton,
  Box,
  CardActions,
  Typography,
  CardContent,
  Card,
} from "@mui/material";
function CardSkeleton() {
  return (
    <>
      {Array.from({ length: 6 }, (_, index: number) => (
        <Box p="5px" key={index}>
          <Card>
            <Box
              minWidth="350px"
              minHeight="350px"
              display="flex"
              alignItems="center"
              justifyContent="center"
              p="20px 20px 0px 20px"
            >
              <Skeleton width="100%" height="350px"></Skeleton>
            </Box>
            <CardContent style={{ paddingBottom: "8px" }}>
              <Typography
                fontWeight="bold"
                gutterBottom
                variant="h5"
                component="div"
              >
                <Skeleton />
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                <Skeleton />
                <Skeleton />
                <Skeleton width={"50%"} />
              </Typography>
              <Box
                display="flex"
                justifyContent="space-between"
                marginTop="8.4px"
              >
                <Box width="30%">
                  <Skeleton height="36px" />
                </Box>
                <Box width="30%">
                  <Skeleton height="36px" />
                </Box>
              </Box>
            </CardContent>
            <CardActions></CardActions>
          </Card>
        </Box>
      ))}
    </>
  );
}
export default CardSkeleton;
