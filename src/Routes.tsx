import { Routes as RoutesComponent, Route } from 'react-router-dom'
import { Home } from './pages/home/Home'
import { SearchedResult } from './pages/searchedResult/SearchedResult'

const Routes = () => {
    return (
        <RoutesComponent>
            <Route path='/' element={<Home />} />
            <Route path='/searched-result' element={<SearchedResult />} />
        </RoutesComponent>
    )
}

export default Routes