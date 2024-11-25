"use client";

import { useRouter } from "next/navigation";
import { ReactNode, useEffect } from "react";
import ProtectedLayout from "@/app/ui/ProtectedLayout";

interface layoutProps {
  children: ReactNode;
}
const layout: React.FC<layoutProps> = ({ children }) => {
  const router = useRouter();
  const isAuth = false;

  const checkAuth = () => {
    if (!isAuth) {
      router.push("/login");
    }
  };

  useEffect(() => {
    checkAuth();
  }, []);

  return (
    <div>
      <ProtectedLayout>{children}</ProtectedLayout>
    </div>
  );
};

export default layout;
