import * as React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Tablevetri } from "./axios";
import { Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add" 
import Nav from './nav.js';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#32348c", // Change background color here
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
 
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));


export default function Tvetri() {
 
 
  const navigate = useNavigate();


  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await Tablevetri();
        console.log("Fetched data:", res); 
        setData(res.message); 
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };


    fetchData();
  }, []);


  
  return (
    <div style={{paddingTop:'100px'}} >
      < Nav/>
      <div className="mt-5">
        <div style={{padding:'5px'}}  >
          <TableContainer component={Paper}>
          <h3 style={{ textAlign: "center", width: "100%", backgroundColor: "white", paddingLeft: "40px", paddingRight: "20px",color:'#32348c' }}>Your Report</h3>
            <Table  sx={{ minWidth: 700 }} aria-label="sticky table" >
              <TableHead>
                <TableRow>
                  <StyledTableCell>Academic Year</StyledTableCell>
                  <StyledTableCell>semester</StyledTableCell>
                  <StyledTableCell>Name Of The Faculty</StyledTableCell>
                  <StyledTableCell>Name Of The Student</StyledTableCell>
                  <StyledTableCell>Paper Presentation</StyledTableCell>
                  <StyledTableCell>Date</StyledTableCell>
                  <StyledTableCell>Number Of Beneficiaries</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((row, index) => (
                  <StyledTableRow key={index}>
                    <StyledTableCell>{row.academic_year}</StyledTableCell>
                    <StyledTableCell>{row.semester}</StyledTableCell>
                    <StyledTableCell>{row.name_of_the_faculty}</StyledTableCell>
                    <StyledTableCell>{row.name_of_the_student}</StyledTableCell>
                    <StyledTableCell>{row.paper_presentation}</StyledTableCell>
                    <StyledTableCell>{row.date_of_contest}</StyledTableCell>
                    <StyledTableCell>{row.no_of_beneficiaries}</StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
        <div style={{ display: "flex", justifyContent: "end",margin:"20px" }}>
        <Fab
          color="primary"
          aria-label="add"
          onClick={() => navigate("/vetri")}
          style={{ position: "fixed", bottom: "20px", right: "20px", backgroundColor: "#32348c" }} // Change background color here
        >
          <AddIcon />
        </Fab>
        </div>
      </div>
    </div>
  );
}