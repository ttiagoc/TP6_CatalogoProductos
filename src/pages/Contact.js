import React from 'react'
import '../index.css'


export default function Contact() {
  return (
    <>
        <div class="contact">
        <h1>CONTACT US</h1>

        <p>Mail at info@grocty.com or React us out at Facebook or Twitter</p>
        <form action="#" class="form-contact p-5">
            <div class="form-group pt-3">
                <input type="email" class="form-control" placeholder="Name" id="email" />
            </div>
            <div class="form-group pt-3">
                <input type="email" class="form-control" placeholder="Email" id="email"/>
            </div>
            <div class="form-group pt-3">
                <input type="email" class="form-control" placeholder="Subject" id="email"/>
            </div>
            <div class="form-group pt-3">
                <input type="email" class="form-control" placeholder="Message" id="email"/>
            </div>

            <button type="submit " class="btn btn-secondary boton mt-3">Submit</button>
        </form>

    </div>
</>
  )
}
