import { Box, Tab, Tabs, Typography } from "@mui/material";
import { CustomTabPanel } from "../../components";
import { useState } from "react";
import StudentTab from "./components/StudentTab";
import MentorTab from "./components/MentorTab";
import ApplyingMentor from "./components/ApplyingMentor";

const AccountsManagement = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Typography variant="h4" fontWeight={600}>
        Account List
      </Typography>
      <Box mt={2} sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs value={value} onChange={handleChange} aria-label="accounts">
          <Tab label={<Typography>Student</Typography>} />
          <Tab label={<Typography>Mentor</Typography>} />
          <Tab label={<Typography>Applying Mentor</Typography>} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} padding={"2rem 0"} index={0}>
        <StudentTab />
      </CustomTabPanel>
      <CustomTabPanel value={value} padding={"2rem 0"} index={1}>
        <MentorTab />
      </CustomTabPanel>
      <CustomTabPanel value={value} padding={"2rem 0"} index={2}>
        <ApplyingMentor />
      </CustomTabPanel>
    </Box>
  );
};

export default AccountsManagement;
