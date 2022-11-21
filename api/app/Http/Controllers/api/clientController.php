<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Models\Client;
use Illuminate\Http\Request;

class clientController extends Controller
{
    public function getClients(){
        $clients=Client::all();
        return response()->json([
            'data'=>$clients,
            'status'=>500
        ]);
    }

    public function delete($id){
        $client = Client::find($id);
        $client->delete();
        return response()->json([
            'data'=>$client,
            'msg'=>'Le client a bien été supprimé',
            'status'=>200
        ]);
    }

    public function store(Request $request){

        $newClient = Client::create([
            'nom'=>$request->nom,
            'prenom'=>$request->prenom,
            'adresse'=>$request->adresse,
            'telephone'=>$request->telephone,
            'mail'=>$request->mail
        ]);
        if($newClient){
            return response()->json([
               'data'=>$newClient,
               'status'=>200 
            ]);
        }
        else{
            return response()->json([
                'data'=>'',
                'status'=>500
            ]);
        }
    }

    /*public function update2(Client $client){
        return response()->json([
            'data'=>$client
        ]);
    }*/

    public function update(Request $request,$id){
        $client = Client::find($id);
        $client->nom=$request->nom;
        $client->prenom=$request->prenom;
        $client->adresse=$request->adresse;
        $client->telephone=$request->telephone;
        $client->mail=$request->mail;
        $client->save();
        return response()->json([
            'data'=>$client,
            'status'=>200
        ]);
    }   
}
