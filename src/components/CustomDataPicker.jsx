import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import TextField from '@mui/material/TextField';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const CustomDatePicker = ({ label }) => {
    const [selectedDate, setSelectedDate] = useState(null);

    const theme = createTheme({
        palette: {
            primary: {
                main: '#665CD1',
            },
        },
    });

    return (
        <ThemeProvider theme={theme}>
            <DatePicker
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
                dateFormat="dd.MM.yyyy"
                isClearable
                customInput={<TextField id="standard-basic" label={label} variant="standard" color='secondary' focused />}
                withPortal
                popperModifiers={{
                    offset: {
                        enabled: true,
                        offset: '-10px, 0px',
                    },
                    preventOverflow: {
                        enabled: true,
                        escapeWithReference: false,
                        boundariesElement: 'viewport',
                    },
                }}
            />
        </ThemeProvider>
    );
};

export default CustomDatePicker;
