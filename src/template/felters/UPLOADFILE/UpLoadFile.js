import React, { useState } from 'react';
import { Button, Typography } from '@mui/material';

export default function UpLoadFile() {
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setSelectedFile(file);
    };

    return (
        <div>
            <input
                type="file"
                id="fileInput"
                style={{ display: 'none' }}
                onChange={handleFileChange}
            />
            <label htmlFor="fileInput">
                <Button variant="contained" color="primary" component="span">
                    בחר קובץ
                </Button>
            </label>

            {selectedFile && (
                <Typography variant="body1" sx={{ marginTop: '10px' }}>
                    קובץ שנבחר: {selectedFile.name}
                </Typography>
            )}
        </div>
    );
}
