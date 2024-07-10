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
import './bg.css'


function Vetri() {
  const [formData, setFormData] = useState({
    academic_year: '',
    semester: '',
    name_of_the_faculty: '',
    name_of_the_student: '',
    paper_presentation: '',
    date_of_contest: '',
    no_of_beneficiaries: '',
    certificate_pdf: '',
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
        name_of_the_faculty: '',
        name_of_the_student: '',
        paper_presentation: '',
        date_of_contest: '',
        no_of_beneficiaries: '',
        certificate_pdf: '',
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
      name_of_the_faculty: '',
      name_of_the_student: '',
      paper_presentation: '',
      date_of_contest: '',
      no_of_beneficiaries: '',
      certificate_pdf: '',
    });
    setErrors({});
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Validation function
  const validateForm = (data) => {
    let errors = {};
    window.scrollTo({ top: 0, behavior: 'smooth' });

    if (!data.academic_year) {
      errors.academic_year = '* Academic Year is required';
    }

    if (!data.semester) {
      errors.semester = '* Semester is required';
    }

    if (!data.name_of_the_faculty) {
      errors.name_of_the_faculty = '* Name of the Faculty coordinator is required';
    }

    if (!data.name_of_the_student) {
      errors.name_of_the_student = '* Name of the Student is required';
    }

    if (!data.paper_presentation) {
      errors.paper_presentation = '* Paper Presentation is required';
    }

    if (!data.date_of_contest) {
      errors.date_of_contest = '* Date of Contest is required';
    }

    if (!data.no_of_beneficiaries) {
      errors.no_of_beneficiaries = '* No of beneficiaries is required';
    }

    // Add more validations as needed

    return errors;
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
    <div style={{paddingTop:'100px'}} className='body1'>
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
                  <TextField label="Name of the Faculty coordinator" fullWidth sx={{ marginTop: 2 }} variant="outlined" name='name_of_the_faculty'
                    value={formData.name_of_the_faculty}
                    onChange={handleChange} 
                    error={!!errors.name_of_the_faculty}
                    helperText={errors.name_of_the_faculty}/>
                  <TextField label="Name of the Student" fullWidth sx={{ marginTop: 2 }} variant="outlined" name='name_of_the_student'
                    value={formData.name_of_the_student}
                    onChange={handleChange}
                    error={!!errors.name_of_the_student}
                    helperText={errors.name_of_the_student}/>
                  <TextField label="Paper Presentation" fullWidth sx={{ marginTop: 2 }} variant="outlined" name='paper_presentation'
                    value={formData.paper_presentation}
                    onChange={handleChange}
                    error={!!errors.paper_presentation}
                    helperText={errors.paper_presentation}/>
                  <TextField label="Date" fullWidth sx={{ marginTop: 2 }} variant="outlined" name='date_of_contest'
                    value={formData.date_of_contest}
                    onChange={handleChange}
                    error={!!errors.date_of_contest}
                    helperText={errors.date_of_contest}/>
                  <TextField label="No of beneficiaries" fullWidth sx={{ marginTop: 2 }} variant="outlined" name='no_of_beneficiaries'
                    value={formData.no_of_beneficiaries}
                    onChange={handleChange}
                    error={!!errors.no_of_beneficiaries}
                    helperText={errors.no_of_beneficiaries}/>
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
