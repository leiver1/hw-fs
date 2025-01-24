"use client";

import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import { Icon } from "@iconify/react/dist/iconify.js";
import Calendar from "@/ui/components/Calendar";

interface pageProps {}
const page: React.FC<pageProps> = () => {
  return (
    <>
      <Box sx={{ p: 1 }}>
        <Calendar />
      </Box>
    </>
  );
};

export default page;
