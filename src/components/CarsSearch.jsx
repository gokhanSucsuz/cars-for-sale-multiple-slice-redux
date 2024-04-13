import { useDispatch, useSelector } from "react-redux"
import { searchCar } from "../store/slices/carsForSaleSlice"

export const CarsSearch = () => {
  const carsForSale = useSelector(store => store.carsForSale)
  const dispatch = useDispatch()

  return (
    <>
      <div>CarsSearch</div>
      <div className="col-sm-2 form-floating mb-3">
        <input type="text" className="form-control" id="title" placeholder="title" onChange={(e) => dispatch(searchCar(e.target.value))} value={carsForSale.searchTerm} />
        <label htmlFor="title" className="ms-2">Title</label>
      </div>
    </>
  )
}
