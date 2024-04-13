import { useDispatch, useSelector } from "react-redux"
import { changeTitle, changeCompany, changePrice, changeImg } from "../store/slices/formSlice"
import { addCars } from "../store/slices/carsForSaleSlice"

export const CarsForm = () => {
    const formCars = useSelector(store => store.formCars)
    const dispatch = useDispatch()
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(addCars({ title: formCars.title, company: formCars.company, price: formCars.price, img: formCars.img }))
    }
    return (

        <>
            <div className="container shadow py-5 rounded-3">
                <h2 className="card-title pb-3 text-center">Add Cars</h2>
                <form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-sm-2 form-floating mb-3">
                            <input type="text" className="form-control" id="title" placeholder="title" onChange={(e) => dispatch(changeTitle(e.target.value))} value={formCars.title} />
                            <label htmlFor="title" className="ms-2">Title</label>
                        </div>
                        <div className="col-sm-2 form-floating mb-3">
                            <input type="text" className="form-control" id="company" placeholder="company" onChange={(e) => dispatch(changeCompany(e.target.value))} value={formCars.company} />
                            <label htmlFor="company" className="ms-2">Company</label>
                        </div>
                        <div className="col-sm-2 form-floating mb-3">
                            <input type="number" className="form-control" id="price" placeholder="price" onChange={(e) => dispatch(changePrice(parseInt(e.target.value)))} value={formCars.price} />
                            <label htmlFor="price" className="ms-2">Price $</label>
                        </div>
                        <div className="col-sm-2 form-floating mb-3">
                            <input type="text" className="form-control" id="img" placeholder="img" onChange={(e) => dispatch(changeImg(e.target.value))} value={formCars.img} />
                            <label htmlFor="img" className="ms-2">Cars image link</label>
                        </div>
                        <div className="col-sm-1 form-floating d-flex justify-content-end ms-auto align-items-center">
                            <button className="btn btn-success">Add</button>
                        </div>
                    </div>
                </form>
            </div>


        </>
    )
}
