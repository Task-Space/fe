import { Button } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

const data = [
  {
    id: "6d0d9a9e-24d5-483d-a17e-b24482d2e943",
    firstName: "Maegan",
    lastName: "Trill",
    email: "mtrill0@behance.net",
    phoneNumber: "9125207452",
    studentCode: "13-7503513",
    seasonCode: "96-3093331",
    universityId: "Aikoku Gakuen University",
    joinDateUni: "2025-01-17T23:00:48Z"
  },
  {
    id: "25fe9375-e491-4084-9d8f-5fd4d5cdeb6b",
    firstName: "Letty",
    lastName: "Iscowitz",
    email: "liscowitz1@nationalgeographic.com",
    phoneNumber: "1895198870",
    studentCode: "04-3984198",
    seasonCode: "32-7612988",
    universityId: "State University of New York Health Sience Centre Syracuse",
    joinDateUni: "2025-01-23T15:52:05Z"
  },
  {
    id: "ab60cec6-fa10-4876-aa40-f4efb6b23814",
    firstName: "Vittoria",
    lastName: "Remer",
    email: "vremer2@posterous.com",
    phoneNumber: "4392223790",
    studentCode: "00-6702854",
    seasonCode: "22-2219023",
    universityId: "Birzeit University",
    joinDateUni: "2024-09-06T03:35:17Z"
  },
  {
    id: "2f021ac2-a8ae-4914-986b-6179c144e3d0",
    firstName: "Yank",
    lastName: "Oakes",
    email: "yoakes3@virginia.edu",
    phoneNumber: "4155807802",
    studentCode: "19-9875137",
    seasonCode: "85-5472585",
    universityId: "Yazd University",
    joinDateUni: "2024-03-13T17:52:16Z"
  },
  {
    id: "123b1ffe-bb0c-42a8-8006-afbf157b2182",
    firstName: "Gilly",
    lastName: "Arniz",
    email: "garniz4@mapy.cz",
    phoneNumber: "1559636084",
    studentCode: "69-8122533",
    seasonCode: "28-5983788",
    universityId: "Guizhou Normal University",
    joinDateUni: "2025-02-13T02:37:04Z"
  },
  {
    id: "9b8f778e-74e2-40c4-9ede-d7ac6eec8599",
    firstName: "Torrie",
    lastName: "Curgenuer",
    email: "tcurgenuer5@gmpg.org",
    phoneNumber: "2313649331",
    studentCode: "01-4840769",
    seasonCode: "04-6408447",
    universityId: "American University of Antigua",
    joinDateUni: "2024-09-30T05:17:59Z"
  },
  {
    id: "13eff39a-aeeb-4c27-ac7c-256702513d08",
    firstName: "Dionisio",
    lastName: "Cleaves",
    email: "dcleaves6@e-recht24.de",
    phoneNumber: "2369206506",
    studentCode: "54-7755672",
    seasonCode: "06-2786480",
    universityId: "Appalachian Bible College",
    joinDateUni: "2024-05-12T09:56:12Z"
  },
  {
    id: "cbb95e0a-f908-4d82-a73d-d66d9f4d5dd3",
    firstName: "Barrett",
    lastName: "Pimmocke",
    email: "bpimmocke7@weather.com",
    phoneNumber: "1286804732",
    studentCode: "82-0106159",
    seasonCode: "84-9648613",
    universityId: "Reformed Theological Academy of Debrecen",
    joinDateUni: "2024-05-05T17:40:50Z"
  },
  {
    id: "1034687d-6601-46ef-9875-6aaef9374ec5",
    firstName: "Leanora",
    lastName: "Toms",
    email: "ltoms8@illinois.edu",
    phoneNumber: "1988392388",
    studentCode: "70-5151197",
    seasonCode: "96-9345327",
    universityId: "Lock Haven University of Pennsylvania",
    joinDateUni: "2024-04-20T13:23:10Z"
  },
  {
    id: "a791e931-57ad-43e0-842a-9a6234a54811",
    firstName: "Sascha",
    lastName: "De Mars",
    email: "sdemars9@ameblo.jp",
    phoneNumber: "4496338768",
    studentCode: "97-5419432",
    seasonCode: "35-4616939",
    universityId: "Monash University",
    joinDateUni: "2024-11-22T16:16:43Z"
  },
  {
    id: "c7031dfd-8578-424e-9995-c482f0b73223",
    firstName: "Fabiano",
    lastName: "Kopfen",
    email: "fkopfena@slashdot.org",
    phoneNumber: "8501477250",
    studentCode: "58-2430441",
    seasonCode: "58-4401403",
    universityId: "Stratford College London",
    joinDateUni: "2024-03-11T12:09:39Z"
  }
];

const MentorTab = () => {
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
      field: "phoneNumber",
      headerName: "Phone",
      minWidth: 110,
      filterable: false,
      disableColumnMenu: true,
      headerAlign: "center"
    },
    {
      field: "universityId",
      headerName: "University",
      minWidth: 200,
      filterable: true,
      disableColumnMenu: true,
      headerAlign: "center"
    },
    {
      field: "studentCode",
      headerName: "Student Code",
      width: 120,
      filterable: true,
      disableColumnMenu: true,
      headerAlign: "center"
    },
    {
      field: "seasonCode",
      headerName: "Season Code",
      width: 120,
      filterable: true,
      disableColumnMenu: true,
      headerAlign: "center"
    },
    {
      field: "joinDateUni",
      headerName: "Uni Join Date",
      minWidth: 125,
      filterable: true,
      disableColumnMenu: true,
      headerAlign: "center",
      renderCell: (params) => {
        return new Date(params.value as string).toLocaleDateString();
      }
    },
    {
      field: "action",
      headerName: "Action",
      sortable: false,
      filterable: false,
      disableColumnMenu: true,
      headerAlign: "center",
      renderCell: () => (
        <Button variant="contained" color="primary" size="small">
          Edit
        </Button>
      )
    }
  ];
  return (
    <DataGrid
      rows={data}
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
  );
};

export default MentorTab;
