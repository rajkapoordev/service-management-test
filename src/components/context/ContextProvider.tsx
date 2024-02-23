import { useState } from 'react'
import { ContextCType, PropsType } from './ContextProvider.types';
import SearchContext from './context'

const ContextProvider = ({ children }: PropsType) => {
    const [searchObj, setSearchObj] = useState<ContextCType>();
    return (
        <SearchContext.Provider value={{ searchObj, setSearchObj }}>
            {children}
        </SearchContext.Provider>
    );
}
export default ContextProvider