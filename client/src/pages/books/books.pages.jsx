import React, { useState } from "react";
import styled from "styled-components";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import CancelRoundedIcon from "@mui/icons-material/CancelRounded";
import { Box } from "@mui/system";
export default function InputWithIcon() {
  const [value, setValue] = useState("");

  return (
    <SearchContainer
      sx={{
        "& .MuiTextField-root": { m: 1, width: "100ch" },
      }}
    >
      <TextField
        placeholder="Search books author, title, isbn"
        type="text"
        variant="standard"
        fullWidth
        onChange={(e) => setValue(e.target.value)}
        value={value}
        InputProps={{
          endAdornment: value && (
            <IconButton aria-label="toggle password visibility" onClick={() => setValue("")}>
              <CancelRoundedIcon />
            </IconButton>
          ),
        }}
      />
    </SearchContainer>
  );
}

const SearchContainer = styled(Box)`
  display: flex;
  justify-content: center;
  padding: 20px 10px;
`;
