import * as React from "react";
import TextField from "@mui/material/TextField";
import { MenuItem } from "@mui/material";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useState } from "react";
import { Container, Typography, Grid, Box } from "@mui/material";
import logo from "./MEC.png";
import axios from 'axios';
import Nav from "./nav";
import { useNavigate } from "react-router-dom";
import PreviewIcon from '@mui/icons-material/Preview';
import Alerts from "./alert";
import './bg.css'

const year = [
  {
    label: "2022-23",
  },
  {
    label: "2023-24",
  },  
];
const semester = [
  {
    label: "odd",
  },
  {
    label: "even",
  },
];

export const Visvak = () => {
  const [selectedYear, setSelectedYear] = useState(null);
  const [selectedMonth, setSelectedMonth] = useState(null);
  const [se, setse] = useState("Select se");
  const [category, setCategory] = useState("Select category");
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [showErrorAlert, setShowErrorAlert] = useState(false)
  const [errors, setErrors] = useState({
    academic_year: "",
    semester: "",
    department: "",
    name_of_author: "",
    title_of_paper: "",
    name_of_journal: "",
    year_of_publication: "",
    month_of_publication: "",
    issn_number: "",
    volume_no: "",
    issue_no: "",
    page_no: "",
    journal_listed_in: "",
    link_to_website_of_journal: "",
    journal_first_page_PDF: "",
  });
  const navigate = useNavigate();

  const handleViewClick = () => {
    navigate('/tvisvak');
  }

  const validateForm = () => {
    let valid = true;
    const newErrors = { ...errors };
    window.scrollTo({ top: 0, behavior: 'smooth' });

    if (!profile.academic_year) {
      newErrors.academic_year = "Academic Year is required";
      valid = false;
    } else {
      newErrors.academic_year = "";
    }

    if (!profile.semester) {
      newErrors.semester = "Semester is required";
      valid = false;
    } else {
      newErrors.semester = "";
    }

    if (!profile.department) {
      newErrors.department = "Department is required";
      valid = false;
    } else {
      newErrors.department = "";
    }

    if (!profile.name_of_author) {
      newErrors.name_of_author = "Name of Author is required";
      valid = false;
    } else {
      newErrors.name_of_author = "";
    }

    if (!profile.title_of_paper) {
      newErrors.title_of_paper = "Title of Paper is required";
      valid = false;
    } else {
      newErrors.title_of_paper = "";
    }

    if (!profile.name_of_journal) {
      newErrors.name_of_journal = "Name of Journal is required";
      valid = false;
    } else {
      newErrors.name_of_journal = "";
    }

    if (!profile.issn_number) {
      newErrors.issn_number = "ISSN Number is required";
      valid = false;
    } else {
      newErrors.issn_number = "";
    }

    if (!profile.volume_no) {
      newErrors.volume_no = "Volume Number is required";
      valid = false;
    } else {
      newErrors.volume_no = "";
    }

    if (!profile.issue_no) {
      newErrors.issue_no = "Issue Number is required";
      valid = false;
    } else {
      newErrors.issue_no = "";
    }

    if (!profile.page_no) {
      newErrors.page_no = "Page Number is required";
      valid = false;
    } else {
      newErrors.page_no = "";
    }

    if (!profile.journal_listed_in) {
      newErrors.journal_listed_in = "Journal Listed In is required";
      valid = false;
    } else {
      newErrors.journal_listed_in = "";
    }

    if (!profile.link_to_website_of_journal) {
      newErrors.link_to_website_of_journal =
        "Link to Website of Journal is required";
      valid = false;
    } else {
      newErrors.link_to_website_of_journal = "";
    }

    if (!profile.journal_first_page_PDF) {
      newErrors.journal_first_page_PDF = "Journal First Page PDF is required";
      valid = false;
    } else {
      newErrors.journal_first_page_PDF = "";
    }

    setErrors(newErrors);
    return valid;
  };



  const [profile, setProfile] = useState({
    academic_year: "",
    semester: "",
    department: "",
    name_of_author: "",
    title_of_paper: "",
    name_of_journal: "",
    year_of_publication: "",
    month_of_publication: "",
    issn_number: "",
    volume_no: "",
    issue_no: "",
    page_no: "",
    journal_listed_in: "",
    link_to_website_of_journal: "",
    journal_first_page_PDF: "",
  });


  const Change = (e) => {
    const selectedsem = e.target.value;
    setCategory(selectedsem);
    setProfile((prevProfile) => ({
      ...prevProfile,
      semester: selectedsem,
    }));
  };

  const handleYearChange = (selectedYear) => {
    setSelectedYear(selectedYear);
    setProfile((prevProfile) => ({
      ...prevProfile,
      year_of_publication: selectedYear ? selectedYear.$y.toString() : null,
    }));
  };

  const handleMonthChange = (selectedMonth) => {
    setSelectedMonth(selectedMonth);
    setProfile((prevProfile) => ({
      ...prevProfile,
      month_of_publication: selectedMonth
        ? new Date(selectedMonth).toLocaleString("en-us", {
          month: "long",
        })
        : null,
    }));
  };
  const handleChange = (event) => {
    const selectedYear = event.target.value;
    setCategory(selectedYear);
    setProfile((prevProfile) => ({
      ...prevProfile,
      academic_year: selectedYear,
    }));
  };
  const handleFileUpload = (file) => {
    if (file) {
      const filePath = URL.createObjectURL(file);
      setProfile((prevProfile) => ({
        ...prevProfile,
        journal_first_page_PDF: filePath,
      }));
    }
  };

  const myCollect = (eve) => {
    const { name, value } = eve.target;
    setProfile((exists) => ({
      ...exists,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    // Validate form fields
    const validationErrors = validateForm(profile);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // If validation passes, submit form data
    try {
      const response = await axios.post('http://localhost:1234/journalnewrecord', profile);
      console.log(response.data);

      setProfile({
        academic_year: "",
        semester: "",
        department: "",
        name_of_author: "",
        title_of_paper: "",
        name_of_journal: "",
        year_of_publication: "",
        month_of_publication: "",
        issn_number: "",
        volume_no: "",
        issue_no: "",
        page_no: "",
        journal_listed_in: "",
        link_to_website_of_journal: "",
        journal_first_page_PDF: "",
      });
      setShowSuccessAlert(true);
      setShowErrorAlert(false); // Hide error alert if it was shown before
    } catch (error) {
      console.error(error);
      setShowErrorAlert(true);
      setShowSuccessAlert(false); // Hide success alert if it was shown before
    }
  };


  const resetting = () => {
    setProfile(() => ({
      academic_year: "",
      semester: "",
      department: "",
      name_of_author: "",
      title_of_paper: "",
      name_of_journal: "",
      year_of_publication: "",
      month_of_publication: "",
      issn_number: "",
      volume_no: "",
      issue_no: "",
      page_no: "",
      journal_listed_in: "",
      link_to_website_of_journal: "",
      journal_first_page_PDF: "",
    }));
    setCategory("Select category");
    setse("select se");
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div style={{paddingTop:'100px'}} className='body1'>
      <Nav />
      {showSuccessAlert && <Alerts success={true} />}
      {showErrorAlert && <Alerts success={false} />}
      <Container sx={{ paddingTop: "1px", paddingBottom: "1px" }}>
        <Grid container justifyContent="center">
          <Grid item xs={12} md={8}>
            <div
              className="shadow-lg rounded-4 p-3"
              style={{
                marginTop: "30px",
                marginBottom: "30px",
                backgroundColor: "white",
              }}
            >
              <div className="mb-3 text-center">
                <img
                  src={logo}
                  alt="Logo"
                  style={{ maxHeight: 110, marginBottom: 10 }}
                />
                <Typography variant="h4" sx={{ color: 'white', backgroundColor: '#32348c', padding: '10px', borderRadius: '5px' }}><b>EVENT PROPOSAL</b></Typography>
              </div>
              <div>
                <Typography
                  variant="h5"
                  color="#32348c"
                  align="center"
                  sx={{ marginTop: 2 }}
                >
                  <b>JOURNAL PUBLICATION</b>
                </Typography>
                <div className="mt-3">
                  <TextField
                    id="academicYear"
                    onChange={handleChange}
                    name="academic_year"
                    value={profile.academic_year}
                    select
                    label="Academic Year"
                    placeholder="Select the academic year"
                    fullWidth
                    error={!!errors.academic_year}
                    helperText={errors.academic_year}
                  >
                    {year.map((option) => (
                      <MenuItem key={option.label} value={option.label}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </div>
                <div className="mt-3">
                  <TextField
                    id="sem"
                    name="semester"
                    onChange={Change}
                    value={profile.semester}
                    select
                    label="Semester"
                    placeholder="select the semester"
                    fullWidth
                    error={!!errors.semester}
                    helperText={errors.semester}
                  >
                    {semester.map((option) => (
                      <MenuItem key={option.label} value={option.label}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </div>
                <div className="mt-3">
                  <TextField
                    name="department"
                    value={profile.department}
                    onChange={myCollect}
                    id="dept"
                    label="department"
                    placeholder="enter the department"
                    fullWidth
                    error={!!errors.department}
                    helperText={errors.department}
                  />
                </div>
                <div className="mt-3">
                  <TextField
                    name="name_of_author"
                    value={profile.name_of_author}
                    onChange={myCollect}
                    id="authorname"
                    label="Name of the author's"
                    variant="outlined"
                    placeholder="name of the author"
                    fullWidth
                    error={!!errors.name_of_author}
                    helperText={errors.name_of_author}
                  />
                </div>
                <div className="mt-3">
                  <TextField
                    name="title_of_paper"
                    value={profile.title_of_paper}
                    onChange={myCollect}
                    id="title"
                    label="title of paper"
                    variant="outlined"
                    placeholder="title of paper"
                    fullWidth
                    error={!!errors.title_of_paper}
                    helperText={errors.title_of_paper}
                  />
                </div>
                <div className="mt-3">
                  <TextField
                    name="name_of_journal"
                    value={profile.name_of_journal}
                    onChange={myCollect}
                    id="journalname"
                    label="Name of journal"
                    variant="outlined"
                    placeholder="journal name"
                    fullWidth
                    error={!!errors.name_of_journal}
                    helperText={errors.name_of_journal}
                  />
                </div>
                <div className="mt-3">
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer
                      components={["DatePicker", "DatePicker", "DatePicker"]}
                    >
                      <DatePicker
                        name="year_of_publication"
                        value={selectedYear}
                        onChange={handleYearChange}
                        label={"Select the year"}
                        views={["year"]}
                      />
                    </DemoContainer>
                  </LocalizationProvider>
                </div>
                <div className="mt-3">
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer
                      components={["DatePicker", "DatePicker", "DatePicker"]}
                    >
                      <DatePicker
                        name="month_of_publication"
                        value={selectedMonth}
                        onChange={handleMonthChange}
                        label={"Select the month"}
                        views={["month"]}
                      />
                    </DemoContainer>
                  </LocalizationProvider>
                </div>
                <div className="mt-3">
                  <TextField
                    name="issn_number"
                    value={profile.issn_number}
                    onChange={myCollect}
                    id="issnnum"
                    label="Issn number"
                    variant="outlined"
                    placeholder="enter the number"
                    fullWidth
                    error={!!errors.issn_number}
                    helperText={errors.issn_number}
                  />
                </div>
                <div className="mt-3">
                  <TextField
                    name="volume_no"
                    value={profile.volume_no}
                    onChange={myCollect}
                    id="volume"
                    label="volume no"
                    variant="outlined"
                    placeholder="enter the volume"
                    fullWidth
                    error={!!errors.volume_no}
                    helperText={errors.volume_no}
                  />
                </div>
                <div className="mt-3">
                  <TextField
                    name="issue_no"
                    value={profile.issue_no}
                    onChange={myCollect}
                    id="issueno"
                    label="issue no"
                    variant="outlined"
                    placeholder="enter the number"
                    fullWidth
                    error={!!errors.issue_no}
                    helperText={errors.issue_no}
                  />
                </div>
                <div className="mt-3">
                  <TextField
                    name="page_no"
                    value={profile.page_no}
                    onChange={myCollect}
                    id="pageno"
                    label="page no"
                    variant="outlined"
                    placeholder="enter the page number"
                    fullWidth
                    error={!!errors.page_no}
                    helperText={errors.page_no}
                  />
                </div>
                <div className="mt-3">
                  <TextField
                    name="journal_listed_in"
                    value={profile.journal_listed_in}
                    onChange={myCollect}
                    id="jounallist"
                    label="journal listed in"
                    variant="outlined"
                    placeholder="select the journal"
                    fullWidth
                    error={!!errors.journal_listed_in}
                    helperText={errors.journal_listed_in}
                  />
                  <div className="mt-3">
                    <TextField
                      name="link_to_website_of_journal"
                      value={profile.link_to_website_of_journal}
                      onChange={myCollect}
                      id="weblink"
                      label="link to website of the journal"
                      variant="outlined"
                      placeholder="paste the link"
                      fullWidth
                      error={!!errors.link_to_website_of_journal}
                      helperText={errors.link_to_website_of_journal}
                    />
                  </div>
                </div>
                <div className="row col-12 mt-3">
                  <h5>UGC CARE</h5>
                  <h5>Journal First Page-PDF</h5>
                  <input
                    type="file"
                    accept=".pdf"
                    onChange={(e) => handleFileUpload(e.target.files[0])}
                    style={{ display: "none" }}
                    id="fileInput"
                  />
                  <label htmlFor="fileInput">
                    <Button
                      color="info"
                      component="span"
                      variant="contained"
                      startIcon={<CloudUploadIcon />}
                      fullWidth
                      sx={{ marginTop: 2 }}
                    >
                      Upload PDF
                    </Button>
                  </label>
                  {profile.journal_first_page_PDF && (
                    <div className="mt-2">
                      <a href={profile.journal_first_page_PDF} target="_blank">
                        View PDF
                      </a>
                    </div>
                  )}
                </div>

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    gap: 2,
                    marginTop: 5,
                  }}
                >
                  <Button
                    color="primary"
                    type="submit"
                    onClick={handleSubmit}
                    className="col-3"
                    variant="contained"
                    sx={{ flex: 1, borderRadius: 10 }}
                  >
                    Submit
                  </Button>
                  <Button
                    color="error"
                    onClick={resetting}
                    className="col-3"
                    variant="contained"
                    sx={{ flex: 1, borderRadius: 10 }}
                  >
                    Clear
                  </Button>
                  <Button
                    variant="contained"
                    color="secondary"
                    sx={{ flex: 1, borderRadius: 10 }}
                    startIcon={<PreviewIcon />}
                    onClick={handleViewClick}
                  >
                    View
                  </Button>
                </Box>
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};
export default Visvak;