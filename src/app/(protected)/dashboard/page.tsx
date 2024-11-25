import { TextField } from "@mui/material";

interface pageProps {}
const page: React.FC<pageProps> = () => {
  return (
    <div>
      <TextField variant="filled" label="name" />
    </div>
  );
};

export default page;
