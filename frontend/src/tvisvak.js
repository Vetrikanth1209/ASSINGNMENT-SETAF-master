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
import { Tablevisvak } from "./axios";
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


export default function Tvisvak() {
 
 
  const navigate = useNavigate();


  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await Tablevisvak();
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
                  <StyledTableCell>department</StyledTableCell>
                  <StyledTableCell>name of the author</StyledTableCell>
                  <StyledTableCell>title of the paper</StyledTableCell>
                  <StyledTableCell>name of the journal</StyledTableCell>
                  <StyledTableCell>year of publication</StyledTableCell>
                  <StyledTableCell>month of publication</StyledTableCell>
                  <StyledTableCell>issn number</StyledTableCell>
                  <StyledTableCell>volume number</StyledTableCell>
                  <StyledTableCell>issue number</StyledTableCell>
                  <StyledTableCell>page number</StyledTableCell>
                  <StyledTableCell>jounal listed in</StyledTableCell>
                  <StyledTableCell>link to website of journal</StyledTableCell>
                  <StyledTableCell> journal first page PDF</StyledTableCell>

                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((row, index) => (
                  <StyledTableRow key={index}>
  <StyledTableCell>{row.academic_year}</StyledTableCell>
                    <StyledTableCell>{row.semester}</StyledTableCell>
                    <StyledTableCell>{row.department}</StyledTableCell>
                    <StyledTableCell>{row.name_of_author}</StyledTableCell>
                    <StyledTableCell>{row.title_of_paper}</StyledTableCell>
                    <StyledTableCell>{row.name_of_journal}</StyledTableCell>
                    <StyledTableCell>{row.year_of_publication}</StyledTableCell>
                    <StyledTableCell>
                      {row.month_of_publication}
                    </StyledTableCell>
                    <StyledTableCell>{row.issn_number}</StyledTableCell>
                    <StyledTableCell>{row.volume_no}</StyledTableCell>
                    <StyledTableCell>{row.issue_no}</StyledTableCell>
                    <StyledTableCell>{row.page_no}</StyledTableCell>
                    <StyledTableCell>{row.journal_listed_in}</StyledTableCell>
                    <StyledTableCell>
                      {row.link_to_website_of_journal}
                    </StyledTableCell>
                    <StyledTableCell>
                      {row.journal_first_page_PDF && (
                        <a
                          href={row.journal_first_page_PDF}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          View PDF
                        </a>
                      )}
                    </StyledTableCell>

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
          onClick={() => navigate("/visvak")}
          style={{ position: "fixed", bottom: "20px", right: "20px", backgroundColor: "#32348c" }} // Change background color here
        >
          <AddIcon />
        </Fab>
        </div>
      </div>
    </div>
  );
}