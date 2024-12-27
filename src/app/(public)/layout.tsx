import Snackbar from "@/ui/components/Snackbar";
import { CssBaseline } from "@mui/material";
import { ReactNode } from "react";

interface layoutProps {
  children: ReactNode;
}
const layout: React.FC<layoutProps> = ({ children }) => {
  return (
    <>
      <CssBaseline />
      <Snackbar />
      {children}
    </>
  );
};

export default layout;
