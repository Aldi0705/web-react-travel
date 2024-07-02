import React from "react"
import img from "../images/pricing.jpg"
import Back from "../common/Back"
import { useHistory } from 'react-router-dom';
import swal from 'sweetalert'
import "./contact.css"

const Contact = () => {
  let history = useHistory();

  const buy = () => {
    swal({
        title: "Berhasil Mengirim",
        text: "Terima kasih untuk masukan nya",
        icon: "success",
        button: "Oke",
    });
    history.push("/");
}
  return (
    <>
      <section className='contact mb'>
        <Back name='Contact Us' title='Get Helps & Friendly Support' cover={img} />
        <div className='container'>
          <form className='shadow'>
            <h4>Fillup The Form</h4> <br />
            <div>
              <input type='text' placeholder='Name' />
              <input type='email' placeholder='Email' />
            </div>
            <input type='text' placeholder='Subject' />
            <textarea cols='30' rows='10'></textarea>
            <button onClick={() => buy()}>Submit Request</button>
          </form>
        </div>
      </section>
    </>
  )
}

export default Contact
