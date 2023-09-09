'use client';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { type SelectChangeEvent } from '@mui/material/Select';
import { useState } from 'react';

const yearFilter = [
  { value: '', year: 'All' },
  { value: '2010', year: '2010' },
  { value: '2011', year: '2011' },
  { value: '2012', year: '2012' },
  { value: '2013', year: '2013' },
  { value: '2014', year: '2014' },
  { value: '2015', year: '2015' },
  { value: '2016', year: '2016' },
  { value: '2017', year: '2017' }
];

interface Prop {
  onFilter: (year: string) => void;
}

function UiFilter({ onFilter }: Prop): JSX.Element {
  const [age, setAge] = useState('');

  const handleChange = (event: SelectChangeEvent): void => {
    onFilter(event.target.value);
    setAge(event.target.value);
  };
  return (
    <div style={{ width: '90%', marginBottom: 20 }}>
      <FormControl sx={{ width: '300px' }}>
        <InputLabel sx={{ color: 'black' }} id='demo-simple-select-label'>
          Año
        </InputLabel>
        <Select labelId='demo-simple-select-label' id='demo-simple-select' value={age} label='Age' onChange={handleChange}>
          {yearFilter.map((item) => (
            <MenuItem key={item.value} value={item.value} sx={{ color: 'black' }}>
              {item.year}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}

export default UiFilter;
