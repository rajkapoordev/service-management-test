import { createContext } from 'react'
import { ContextCType } from './ContextProvider.types';

const SearchContext = createContext<ContextCType>({
    searchObj: {groupBy: '', title: ''},
    setSearchObj: () => { }
});

export default SearchContext