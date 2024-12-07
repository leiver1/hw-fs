"use client";

import { useEffect, useState } from "react";

const usePasswordValidation = (password) => {
  const [isPwValid, setIsPwValid] = useState<boolean>();
  const [pwError, setPwError] = useState<string[]>([]);

  function validatePassword(password) {
    // Array für Fehlermeldungen
    let errorMessages = [];

    // Überprüfung, ob das Passwort mindestens 8 Zeichen lang ist
    if (password.length < 8) {
      errorMessages.push("Das Passwort muss mindestens 8 Zeichen lang sein.");
    }

    // Überprüfung, ob das Passwort mindestens eine Großbuchstabe enthält
    if (!/[A-Z]/.test(password)) {
      errorMessages.push(
        "Das Passwort muss mindestens einen Großbuchstaben enthalten."
      );
    }

    // Überprüfung, ob das Passwort mindestens eine Zahl enthält
    if (!/\d/.test(password)) {
      errorMessages.push("Das Passwort muss mindestens eine Zahl enthalten.");
    }

    // Überprüfung, ob das Passwort mindestens ein Sonderzeichen enthält
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      errorMessages.push(
        "Das Passwort muss mindestens ein Sonderzeichen enthalten."
      );
    }

    setPwError(errorMessages);
  }

  useEffect(() => {
    validatePassword(password);
  }, [password]);

  return [pwError];
};

export default usePasswordValidation;
