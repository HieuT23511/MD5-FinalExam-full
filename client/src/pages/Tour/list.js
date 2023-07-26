import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import {minWidth} from "@mui/system";

export default function ListProduct() {
    const navigate = useNavigate();
    const [list, setList] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:3000/tuors").then((response) => {
            setList(response.data);
        });
    }, [list]);
    const DeleteStudent = (id) => {
        if (window.confirm("Bạn có chắc muốn xóa!")) {
            axios.delete(`http://localhost:3000/tuors/${id}`).then(() => {
                axios.get("http://localhost:3000/tuors").then((res) => {
                    setList(res.data);
                });
            });
        }
    };
    return (
        <>
            <div className="container" >
                <div className="mt-2">
                    <table className="table table-striped">
                        <thead>
                        <tr style={{textAlign:"center"}}>
                            <th scope="col">Tên tour</th>
                            <th scope="col">Giá</th>
                            <th scope="col">Mô tả</th>
                        </tr>
                        </thead>
                        <tbody>
                        {list.map((item, index) => (
                            <tr key={index}>
                                <td style={{minWidth:100}}>
                                    <Link to={`/detail/${item.id}`}>
                                        <span className="">{item.title}</span>
                                    </Link>
                                </td>
                                <td>{item.price}</td>
                                <td>{item.description}</td>
                                <td style={{minWidth:250}}>
                                    <button
                                        type="button"
                                        className="btn btn-outline-danger me-3"
                                        onClick={() => {
                                            DeleteStudent(`${item.id}`);
                                        }}
                                    >
                                        Xoá
                                    </button>
                                    <button
                                        type="button"
                                        className="btn btn-outline-info"
                                        onClick={() => {
                                            navigate(`/tuors/${item.id}`);
                                        }}
                                    >
                                        Cập Nhật
                                    </button>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}