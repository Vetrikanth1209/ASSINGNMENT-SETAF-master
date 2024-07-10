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

function Selva() {
    const [formData, setFormData] = useState({
        name_of_the_faculty: '',
        designation: '',
        name_of_the_program: '',
        title_of_the_program: '',
        date_from: '',
        date_to: '',
        participation: '',
        location_of_organization: '',
        amount_provided_by_the_hei: '',
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
            const response = await axios.post('http://localhost:1234/student_fieldwork', formData);
            console.log(response.data);

            setFormData({
                name_of_the_faculty: '',
                designation: '',
                name_of_the_program: '',
                title_of_the_program: '',
                date_from: '',
                date_to: '',
                participation: '',
                location_of_organization: '',
                amount_provided_by_the_hei: '',
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
            name_of_the_faculty: '',
            designation: '',
            name_of_the_program: '',
            title_of_the_program: '',
            date_from: '',
            date_to: '',
            participation: '',
            location_of_organization: '',
            amount_provided_by_the_hei: '',
            certificate_pdf: '',
        });
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setErrors({});
    };

    const validateForm = (data) => {
        let errors = {};
        window.scrollTo({ top: 0, behavior: 'smooth' });
    
        if (!data.name_of_the_faculty) {
            errors.name_of_the_faculty = '* Name of the Faculty coordinator is required';
        }
    
        if (!data.designation) {
            errors.designation = '* Designation is required';
        }
    
        if (!data.name_of_the_program) {
            errors.name_of_the_program = '* Name of the Program is required';
        }
    
        if (!data.title_of_the_program) {
            errors.title_of_the_program = '* Title of the Program is required';
        }
    
    
        if (!data.date_from) {
            errors.date_from = '* Start date is required';
        }
    
        if (!data.date_to) {
            errors.date_to = '* End date is required';
        }
    
        if (!data.participation) {
            errors.participation = '* Participation is required';
        }
    
        if (!data.location_of_organization) {
            errors.location_of_organization = '* Location of Organization is required';
        }
    
        if (!data.amount_provided_by_the_hei) {
            errors.amount_provided_by_the_hei = '* Amount provided by the HEI is required';
        }
    
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
        navigate('/tSelva'); // Use navigate instead of history.push
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
                                    <TextField label="Name of the Faculty coordinator" fullWidth sx={{ marginTop: 2 }} variant="outlined" name='name_of_the_faculty'
                                        value={formData.name_of_the_faculty}
                                        onChange={handleChange}
                                        error={!!errors.name_of_the_faculty}
                                        helperText={errors.name_of_the_faculty} />


                                    <TextField
                                        label="Designation"
                                        fullWidth
                                        sx={{ marginTop: 2 }}
                                        variant="outlined"
                                        name='designation'
                                        value={formData.designation}
                                        onChange={handleChange}
                                        error={!!errors.designation}
                                        helperText={errors.designation}
                                    />

                                    <FormControl fullWidth sx={{ marginTop: 2 }}>
                                        <InputLabel id="name_of_the_program">Name Of The Program</InputLabel>
                                        <Select
                                            labelId="name_of_the_program"
                                            id="name_of_the_program"
                                            label="name_of_the_program"
                                            name='name_of_the_program'
                                            value={formData.name_of_the_program}
                                            onChange={handleChange}
                                        >
                                            <MenuItem value="Workshop">Workshop</MenuItem>
                                            <MenuItem value="Seminar">Seminar</MenuItem>
                                            <MenuItem value="FDP">FDP</MenuItem>
                                            <MenuItem value="SDP">SDP</MenuItem>
                                            <MenuItem value="STTP">STTP</MenuItem>
                                            <MenuItem value="Webinar">Webinar</MenuItem>
                                        </Select>
                                        {errors.name_of_the_program && <Typography variant="caption" color="error">{errors.name_of_the_program}</Typography>}
                                    </FormControl>
                                    <TextField
                                        label="Title of the Program"
                                        fullWidth
                                        sx={{ marginTop: 2 }}
                                        variant="outlined"
                                        name='title_of_the_program'
                                        value={formData.title_of_the_program}
                                        onChange={handleChange}
                                        error={!!errors.title_of_the_program}
                                        helperText={errors.title_of_the_program}
                                    />

                                    <TextField
                                        label="Date From"
                                        fullWidth
                                        sx={{ marginTop: 2 }}
                                        variant="outlined"
                                        name='date_from'
                                        value={formData.date_from}
                                        onChange={handleChange}
                                        error={!!errors.date_from}
                                        helperText={errors.date_from}
                                    />

                                    <TextField
                                        label="Date To"
                                        fullWidth
                                        sx={{ marginTop: 2 }}
                                        variant="outlined"
                                        name='date_to'
                                        value={formData.date_to}
                                        onChange={handleChange}
                                        error={!!errors.date_to}
                                        helperText={errors.date_to}
                                    />

                                    <FormControl fullWidth sx={{ marginTop: 2 }}>
                                        <InputLabel id="participation">Participation</InputLabel>
                                        <Select
                                            labelId="participation"
                                            id="participation"
                                            label="participation"
                                            name='participation'
                                            value={formData.participation}
                                            onChange={handleChange}
                                        >
                                            <MenuItem value="Internal">Internal</MenuItem>
                                            <MenuItem value="External">External</MenuItem>
                                        </Select>
                                        {errors.participation && <Typography variant="caption" color="error">{errors.participation}</Typography>}
                                    </FormControl>

                                    <TextField
                                        label="Location of Organization"
                                        fullWidth
                                        sx={{ marginTop: 2 }}
                                        variant="outlined"
                                        name='location_of_organization'
                                        value={formData.location_of_organization}
                                        onChange={handleChange}
                                        error={!!errors.location_of_organization}
                                        helperText={errors.location_of_organization}
                                    />

                                    <TextField
                                        label="Amount Provided By The HEI"
                                        fullWidth
                                        sx={{ marginTop: 2 }}
                                        variant="outlined"
                                        name='amount_provided_by_the_hei'
                                        value={formData.amount_provided_by_the_hei}
                                        onChange={handleChange}
                                        error={!!errors.amount_provided_by_the_hei}
                                        helperText={errors.amount_provided_by_the_hei}
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
                            </div>
                        </Grid>
                    </Grid>
                </Container>
            </div>
        </div>
    );
}

export default Selva;
