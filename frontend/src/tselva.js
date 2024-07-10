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
import { Tableselva, Tablevetri } from "./axios";
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


export default function Tselva() {
 
 
  const navigate = useNavigate();


  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await Tableselva();
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
                  <StyledTableCell>Name of the Faculty coordinator</StyledTableCell>
                  <StyledTableCell>Designation</StyledTableCell>
                  <StyledTableCell>Name Of The Program</StyledTableCell>
                  <StyledTableCell>Title of the Program</StyledTableCell>
                  <StyledTableCell>Date From</StyledTableCell>
                  <StyledTableCell>Date To</StyledTableCell>
                  <StyledTableCell>Participation</StyledTableCell>
                  <StyledTableCell>Location of Organization</StyledTableCell>
                  <StyledTableCell>Amount Provided by the HEI</StyledTableCell>
                  <StyledTableCell>Certificate PDF</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((row, index) => (
                  <StyledTableRow key={index}>
                    <StyledTableCell>{row.name_of_the_faculty}</StyledTableCell>
                    <StyledTableCell>{row.designation}</StyledTableCell>
                    <StyledTableCell>{row.name_of_the_program}</StyledTableCell>
                    <StyledTableCell>{row.title_of_the_program}</StyledTableCell>
                    <StyledTableCell>{row.date_from}</StyledTableCell>
                    <StyledTableCell>{row.date_to}</StyledTableCell>
                    <StyledTableCell>{row.participation}</StyledTableCell>
                    <StyledTableCell>{row.location_of_organization}</StyledTableCell>
                    <StyledTableCell>{row.amount_provided_by_the_hei}</StyledTableCell>
                    <StyledTableCell>{row.certificate_pdf}</StyledTableCell>
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
          onClick={() => navigate("/selva")}
          style={{ position: "fixed", bottom: "20px", right: "20px", backgroundColor: "#32348c" }} // Change background color here
        >
          <AddIcon />
        </Fab>
        </div>
      </div>
    </div>
  );
}