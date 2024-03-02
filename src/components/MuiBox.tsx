import { Box, Button } from '@mui/material'
import React from 'react'

const MuiBox = () => {
    return (
        <div>
            <Box sx={{ minHeight: '100vh', backgroundColor: 'red' }}>
                <Button variant='contained'>Click me</Button>
            </Box>
        </div>
    )
}

export default MuiBox