import React, { useState } from "react";
import {useNavigate, Link } from "react-router-dom";
import Navbar from '../components/Navbar';
export default function Signup() {
    const [credentials, setcredentials] = useState({name:"",email:"",password:"",geolocation:""})
    
    // new
    // let [address, setAddress] = useState("");
    // let navigate = useNavigate()


    // new
  //   const handleClick = async (e) => {
  //     e.preventDefault();
  //     let navLocation = () => {
  //       return new Promise((res, rej) => {
  //         navigator.geolocation.getCurrentPosition(res, rej);
  //       });
  //     }
  //     let latlong = await navLocation().then(res => {
  //       let latitude = res.coords.latitude;
  //       let longitude = res.coords.longitude;
  //       return [latitude, longitude]
  //     })
  //     let [lat, long] = latlong
  //   console.log(lat, long)
  //   const response = await fetch("http://localhost:5000/api/auth/getlocation", {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify({ latlong: { lat, long } })

  //   });
  //   const { location } = await response.json()
  //   console.log(location);
  //   setAddress(location);
  //   setcredentials({ ...credentials, [e.target.name]: location })
  // }



    // old
    const handleSubmit = async(e)=>{
        e.preventDefault();
        console.log(JSON.stringify({name:credentials.name, email:credentials.email, password:credentials.password, location:credentials.geolocation}))
        const response = await fetch("http://localhost:5000/api/creatuser",{
            method: 'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify({name:credentials.name, email:credentials.email, password:credentials.password, location:credentials.geolocation})
        });
        const json = await response.json()
        console.log(json);


        //old
        if(!json.success){
            alert("Enter Valid Credentials")
        }
        

        //new
        // if (json.success) {
        //   //save the auth toke to local storage and redirect
        //   localStorage.setItem('token', json.authToken)
        //   navigate("/login")
    
        // }
        // else {
        //   alert("Enter Valid Credentials")
        // }
    }



    //old
const onChange =(e)=>{
    setcredentials({...credentials,[e.target.name]:e.target.value})
}
  return (
    <>
     <div style={{ backgroundImage: 'url("https://images.pexels.com/photos/1565982/pexels-photo-1565982.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")', backgroundSize: 'cover',height: '100vh' }}>
      <div>
      <Navbar />
      </div>
    <div className="container">
      <form className='w-50 m-auto mt-5 border bg-dark border-success rounded text-white' onSubmit={handleSubmit}>
      <div className="m-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            name="name" value={credentials.name}
            onChange={onChange} aria-describedby="emailHelp"
          />
          
        </div>
        <div className="m-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control" name="email" value={credentials.email} onChange={onChange}
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          </div>
         {/* <div className="m-3">
              <label htmlFor="address" className="form-label">Address</label>
              <fieldset>
                <input type="text" className="form-control" name='address' placeholder='"Click below for fetching address"' value={address} onChange={(e)=>setAddress(e.target.value)} aria-describedby="emailHelp" />
              </fieldset>
            </div>
            </div>
            <div className="m-3">
              <button type="button" onClick={handleClick} name="geolocation" className=" btn btn-success">Click for current Location </button>
            </div>
            <div className="m-3">
              <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
              <input type="password" className="form-control" value={credentials.password} onChange={onChange} name='password' />
            </div> */}



        <div className="m-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control" name="password" value={credentials.password} onChange={onChange}
            id="exampleInputPassword1"
          />
        </div>
        <div className="m-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Address
          </label>
          <input
            type="text"
            className="form-control" name="geolocation" value={credentials.geolocation} onChange={onChange}
            id="exampleInputPassword1"
          />
        </div>
        
        <button type="submit" className="m-3 btn btn-success">
          Submit
        </button>
        <Link to="/login" className="m-3 mx-1 btn btn-danger">Already a User</Link>
      </form>
      </div>
      </div>
    </>
  );
}
