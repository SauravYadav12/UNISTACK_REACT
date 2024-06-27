import { Box, Grid } from '@mui/material';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { useDemoData } from '@mui/x-data-grid-generator';
import { ReactElement } from 'react';
import BasicCard from '../../components/card/Card';

interface CustomCard {
    color: string;
    title: string;
    count: number;
    // icon: ReactElement;
    titleColor: string;
  }
const VISIBLE_FIELDS = ['name', 'rating', 'country', 'dateCreated', 'isAdmin'];
const cardObject: CustomCard[] = [
    {
      color: "#ECF2FF",
      title: "Users",
      count: 20163,
    //   icon: <LeaderboardIcon fontSize="large" style={{ color: "#5D87FF" }} />,
      titleColor: "#5D87FF",
    },
    {
      color: "#FDF4E5",
      title: "Active",
      count: 2245,
    //   icon: <InterpreterModeIcon fontSize="large" style={{ color: "#FFAE1F" }} />,
      titleColor: "#FFAE1F",
    },
    {
      color: "#E8F7FF",
      title: "Inactive",
      count: 1315,
    //   icon: <Face6Icon fontSize="large" style={{ color: "#49BEFF" }} />,
      titleColor: "#49BEFF",
    },
    {
      color: "#FCEDE8",
      title: "Premium   ",
      count: 90,
    //   icon: <SummarizeIcon fontSize="large" style={{ color: "#FA896B" }} />,
      titleColor: "#FA896B",
    },
  ];
function UserManagement() {
    const { data } = useDemoData({
        dataSet: 'Employee',
        visibleFields: VISIBLE_FIELDS,
        rowLength: 100,
      });

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
        <Box sx={{marginRight:"25px"}}>
            <div style={{ height: 400, width: '100%', margin:"25px 0 0 0"}}>
            <DataGrid {...data} slots={{ toolbar: GridToolbar }} paginationModel={{page:0, pageSize:25}}/>
            </div>
        </Box>
        </>
      );
}

export default UserManagement