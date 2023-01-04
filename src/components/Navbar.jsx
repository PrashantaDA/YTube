import { Stack } from "@mui/material";
import { Link } from "react-router-dom";

import { logo } from "../utils/constants";
import { SearchBar } from "./";

const Navbar = () => (
     <Stack direction="row" alignItems="center" p={2} sx={{ position: "sticky", background: '#111', top: 0, justifyContent: "space-between", zIndex: '999', flexWrap: 'wrap' }}>
          <Link to="/" style={{ display: "flex", alignItems: "center" }}>
               <img src={logo} alt="logo" height={45} />
               <span style={{ color: '#f0f8ff', fontSize: "24px", marginLeft: '0.4rem', fontWeight: 'bold' }}>
                    YTube
               </span>
          </Link>
          <SearchBar />
     </Stack>
);

export default Navbar;