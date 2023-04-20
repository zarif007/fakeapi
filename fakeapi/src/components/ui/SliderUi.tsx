import React from 'react'
import { Grid, Input, Slider } from '@mui/material'
import { Box } from '@mui/system';
import { useTheme } from '@emotion/react';

const SliderUi = ({ value, setValue }: { value: string | number | (string | number)[], setValue: React.Dispatch<React.SetStateAction<string | number | (string | number)[]>> }) => {

      const theme = useTheme();

      const handleSliderChange = (event: Event, newValue: number | number[]) => {
        setValue(newValue);
      };
    
      const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value === '' ? '' : Number(event.target.value));
      };
    
      // const handleBlur = () => {
      //   if (value < 1) {
      //     setValue(1);
      //   } else if (value > 400) {
      //     setValue(100);
      //   }
      // };
    
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
                  color: theme === 'light' ? 'black' : 'white'
                }}
              />
            </Grid>
            <Grid item>
              <Input
                value={value}
                size="small"
                onChange={handleInputChange}
                sx={{
                  color: theme === 'light' ? 'black' : 'white'
                }}
                // onBlur={handleBlur}
                inputProps={{
                  step: 10,
                  min: 0,
                  max: 100,
                  type: 'number',
                  'aria-labelledby': 'input-slider',
                }}
              />
            </Grid>
          </Grid>
        </Box>
      );
}

export default SliderUi


