import React, {useEffect, useState} from 'react'
import CreateClient from '../CreateClient/CreateClient'
import axios from 'axios'
import EditClient from '../EditClient/EditCLient'


const endpoint = 'http://localhost:8000/api'

const ShowClient = () => {

    const [clients, setClients] = useState([])
    const [loading,setLoading] = useState(true)
    const [isVisible, setIsVisible] = useState(false)
    const [isActive, setIsActive] = useState(false)
    const [clientId,setClientId] = useState(0)

    useEffect( () =>{
        getAllClients()
    },[])

    const updateClient = async (id,client) => {
        const response = await axios.put(`${endpoint}/clients/${id}`, client)
        setClients([...clients])
    }

    const saveClient = async (client) => {
        const response = await axios.post(`${endpoint}/clients`, client)
        console.log(response.data);
        setClients([...clients,response.data]);
    }

    const getAllClients = async () =>{
        await axios.get(`${endpoint}/clients`)
        .then(res=>{
            console.log(res.data.data);
            setClients(res.data.data);
            setLoading(false)
        })
    }

    const deleteClient = async (id) => {
        await axios.delete(`${endpoint}/clients/delete/${id}`)
        .then(res=>{
            getAllClients()
        })
    }

    const toggle =() => {
        setIsVisible(!isVisible);
    }

    const toggleActive =(id) => {
        setIsActive(!isActive);
        setClientId(id)
    }

    const clientsListe = () => {
        return loading ? <div>Chargement</div> : (<div className="container table-container">
            <button className="btn btn-primary mb-2 mt-2" onClick={()=>toggle()}>Créer un client</button>
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
                            <td><button className="btn btn-danger btn-sm" onClick={()=>deleteClient(client.id)}>Supprimer</button><button className="btn btn-info btn-sm" onClick={()=>toggleActive(client.id)} >Modifier</button></td>
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
                {isVisible && <CreateClient
                    toggle={toggle}
                    saveClient={saveClient}
                    setIsVisible={setIsVisible}
                />}
                {isActive && <EditClient
                   updateClient ={updateClient} 
                   clientId={clientId}
                />}
            </div>
        </div>

    )  
}

export default ShowClient