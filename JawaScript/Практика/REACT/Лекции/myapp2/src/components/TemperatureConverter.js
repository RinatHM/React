import React, { useState } from 'react';
import { TextField, Grid } from '@mui/material';

const TemperatureConverter = () => {
    const [celsius, setCelsius] = useState('');
    const [fahrenheit, setFahrenheit] = useState('');

    const handleCelsiusChange = (event) => {
        const value = event.target.value;
        setCelsius(value);
        if (value !== '') {
            const convertedFahrenheit = (value * 9/5) + 32;
            setFahrenheit(convertedFahrenheit.toFixed(2));
        } else {
            setFahrenheit('');
        }
    };

    const handleFahrenheitChange = (event) => {
        const value = event.target.value;
        setFahrenheit(value);
        if (value !== '') {
            const convertedCelsius = (value - 32) * 5/9;
            setCelsius(convertedCelsius.toFixed(2));
        } else {
            setCelsius('');
        }
    };

    return (
        <Grid container spacing={2} style={{ padding: '20px' }}>
            <Grid item xs={6}>
                <TextField
                    label="Градусы Цельсия (°C)"
                    type="number"
                    value={celsius}
                    onChange={handleCelsiusChange}
                    variant="outlined"
                    fullWidth
                />
            </Grid>
            <Grid item xs={6}>
                <TextField
                    label="Градусы Фаренгейта (°F)"
                    type="number"
                    value={fahrenheit}
                    onChange={handleFahrenheitChange}
                    variant="outlined"
                    fullWidth
                />
            </Grid>
        </Grid>
    );
};

export default TemperatureConverter;