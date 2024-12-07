import bcrypt from "bcrypt";

export const isEmailValid = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const isPassowrdValid = (password: string): boolean => {
  const passwordRegex =
    /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{8,}$/;
  return passwordRegex.test(password);
};

// Asynchrone Funktion zur Überprüfung des Passwort-Hashes
export const correctPassword = async (
  plainText: string,
  hash: string
): Promise<boolean> => {
  return await bcrypt.compare(plainText, hash); // Vergleicht das Passwort mit dem Hash
};
