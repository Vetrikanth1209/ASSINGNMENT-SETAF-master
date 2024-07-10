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
import logo from './MEC.png';
import { useNavigate } from "react-router-dom";
import Nav from './nav.js';
import PreviewIcon from '@mui/icons-material/Preview';
import Alerts from './alert.js';
import './bg.css'


function Moule() {
  const [formData, setFormData] = useState({
    faculty_name: "",
    date: "",
    taste_number: "",
    seminar_topic: "",
    resource_person_name: "",
    outcome: ""

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
      const response = await axios.post('http://localhost:1234/participation_in_taste', formData);
      console.log(response.data);

      setFormData({
        faculty_name: '',
        date: '',
        taste_number: '',
        seminar_topic: '',
        resource_person_name: '',
        outcome: '',
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
      faculty_name: '',
      date: '',
      taste_number: '',
      seminar_topic: '',
      resource_person_name: '',
      outcome: '',
    });
    setErrors({});
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Validation function
  const validateForm = (data) => {
    let errors = {};
    window.scrollTo({ top: 0, behavior: 'smooth' });

    if (!data.faculty_name) {
      errors.faculty_name = '* Faculty Name is required';
    }

    if (!data.date) {
      errors.date = '* date is required';
    }

    if (!data.taste_number) {
      errors.taste_number = '* Taste Number is required';
    }

    if (!data.seminar_topic) {
      errors.seminar_topic = '* Seminar Topic is required';
    }

    if (!data.resource_person_name) {
      errors.resource_person_name = '* Resource Person Name is required';
    }

    if (!data.outcome) {
      errors.outcome = '* Outcome is required';
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
    navigate('/tmoule'); // Use navigate instead of history.push
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
                    <b>PARTICIPATION IN TASTE</b>
                  </Typography>
                  <TextField label="Faculty Name" fullWidth sx={{ marginTop: 2 }} variant="outlined" name='faculty_name'
                    value={formData.faculty_name}
                    onChange={handleChange} 
                    error={!!errors.faculty_name}
                    helperText={errors.faculty_name}/>
                                      <TextField label="Date" fullWidth sx={{ marginTop: 2 }} variant="outlined" name='date'
                    value={formData.date}
                    onChange={handleChange} 
                    error={!!errors.date}
                    helperText={errors.date}/>
                  <TextField label="Taste Number" fullWidth sx={{ marginTop: 2 }} variant="outlined" name='taste_number'
                    value={formData.taste_number}
                    onChange={handleChange} 
                    error={!!errors.taste_number}
                    helperText={errors.taste_number}/>
                  <TextField label="Seminar Topic" fullWidth sx={{ marginTop: 2 }} variant="outlined" name='seminar_topic'
                    value={formData.seminar_topic}
                    onChange={handleChange}
                    error={!!errors.seminar_topic}
                    helperText={errors.seminar_topic}/>
                  <TextField label="Resource Person Name" fullWidth sx={{ marginTop: 2 }} variant="outlined" name='resource_person_name'
                    value={formData.resource_person_name}
                    onChange={handleChange}
                    error={!!errors.resource_person_name}
                    helperText={errors.resource_person_name}/>
                  <TextField label="Outcome" fullWidth sx={{ marginTop: 2 }} variant="outlined" name='outcome'
                    value={formData.outcome}
                    onChange={handleChange}
                    error={!!errors.outcome}
                    helperText={errors.outcome}/>
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

export default Moule;
