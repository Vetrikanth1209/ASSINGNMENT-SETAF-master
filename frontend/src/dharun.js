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
import './bg.css';
import Nav from './nav.js';
import PreviewIcon from '@mui/icons-material/Preview';
import { useNavigate } from 'react-router-dom';
import Alerts from './alert.js';
import './bg.css'

export const Dharun = () => {
  const [formData, setFormData] = useState({
    academic_year: '',
    semester: '',
    name_of_the_faculty_coordinator: '',
    name_of_the_activity: '',
    name_of_mou_signed_industryinstitution: '',
    title_of_the_activity: '',
    duration_from: '',
    duration_to: '',
    name_of_resource_person: '',
    contact_details_of_resource_person: '',
    designation_of_resource_person: '',
    organization_details_of_resource_person: '',
    no_of_beneficiaries: '',
    enclose_proof_pdf: '',
  });
  const [errors, setErrors] = useState({}); // State to hold validation errors
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [showErrorAlert, setShowErrorAlert] = useState(false); // State to control visibility of error alert
  const navigate = useNavigate(); // Use useNavigate instead of useHistory

  const handleSubmit = async () => {
    // Validate form fields
    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // If validation passes, submit form data
    try {
      const response = await axios.post('http://localhost:1234/collaborative', formData);
      console.log(response.data);

      setFormData({
        academic_year: '',
        semester: '',
        name_of_the_faculty_coordinator: '',
        name_of_the_activity: '',
        name_of_mou_signed_industryinstitution: '',
        title_of_the_activity: '',
        duration_from: '',
        duration_to: '',
        name_of_resource_person: '',
        contact_details_of_resource_person: '',
        designation_of_resource_person: '',
        organization_details_of_resource_person: '',
        no_of_beneficiaries: '',
        enclose_proof_pdf: '',
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
      name_of_the_faculty_coordinator: '',
      name_of_the_activity: '',
      name_of_mou_signed_industryinstitution: '',
      title_of_the_activity: '',
      duration_from: '',
      duration_to: '',
      name_of_resource_person: '',
      contact_details_of_resource_person: '',
      designation_of_resource_person: '',
      organization_details_of_resource_person: '',
      no_of_beneficiaries: '',
      enclose_proof_pdf: '',
    });
    setErrors({});
    window.scrollTo({ top: 0, behavior: 'smooth' });
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

  // Validation function
  const validateForm = (data) => {
    let errors = {};
    window.scrollTo({ top: 0, behavior: 'smooth' });

    if (!data.academic_year) {
      errors.academic_year = '*Academic Year is required';
    }

    if (!data.semester) {
      errors.semester = '*Semester is required';
    }

    if (!data.name_of_the_faculty_coordinator) {
      errors.name_of_the_faculty_coordinator = '*Name of the Faculty coordinator is required';
    }

    if (!data.name_of_the_activity) {
      errors.name_of_the_activity = '*Name of the Activity is required';
    }

    if (!data.name_of_mou_signed_industryinstitution) {
      errors.name_of_mou_signed_industryinstitution = '*Name of MoU Signed IndustryInstitution is required';
    }

    if (!data.title_of_the_activity) {
      errors.title_of_the_activity = '*Title of the Activity is required';
    }

    if (!data.duration_from) {
      errors.duration_from = '*Duration From is required';
    }

    if (!data.duration_to) {
      errors.duration_to = '*Duration To is required';
    }

    if (!data.name_of_resource_person) {
      errors.name_of_resource_person = '*Name of Resource Person is required';
    }

    if (!data.contact_details_of_resource_person) {
      errors.contact_details_of_resource_person = '*Contact details of resource person is required';
    }

    if (!data.designation_of_resource_person) {
      errors.designation_of_resource_person = '*Designation of resource person is required';
    }

    if (!data.organization_details_of_resource_person) {
      errors.organization_details_of_resource_person = '*Organization details of resource person is required';
    }

    if (!data.no_of_beneficiaries) {
      errors.no_of_beneficiaries = '*No of beneficiaries is required';
    }

    return errors;
  };

  const handleViewClick = () => {
    navigate('/tdharun'); // Use navigate instead of history.push
  };

  return (
    <div  style={{paddingTop:'100px'}} className='body1'>
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
                    <b>Collaborative Activities with MoU Signed Industries/lnstitutions</b>
                  </Typography>
                  <FormControl fullWidth sx={{ marginTop: 2 }} error={!!errors.academic_year}>
                    <InputLabel id="academic_year">Academic Year</InputLabel>
                    <Select
                      labelId="academic_year"
                      id="academic_year"
                      label="Academic Year"
                      name='academic_year'
                      value={formData.academic_year}
                      onChange={handleChange}
                    >
                      <MenuItem value="">Select Academic Year</MenuItem>
                      <MenuItem value="2022-2023">2022-2023</MenuItem>
                      <MenuItem value="2023-2024">2023-2024</MenuItem>
                    </Select>
                    {errors.academic_year && <Typography variant="caption" color="error">{errors.academic_year}</Typography>}
                    
                  </FormControl>

                  <FormControl fullWidth sx={{ marginTop: 2 }} error={!!errors.semester}>
                    <InputLabel id="semester">Semester</InputLabel>
                    <Select
                      labelId="semester"
                      id="semester"
                      label="semester"
                      name='semester'
                      value={formData.semester}
                      onChange={handleChange}
                    >
                      <MenuItem value="">Select Semester</MenuItem>
                      <MenuItem value="ODD">ODD</MenuItem>
                      <MenuItem value="EVEN">EVEN</MenuItem>
                    </Select>
                    {errors.semester && <Typography variant="caption" color="error" >{errors.semester}</Typography>}
                  </FormControl>

                  <TextField
                    label="Name of the Faculty coordinator"
                    fullWidth
                    sx={{ marginTop: 2 }}
                    variant="outlined"
                    name='name_of_the_faculty_coordinator'
                    value={formData.name_of_the_faculty_coordinator}
                    onChange={handleChange}
                    error={!!errors.name_of_the_faculty_coordinator}
                    helperText={errors.name_of_the_faculty_coordinator}
                  />

                  <TextField
                    label="Name of the Activity"
                    fullWidth
                    sx={{ marginTop: 2 }}
                    variant="outlined"
                    name='name_of_the_activity'
                    value={formData.name_of_the_activity}
                    onChange={handleChange}
                    error={!!errors.name_of_the_activity}
                    helperText={errors.name_of_the_activity}
                  />

                  <TextField
                    label="Name of MoU Signed IndustryInstitution"
                    fullWidth
                    sx={{ marginTop: 2 }}
                    variant="outlined"
                    name='name_of_mou_signed_industryinstitution'
                    value={formData.name_of_mou_signed_industryinstitution}
                    onChange={handleChange}
                    error={!!errors.name_of_mou_signed_industryinstitution}
                    helperText={errors.name_of_mou_signed_industryinstitution}
                  />

                  <TextField
                    label="Title of the Activity"
                    fullWidth
                    sx={{ marginTop: 2 }}
                    variant="outlined"
                    name='title_of_the_activity'
                    value={formData.title_of_the_activity}
                    onChange={handleChange}
                    error={!!errors.title_of_the_activity}
                    helperText={errors.title_of_the_activity}
                  />

                  <TextField
                    label="Duration From"
                    fullWidth
                    sx={{ marginTop: 2 }}
                    variant="outlined"
                    name='duration_from'
                    value={formData.duration_from}
                    onChange={handleChange}
                    error={!!errors.duration_from}
                    helperText={errors.duration_from}
                  />

                  <TextField
                    label="Duration To"
                    fullWidth
                    sx={{ marginTop: 2 }}
                    variant="outlined"
                    name='duration_to'
                    value={formData.duration_to}
                    onChange={handleChange}
                    error={!!errors.duration_to}
                    helperText={errors.duration_to}
                  />

                  <TextField
                    label="Name of Resource Person"
                    fullWidth
                    sx={{ marginTop: 2 }}
                    variant="outlined"
                    name='name_of_resource_person'
                    value={formData.name_of_resource_person}
                    onChange={handleChange}
                    error={!!errors.name_of_resource_person}
                    helperText={errors.name_of_resource_person}
                  />

                  <TextField
                    label="Contact details of resource person"
                    fullWidth
                    sx={{ marginTop: 2 }}
                    variant="outlined"
                    name='contact_details_of_resource_person'
                    value={formData.contact_details_of_resource_person}
                    onChange={handleChange}
                    error={!!errors.contact_details_of_resource_person}
                    helperText={errors.contact_details_of_resource_person}
                  />

                  <TextField
                    label="Designation of resource person"
                    fullWidth
                    sx={{ marginTop: 2 }}
                    variant="outlined"
                    name='designation_of_resource_person'
                    value={formData.designation_of_resource_person}
                    onChange={handleChange}
                    error={!!errors.designation_of_resource_person}
                    helperText={errors.designation_of_resource_person}
                  />

                  <TextField
                    label="Organization details of resource person"
                    fullWidth
                    sx={{ marginTop: 2 }}
                    variant="outlined"
                    name='organization_details_of_resource_person'
                    value={formData.organization_details_of_resource_person}
                    onChange={handleChange}
                    error={!!errors.organization_details_of_resource_person}
                    helperText={errors.organization_details_of_resource_person}
                  />

                  <TextField
                    label="No of beneficiaries"
                    fullWidth
                    sx={{ marginTop: 2 }}
                    variant="outlined"
                    name='no_of_beneficiaries'
                    value={formData.no_of_beneficiaries}
                    onChange={handleChange}
                    error={!!errors.no_of_beneficiaries}
                    helperText={errors.no_of_beneficiaries}
                  />

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
                    color="success"
                    sx={{ flex: 1, borderRadius: 10 }}
                    onClick={handleSubmit}
                    
                    
                  >
                    Submit
                  </Button>

                  <Button
                    variant="contained"
                    color="error"
                    sx={{ flex: 1, borderRadius: 10 }}
                    onClick={handleClear} // Call the handleClear function when the button is clicked
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
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  );
};