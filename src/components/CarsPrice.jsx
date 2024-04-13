import { useSelector } from "react-redux"

export const CarsPrice = () => {
  const totalPrice = useSelector(({ carsForSale: { data, searchTerm } }) => {
    return data.filter((car) =>
      car.title.toLowerCase().includes(searchTerm.toLowerCase())).reduce((acc, car) => acc + car.price, 0);

  })
  return (
    <div className="container">
      <div className="row py-3">
        <h4 className="card-title text-end p-3 shadow">Total Price: {totalPrice}</h4>
      </div>
    </div>
  )
}
