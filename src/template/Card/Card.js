import React, { useState } from 'react';
import './Card.css';
import { Box } from '@mui/material';

const Card = ({sx}) => {
    const [tasks] = useState([
        {
            id: 1,
            title: 'Use the optical PCI matrix, then you can generate the mobile application!',
            date: 'Tue Aug 02 2022 06:55:41 GMT+0800 (Philippine Standard Time)',
            status: 'green'
        },
        {
            id: 2,
            title: "I'll copy the cross-platform RAM firewall, that should capacitor the SMS circuit!",
            date: 'Sat May 21 2022 08:26:25 GMT+0800 (Philippine Standard Time)',
            status: 'red'
        }
    ]);

    return (
        <Box className="tasks-container" sx={sx}>
            <input type="text" placeholder="Search Tasks..." />
            {tasks.map(task => (
                <div key={task.id} className="task">
                    <div className="task-checkbox"></div>
                    <div className="task-details">
                        <p className="task-title">{task.title}</p>
                        <p className="task-date">{task.date}</p>
                    </div>
                    <div className={`task-status ${task.status}`}></div>
                </div>
            ))}
        </Box>
    );
}

export default Card;