import React, { useState } from "react";
import { Box, MenuItem, TextField } from "@mui/material";
import RenderImage from "../organisms/RenderImage";
import "./InputPage.css";
import { genders } from "../../utils/Constant";
import { Male, Female } from "../../utils/Constant";

function InputPage() {
  const [name, setName] = useState<string>();
  const [age, setAge] = useState<number>();
  const [gender, setGender] = useState<string>();

  const Icon =
    gender === "Male" ? (
      <img className="image-icon" src={Male} alt="Logo" height={"40px"} width={"40px"} />
    ) : (
      <img className="image-icon" src={Female} alt="Logo" height={"40px"} width={"40px"} />
    );
  return (
    <div>
      <div>
        <TextField
          className="field"
          label="Name"
          placeholder="Enter Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          margin={"normal"}
        ></TextField>
      </div>
      {name !== undefined ? (
        <div>
          <TextField
            className="field"
            label="Age"
            placeholder="Enter Your Age"
            type={"number"}
            value={age}
            onChange={(e) => setAge(parseInt(e.target.value))}
            margin={"normal"}
          ></TextField>
        </div>
      ) : null}
      <div>
      {gender !== undefined ? Icon : null}
      {age !== undefined ? (
        <TextField
          className="field"
          label="Gender"
          placeholder="Select Your Gender"
          select
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          margin={"normal"}
        >
          {genders.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
      ) : null}
      </div>
      <Box className="imagebox">
        {age !== undefined ? <RenderImage age={age} /> : null}
      </Box>
    </div>
  );
}

export default InputPage;
