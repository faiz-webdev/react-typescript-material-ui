import React, { useState } from 'react'
import { InputAdornment, Stack, TextField } from "@mui/material"

const MuiTextField = () => {
    const [value, setValue] = useState<string>('');

    return (
        <Stack spacing={4}>
            <Stack direction={'row'} spacing={2}>
                <TextField label="name" variant='outlined' />
                <TextField label="name" variant='filled' />
                <TextField label="name" variant='standard' />
            </Stack>

            <Stack direction={'row'} spacing={2}>
                <TextField label="Small secondary" size='small' color='secondary' />
            </Stack>

            <Stack direction={'row'} spacing={2}>
                <TextField label="Form Input"
                    required value={value}
                    onChange={e => setValue(e.target.value)}
                    error={!value}
                    helperText={!value ? 'Required' : 'Do not share your password with anyone'}
                />
                <TextField label="Password" type='password' disabled
                    helperText="Do not share your password with anyone" />

                <TextField label="Readonle" InputProps={{ readOnly: true }} />
            </Stack>

            <Stack direction={'row'} spacing={2}>
                <TextField label="Amount"
                    InputProps={{
                        startAdornment:
                            <InputAdornment position='start'>$</InputAdornment>
                    }} />
                <TextField label="Weight" InputProps={{
                    endAdornment:
                        <InputAdornment position='end'>Kg</InputAdornment>
                }} />
            </Stack>
        </Stack>
    )
}

export default MuiTextField