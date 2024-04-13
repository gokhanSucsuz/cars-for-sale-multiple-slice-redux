import { useDispatch, useSelector } from "react-redux"
import { deleteCar } from "../store/slices/carsForSaleSlice"

export const CarsList = () => {
  const { carsForSale } = useSelector(({ carsForSale: { data, searchTerm } }) => {
    const filteredCars = data.filter((car) =>
      car.title.toLowerCase().includes(searchTerm.toLowerCase()));
    return { carsForSale: filteredCars }
  })
  const dispatch = useDispatch()
  return (
    <>
      <div className="container">
        <div className="row gap-2 ">
          {
            carsForSale.map((data) =>
              <div key={data.id} className="card shadow py-2" style={{ width: '18rem' }}>
                <img src={data.img} className="card-img-top img-thumbnail p-2" style={{ maxHeight: 150 }} alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Name: {data.title}</h5>
                  <p className="card-text">Company: {data.company}</p>
                  <p className="card-text">Price: {data.price}</p>
                  <button className="btn btn-sm btn-danger" onClick={() => dispatch(deleteCar(data.id))}>Delete</button>
                </div>

              </div>
            )
          }
        </div>
      </div>
    </>
  )
}
