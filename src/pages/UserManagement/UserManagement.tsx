import { Box, Grid } from '@mui/material';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { useEffect, useState } from "react";
import BasicCard from "../../components/card/Card";
import { usersList } from "../../services/authApi";

interface CustomCard {
  color: string;
  title: string;
  count: number;
  // icon: ReactElement;
  titleColor: string;
}
const Columns = ["id", "firstName", "lastName", "email", "role", "active", "premium", "corpName", "createdAt", "updatedAt"];

function UserManagement() {
  const [users, setUsers] = useState([]);
  const [activeUser, setActiveUser ] = useState(0);
  const [inactiveUser, setInactiveUser] = useState(0);
  useEffect(() => {
    getUsersList();
  }, []);
  const cardObject: CustomCard[] = [
    {
      color: "#ECF2FF",
      title: "Users",
      count: users.length,
      //   icon: <LeaderboardIcon fontSize="large" style={{ color: "#5D87FF" }} />,
      titleColor: "#5D87FF"
    },
    {
      color: "#FDF4E5",
      title: "Active",
      count: activeUser,
      //   icon: <InterpreterModeIcon fontSize="large" style={{ color: "#FFAE1F" }} />,
      titleColor: "#FFAE1F"
    },
    {
      color: "#E8F7FF",
      title: "Inactive",
      count: inactiveUser,
      //   icon: <Face6Icon fontSize="large" style={{ color: "#49BEFF" }} />,
      titleColor: "#49BEFF"
    },
    {
      color: "#FCEDE8",
      title: "Premium   ",
      count: 90,
      //   icon: <SummarizeIcon fontSize="large" style={{ color: "#FA896B" }} />,
      titleColor: "#FA896B"
    }
  ];

  const getActiveUserCount = (users: any) => {
    const active = users.filter((user: any) => user.active === true )
    setActiveUser(active.length);
  }

  const getInActiveUserCount = (users: any) => {
    const inactive = users.filter((user: any) => user.active === false)
    setInactiveUser(inactive.length)
  }

  const getUsersList = async () => {
    const res = await usersList();
    setUsers(res.data?.users);
    getActiveUserCount(res.data?.users)
    getInActiveUserCount(res.data?.users)
  };

  const cardComponent = cardObject.map((card: any) => {
    return (
      <Grid key={card.title} item xs={12} sm={3} md={3} lg={3} xl={3}>
        <BasicCard color={card.color} title={card.title} count={card.count} icon={card.icon} titleColor={card.titleColor} />
      </Grid>
    );
  });

  return (
    <>
      <Grid container spacing={2} sx={{ width: "100%" }}>
        {cardComponent}
      </Grid>
      <Box sx={{ marginRight: "25px" }}>
        <div style={{ height: 400, width: "100%", margin: "25px 0 0 0" }}>
          <DataGrid
            rows={users}
            getRowId={(row: any) => row._id}
            columns={Columns.map((field) => ({
              field,
              headerName: field.charAt(0).toUpperCase() + field.slice(1), // Capitalize first letter
              width: 150 // Adjust width as needed
            }))}
            // disableColumnFilter
            slots={{ toolbar: GridToolbar }}
          />
        </div>
      </Box>
    </>
  );
}

export default UserManagement