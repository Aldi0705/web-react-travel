import React from 'react'
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import swal from 'sweetalert'
import { price } from "../../data/Data"

const Oneprice = () => {
    let history = useHistory();
    const id = useParams()

    const back = () => {
        history.push("/");
    }
    const buy = (plan) => {
        swal({
            title: "Berhasil DiPesan",
            text: plan + " Berhasil DiPesan",
            icon: "success",
            button: "Oke",
        });
        history.push("/");
    }
    return (
        <div className='container'>
            {
                price
                    .filter(pricing => pricing.id == id.id)
                    .map(pricing =>
                        <div>
                            <div className="container ">
                                <div className="row d-flex justify-content-center mt-4">
                                    <h3 onClick={back}>Back</h3>
                                    <div className="col-md-11 mb-5 mt-3  text-dark" style={{ border: '5px #27AE60 solid ' }}>
                                        <div className="row p-4">
                                            <div className="col-md-7">

                                                {pricing.list.map((list2, index) => {
                                                    <div><h1>{list2.icons}</h1> </div>
                                                })}

                                            </div>
                                            <div className="col">
                                                <div className="title-product fs-3 fw-bold mb-4">
                                                    {pricing.plan}
                                                </div>
                                                <div className="price-product fs-5 fw-bold mb-5">
                                                    ${pricing.price}
                                                </div>
                                                <div className="deskripsi-product fs-5 mb-4">
                                                    <div className="text fs-5">
                                                        {/* {list.category} */}
                                                    </div>
                                                </div>

                                                <div className="deskripsi-product fs-5 mb-4">
                                                    <div className="text fs-5">
                                                        {/* {list.price} */}
                                                    </div>
                                                </div>

                                                <div className="total-product fs-5 fw-bold mb-5">
                                                    <buttom className='btn btn-success p-3 text-decoration-none' onClick={() => buy(price.plan)}>Buy</buttom>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>


                            </div>

                        </div >



                    )
            }

        </div >
    )
}

export default Oneprice