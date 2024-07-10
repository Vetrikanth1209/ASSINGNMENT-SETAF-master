import React, { useState } from 'react';
import axios from 'axios';
import {
  Box,
  Container,
  Typography,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Grid,
  Button,
} from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import logo from './clg-1.jpg';
import { useNavigate } from "react-router-dom";
import Nav from './nav.js';
import PreviewIcon from '@mui/icons-material/Preview';
import Alerts from './alert.js';


function Vetri() {
  const [formData, setFormData] = useState({
    academic_year: '',
    semester: '',
    department: '',
    name_of_author: '',
    title_of_paper: '',
    name_of_journal: '',
    issn_number: '',
    volume_no:'',
    issue_no:'',
    page_no:'',
    journal_listed_in:'',
    link_to_website_of_journal:'',
    journal_first_page_PDF: '',
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [showErrorAlert, setShowErrorAlert] = useState(false)
  
  const handleSubmit = async () => {
    // Validate form fields
    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // If validation passes, submit form data
    try {
      const response = await axios.post('http://localhost:1234/student_motivation', formData);
      console.log(response.data);

      setFormData({
        academic_year: '',
        semester: '',
        department: '',
        name_of_author: '',
        title_of_paper: '',
        issn_number: '',
        name_of_journal: '',
        journal_first_page_PDF: '',
      });
      setShowSuccessAlert(true);
      setShowErrorAlert(false); // Hide error alert if it was shown before
    } catch (error) {
      console.error(error);
      setShowErrorAlert(true);
      setShowSuccessAlert(false); // Hide success alert if it was shown before
    }
  };

  const handleClear = () => {
    setFormData({
      academic_year: '',
      semester: '',
      department: '',
      name_of_author: '',
      title_of_paper: '',
      issn_number: '',
      name_of_journal: '',
      journal_first_page_PDF: '',
    });
    setErrors({});
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Validation function
  const validateForm = (data) => {
    let errors = {};


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
  
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));

    // Clear errors for the field being changed
    setErrors(prevState => ({
      ...prevState,
      [name]: null
    }));
  };
  const handleViewClick = () => {
    navigate('/tvetri'); // Use navigate instead of history.push
  };
  return (
    <div>
      <Nav />
      {showSuccessAlert && <Alerts success={true} />}
      {showErrorAlert && <Alerts success={false} />}
      <div>
        <Container sx={{ paddingTop: '1px', paddingBottom: '1px' }}>
          <Grid container justifyContent="center">
            <Grid item xs={12} md={8}>
              <div className="shadow-lg rounded-4 p-3" style={{ marginTop: '30px', marginBottom: '30px', backgroundColor: 'white' }}>
                <div className="mb-3 text-center">
                  <img src={logo} alt="Logo" style={{ maxHeight: 110, marginBottom: 10 }} />
                  <Typography variant="h4" sx={{ color: 'white', backgroundColor: '#32348c', padding: '10px', borderRadius: '5px' }}><b>EVENT PROPOSAL</b></Typography>
                </div>
                <div>
                  <Typography variant="h5" color="#32348c" align="center" sx={{ marginTop: 2 }}>
                    <b>STUDENT MOTIVATION FOR PAPER PRESENTATION, PROJECT SUBMISSION AND OTHER CONTEST</b>
                  </Typography>
                  <FormControl fullWidth sx={{ marginTop: 2 }}>
                    <InputLabel id="academic_year">Academic Year</InputLabel>
                    <Select
                      labelId="academic_year"
                      id="academic_year"
                      label="academic_year"
                      name='academic_year'
                      value={formData.academic_year}
                      onChange={handleChange}
                    >
                      <MenuItem value="2022-2023">2022-2023</MenuItem>
                      <MenuItem value="2023-2024">2023-2024</MenuItem>
                    </Select>
                    {errors.academic_year && <Typography variant="caption" color="error">{errors.academic_year}</Typography>}
                  </FormControl>
                  <FormControl fullWidth sx={{ marginTop: 2 }}>
                    <InputLabel id="semester">Semester</InputLabel>
                    <Select
                      labelId="semester"
                      id="semester"
                      label="semester"
                      name='semester'
                      value={formData.semester}
                      onChange={handleChange}
                    >
                      <MenuItem value="odd">ODD</MenuItem>
                      <MenuItem value="even">EVEN</MenuItem>
                    </Select>
                    {errors.semester && <Typography variant="caption" color="error">{errors.semester}</Typography>}
                  </FormControl>
                  <TextField label="Name of the Faculty coordinator" fullWidth sx={{ marginTop: 2 }} variant="outlined" name='department'
                    value={formData.department}
                    onChange={handleChange} 
                    error={!!errors.department}
                    helperText={errors.department}/>
                  <TextField label="Name of the Student" fullWidth sx={{ marginTop: 2 }} variant="outlined" name='name_of_author'
                    value={formData.name_of_author}
                    onChange={handleChange}
                    error={!!errors.name_of_author}
                    helperText={errors.name_of_author}/>
                  <TextField label="Paper Presentation" fullWidth sx={{ marginTop: 2 }} variant="outlined" name='title_of_paper'
                    value={formData.title_of_paper}
                    onChange={handleChange}
                    error={!!errors.title_of_paper}
                    helperText={errors.title_of_paper}/>
                  <TextField label="Date" fullWidth sx={{ marginTop: 2 }} variant="outlined" name='issn_number'
                    value={formData.issn_number}
                    onChange={handleChange}
                    error={!!errors.issn_number}
                    helperText={errors.issn_number}/>
                  <TextField label="No of beneficiaries" fullWidth sx={{ marginTop: 2 }} variant="outlined" name='name_of_journal'
                    value={formData.name_of_journal}
                    onChange={handleChange}
                    error={!!errors.name_of_journal}
                    helperText={errors.name_of_journal}/>
                  <Button
                    variant="contained"
                    component="label"
                    startIcon={<CloudUploadIcon />}
                    htmlFor="upload-file"
                    fullWidth
                    sx={{ marginTop: 2 }}
                  >
                    Upload File
                    <input
                      type="file"
                      id="upload-file"
                      style={{ display: 'none' }}
                      className='up'
                    />
                  </Button>
                </div>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: 2, marginTop: 5 }}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    sx={{ flex: 1, borderRadius: 10 }}
                    onClick={handleSubmit}
                  >
                    Submit
                  </Button>
                  <Button variant="contained" color="error" sx={{ flex: 1, borderRadius: 10 }} onClick={handleClear} >Clear</Button>
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
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  );
}

export default Vetri;
