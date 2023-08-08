import React from 'react'
import '../index.css'
import Input from '../components/Input'

export default function Contact() {
  return (
    <>
        <div class="contact">
        <h1>CONTACT US</h1>

        <p>Mail at info@grocty.com or React us out at Facebook or Twitter</p>
        <form action="#" class="form-contact p-5">
           
            <Input  placeholder={"Name"} id="name" />
            <Input  type="email" placeholder={"Email"} id="email" />
            <Input  placeholder={"Subject"} id="subject" />
            <Input  placeholder={"Message"} id="message" />
           

            <button type="submit " class="btn btn-secondary boton mt-3">Submit</button>
        </form>

    </div>
</>
  )
}
