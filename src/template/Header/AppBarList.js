import * as React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
function AppBarList() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        padding: '13px',
        direction: 'rtl'
      }}
    >
      <Button>
        <Link to={"/followPlan"}>תוכנית ניטור </Link>
      </Button>
      <Button>
        <Link to={"/home"}>בית</Link>
      </Button>
      <Button>
        <Link to={"/data"}>נתונים</Link>
      </Button>
      <Button>
        <Link to={"/charges"}>חיובים</Link>
      </Button>
      <Button>
        <Link to={"/Orders"}>הזמנות</Link>
      </Button>
      <Button>
        <Link to={"/SamplingResults"}>תוצאות הדיגום</Link>
      </Button>
      <Button>
        <Link to={"/CalculationOfSampling"}>חישוב תוצאות הדיגום</Link>
      </Button>





    </Box>

  );
}

export default AppBarList;
