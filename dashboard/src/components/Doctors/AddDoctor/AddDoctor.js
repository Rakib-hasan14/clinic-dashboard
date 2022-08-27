import React from 'react';
import styled from '@emotion/styled';
import { Box , Grid , Typography , Button} from '@mui/material';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import { Link } from 'react-router-dom';
import { useSelector  , useDispatch} from 'react-redux'
import {AddDoctorAction} from "../../../redux/action/doctorPageAction"
import Alert from '@mui/material/Alert';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';




const WrapBox = styled(Box)({
    width: '78%',
    minHeight: '100vh',
    position: 'absolute',
    backgroundColor: '#dddcdc',
    marginTop: "64px",
    display: "flex",
    marginLeft: "22%"
})

const AddBox = styled(Box)({
    backgroundColor: "#fff",
    padding: "5px 0",
    marginTop: "20px",
    borderRadius: "10px"
})

const InfoBox = styled(Box)({
    marginTop: "20px"
})

const InputField = styled(TextField)({
    width: "100%",
})

const ContainerBox = styled(Box)({
    width: '95%',
    margin: '20px auto'
})


const AddDoctor = () => {
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [age, setAge] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [fee, setFee] = React.useState('');
    const [number, setNumber] = React.useState(0);
    const [address, setAddress] = React.useState('');
    const [gender, setGender] = React.useState('');
    const [status, setStatus] = React.useState('');
    const [roll, setRoll] = React.useState('');
    const [category, setCategory] = React.useState('');
    const [certified, setCertified] = React.useState('');
    const [open, setOpen] = React.useState(false);


    const handleChangeName = (event) => {
        setName(event.target.value);
    };
    const handleChangeEmail = (event) => {
        setEmail(event.target.value) ;
    };
    const handleChangeAge = (event) => {
        setAge(event.target.value);
    };
    const handleChangeAddress = (event) => {
        setAddress(event.target.value);
    };
    const handleChangeNumber = (event) => {
        setNumber(event.target.value);
    };
    const handleChangeGender = (event) => {
        setGender(event.target.value);
    };
    const handleChangeStatus = (event) => {
        setStatus(event.target.value);
    };
    const handleChangePassword = (event) => {
        setPassword(event.target.value);
    };
    const handleChangeFee = (event) => {
        setFee(event.target.value);
    };
    const handleChangeCategory = (event) => {
        setCategory(event.target.value);
    };
    const handleChangeCertified = (event) => {
        setCertified(event.target.value);
    };
    const handleChangeRoll = (event) => {
        setRoll(event.target.value);
    };

    const addDoctorResponse = useSelector((state)=> state.addDoctorReducer)
    const dispatch = useDispatch()
    console.log(addDoctorResponse)


    const handleAddDoctor = () => {

        let data = {
            name,
            email,
            password,
            age,
            number,
            address,
            certified,
            accountType: 'doctor',
            gender,
            status,
            fee,
            category,
            roll
        }
    console.log(data)
        dispatch(AddDoctorAction(data))
    
        setName('')
        setEmail('')
        setAge('')
        setAddress('')
        setPassword('')
        setFee('')
        setCategory('')
        setCertified('')
        setRoll('')
        setNumber('')
        setGender('')
        setStatus('')
        setOpen(true)
    }


    return (
        <WrapBox>
            <ContainerBox>
            {addDoctorResponse.status === false && <Collapse in={open}>
                <Alert
                variant="outlined" 
                severity="error"
                action={
                    <IconButton
                    aria-label="close"
                    color="inherit"
                    size="small"
                    onClick={() => {
                        setOpen(false);
                    }}
                    >
                    <CloseIcon fontSize="inherit" />
                    </IconButton>
                }
                sx={{ mb: 2 }}
                >
                {addDoctorResponse.message}!
                </Alert>
            </Collapse> }
            {addDoctorResponse.status === true && <Collapse in={open}>
                <Alert
                variant="outlined" 
                severity="success"
                action={
                    <IconButton
                    aria-label="close"
                    color="inherit"
                    size="small"
                    onClick={() => {
                        setOpen(false);
                    }}
                    >
                    <CloseIcon fontSize="inherit" />
                    </IconButton>
                }
                sx={{ mb: 2 }}
                >
                {addDoctorResponse.message}!
                </Alert>
            </Collapse>}
                <Box sx={{}}>
                    <Typography sx={{marginBottom: "10px", color: "gray"}} variant="h6">Doctor Add</Typography>
                    <Typography  sx={{color: "#304f68",fontWeight: "500", display: "flex",alignItems: "flex-start",textDecoration: "none"}}><Typography sx={{ textDecoration: "none", color: "#304f68"}} component={Link} to='/'>Clinic</Typography> <span><ArrowRightIcon /></span> <Typography sx={{ textDecoration: "none", color: "#304f68"}} component={Link} to='/doctors'>Doctors</Typography> <span><ArrowRightIcon /></span> Add</Typography>
                </Box>
                <AddBox>
                    <ContainerBox>
                        <Typography sx={{marginBottom: "10px", color: "gray" ,fontSize: "18px" }} variant="h6">Doctor Information</Typography>
                        <Divider />
                        <InfoBox>  
                            <Grid container spacing={2}>
                                <Grid item xs={12} md={6}>
                                    <InputField value={name} onChange={handleChangeName} id="outlined-basic" label="Name *" variant="outlined" />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <InputField value={email} onChange={handleChangeEmail} id="outlined-basic" label="Email *" variant="outlined" />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <InputField value={password} onChange={handleChangePassword} id="outlined-basic" label="Password *" variant="outlined" />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <InputField value={age} onChange={handleChangeAge} id="outlined-basic" label="Age *" variant="outlined" />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <InputField value={address} onChange={handleChangeAddress} id="outlined-basic" label="Address *" variant="outlined" />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <InputField value={number} onChange={handleChangeNumber} id="outlined-basic" label="Phone Number *" variant="outlined" />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <InputField value={certified} onChange={handleChangeCertified} id="outlined-basic" label="Certified *" variant="outlined" />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <InputField value={fee} onChange={handleChangeFee} id="outlined-basic" label="Fee *" variant="outlined" />
                                </Grid>
                                <Grid item xs={12} md={6} >
                                    <FormControl sx={{ minWidth: "100%" }}>
                                        <InputLabel id="demo-simple-select-helper-label">Category *</InputLabel>
                                            <Select
                                            labelId="demo-simple-select-helper-label"
                                            id="demo-simple-select-helper"
                                            value={category}
                                            label="Category "
                                            onChange={handleChangeCategory}
                                            >
                                            <MenuItem value="">
                                                <em>None</em>
                                            </MenuItem>
                                            <MenuItem value={'Diabitics'}>Diabitics</MenuItem>
                                            <MenuItem value={'Phigio'}>Phigio</MenuItem>
                                            <MenuItem value={'Sergary'}>Sergary</MenuItem>
                                            </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12} md={6} >
                                    <FormControl sx={{ minWidth: "100%" }}>
                                        <InputLabel id="demo-simple-select-helper-label">Gender *</InputLabel>
                                            <Select
                                            labelId="demo-simple-select-helper-label"
                                            id="demo-simple-select-helper"
                                            value={gender}
                                            label="Gender "
                                            onChange={handleChangeGender}
                                            >
                                            <MenuItem value="">
                                                <em>None</em>
                                            </MenuItem>
                                            <MenuItem value={'male'}>Male</MenuItem>
                                            <MenuItem value={'female'}>Female</MenuItem>
                                            <MenuItem value={'other'}>Other</MenuItem>
                                            </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12} md={6} >
                                    <FormControl sx={{ minWidth: "100%" }}>
                                        <InputLabel id="demo-simple-select-helper-label">Roll *</InputLabel>
                                            <Select
                                            labelId="demo-simple-select-helper-label"
                                            id="demo-simple-select-helper"
                                            value={roll}
                                            label="Gender "
                                            onChange={handleChangeRoll}
                                            >
                                            <MenuItem value="">
                                                <em>None</em>
                                            </MenuItem>
                                            <MenuItem value={'admin'}>Admin</MenuItem>
                                            <MenuItem value={'doctor'}>Doctor</MenuItem>
                                            <MenuItem value={'other'}>Other</MenuItem>
                                            </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                <FormControl sx={{ minWidth: "100%" }}>
                                    <InputLabel id="demo-simple-select-helper-label">Status *</InputLabel>
                                            <Select
                                            labelId="demo-simple-select-helper-label"
                                            id="demo-simple-select-helper"
                                            value={status}
                                            label="Status"
                                            onChange={handleChangeStatus}
                                            >
                                            <MenuItem value="">
                                                <em>None</em>
                                            </MenuItem>
                                            <MenuItem value={'married'}>Married</MenuItem>
                                            <MenuItem value={'single'}>Single</MenuItem>
                                            </Select>
                                </FormControl>
                                </Grid>

                                <Grid item xs={12} md={12} sx={{textAlign: "center"}}>
                                <Button onClick={handleAddDoctor} sx={{mt:2}} variant="contained">Add</Button>
                                </Grid>
                            </Grid> 
                        </InfoBox>
                    </ContainerBox>
                </AddBox>
            </ContainerBox>
        </WrapBox>
    );
};

export default AddDoctor;