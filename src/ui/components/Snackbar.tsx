"use client";
import { useSnackbar } from "notistack";
import { useEffect, useState } from "react";

interface SnackbarProps {}

const Snackbar: React.FC<SnackbarProps> = ({}) => {
  const { enqueueSnackbar } = useSnackbar();
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    const snackbarProps = JSON.parse(localStorage.getItem("snackbar"));
    if (snackbarProps) {
      enqueueSnackbar({
        message: snackbarProps.message,
        anchorOrigin: snackbarProps.anchorOrigin,
        variant: snackbarProps.variant,
        autoHideDuration: snackbarProps.autoHideDuration,
      });

      localStorage.removeItem("snackbar");
    }
  }, []);

  return null;
};

export default Snackbar;
