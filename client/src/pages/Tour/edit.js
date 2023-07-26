import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import axios from "axios";
export default function EditTour() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [tour, setTour] = useState({
        title: "",
        price: "",
        description: "",
    });
    useEffect(() => {
        axios.get(`http://localhost:3000/tuors/${id}`).then((res) => {
            setTour(res.data);
        });
    }, [id]);
    const onChangeHandled = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setTour({ ...tour, [name]: value });
    };
    return (
        <div className="container w-15 justify-content-around shadow-sm p-3 mb-2 bg-body rounded mt-2">
            <h1>Chỉnh sửa Tour</h1>
            Tên tour: <input
                type="text"
                className="form-control"
                name="title"
                value={tour.title}
                onChange={onChangeHandled}
            />
            <br />
            Giá tour: <input
                type="text"
                className="form-control"
                name="price"
                value={tour.price}
                onChange={onChangeHandled}
            />
            <br />
            Mô tả: <textarea cols={100} rows={5}
                className="form-control"
                name="description"
                value={tour.description}
                onChange={onChangeHandled}
            />
            <br />
            <button
                type="button"
                className="btn btn-outline-primary"
                onClick={() => {
                    axios.put(`http://localhost:3000/tuors/${id}`, tour);
                    navigate("/");
                }}
            >
                Update
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