import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Paper, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = () => {
     const [searchTerm, setSearchTerm] = useState('');
     const navigate = useNavigate();

     const onhandleSubmit = (e) => {
          e.preventDefault();

          if (searchTerm) {
               navigate(`/search/${searchTerm}`);

               setSearchTerm('');
          }
     };

     return (
          <Paper
               elevation={2}
               component='form'
               onSubmit={onhandleSubmit}
               sx={{
                    borderRadius: 20,
                    border: '1px solid #e3e3e3',
                    pl: 2,
                    boxShadow: 'none',
                    mr: { sm: 5, xs: 0 },
                    mt: { xs: 2, sm: 0 },
                    mb: { xs: 1.5, sm: 0 },
                    width: { sm: 'auto', xs: '100%' },
               }}
          >
               <input
                    className='search-bar'

                    placeholder='Search...'
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
               />
               <IconButton type='submit' sx={{ p: { sm: '10px', xs: '8px 4px' }, color: 'red' }} aria-label='search'>
                    <SearchIcon />
               </IconButton>
          </Paper>
     );
};

export default SearchBar;