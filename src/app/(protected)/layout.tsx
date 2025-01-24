"use client";
import { ReactNode, useEffect } from "react";
import ResponsiveDrawer from "@/ui/layouts/ResponsiveDrawer";
import Snackbar from "@/ui/components/Snackbar";

interface layoutProps {
  children: ReactNode;
}

const layout: React.FC<layoutProps> = ({ children }) => {
  return (
    <>
      <Snackbar />
      <ResponsiveDrawer>{children}</ResponsiveDrawer>
    </>
  );
};

export default layout;
