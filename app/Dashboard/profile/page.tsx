"use client";

import {
  Avatar,
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Grid2,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

const Data = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    receiveEmails: "false",
  });

  const handleFormChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: name === "receiveEmails" ? checked : value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <div className="ml-[5rem]">
      <h1>Profile</h1>
      <Box>
        <Typography variant={"h4"} sx={{ paddingBottom: "4" }}>
          Welcome to your profile
        </Typography>

        <Paper sx={{ padding: "1rem 2rem" }}>
          <Grid2 container justifyContent="center">
            <Grid2 sx={{ width: { xs: "12", sm: "8", md: "6" } }}>
              <Box display="flex" flexDirection="column" alignItems="center">
                <Avatar
                  sx={{
                    height: "100",
                    width: "100",
                    marginBottom: 2,
                  }}
                />
              </Box>
              <form
                onSubmit={handleSubmit}
                style={{ maxWidth: 600, margin: "0 auto" }}
              >
                <Grid2 container spacing={3}>
                  <Grid2 sx={{ width: { xs: "12", sm: "6" } }}>
                    <TextField
                      required
                      fullWidth
                      label="First Name"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleFormChange}
                    />
                  </Grid2>
                  <Grid2 sx={{ width: { xs: "12", sm: "6" } }}>
                    <TextField
                      required
                      fullWidth
                      label="Last Name"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleFormChange}
                    />
                  </Grid2>

                  <Grid2 sx={{ width: { xs: "12" } }}>
                    <TextField
                      required
                      fullWidth
                      type="email"
                      label="Email"
                      name="email"
                      value={formData.email}
                      onChange={handleFormChange}
                    />
                  </Grid2>

                  <Grid2 sx={{ width: { xs: "12" } }}>
                    <TextField
                      required
                      fullWidth
                      type="password"
                      label="Password"
                      name="password"
                      value={formData.password}
                      onChange={handleFormChange}
                    />
                  </Grid2>
                  <Grid2 sx={{ width: { xs: "12" } }}>
                    <TextField
                      required
                      fullWidth
                      type="password"
                      label="Confirm Password"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleFormChange}
                    />
                  </Grid2>
                  <Grid2 sx={{ width: { xs: "12" } }}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          name="receiveEmails"
                          checked={false}
                          onChange={handleFormChange}
                          color="primary"
                        />
                      }
                      label="Receive sales analytics emails"
                    />
                  </Grid2>
                  <Grid2 sx={{ width: { xs: "12" } }}>
                    <Button type="submit" variant="contained" color="primary">
                      Save Changes
                    </Button>
                  </Grid2>
                </Grid2>
              </form>
            </Grid2>
          </Grid2>
        </Paper>
      </Box>
    </div>
  );
};

export default Data;
