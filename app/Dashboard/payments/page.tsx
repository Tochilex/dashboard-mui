"use client";


import Box from "@mui/material/Box";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { CircularProgress } from "@mui/material";
// //import { getUsers } from "@/app/lib/actions/users";
// //import { useState } from "react";

// // import {getUsers} from "../../lib/actions/users"
// // import { Payment, columns } from "./columns";
// // import { DataTable } from "./data-table";

// // async function getData(): Promise<Payment[]> {
// //   return [
// //     {
// //       id: "728ed52f",
// //       amount: 100,
// //       status: "pending",
// //       email: "m@example.com",
// //     },
// //     {
// //       id: "728ed52f",
// //       amount: 100,
// //       status: "pending",
// //       email: "m@example.com",
// //     },
// //     {
// //       id: "728ed52f",
// //       amount: 100,
// //       status: "pending",
// //       email: "m@example.com",
// //     },
// //     // ...
// //   ];
// // }

// import * as React from "react";
// import Box from "@mui/material/Box";
// import { DataGrid, GridColDef } from "@mui/x-data-grid";

// const columns: GridColDef<(typeof rows)[number]>[] = [
//   { field: "id", headerName: "ID", width: 90 },
//   {
//     field: "firstName",
//     headerName: "First name",
//     width: 150,
//     editable: true,
//   },
//   {
//     field: "lastName",
//     headerName: "Last name",
//     width: 150,
//     editable: true,
//   },
//   {
//     field: "age",
//     headerName: "Age",
//     type: "number",
//     width: 110,
//     editable: true,
//   },
//   // {
//   //   field: "fullName",
//   //   headerName: "Full name",
//   //   description: "This column has a value getter and is not sortable.",
//   //   sortable: false,
//   //   width: 160,
//   //   valueGetter: (value, row) => `${row.firstName || ""} ${row.lastName || ""}`,
//   // },
// ];

// const rows = [{ id: "id", lastName: "name", firstName: "email", age: 14 }];

// export default async function DemoPage() {
//   //const [data, setData] = useState({});
//   // useEffect(() => {
//   //   getUsers().then((data: any) => {
//   //     if (data.error) {
//   //       return console.log(data.error);
//   //     }
//   //     setUsers(data);
//   //   });
//   // }, []);

//   async function getUsers() {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const data = await response.json();
//     //console.log(data);
//     return data;
//   }

//   const users = await getUsers();
//   return (
//     <div className="container mx-auto py-10">
//       <Box sx={{ height: 400, width: "100%", ml: "5rem" }}>
//         <DataGrid
//           rows={rows}
//           columns={columns}
//           initialState={{
//             pagination: {
//               paginationModel: {
//                 pageSize: 5,
//               },
//             },
//           }}
//           pageSizeOptions={[5]}
//           checkboxSelection
//           disableRowSelectionOnClick
//         />
//         <h1>Users</h1>
//         {/* {users.map((user: any) => {
//           return (
//             <div key={user.id}>
//               <h2>{user.name}</h2>
//               <p>{user.email}</p>
//               <p>{user.phone}</p>
//             </div>
//           );
//         })} */}
//       </Box>
//     </div>
//     // <div className="container mx-auto py-10">
//     //   <h1>Users</h1>
//     //   {users.map((user: any) => {
//     //     return (
//     //       <div key={user.id}>
//     //         <h2>{user.name}</h2>
//     //         <p>{user.email}</p>
//     //         <p>{user.phone}</p>
//     //       </div>

//     //     );
//     //   })}
//     //   {/* <DataTable columns={columns} data={data} /> */}
//     // </div>
//   );
// }

//import * as React, { useState, useEffect } from "react";



//import { Provider } from "@/app/Provider";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 90 },
  { field: "name", headerName: "Name", width: 150 },
  { field: "email", headerName: "Email", width: 200 },
  { field: "phone", headerName: "Phone", width: 200 },
  { field: "website", headerName: "Website", width: 200 },
  { field: "username", headerName: "Username", width: 200 },
  // Add more columns as needed based on your API response structure
];

export default function DemoPage() {
  //const [users, setUsers] = useState([]);
  //const [isLoading, setIsLoading] = useState(false); // Track loading state

  const {
    data: users,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["users"],
    queryFn: () =>
      fetch("https://jsonplaceholder.typicode.com/users").then((res) =>
        res.json()
      ),
    select: (data) => data || [],
  });

  useEffect(() => {
    if (isError) {
      toast.error("Error fetching users");
    }
  }, [isError]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     setIsLoading(true);
  //     try {
  //       const response = await fetch(
  //         "https://jsonplaceholder.typicode.com/users"
  //       );
  //       const data = await response.json();
  //       setUsers(data);
  //     } catch (error) {
  //       console.error("Error fetching users:", error);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   };

  //   fetchData();
  // }, []);

  return (
    <div className="container mx-auto py-10">
      {isLoading ? (
        <CircularProgress />
      ) : (
        <Box sx={{ height: 400, width: "100%", ml: "5rem" }}>
          <DataGrid
            rows={users}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 5,
                },
              },
            }}
            pageSizeOptions={[5]}
            checkboxSelection
            disableRowSelectionOnClick
          />
        </Box>
      )}
    </div>
  );
}
