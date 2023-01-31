import * as React from 'react';
import dayjs from 'dayjs';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { Paper } from '@mui/material';


export default function Calendario() {
  const [value, setValue] = React.useState(dayjs());

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <Paper>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Stack spacing={3}>
        <DesktopDatePicker
          label="Data"
          inputFormat="DD/MM/YYYY"
          value={value}
          onChange={handleChange}
          renderInput={(params) => <TextField {...params} />}
        />
      </Stack>
    </LocalizationProvider>
    </Paper>
  );
}