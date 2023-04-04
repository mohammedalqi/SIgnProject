import React, { useState, Fragment } from "react";
import { Link, Navigate } from "react-router-dom";
import axios from 'axios';

const Login = () => {
    const [email, setEmail] = useState('');
    const [kataSandi, setKataSandi] = useState('');
    const [navigate, setNavigate] = useState(false);
    const [error, setError] = useState ('');

    const ChangeEmail = (e) => {
        const value = e.target.value
        setEmail(value)
        setError('')
    }
    const ChangeKataSandi = (e) => {
        const value = e.target.value
        setKataSandi(value)
        setError('')
    }

    const submitLogin = () => {
        const data = {
            email : email,
            kataSandi: kataSandi
        }
        axios.post('http://localhost:3456/login', data)
        .then(result => {
            if(result){
                localStorage.setItem('token', result.data.token)
                setNavigate(true)
            }
        })
        .catch(e => {
            setError(e.response.data.message)
        })
    }

    return(
        <Fragment>
        {
            navigate && (
                <Navigate to="/dashboard"/>
            )
        }
  <div>
    <meta charSet="UTF-8" />
    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossOrigin="anonymous" />
    <link rel="stylesheet" href="style.css" />
    <title>SIgn - Information System Signature</title>
    {/*--------------------- Main Container ------------------------*/}
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      {/*--------------------- Login Container ------------------------*/}
      <div className="row border rounded-5 p-3 bg-white shadow box-area">
        {/*------------------------- Left Box ---------------------------*/}
        <div className="col-md-6 rounded-4 d-flex justify-content-center align-items-center flex-column left-box" style={{background: '#0778A8'}}>
          <div className="featured-image mb-1">
            <img src="./images/masuk-vector.png" className="img-fluid" style={{width: '300px'}} />
          </div>
          <p className="text-white fs-2" style={{fontFamily: '"Quicksand", Courier, monospace', fontWeight: 600}}>SIgn</p>
          <small className="text-white text-wrap text-center" style={{width: '12rem', fontFamily: '"Quicksand", Courier, monospace'}}>Login</small>
        </div> 
        {/*------------------ ------ Right Box --------------------------*/}
        <div className="col-md-6 right-box">
          <div className="row align-items-center">
            <div className="header-text mb-4" style={{paddingLeft: '1.5rem'}}>
              <h2>Selamat Datang!</h2>
              <p>Masuk sekarang untuk akses sepuasnya semua layanan SIgn!</p>
            </div>
            <div className="message-box" style={{paddingLeft: "1.5rem"}}>
            {
              error && (
               <div className="alert alert-danger">
                  <p>{error}</p>
                </div>
              )
            }
            </div>
            <div className="input-group mb-3" style={{paddingLeft: '1.5rem'}}>
              <input type="text" className="form-control form-control-lg bg-light fs-6" placeholder="Masukkan email" value={email} onChange={ChangeEmail}/>
            </div>
            <div className="input-group mb-1" style={{paddingLeft: '1.5rem'}}>
              <input type="password" className="form-control form-control-lg bg-light fs-6" placeholder="Password" value={kataSandi} onChange={ChangeKataSandi}/>
            </div>
            <div className="input-group mb-5 d-flex justify-content-between">
              {/* <div className="form-check">
                <input type="checkbox" className="form-check-input" id="formCheck" />
                <label htmlFor="formCheck" className="form-check-label text-secondary"><small>Remember Me</small></label>
              </div> */}
              <div className="forgot" style={{paddingLeft: '1.5rem'}}>
                <small><a href="/lupa-password">Lupa Kata Sandi?</a></small>
              </div>
            </div>
            <div className="input-group mb-3" style={{paddingLeft: '1.5rem'}}>
              <button className="btn btn-lg btn-primary w-100 fs-6" style={{background: '#0778A8'}} onClick={submitLogin}>Masuk</button>
            </div>
            <div className="row" style={{paddingLeft: '1.5rem'}}>
              <small>Belum punya akun? <a href="/daftar">Daftar</a></small>
            </div>
          </div>
        </div> 
      </div>
    </div>
  </div>
    </Fragment>
        

        // <Fragment>
        //     {
        //         navigate && (
        //             <Navigate to="/dashboard"/>
        //         )
        //     }
        // <div style={{marginTop:"200px"}}>
        //     <div className = "container">
        //         <div className = "row justify-content-center">
        //             <div className = "col-md-6">
        //                 <div className ="card p-4">
        //                     {
        //                     error && (
        //                         <div className="alert alert-danger">
        //                             <p>{error}</p>
        //                         </div>
        //                     )
        //                 }
        //                     <div className = "card-body">
        //                         <div className = "form-group mb-3">
        //                             <label>Email</label>
        //                             <input type="text" placeholder = "Masukkan email" className="form-control" value={email} onChange={ChangeEmail}></input>
        //                         </div>
        //                         <div className = "form-group mb-3">
        //                             <label>Password</label>
        //                             <input type="password" placeholder = "Masukkan password" className="form-control" value={kataSandi} onChange={ChangeKataSandi}></input>
        //                         </div>
        //                         <button className ="btn btn-primary" onClick={submitLogin}>Login</button>
        //                         <div className ="label-text">
        //                                 <Link to="/daftar">Daftar</Link>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>
        // </Fragment>
    )
}

export default Login