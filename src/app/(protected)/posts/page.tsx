"use client";

import CardWrapper from "@/ui/components/CardWrapper";
import { Box, CardMedia, Grid2 } from "@mui/material";
import { useEffect, useState } from "react";

interface pageProps {}
const page: React.FC<pageProps> = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const getAllImages = async () => {
      try {
        const response = await fetch("/api/image", {
          method: "GET",
        });

        const data = await response.json();
        console.log(data.message);
        setImages(data.data);
      } catch (error) {
        console.log(error);
      }
    };
    getAllImages();
  }, []);

  return <></>;
};

export default page;
