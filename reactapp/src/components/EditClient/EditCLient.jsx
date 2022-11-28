import axios from 'axios';
import React, {useState, useEffect} from "react";
import "./EditClient.css";

const endpoint = 'http://localhost:8000/api'

const EditClient = ({clientId}) => {

    const [nom, setNom] = useState("")
    const [prenom, setPrenom] = useState("")
    const [adresse, setAdresse] = useState("")
    const [telephone, setTelephone] = useState("")
    const [mail, setMail] = useState("")

    const updateClient =  (e,clientId) => {
        e.preventDefault()
            const updatedClient = {
            nom:nom,
            prenom:prenom,
            adresse:adresse,
            telephone:telephone,
            mail:mail
        }
        updateClient(clientId,updatedClient) 
    }

    useEffect( () => {
        const getClientById = async (clientId) => {
            const response = await axios.get(`${endpoint}/clients/${clientId}`)
            setNom(response.data.nom)
            setPrenom(response.data.prenom)
            setAdresse(response.data.adresse)
            setTelephone(response.data.telephone)
            setMail(response.data.mail)
        }
        getClientById(clientId)
    }, [clientId] )

    return (
        <div>
            <h3>Editer les client</h3>
            <form onSubmit={(e)=>updateClient(e,clientId)}>
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

export default EditClient