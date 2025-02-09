import { InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchInput = () => {
  return (
    <TextField
      slotProps={{
        input: {
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          )
        }
      }}
      variant="outlined"
      size="small"
      placeholder="Search..."
      sx={{ width: "60%", borderRadius: "2rem" }}
    />
  );
};

export default SearchInput;
