import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router";

export default function AddTour() {
    const navigate = useNavigate();
    const [tour, setTour] = useState({
        name: "",
        price: "",
        stock: "",
        description: "",
    });
    const onChangeHandled = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setTour({ ...tour, [name]: value });
    };
    return (
        <div className="container w-15 shadow-sm p-3 mb-5 bg-body rounded mt-5">
            <h1>Thêm tour mới</h1>
            <input
                type="text"
                placeholder="Tên Tour"
                name="title"
                value={tour.title}
                className="form-control"
                onChange={onChangeHandled}
            />
            <br />
            <input
                type="text"
                placeholder="Giá Tour"
                name="price"
                value={tour.price}
                className="form-control"
                onChange={onChangeHandled}
            />
            <br />
            <textarea cols={100} rows={5}
                type="text"
                placeholder="Mô tả"
                name="description"
                value={tour.description}
                className="form-control"
                onChange={onChangeHandled}
            />
            <br />
            <button
                type="button"
                className="btn btn-outline-primary"
                onClick={() => {
                    axios.post("http://localhost:3000/tuors", tour);
                    navigate("/");
                }}
            >
                Thêm mới
            </button>
            <button
                type="button"
                className="btn btn-outline-danger"
                onClick={() => {
                    navigate("/")
                }}
            >
                Back
            </button>
        </div>
    );
}