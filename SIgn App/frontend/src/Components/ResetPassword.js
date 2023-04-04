import React, { useState, Fragment } from 'react';
import { Navigate } from "react-router-dom";
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ResetPasssword = (props) => {
    const[kataSandi, setKataSandi] = useState('')
    const[errorPassword, setErrorPassword] = useState('')
    const[confirmPassword, setConfirmPassword] = useState('')
    const[errorConfirmPassword, setErrorConfirmPassword] = useState('')
    const[alert,setAlert] = useState('')
    const [navigate, setNavigate] = useState(false);
    const { token } = useParams();

    const changePassword = (e) => {
        const value = e.target.value
        setKataSandi(value)
        if(!value) {
            setErrorPassword('Kata sandi tidak boleh kosong')
        } else {
            setErrorPassword('')
        }
    }

    const changeConfirmPassword = (e) => {
        const value = e.target.value
        setConfirmPassword(value)
        if(!value) {
            setErrorConfirmPassword('Konfirmasi kata sandi tidak boleh kosong')
        } else if (kataSandi !== value) {
            setErrorConfirmPassword('Kata sandi tidak cocok')
        } else {
            setErrorConfirmPassword('')
        }
    }

    const simpan = () => {
        const data = {
            kataSandi: kataSandi,
            token
        }
        axios.put('http://localhost:3456/resetpassword', data)
        .then(res => {
            if(res){
                setKataSandi('')
                setConfirmPassword('')
                setAlert('Kata sandi berhasil diganti')
                setTimeout(() => {
                    setAlert('')
                }, 3000);
                setNavigate(true)
            }
        })
    }

    return (
        
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
                <img src="../images/forgot-password-vector.png" className="img-fluid" style={{width: '300px'}} />
              </div>
              <p className="text-white fs-2" style={{fontFamily: '"Quicksand", Courier, monospace', fontWeight: 600}}>SIgn</p>
              <small className="text-white text-wrap text-center" style={{width: '12rem', fontFamily: '"Quicksand", Courier, monospace'}}>Reset Kata Sandi</small>
            </div> 
            {/*------------------ ------ Right Box --------------------------*/}
            <div className="col-md-6 right-box">
              <div className="row align-items-center">
                <div className="header-text mb-4" style={{paddingLeft: '1.5rem'}}>
                  <h2>Reset kata sandi Anda!</h2>
                  <p>Jangan khawatir, cukup masukkan kata sandi baru dan Anda bisa kembali menggunakan layanan SIgn.</p>
                </div>
                <div className="message-box" style={{paddingLeft: "1.5rem"}}>
                {
                  alert && (
                   <div className="alert alert-primary">
                      <p>{alert}</p>
                    </div>
                  )
                }
                </div>
                <div className="input-group mb-3" style={{paddingLeft: '1.5rem'}}>
                  <input type="password" className="form-control form-control-lg bg-light fs-6" placeholder="Masukkan kata sandi baru" value={kataSandi} onChange={changePassword}/>
                </div>
                <div className='pass-validation' style={{paddingLeft:'1.5rem'}}>
                {
                                    errorPassword && (
                                        <p className="text-danger">{errorPassword}</p>
                                    )
                                }
                </div>
                <div className="input-group mb-1" style={{paddingLeft: '1.5rem'}}>
                  <input type="password" className="form-control form-control-lg bg-light fs-6" placeholder="Konfirmasi kata sandi baru" value={confirmPassword} onChange={changeConfirmPassword}/>
                </div>
                <div className='pass-validation' style={{paddingLeft:'1.5rem'}}>
                {
                                    errorConfirmPassword && (
                                       <p className="text-danger">{errorConfirmPassword}</p>
                                     )
                               }
                </div>
                <div className="input-group mb-3" style={{paddingTop: '1rem', paddingLeft: '1.5rem'}}>
                  <button className="btn btn-lg btn-primary w-100 fs-6" style={{background: '#0778A8'}} onClick={simpan}>Reset Kata Sandi</button>
                </div>
                <div className="row" style={{paddingLeft: '1.5rem'}}>
                  <small>Kembali <a href="/login">Masuk</a></small>
                </div>
              </div>
            </div> 
          </div>
        </div>
      </div>
    )
}

export default ResetPasssword;