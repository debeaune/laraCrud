/*import axios from 'axios'
import React, {useState} from "react";
import {useNavigate} from 'react-router-dom'

const endpoint = 'http://localhost:8000/api/client'

const CreateClient = () => {

    const [nom, setNom] = useState("")
    const [prenom, setPrenom] = useState("")
    const [adresse, setAdresse] = useState("")
    const [telephone, setTelephone] = useState("")
    const [mail, setMail] = useState("")
    const navigate = useNavigate()

    const store = async (e) => {
        e.preventDefault()
        await axios.post(endpoint, {nom:nom, prenom:prenom, adresse:adresse, telephone:telephone,
        mail:mail})
        navigate('/')
    }

    return (
        <div>
            <h3>CreateClient</h3>
            <form onSubmit={store}>
                <div className='mb-3'>
                    <label className='form-label'></label>
                    <input 
                        value={nom}
                        onChange={ (e)=> setNom(e.target.value)}
                        type="text"
                        className='form-control'
                    />
                </div>
                <div className='mb-3'>
                    <label className='form-label'></label>
                    <input 
                        value={prenom}
                        onChange={ (e)=> setPrenom(e.target.value)}
                        type="text"
                        className='form-control'
                    />
                </div>
                <div className='mb-3'>
                    <label className='form-label'></label>
                    <input 
                        value={adresse}
                        onChange={ (e)=> setAdresse(e.target.value)}
                        type="text"
                        className='form-control'
                    />
                </div>
                <div className='mb-3'>
                    <label className='form-label'></label>
                    <input 
                        value={telephone}
                        onChange={ (e)=> setTelephone(e.target.value)}
                        type="text"
                        className='form-control'
                    />
                </div>
                <div className='mb-3'>
                    <label className='form-label'></label>
                    <input 
                        value={mail}
                        onChange={ (e)=> setMail(e.target.value)}
                        type="text"
                        className='form-control'
                    />
                </div>
                <button type='submit' className='btn btn-primary'>Store</button>
            </form>
        </div>
    )
}

export default CreateClient*/