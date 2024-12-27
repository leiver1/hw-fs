import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Link,
  Typography,
} from "@mui/material";
import { Icon } from "@iconify/react/dist/iconify.js";

interface pageProps {}
const page: React.FC<pageProps> = () => {
  return (
    <>
      <Card>
        <CardHeader
          title="Hello this is a title"
          subheader="subtitle"
        ></CardHeader>
        <CardContent>
          <Link>
            <Typography>Kann ich das gut lesen?</Typography>
          </Link>
          <Typography>Kann ich das gut lesen?</Typography>
        </CardContent>
        <CardActions>
          <Button startIcon={<Icon icon="mdi:login" />}>Click Me</Button>
        </CardActions>
      </Card>
    </>
  );
};

export default page;
