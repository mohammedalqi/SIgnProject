import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import axios from 'axios';

const Regis = () => {
    const [namaLengkap, setNamaLengkap] = useState('');
    // const [pilihStatus, setPilihStatus] = useState("Dosen");
    const [nimNidn, setNimNidn] = useState('');
    const [email, setEmail] = useState('');
    const [kataSandi, setKataSandi] = useState('');
    // const [ulangKataSandi, setUlangKataSandi] = useState('');
    const [alert, setAlert] = useState('');
    const [error, setError] = useState ('');
    const[confirmPassword, setConfirmPassword] = useState('')
    const[errorConfirmPassword, setErrorConfirmPassword] = useState('')



    const changeNamaLengkap = (e) => {
        const value = e.target.value
        setNamaLengkap(value)
        setError('')
    }
    const changeNimNidn = (e) => {
        const value = e.target.value
        setNimNidn(value)
        setError('')
    }
    const changeEmail = (e) => {
        const value = e.target.value
        setEmail(value)
        setError('')
    }
    const changeKataSandi = (e) => {
        const value = e.target.value
        setKataSandi(value)
        setError('')
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

    // const changeUlangKataSandi = (e) => {
    //     const value = e.target.value
    //     setUlangKataSandi(value)
    //     setError('')
    // }
    // const changePilihStatus = (event) => {
    //   setPilihStatus(event.target.value);
    // }
    const klikDaftar =() => {
        const data = {
            namaLengkap :namaLengkap,
            nimNidn: nimNidn,
            email: email,
            kataSandi: kataSandi
        }
        axios.post('http://localhost:3456/daftar', data)
        .then(result => {
            if(result){
                if(result.data){
                    setNamaLengkap('')
                    setNimNidn('')
                    setEmail('')
                    setKataSandi('')
                    setConfirmPassword('')
                    setAlert(result.data.message) 
                    setTimeout(() => {
                    setAlert('')
                }, 2500)} 
            }
        })
        .catch(e => {
            setError(e.response.data.message)
        })
    }

    return(
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
          <img src="../images/register-vector.png" className="img-fluid" style={{width: '300px'}} />
        </div>
        <p className="text-white fs-2" style={{fontFamily: '"Quicksand", Courier, monospace', fontWeight: 600}}>SIgn</p>
        <small className="text-white text-wrap text-center" style={{width: '12rem', fontFamily: '"Quicksand", quicksand, monospace'}}>Daftar</small>
      </div> 
      {/*------------------ ------ Right Box --------------------------*/}
      <div className="col-md-6 right-box">
        <div className="row align-items-center">
          <div className="header-text mb-4" style={{paddingLeft: '2rem'}}>
            <h2>Buat Akun Baru</h2>
            <p>Masukkan data diri Anda untuk melengkapi kebutuhan administrasi Anda.</p>
          </div>
          <div className="input-group mb-3" style={{paddingLeft: '2rem'}}>
            <input type="text" className="form-control form-control-lg bg-light fs-6" placeholder="Nama Lengkap" value={namaLengkap} onChange={changeNamaLengkap}/>
          </div>
          <div className="input-group mb-3" style={{paddingLeft: '2rem'}}>
            <input type="text" className="form-control form-control-lg bg-light fs-6" placeholder="NIM/NIDN" value={nimNidn} onChange={changeNimNidn} />
          </div>
          <div className="radio-button-mahasiswa-dosen" style={{paddingLeft: '2rem', paddingBottom: '1rem'}}>
          <input type="radio" value="Mahasiswa" defaultChecked name="gender"/> Mahasiswa   
          <input style={{marginLeft: '0.8rem'}} type="radio" value="Dosen"name="gender"/> Dosen
          </div> 
                         {/* <div className="form-check form-check-inline mb-3">
                               <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="Dosen" checked={pilihStatus === "Dosen"} onChange={changePilihStatus} />
                               <label className="form-check-label" htmlFor="inlineRadio1">Dosen</label>
                           </div> 
                          <div className="form-check form-check-inline mb-3">
                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="Mahasiswa" checked={pilihStatus === "Mahasiswa"} onChange={changePilihStatus} />
                                <label className="form-check-label" htmlFor="inlineRadio2">Mahasiswa</label>
                            </div> */}
          <div className="input-group mb-3" style={{paddingLeft: '2rem'}}>
            <input type="text" className="form-control form-control-lg bg-light fs-6" placeholder="Alamat Email" value={email} onChange={changeEmail}/>
          </div>
          {/*               <div class="label-text pb-0">
              <p>Status</p>
          </div>*/}
          <div className="input-group mb-5" style={{paddingLeft: '2rem'}}>
            <input type="password" className="form-control form-control-lg bg-light fs-6" placeholder="Kata Sandi" value={kataSandi} onChange={changeKataSandi}/>
            <input type="password" className="form-control form-control-lg bg-light fs-6" placeholder="Ulangi kata sandi" value={confirmPassword} onChange={changeConfirmPassword}/>
          </div>
          <div className="password-information" style={{textAlign: "center"}}>
          {
                 errorConfirmPassword && (
               <p className="text-danger">{errorConfirmPassword}</p>
            )
          }
          </div>
        </div>
        <div style={{paddingLeft: '1.5rem'}}>
        {
            error && (
                <div className="alert alert-danger">
                    <p>{error}</p>
                </div>
                )
            }
        {
           alert && (
                 <div className="alert alert-primary">
                    <p>{alert}</p>
                 </div>
                )
        }
        </div>
        <div className="input-group mb-3" style={{paddingLeft: '1.5rem'}}>
          <button className="btn btn-lg btn-primary w-100 fs-6" onClick={klikDaftar} style={{background: '#0778A8'}}>Daftar</button>
        </div>
        <div className="row" style={{paddingLeft: '1.5rem'}}>
          <small>Sudah punya akun? <a href="/login">Masuk</a></small>
        </div>
      </div>
    </div> 
  </div>
</div>
    )
}

export default Regis