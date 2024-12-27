"use client";
import ThemeProvider from "@/provider/ThemeProvider";
import { store } from "@/store/store";
import Snackbar from "@/ui/components/Snackbar";
import { SnackbarProvider } from "notistack";
import { Provider } from "react-redux";

interface layoutProps {}
const layout: React.FC<layoutProps> = ({ children }) => {
  return (
    <html>
      <body>
        <SnackbarProvider>
          <Provider store={store}>
            <Snackbar />
            <ThemeProvider>{children}</ThemeProvider>
          </Provider>
        </SnackbarProvider>
      </body>
    </html>
  );
};

export default layout;
