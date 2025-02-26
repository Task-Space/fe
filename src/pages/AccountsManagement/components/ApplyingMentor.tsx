import { Button } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useQuery } from "@tanstack/react-query";
import { identityApi } from "../../../apis";
import AcceptDenyApplying from "./AcceptDenyApplying";

const ApplyingMentor = () => {
  const columns: GridColDef[] = [
    {
      field: "id",
      headerName: "ID",
      width: 50,
      filterable: false,
      disableColumnMenu: true,
      headerAlign: "center"
    },
    {
      field: "firstName",
      headerName: "First Name",
      minWidth: 120,
      filterable: false,
      disableColumnMenu: true,
      headerAlign: "center"
    },
    {
      field: "lastName",
      headerName: "Last Name",
      minWidth: 100,
      filterable: true,
      disableColumnMenu: true,
      headerAlign: "center"
    },
    {
      field: "email",
      headerName: "Email",
      minWidth: 230,
      filterable: true,
      disableColumnMenu: true,
      headerAlign: "center"
    },
    {
      field: "phone",
      headerName: "Phone",
      minWidth: 110,
      filterable: false,
      disableColumnMenu: true,
      headerAlign: "center"
    },
    {
      field: "userDomains",
      headerName: "Domains",
      minWidth: 125,
      filterable: true,
      disableColumnMenu: true,
      headerAlign: "center",
      renderCell: (params) => {
        return params.value
          .map((domain: { name: string }) => domain.name)
          .join(", ");
      }
    },
    {
      field: "applyCount",
      headerName: "Apply Count",
      width: 120,
      filterable: true,
      disableColumnMenu: true,
      headerAlign: "center"
    },
    {
      field: "cvName",
      headerName: "CV Name",
      minWidth: 200,
      filterable: true,
      disableColumnMenu: true,
      headerAlign: "center"
    },
    {
      field: "cvLink",
      headerName: "CV",
      width: 120,
      filterable: true,
      disableColumnMenu: true,
      headerAlign: "center",
      renderCell: (params) => (
        <Button
          variant="contained"
          color="primary"
          size="small"
          onClick={() => {
            const link = document.createElement("a");
            link.href = params.value as string; // Đường dẫn file
            link.download = ""; // Trình duyệt sẽ tải file thay vì mở
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
          }}
        >
          View
        </Button>
      )
    },
    {
      field: "action",
      headerName: "Action",
      sortable: false,
      filterable: false,
      disableColumnMenu: true,
      headerAlign: "center",
      renderCell: (params) => <AcceptDenyApplying userId={params.row.id} />
    }
  ];

  const { data } = useQuery({
    queryKey: ["getApplyingMentor"],
    queryFn: () => identityApi.getApplyingMentor()
  });

  return (
    <DataGrid
      rows={data?.data.data || []}
      columns={columns}
      initialState={{
        pagination: {
          paginationModel: {
            pageSize: 10
          }
        }
      }}
      pageSizeOptions={[5]}
      disableColumnResize
      disableRowSelectionOnClick
    />
  );
};

export default ApplyingMentor;
