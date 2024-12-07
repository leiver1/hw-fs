"use client";

import { useState } from "react";

const useTogglePw = (): [boolean, () => void] => {
  const [showPw, setShowPw] = useState<boolean>(false);

  const togglePw = () => {
    setShowPw((prev) => !prev);
  };
  return [showPw, togglePw];
};

export default useTogglePw;
