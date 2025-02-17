import { Box, Button, TextField } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { useState } from "react";

const Overview = () => {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <Box display={"flex"} flexDirection={"column"} padding={3} gap={2}>
      <Grid container spacing={2}>
        <TextField label="First Name" />
        <TextField label="Last Name" />
      </Grid>
      <Grid>
        <TextField label="Email" />
      </Grid>
      <Grid>
        <TextField label="Address" />
      </Grid>
      <Grid>
        <TextField label="Contact Number" />
      </Grid>
      <Grid>
        <TextField label="Location" />
      </Grid>
      <Grid>
        {isEditing ? (
          <>
            <Button
              variant="contained"
              onClick={() => {
                setIsEditing(false);
              }}
            >
              Cancel
            </Button>
            <Button
              variant="contained"
              onClick={() => {
                setIsEditing(false);
              }}
            >
              Save
            </Button>
          </>
        ) : (
          <Button
            variant="contained"
            onClick={() => {
              setIsEditing(true);
            }}
          >
            Edit
          </Button>
        )}
      </Grid>
    </Box>
  );
};

export default Overview;
