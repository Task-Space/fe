import { Box, Button, FormControl, FormLabel, TextField } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { useState } from "react";
import { useAppContext } from "../../../contexts/AppContext";
import { useMutation } from "@tanstack/react-query";
import { identityApi, UpdateMeReqType } from "../../../apis";
import { useForm } from "react-hook-form";
import { TextFieldControl } from "../../../components";

const Overview = () => {
  const [isEditing, setIsEditing] = useState(false);
  const { profile } = useAppContext();

  const { register, formState } = useForm<UpdateMeReqType>();

  const updateMe = useMutation({
    mutationFn: (data: UpdateMeReqType) => identityApi.udateMe(data)
  });

  return (
    <Box padding={3} gap={2}>
      <Grid container>
        <Grid container size={{ lg: 3 }}>
          <Grid>
            <img src={profile?.imageUrl} />
          </Grid>
        </Grid>
        <Grid
          size={{ lg: 9 }}
          container
          display={"flex"}
          flexDirection={"column"}
          gap={2}
        >
          <Grid container spacing={2}>
            <Grid size={{ lg: 6 }}>
              <FormControl fullWidth={true}>
                <FormLabel htmlFor="firstName">First Name</FormLabel>
                <TextFieldControl<UpdateMeReqType>
                  register={register}
                  required
                  fullWidth
                  name="firstName"
                  size={"small"}
                  id="firstName"
                  autoComplete="firstName"
                  variant="outlined"
                  error={formState.errors.firstName}
                />
              </FormControl>
            </Grid>
            <Grid size={{ lg: 6 }}>
              <FormControl fullWidth={true}>
                <FormLabel htmlFor="lastName">Last Name</FormLabel>
                <TextFieldControl<UpdateMeReqType>
                  register={register}
                  required
                  fullWidth
                  name="lastName"
                  size={"small"}
                  id="lastName"
                  autoComplete="lastName"
                  variant="outlined"
                  error={formState.errors.lastName}
                />
              </FormControl>
            </Grid>
          </Grid>
          <Grid size={{ lg: 12 }}>
            <FormControl fullWidth={true}>
              <FormLabel htmlFor="lastName">Email</FormLabel>
              <TextField
                required
                fullWidth
                variant="outlined"
                value={profile?.email}
                disabled
              />
            </FormControl>
          </Grid>
          <Grid size={{ lg: 12 }}>
            <FormControl fullWidth={true}>
              <FormLabel htmlFor="phoneNumber">Phone Number</FormLabel>
              <TextFieldControl<UpdateMeReqType>
                register={register}
                required
                fullWidth
                name="phoneNumber"
                size={"small"}
                id="phoneNumber"
                autoComplete="phoneNumber"
                variant="outlined"
                error={formState.errors.phoneNumber}
              />
            </FormControl>
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
        </Grid>
      </Grid>
    </Box>
  );
};

export default Overview;
