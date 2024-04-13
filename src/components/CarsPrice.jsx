import { useSelector } from "react-redux"

export const CarsPrice = () => {
  const totalPrice = useSelector(({ carsForSale: { data, searchTerm } }) => {
    return data.filter((car) =>
      car.title.toLowerCase().includes(searchTerm.toLowerCase())).reduce((acc, car) => acc + car.price, 0);

  })
  return (
    <div className="container">
      <div className="row">
        <h4 className="card-title text-end">Total Price: {totalPrice}</h4>
      </div>
    </div>
  )
}
