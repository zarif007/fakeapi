import React from 'react'
import { Grid, Input, Slider } from '@mui/material'
import { Box } from '@mui/system';
import { useTheme } from '@emotion/react';

const SliderUi = ({ value, setValue }: { value: number, setValue: React.Dispatch<React.SetStateAction<number>> }) => {

      const theme = useTheme();

      const handleSliderChange = (event: Event, newValue: number | number[]) => {
        const element = event.target as HTMLInputElement
        const value = element.value
        setValue(Number(value));
      };

      return (
        <Box sx={{ width: 400 }}>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs>
              <Slider
                value={typeof value === 'number' ? value : 0}
                onChange={handleSliderChange}
                aria-labelledby="input-slider"
                defaultValue={30}
                valueLabelDisplay="auto"
                step={10}
                marks
                min={1}
                max={400}
                sx={{
                  color: '#3f5efb'
                }}
              />
            </Grid>
          </Grid>
        </Box>
      );
}

export default SliderUi


