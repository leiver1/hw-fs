import Snackbar from "@/ui/components/Snackbar";
import { ReactNode } from "react";

interface layoutProps {
  children: ReactNode;
}
const layout: React.FC<layoutProps> = ({ children }) => {
  return (
    <>
      <Snackbar />
      {children}
    </>
  );
};

export default layout;
