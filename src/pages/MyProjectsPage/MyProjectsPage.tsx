import { useQueries, useQuery } from "@tanstack/react-query";
import CreateNewProject from "./components/CreateNewProject";
import projectApi from "../../apis/project/project.api";
import { Box, Button, Chip, Tab, Tabs } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid2";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { CustomTabPanel } from "../../components";
import { useState } from "react";
import { IProject, PROJECT_STATUS } from "../../types/project";
import EditProjectApply from "./components/EditProjectApply";

const MyProjectsPage = () => {
  const nav = useNavigate();
  const [{ data: projectApplyData }, { data: myProjectData }] = useQueries({
    queries: [
      {
        queryKey: ["projectsApply"],
        queryFn: () => projectApi.getProject({ isApply: true })
      },
      {
        queryKey: ["myProjects"],
        queryFn: () => projectApi.getMyProject()
      }
    ]
  });

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
      maxWidth: 80,
      sortable: false,
      filterable: false,
      disableColumnMenu: true,
      headerAlign: "center",
      renderCell: (params) => (
        <>
          {params.row.status !== PROJECT_STATUS.PENDING && (
            <Button
              onClick={() => nav(`/project/${params.row.id}`)}
              variant="contained"
            >
              View
            </Button>
          )}
          {params.row.isPublish === false && (
            <EditProjectApply project={params.row} />
          )}
        </>
      )
    }
  ];

  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      maxWidth={"1200px"}
      margin="3rem auto"
    >
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Đang hoạt động" />
          <Tab label="Đã gửi yêu cầu" />
          <Tab label="Bị từ chối" />
          <Tab label="Bản nháp" />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0} padding={0}>
        <DataGrid
          sx={{
            marginTop: "1rem"
          }}
          rows={myProjectData?.data.data}
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
      <CustomTabPanel value={value} index={1} padding={0}>
        <DataGrid
          sx={{
            marginTop: "1rem"
          }}
          rows={projectApplyData?.data.data.filter(
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
      <CustomTabPanel value={value} index={2} padding={0}>
        <DataGrid
          sx={{
            marginTop: "1rem"
          }}
          rows={projectApplyData?.data.data.filter(
            (item) => item.status === PROJECT_STATUS.REJECT && item.isPublish
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
      <CustomTabPanel value={value} index={3} padding={0}>
        <DataGrid
          sx={{
            marginTop: "1rem"
          }}
          rows={projectApplyData?.data.data.filter(
            (item) => item.isPublish === false
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
      <Grid mt={3}>
        <CreateNewProject />
      </Grid>
    </Box>
  );
};

export default MyProjectsPage;
