import React, { Component } from 'react'
import { list } from '../../data/Data'
import swal from 'sweetalert'
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

const OneItem = () => {
    const id = useParams()
    let history = useHistory();

    const back = () => {
        history.push("/");
    }

    const buy = (nama) => {
        swal({
            title: "Berhasil DiPesan",
            text: nama + " Berhasil DiPesan",
            icon: "success",
            button: "Oke",
        });
        history.push("/");
    }
    return (
        <div className='container'>
            {
                list
                    .filter(list => list.id == id.id)
                    .map(list =>
                        <div>
                            <div className="container ">
                                <div className="row d-flex justify-content-center mt-4">
                                    <h3 onClick={back}>Back</h3>
                                    <div className="col-md-11 mb-5 mt-3  text-dark" style={{ border: '5px #27AE60 solid ' }}>
                                        <div className="row p-4">
                                            <div className="col-md-7">
                                                <img src={list.cover} width='600' alt="" />
                                            </div>
                                            <div className="col">
                                                <div className="title-product fs-3 fw-bold mb-4">
                                                    {list.name}
                                                </div>
                                                <div className="price-product fs-5 fw-bold mb-5">
                                                    {list.location}
                                                </div>
                                                <div className="deskripsi-product fs-5 mb-4">
                                                    <div className="text fs-5">
                                                        {list.category}
                                                    </div>
                                                </div>

                                                <div className="deskripsi-product fs-5 mb-4">
                                                    <div className="text fs-5">
                                                        {list.price}
                                                    </div>
                                                </div>

                                                <div className="total-product fs-5 fw-bold mb-5">
                                                    <buttom className='btn btn-success p-3 text-decoration-none' onClick={() => buy(list.name)} >Buy</buttom>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>


                            </div>

                        </div >



                    )
            }

        </div>
    )
}

export default OneItem



