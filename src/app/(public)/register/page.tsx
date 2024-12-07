"use client";
import {
  Box,
  Typography,
  Divider,
  TextField,
  Grid2 as Grid,
  Button,
  IconButton,
  InputAdornment,
  colors,
} from "@mui/material";
import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";
import bg from "../../../../public/undraw_sign_up_n6im.svg";
import useTogglePw from "@/hooks/useTogglePw";
import { useEffect, useState } from "react";

import useEmailValidation from "@/hooks/useEmailValidation";
import usePasswordValidation from "@/hooks/usePasswordValidation";
import { useRouter } from "next/navigation";

interface pageProps {}
interface SignUpForm {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const page: React.FC<pageProps> = () => {
  const [input, setInput] = useState<SignUpForm>({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [isFormValid, setIsFormValid] = useState<boolean>(false);
  const [errorResponse, setErrorResponse] = useState();
  const router = useRouter();
  const [showPw, togglePw] = useTogglePw();
  const [isEmailValid, emailError] = useEmailValidation(input.email);
  const [pwError] = usePasswordValidation(input.password);
  const isPwValid = pwError.length === 0;

  const handleInput = (e, key: string) => {
    setInput((prev) => {
      return {
        ...prev,
        [key]: e.target.value,
      };
    });
  };

  const submit = async (e) => {
    e.preventDefault();
    const response = await fetch("/api/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(input),
    });

    const data = await response.json();

    if (response.ok) {
      router.push("/login");
    } else {
      setErrorResponse(data.message);
    }

    try {
    } catch (error) {
      console.log("Error occurred, trying to create user: ", error);
    }
  };

  useEffect(() => {
    if (
      input.email !== "" &&
      input.password !== "" &&
      input.confirmPassword !== "" &&
      input.firstname !== "" &&
      input.lastname !== ""
    ) {
      if (
        isEmailValid &&
        isPwValid &&
        input.confirmPassword === input.password
      ) {
        console.log("@@@@@@@@@@@@@yay");
        setIsFormValid(true);
      } else {
        setIsFormValid(false);
      }
    } else {
      setIsFormValid(false);
    }
  }, [isPwValid, isEmailValid, input]);

  return (
    <Grid container>
      <Grid
        size={{ xs: 12, md: 6 }}
        sx={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{ width: { xs: "95%", sm: "500px", md: "400px", lg: "480px" } }}
        >
          <form onSubmit={submit}>
            <Box textAlign="center" sx={{ mb: 2 }}>
              <Typography variant="h6">Let´s create your account!</Typography>
              <Typography variant="subtitle1">
                Join our community and discover what fits for you the best.
              </Typography>
            </Box>
            {errorResponse && (
              <Box
                sx={{
                  mb: 3,
                  mt: 1,
                  p: 2,
                  borderRadius: 2,
                  backgroundColor: colors.red[50],
                }}
              >
                <Typography variant="body2" color="error.dark">
                  {errorResponse}
                </Typography>
              </Box>
            )}

            <Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: 2,
                }}
              >
                <TextField
                  sx={{ my: 2 }}
                  onChange={(e) => handleInput(e, "firstname")}
                  label="Name"
                  fullWidth
                  required
                />
                <TextField
                  sx={{ my: 2 }}
                  onChange={(e) => handleInput(e, "lastname")}
                  label="Lastname"
                  fullWidth
                />
              </Box>
              <TextField
                sx={{ mt: 2 }}
                id="email"
                label="Email"
                onChange={(e) => handleInput(e, "email")}
                placeholder="e.g j.doe@example.com"
                fullWidth
              />
              <Typography
                variant="subtitle2"
                color="error.dark"
                sx={{ mt: 0.4 }}
              >
                {emailError}
              </Typography>
              <TextField
                sx={{ mt: 3 }}
                label="Password"
                onChange={(e) => handleInput(e, "password")}
                type={showPw ? "text" : "password"}
                placeholder="********"
                fullWidth
                slotProps={{
                  input: {
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton onClick={togglePw}>
                          <Icon
                            icon={
                              showPw ? "mdi-eye-outline" : "mdi-eye-off-outline"
                            }
                          />
                        </IconButton>
                      </InputAdornment>
                    ),
                  },
                }}
              />

              <Box sx={{ mb: 1 }}>
                {pwError.length > 0 &&
                  input.password !== "" &&
                  pwError.map((err: string, key: number) => (
                    <Typography
                      key={key}
                      variant="subtitle2"
                      color="error.dark"
                      sx={{ mt: 0.1 }}
                    >
                      {err}
                    </Typography>
                  ))}
              </Box>

              <TextField
                sx={{ mt: 3 }}
                label="Confirm password"
                type={showPw ? "text" : "password"}
                placeholder="********"
                onChange={(e) => handleInput(e, "confirmPassword")}
                fullWidth
              />
              <Typography
                variant="subtitle2"
                color="error.dark"
                sx={{ mt: 0.1 }}
              >
                {input.confirmPassword !== input.password &&
                  input.confirmPassword !== "" &&
                  "Password is not the same"}
              </Typography>
            </Box>
            <Box>
              <Button
                type="submit"
                fullWidth
                sx={{ py: 1.3, mt: 4 }}
                disabled={!isFormValid}
              >
                Sign up
              </Button>
            </Box>
          </form>
        </Box>
      </Grid>
      <Grid size={{ xs: 12, md: 6 }} sx={{ backgroundColor: colors.grey[100] }}>
        <Box
          sx={{
            height: "100vh",
            p: 8,
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image src={bg} alt="image" layout="responsive" />
        </Box>
      </Grid>
    </Grid>
  );
};

export default page;
