import { Box, Button, Chip, Tab, Tabs, Typography } from "@mui/material";
import { useState } from "react";
import { CustomTabPanel } from "../../components";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { IProject, PROJECT_STATUS } from "../../types/project";
import { useNavigate } from "react-router-dom";
import { useQueries } from "@tanstack/react-query";
import { projectApi } from "../../apis";
import VisibilityIcon from "@mui/icons-material/Visibility";
import AcceptRejectProject from "./components/AcceptRejectProject";

const ProjectManagement = () => {
  const [value, setValue] = useState(0);
  const nav = useNavigate();

  const [{ data: projectsData }] = useQueries({
    queries: [
      {
        queryKey: ["projects"],
        queryFn: () => projectApi.getProject({})
      }
    ]
  });

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const columns: GridColDef[] = [
    {
      field: "name",
      headerName: "Name",
      minWidth: 120,
      filterable: false,
      disableColumnMenu: true,
      headerAlign: "center"
    },
    {
      field: "description",
      headerName: "Description",
      minWidth: 250,
      filterable: true,
      disableColumnMenu: true,
      headerAlign: "center"
    },
    {
      field: "domains",
      headerName: "Domains",
      minWidth: 500,
      filterable: true,
      disableColumnMenu: true,
      headerAlign: "center",
      renderCell: (params) => (
        <>
          {(params.row.domainResponses as IProject["domainResponses"]).map(
            (item) => (
              <Chip key={item.id} label={item.name} />
            )
          )}
        </>
      )
    },
    {
      field: "teamName",
      headerName: "Team Name",
      width: 150,
      filterable: true,
      disableColumnMenu: true,
      headerAlign: "center",
      renderCell: (params) => <p>{params.row.team.teamDetails.name}</p>
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      sortable: false,
      filterable: false,
      disableColumnMenu: true,
      headerAlign: "center",
      renderCell: (params) => (
        <>
          <Button
            size="small"
            onClick={() => nav(`/project/${params.row.id}`)}
            variant="text"
          >
            <VisibilityIcon />
          </Button>
          <AcceptRejectProject id={params.row.id} />
        </>
      )
    }
  ];

  return (
    <Box sx={{ width: "100%" }}>
      <Typography variant="h4" fontWeight={600}>
        Project List
      </Typography>
      <Box mt={2} sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs value={value} onChange={handleChange} aria-label="accounts">
          <Tab label={<Typography>Đang hoạt động</Typography>} />
          <Tab label={<Typography>Chờ xét duyệt</Typography>} />
          <Tab label={<Typography>Từ chối</Typography>} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} padding={"2rem 0"} index={0}>
        <DataGrid
          sx={{
            marginTop: "1rem"
          }}
          rows={projectsData?.data.data.filter(
            (item) => item.status === PROJECT_STATUS.APPROVE
          )}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 10
              }
            }
          }}
          pageSizeOptions={[5]}
          disableRowSelectionOnClick
        />
      </CustomTabPanel>
      <CustomTabPanel value={value} padding={"2rem 0"} index={1}>
        <DataGrid
          sx={{
            marginTop: "1rem"
          }}
          rows={projectsData?.data.data.filter(
            (item) => item.status === PROJECT_STATUS.PENDING && item.isPublish
          )}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 10
              }
            }
          }}
          pageSizeOptions={[5]}
          disableRowSelectionOnClick
        />
      </CustomTabPanel>
      <CustomTabPanel value={value} padding={"2rem 0"} index={2}>
        <DataGrid
          sx={{
            marginTop: "1rem"
          }}
          rows={projectsData?.data.data.filter(
            (item) => item.status === PROJECT_STATUS.REJECT
          )}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 10
              }
            }
          }}
          pageSizeOptions={[5]}
          disableRowSelectionOnClick
        />
      </CustomTabPanel>
    </Box>
  );
};

export default ProjectManagement;
