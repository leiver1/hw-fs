"use client";

import {
  TextField,
  Button,
  Box,
  IconButton,
  Typography,
  Divider,
  InputAdornment,
  Grid2 as Grid,
  colors,
  FormGroup,
  FormControlLabel,
  Link,
  useTheme,
  Checkbox,
} from "@mui/material";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useEffect, useState } from "react";
import img from "../../../../public/undraw_my_password_re_ydq7.svg";
import { Icon } from "@iconify/react";

interface pageProps {}

interface Credentials {
  email: string;
  password: string;
}
const page: React.FC<pageProps> = () => {
  const [credentials, setCredentials] = useState<Credentials>();
  const [response, setResponse] = useState<string>();
  const [showPw, setShowPw] = useState<boolean>(false);
  const router = useRouter();
  const theme = useTheme();

  const toggleShowPw = () => {
    setShowPw(!showPw);
  };

  const submit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: JSON.stringify(credentials),
      });

      const data = await response.json();

      if (!response.ok) {
        setResponse(data.message);
      }

      router.push("/dashboard");
    } catch (err) {
      console.log(err);
    }
  };

  const handleInput = (e, type: string) => {
    setCredentials((prev) => {
      return {
        ...prev,
        [type]: e.target.value,
      };
    });
  };

  return (
    <Grid container justifyContent={"space-evenly"}>
      <Grid
        size={{ sm: 12, md: 6 }}
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
          <form onSubmit={(e) => submit(e)}>
            <Box textAlign="center">
              <Typography variant="h6">Welcome Back!</Typography>
              <Typography variant="subtitle1">
                Please enter your details to join the suite
              </Typography>
              {response && (
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
                    {response}
                  </Typography>
                </Box>
              )}
            </Box>
            <Box>
              <TextField
                sx={{ my: 3 }}
                fullWidth
                label="Email"
                placeholder="e.g. j.doe@example.com"
                onChange={(e) => handleInput(e, "email")}
              />
              <TextField
                sx={{ mb: 1 }}
                fullWidth
                label="Password"
                onChange={(e) => handleInput(e, "password")}
                type={showPw ? "text" : "password"}
                placeholder="**********"
                slotProps={{
                  input: {
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton onClick={toggleShowPw}>
                          <Icon
                            icon={
                              showPw ? "mdi:eye-outline" : "mdi:eye-off-outline"
                            }
                          />
                        </IconButton>
                      </InputAdornment>
                    ),
                  },
                }}
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                mb: 3,
              }}
            >
              <FormGroup>
                <FormControlLabel
                  label={<Typography variant="body2">Remember me</Typography>}
                  control={<Checkbox size="small" />}
                ></FormControlLabel>
              </FormGroup>
              <Link target="_blank" href="https://youtube.com">
                <Typography variant="body2" color="primary.dark">
                  Forgot password?
                </Typography>
              </Link>
            </Box>
            <Box>
              <Button fullWidth sx={{ py: 1.3 }} type="submit">
                Login
              </Button>
            </Box>
          </form>
          <Box sx={{}} textAlign="center">
            <Divider sx={{ opacity: 1, mb: 2, mt: 7 }}></Divider>
            <Box
              sx={{
                display: "flex", // Flexbox aktivieren
                justifyContent: "center", // Zentrieren der Inhalte
                alignItems: "center", // Vertikale Ausrichtung
                gap: 1, // Abstand zwischen den Elementen
              }}
            >
              <Typography variant="body2" color="text.secondary">
                Don't have an account?
              </Typography>
              <Link
                sx={{ cursor: "pointer" }}
                onClick={() => router.push("/register")}
                underline="hover"
              >
                <Typography variant="body2" color="primary">
                  Sign up
                </Typography>
              </Link>
            </Box>
          </Box>
        </Box>
      </Grid>
      <Grid
        size={{ sm: 12, md: 6 }}
        sx={{
          height: "100vh",
          display: { xs: "none", md: "block" },
        }}
      >
        <Box
          sx={{
            width: "100%",
            backgroundColor: colors.indigo[200],
            px: 8,
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image src={img} alt="image" layout="responsive" />
        </Box>
      </Grid>
    </Grid>
  );
};

export default page;
