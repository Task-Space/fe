import { Box, Button } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { teamApi } from "../../../apis";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import EditTeam from "./EditTeam";
import Grid from "@mui/material/Grid2";
import CreateTeam from "./CreateTeam";

const Teams = () => {
  const { data: teamDatas } = useQuery({
    queryKey: ["teams"],
    queryFn: () => teamApi.getTeams()
  });

  const columns: GridColDef[] = [
    {
      field: "logo",
      headerName: "",
      width: 70,
      filterable: true,
      disableColumnMenu: true,
      headerAlign: "center",
      renderCell: (params) => (
        <Box
          component={"img"}
          src={params.row.logo}
          sx={{ width: 50, height: 50, borderRadius: 1 }}
        />
      )
    },
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
      field: "email",
      headerName: "Email",
      width: 250,
      filterable: true,
      disableColumnMenu: true,
      headerAlign: "center"
    },
    {
      field: "contact",
      headerName: "Contact",
      width: 120,
      filterable: true,
      disableColumnMenu: true,
      headerAlign: "center"
    },

    {
      field: "size",
      headerName: "Size",
      minWidth: 50,
      filterable: true,
      disableColumnMenu: true,
      headerAlign: "center"
    },
    {
      field: "action",
      headerName: "Action",
      minWidth: 50,
      sortable: false,
      filterable: false,
      disableColumnMenu: true,
      headerAlign: "center",
      renderCell: (params) => (
        <>
          <EditTeam team={params.row} />
        </>
      )
    }
  ];

  return (
    <Box display={"flex"} flexDirection={"column"} padding={3} gap={2}>
      <Grid display={"flex"} justifyContent={"flex-end"}>
        <CreateTeam />
      </Grid>
      <DataGrid
        rows={teamDatas?.data.data}
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
    </Box>
  );
};

export default Teams;
