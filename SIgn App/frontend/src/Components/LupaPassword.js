import React, { useState } from 'react';
import axios from 'axios'

const LupaPassword = () => {
    const[email, setEmail] = useState('');
    const[error, setError] = useState('');
    const[alert, setAlert] = useState('');
    
    const changeEmail = (e) => {
        setEmail(e.target.value)
        setError('')
    } 


    const kirim = () => {
        if(!email) {
            setError('email wajib diisi');
        } else {
            axios.put('http://localhost:3456/forgotpassword', { email: email})
            .then(res => {
                setEmail('')
                setAlert('Silakan cek email Anda')
                setTimeout(() => {
                    setAlert('')
                }, 3000)
            })
        }
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
        <div className="featured-image mb-3">
          <img src="../images/lupakatasandi-vector.png" className="img-fluid" style={{width: '200px'}} />
        </div>
        <p className="text-white fs-2" style={{fontWeight: 600}}>SIgn</p>
        <small className="text-white text-wrap text-center" style={{width: '17rem'}}>Lupa Kata Sandi</small>
      </div> 
      {/*------------------ ------ Right Box --------------------------*/}
      <div className="col-md-6 right-box">
        <div className="row align-items-center">
          <div className="header-text mb-4" style={{paddingLeft: '1.5rem'}}>
            <h2>Lupa Kata Sandi?</h2>
            <p>Silakan masukkan alamat email Anda di bawah ini dan tekan tombol "Reset Kata Sandi"</p>
          </div>
          <div className='alert-shape' style={{paddingLeft: '1.5rem'}}>
          {
                    alert && (
                        <div className="alert alert-primary">
                            <p>{alert}</p>
                         </div>
                    )
            }
          {
                    error && (
                        <div className="alert alert-danger">
                            <p>{error}</p>
                         </div>
                    )
            }
            </div>
          <div className="input-group mb-3" style={{paddingLeft: '1.5rem'}}>
            <input type="text" className="form-control form-control-lg bg-light fs-6" placeholder="Alamat email" value={email} onChange={changeEmail}/>
          </div>
          <div className="input-group mb-3" style={{paddingLeft: '1.5rem'}}>
            <button className="btn btn-lg btn-primary w-100 fs-6" onClick={kirim} style={{background: '#0778A8'}}>Reset Kata Sandi</button>
          </div>
          <div className="row" style={{paddingLeft: '1.5rem'}}>
            <small>Kembali ke menu <a href="/login">Masuk</a></small>
          </div>
        </div>
      </div> 
    </div>
  </div>
</div>
    )
}

export default LupaPassword;