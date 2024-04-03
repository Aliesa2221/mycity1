import React from 'react';
import './SignIn.css';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import CircularProgress from '@mui/material/CircularProgress';
import { Link } from 'react-router-dom';
import { Box, Button, TextField, Typography } from '@mui/material';

export default function SignIn() {
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false)
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const submit = async (e) => {
    e.preventDefault();
    setOpen(true)
    await axios.post("/user/SignIn", {
      email: email, password: password
    }).then((res) => {
      if (res.data.ok) {
        localStorage.setItem('token', res.data.accessToken);
        navigate("/home");
      }
    })
    setOpen(false);
  }

  const navigateion1 = async() =>{
    navigate("/home");
  }
  return (
    <Box className=' blude-body'>
      <Box className='sign-in-container'>
        {
          open &&
          <CircularProgress />
        }
        <Box sx={{ textAlign: 'center', justifyContent: 'center' }}>
          <Typography sx={{ fontSize: 32, fontWeight: 'bold' }}>התחברות</Typography>
        </Box>

        <form className='form1'>

          <Box sx={{ height: '140px', alignItems: 'center', justifyContent: 'center' }}>
            <Box className='num1'>
              <label >שם משתמש</label>
            </Box>
            <Box className='username' >
              <TextField onChange={(e) => {
                setEmail(e.target.value)
              }} type='text' className='Textusername' placeholder="שם משתםש" />
            </Box>
          </Box>

          <Box className='div2'>
            <Box className='num2'>
              <label>סיסמה</label>
            </Box>
            <Box>
              <TextField onChange={(e) => {
                setPassword(e.target.value)
              }} className='password' type="password" placeholder="הכנס סיסמה" />
            </Box>
          </Box>


          <Box className="div-bnt">
            <Button sx={{
              backgroundColor: '#007BFF',
              color: '#FFF',
              border: 'none',
              borderRadius: '5px',
              width: '30%',
              height: '50px',

            }}
              onClick={submit}>התחבר</Button>
          </Box>
          <Box className="div-bnt">
            <Button sx={{
              backgroundColor: '#007BFF',
              color: '#FFF',
              border: 'none',
              borderRadius: '5px',
              width: '30%',
              height: '50px',

            }}
              onClick={navigateion1}>התחבר</Button>
          </Box>

          <Box className="link">
            <Typography>אין לך חשבון? </Typography>
            <Link to="/signUp" style={{ marginRight: 5 }}>הירשם כאן</Link>
          </Box>

        </form>
      </Box>
    </Box>
  );
}

