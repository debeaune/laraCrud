/*import axios from 'axios';
import React, {useState, useEffect} from "react";
import {useNavigate, useParams} from 'react-router-dom';

const endpoint = 'http://localhost:8000/api/client'

const EditClient = () => {

    const [nom, setNom] = useState("")
    const [prenom, setPrenom] = useState("")
    const [adresse, setAdresse] = useState("")
    const [telephone, setTelephone] = useState("")
    const [mail, setMail] = useState("")
    const navigate = useNavigate()
    const {id} = useParams()

    const update = async (e) => {
        e.preventDefault()
        await axios.put(`${endpoint}${id}`, {
            nom:nom,
            prenom:prenom,
            adresse:adresse,
            telephone:telephone,
            mail:mail
        })
        navigate('/')
    }

    useEffect( () => {
        const getClientById = async () => {
            const response = await axios.get(`${endpoint}${id}`)
            setNom(response.data.nom)
            setPrenom(response.data.prenom)
            setAdresse(response.data.adresse)
            setTelephone(response.data.telephone)
            setMail(response.data.mail)
        }
        getClientById()
    }, [id] )

    return (
        <div>
            <h3>Editer les client</h3>
            <form onSubmit={update}>
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

export default EditClient*/