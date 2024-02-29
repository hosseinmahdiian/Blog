import { createTheme } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: `"Vazir","Roboto","Arial"`,
    fontWeightLight: 300,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    fontWeightFat: 900,
  },
  direction:"rtl",
});

export default theme