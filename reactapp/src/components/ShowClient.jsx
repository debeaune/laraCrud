import React, {useEffect, useState} from 'react'
import axios from 'axios'

import {Link} from 'react-router-dom'

const endpoint = 'http://localhost:8000/api'

const ShowClient = () => {

    const [clients, setClients] = useState([])
    const [loading,setLoading] = useState(true)

    useEffect( () =>{
        getAllClients()
    },[])

    const getAllClients = async () =>{
        await axios.get(`${endpoint}/clients`)
        .then(res=>{
            console.log(res.data.data);
            setClients(res.data.data);
            setLoading(false)
        })
    }

    const createClient = () => {

        const [nom, setNom] = useState("")
        const [prenom, setPrenom] = useState("")
        const [adresse, setAdresse] = useState("")
        const [telephone, setTelephone] = useState("")
        const [mail, setMail] = useState("")
    
        const store = async (e) => {
            e.preventDefault()
            await axios.post(`${endpoint}/clients`)
            .then(res=>(
                setNom(res.data.data.nom),
                setPrenom(res.data.data.prenom),
                setAdresse(res.data.data.adresse),
                setTelephone(res.data.data.telephone),
                setMail(res.data.data.mail)
            ))
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
    
    const updateClient = async (e) => {
        e.preventDefault()
        await axios.put(`${endpoint}/clients/${id}`)
            .then(res=>{
            setNom(res.data.data.nom),
            setPrenom(res.data.data.prenom),
            setAdresse(res.data.data.adresse),
            setTelephone(res.data.data.telephone),
            setMail(res.data.data.mail)
        })
    }

    const deleteClient = async (id) => {
        await axios.delete(`${endpoint}/clients/delete/${id}`)
        .then(res=>{
            getAllClients()
        })
    }

    const clientsListe = () => {
        return loading ? <div>Chargement</div> : (<div className="container table-container">
            <button className="btn btn-primary mb-2 mt-2" onClick={()=>createClient(client.id)}>Créer un client</button>
            <table className="table table-responsive table-striped table-bordered">
                <thead>
                <tr className="tableHeader">
                    <td>Nom</td>
                    <td>Prénom</td>
                    <td>Adresse</td>
                    <td>Téléphone</td>
                    <td>Mail</td>
                    <td>Actions</td>
                </tr>
                </thead>
                <tbody>
                    { clients.map( (client ) =>
                        {return (<tr key={client.id}>
                            <td>{client.nom}</td>
                            <td>{client.prenom}</td>
                            <td>{client.adresse}</td>
                            <td>{client.telephone}</td>
                            <td>{client.mail}</td>
                            <td><button className="btn btn-danger btn-sm" onClick={()=>deleteClient(client.id)}>Supprimer</button><button className="btn btn-info btn-sm" onClick={()=>updateClient(client.id)}>Modifier</button></td>
                            </tr>)}
                    )}
                </tbody>
            </table>

        </div>)
    }

    return(
        <div>
            <div>
                {clientsListe()}
            </div>

        </div>

    )  
}

export default ShowClient