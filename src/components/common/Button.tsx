import Button from "@mui/material/Button";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Link } from "react-router-dom";

export default function TextButtons() {
  return (
    <Link to="/datalist">
     
      <Button variant="contained">
        Go to the datalist
        <ArrowForwardIcon />
      </Button>
    </Link>
  );
}
