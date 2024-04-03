import React, { useState } from 'react';
import './SignUp.css';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { Box, Button, TextField, Typography } from '@mui/material';

export default function SignUp() {
  const [setOpen] = React.useState(false);
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [username, setUsername] = React.useState('');
  const navigate = useNavigate();


  const submit = async (e) => {
    e.preventDefault();
    setOpen(true)
    await axios.post("/user/SignUp", {
      email: email, password: password, username: username
    }).then((res) => {
      if (res.data.ok) {
        navigate("/");
      }
    })
    setOpen(false);
  }

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({});

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({ ...formData, [name]: value });
  // };

  const validate = () => {
    let isValid = true;
    const newErrors = {};

    if (!formData.username.trim()) {
      newErrors.username = 'שם משתמש הוא שדה חובה';
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = 'דוא"ל הוא שדה חובה';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'אנא הזן כתובת דוא"ל תקפה';
      isValid = false;
    }

    if (!formData.password.trim()) {
      newErrors.password = 'סיסמה היא שדה חובה';
      isValid = false;
    } else if (formData.password.length < 6) {
      newErrors.password = 'הסיסמה חייבת להיות לפחות 6 תווים';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const isValid = validate();
    if (isValid) {
      navigate('/');
    }
  };

  return (
    <Box className='SignUp-body'>

      <Box className='sign-Up-container'>

        <Box >
          <Typography sx={{ fontSize: 32, fontWeight: 'bold' }}>התחברות</Typography>
        </Box>

        <form onSubmit={handleSubmit}>
          <Box sx={{ height: '140px', alignItems: 'center', justifyContent: 'center' }}>
            <Box className='BoxLabel'>
              <label >שם משתמש</label>
            </Box>

            <Box className='username'>
            <TextField onChange={(e) => {
              setUsername(e.target.value)
            }} className='Textusername' id="username" name="username" placeholder="הכנס את שמך משתמש" required />
            </Box>
            {errors.username && <div className="error">{errors.username}</div>}
          </Box>


          
          <Box sx={{ height: '140px', alignItems: 'center', justifyContent: 'center' }}>
            <Box className='BoxLabel'>
            <label htmlFor="email">דוא"ל</label>
            </Box>
            <TextField className='Texts' type="email" id="email" name="email" placeholder="הכנס את כתובת הדוא" required onChange={(e) => {
              setEmail(e.target.value)
            }} />
            {errors.email && <div className="error">{errors.email}</div>}
          </Box>

          <Box sx={{ height: '140px', alignItems: 'center', justifyContent: 'center' }}>
            <Box className='BoxLabel'>
            <label htmlFor="password">סיסמה</label>
            </Box>
            <TextField className='Texts' type="password" id="password" name="password" placeholder="הכנס את הסיסמה שלך" onChange={(e) => {
              setPassword(e.target.value)
            }} />
            {errors.password && <div className="error">{errors.password}</div>}
          </Box>

          <Box className="div-btn">
            <Button sx={{
              backgroundColor: '#007BFF',
              color: '#FFF',
              border: 'none',
              borderRadius: '5px',
              width: '30%',
              height: '50px',

            }} onClick={submit}  >הירשם</Button>
          </Box>
        </form>
      </Box>
    </Box>
  );
}