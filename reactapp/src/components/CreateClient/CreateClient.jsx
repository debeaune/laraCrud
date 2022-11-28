import axios from 'axios'
import React, {useState} from "react";
import "./CreateClient.css";

const CreateClient = ({toggle, saveClient, setIsVisible}) => {

    const [nom, setNom] = useState("")
    const [prenom, setPrenom] = useState("")
    const [adresse, setAdresse] = useState("")
    const [telephone, setTelephone] = useState("")
    const [mail, setMail] = useState("")
    
    const store = async (e) => {
        e.preventDefault();
        const client = {nom:nom,prenom:prenom,adresse:adresse,telephone:telephone,
        mail:mail}
        saveClient(client);
        setIsVisible(false)
    }

    return (
        <div className="modale">
            <h3>Créer client</h3>
            <button type='button' className='btn btn-primary' onClick={()=>toggle()}>Fermer</button>
            <form onSubmit={(e)=>store(e)}>
                <div className='mb-3'>
                    <label className='form-label'>Nom</label>
                    <input 
                        value={nom}
                        onChange={ (e)=> setNom(e.target.value)}
                        type="text"
                        className='form-control'
                    />
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Prénom</label>
                    <input 
                        value={prenom}
                        onChange={ (e)=> setPrenom(e.target.value)}
                        type="text"
                        className='form-control'
                    />
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Adresse</label>
                    <input 
                        value={adresse}
                        onChange={ (e)=> setAdresse(e.target.value)}
                        type="text"
                        className='form-control'
                    />
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Téléphone</label>
                    <input 
                        value={telephone}
                        onChange={ (e)=> setTelephone(e.target.value)}
                        type="text"
                        className='form-control'
                    />
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Mail</label>
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

export default CreateClient;