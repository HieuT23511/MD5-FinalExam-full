import axios from "axios";
import {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router";

export default function DetailTour() {
    const navigate = useNavigate();
    const {id} = useParams();
    const [tour, setTour] = useState({
        title: "",
        price: "",
        description: "",
    });
    useEffect(() => {
        axios.get(`http://localhost:3000/tuors/${id}`).then((response) => {
            setTour(response.data);
        });
    }, [id]);
    return (
        <div className="container w-15 justify-content-around shadow-sm p-3 mb-2 bg-body rounded mt-2">
            <h1>Chi tiết Tour</h1>
            <table className="table">
                <thead>
                </thead>
                <tbody>
                <tr>
                    <th scope="col">Tên Tour</th>
                    <td>{tour.title}</td>
                </tr>
                <tr>
                    <th scope="col">Giá</th>
                    <td>{tour.price}</td>
                </tr>
                <tr>
                    <th scope="col">Mô tả</th>
                    <td><p>{tour.description}`</p></td>
                </tr>
                </tbody>
                <tr>
                    <td>
                        <button
                            type="button"
                            className="btn btn-outline-danger"
                            onClick={() => {
                                navigate("/")
                            }}
                        >
                            Back
                        </button>
                    </td>
                </tr>
            </table>
        </div>
    );
}