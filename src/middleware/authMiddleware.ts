import { jwtVerify } from "jose";

export const validateToken = async (request) => {
  const secret = new TextEncoder().encode(process.env.JWT_SECRET); // TextEncoder für den Secret-String
  const token = request.cookies.get("token")?.value;

  if (!token) {
    return { isValid: false, redirectUrl: "/login" };
  }

  try {
    const { payload } = await jwtVerify(token, secret);

    return { isValid: true };
  } catch (error) {
    return { isValid: false, redirectUrl: "/login" };
  }
};
