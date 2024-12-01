import { ReactNode } from "react";

interface layoutProps {
  children: ReactNode;
}
const layout: React.FC<layoutProps> = ({ children }) => {
  return <div>{children}</div>;
};

export default layout;
