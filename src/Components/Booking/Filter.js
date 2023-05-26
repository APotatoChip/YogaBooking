import FilterListIcon from '@mui/icons-material/FilterList';
import { Button } from '@mui/material';
import { useState } from 'react';
import FilterCard from './FilterCard';

const Filter = () =>{
    const [isShown, setIsShown] = useState(true);

    const handleBookClick = event => {
      setIsShown(current=>!current);
    };
    return(
        <>Filter <Button startIcon={<FilterListIcon/>}/>
        {isShown && <FilterCard/>}</>)
}

export default Filter;