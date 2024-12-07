"use client";

import { useEffect, useState } from "react";

const useEmailValidation = (email) => {
  const [isEmailValid, setIsEmailValid] = useState<boolean>(true);
  const [emailError, setEmailError] = useState<string>();

  const calcEmailValidation = (email): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  useEffect(() => {
    var isValid = calcEmailValidation(email);

    setIsEmailValid(isValid);
    if (isValid || email === "") {
      setEmailError("");
    } else {
      setEmailError("Please enter a valid email!");
    }
  }, [email]);

  return [isEmailValid, emailError];
};

export default useEmailValidation;
