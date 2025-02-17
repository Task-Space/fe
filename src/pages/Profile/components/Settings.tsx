import { Box, Button, TextField, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { useState } from "react";

const Settings = () => {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <Box display={"flex"} flexDirection={"column"} padding={3} gap={2}>
      <Typography>Change password</Typography>
      <Grid>
        <TextField label="Old Password" />
      </Grid>
      <Grid>
        <TextField label="New Password" />
      </Grid>
      <Grid>
        <TextField label="Confirm Password" />
      </Grid>
      <Grid>
        <Button
          variant="contained"
          onClick={() => {
            setIsEditing(true);
          }}
        >
          Save
        </Button>
      </Grid>
    </Box>
  );
};

export default Settings;
