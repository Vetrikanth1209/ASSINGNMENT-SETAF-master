import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { callTable } from "./axios.js";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import Nav from './nav.js';
import { Dharun } from "./dharun.js";

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
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function Tdharun  ()  {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await callTable();
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
        <div style={{ display: "flex", justifyContent: "space-between" }}>
  


        </div>
        <Box p={2}>
          <TableContainer component={Paper}>
          <h3 style={{ textAlign: "center", width: "100%", backgroundColor: "white", paddingLeft: "40px", paddingRight: "20px",color:'#32348c' }}>Your Report</h3>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>Academic Year</StyledTableCell>
                  <StyledTableCell>Semester</StyledTableCell>
                  <StyledTableCell>Faculty Coordinator</StyledTableCell>
                  <StyledTableCell>Activity</StyledTableCell>
                  <StyledTableCell>MoU Signed Industry/Institution</StyledTableCell>
                  <StyledTableCell>Activity Title</StyledTableCell>
                  <StyledTableCell>Duration From</StyledTableCell>
                  <StyledTableCell>Duration To</StyledTableCell>
                  <StyledTableCell>Resource Person</StyledTableCell>
                  <StyledTableCell>Contact Details of Resource Person</StyledTableCell>
                  <StyledTableCell>Designation of Resource Person</StyledTableCell>
                  <StyledTableCell>Organization Details of Resource Person</StyledTableCell>
                  <StyledTableCell>No. of Beneficiaries</StyledTableCell>
                  <StyledTableCell>Proof PDF</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((row, index) => (
                  <StyledTableRow key={index}>
                    <StyledTableCell>{row.academic_year}</StyledTableCell>
                    <StyledTableCell>{row.semester}</StyledTableCell>
                    <StyledTableCell>{row.name_of_the_faculty_coordinator}</StyledTableCell>
                    <StyledTableCell>{row.name_of_the_activity}</StyledTableCell>
                    <StyledTableCell>{row.name_of_mou_signed_industryinstitution}</StyledTableCell>
                    <StyledTableCell>{row.title_of_the_activity}</StyledTableCell>
                    <StyledTableCell>{row.duration_from}</StyledTableCell>
                    <StyledTableCell>{row.duration_to}</StyledTableCell>
                    <StyledTableCell>{row.name_of_resource_person}</StyledTableCell>
                    <StyledTableCell>{row.contact_details_of_resource_person}</StyledTableCell>
                    <StyledTableCell>{row.designation_of_resource_person}</StyledTableCell>
                    <StyledTableCell>{row.organization_details_of_resource_person}</StyledTableCell>
                    <StyledTableCell>{row.no_of_beneficiaries}</StyledTableCell>
                    <StyledTableCell>{row.enclose_proof_pdf}</StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
        <Fab
          color="primary"
          aria-label="add"
          onClick={() => navigate("/dharun")}
          style={{ position: "fixed", bottom: "20px", right: "20px", backgroundColor: "#32348c" }} // Change background color here
        >
          <AddIcon />
        </Fab>
      </div>
    </div>
  );
};


