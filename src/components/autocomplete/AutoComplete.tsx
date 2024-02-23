import { useContext, useState } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { categoryData } from '../../utils/dataSet';
import SearchContext from '../context/context';
import { useNavigate } from "react-router-dom";
import './autoComplete.scss';

export default function AutocompleteComponent() {

  const { searchObj, setSearchObj } = useContext(SearchContext)

  const options = categoryData.map((option) => {
    return option?.services?.map(item => ({ groupBy: option?.category, title: item }));
  });

  const [showLable, setShowLabel] = useState<boolean>(true);

  const navigate = useNavigate();

  return (
    <div className='search-main-wrap'>
      <Autocomplete
        freeSolo
        id="grouped-demo"
        options={options.flatMap(i => i).sort((a, b) => -b.groupBy.localeCompare(a.groupBy))}
        groupBy={(option) => option.groupBy}
        getOptionLabel={(option: any) => option.title}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label={(showLable && !searchObj) ? "What do you need help with?" : ""} />}
        onChange={(event: React.SyntheticEvent, value: any) => { setSearchObj(typeof value === 'string' ? ({ title: value, groupBy: '' }) : value) }}
        value={searchObj || { title: '', groupBy: '' }}
        onFocus={() => { setShowLabel(false) }}
        onBlur={() => { setShowLabel(true) }}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            e.preventDefault();
            navigate("/searched-result");
          }
        }}
      />
      <svg className='search-icon' width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.8868 2C16.8548 2 20.8868 6.032 20.8868 11C20.8868 15.968 16.8548 20 11.8868 20C6.9188 20 2.8868 15.968 2.8868 11C2.8868 6.032 6.9188 2 11.8868 2ZM11.8868 18C15.7543 18 18.8868 14.8675 18.8868 11C18.8868 7.1325 15.7543 4 11.8868 4C8.01929 4 4.8868 7.1325 4.8868 11C4.8868 14.8675 8.01929 18 11.8868 18ZM20.3721 18.0711L23.2005 20.8995L21.7863 22.3137L18.9579 19.4853L20.3721 18.0711Z" fill="#05C8C6" />
      </svg>
    </div>
  );
}