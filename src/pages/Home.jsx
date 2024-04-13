import { CarsForm } from '../components/CarsForm'
import { CarsList } from '../components/CarsList'
import { CarsPrice } from '../components/CarsPrice'
import { CarsSearch } from '../components/CarsSearch'

export const Home = () => {
    return (
        <div className='container p-3'>
            <CarsForm />
            <CarsSearch />
            <CarsList />
            <CarsPrice />
        </div>
    )
}
