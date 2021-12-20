import Client from '../models/ClientModel';

export async function createClient(req, res){
    try{

        const {first_name, last_name, phone_number, cell_phone, email, address1, address2 } = req.body;
        let newClient = await Client.create({
            first_name, 
            last_name, 
            phone_number, 
            cell_phone, 
            email, 
            address1, 
            address2
        },{
            fields:['first_name', 'last_name', 'phone_number', 'cell_phone', 'email', 'address1', 'address2']
        });

        if (newClient){
            return res.status(200).json({ok:true, message:"Client created successfully"});
        }

    }catch(error){
        return res.status(500).json({ok:false, message:"Sorry there was a problem"});
    }
};

export async function getAllClients(req, res){
    try{

        let allClients = await Client.findAll();
        if(allClients){
            return res.status(200).json({ok:true, allClients});
        }

    }catch(error){
        return res.status(500).json({ok:false, message:"Sory there was a problem"});
    }
}

export async function getClientById(req, res){
    try{
        let { id } = req.body;
        let clientId = await Client.findAll({
            where:{id}
        });
        if(clientId){
            return res.status(200).json({ok:true, clientId});
        }
    }catch(error){
        return res.status(500).json({ok:false, message:"Sorry there was a problem"});
    }
}

export async function editClient(req, res){
    try{
        let { id, first_name, last_name, phone_number, cell_phone, email, address1, address2 } = req.body;
        let updateClient = await Client.update({
            first_name,
            last_name, 
            phone_number, 
            cell_phone, 
            email, 
            address1, 
            address2
        }, {
            where:{ id: req.body.id }
        });
        
        if(updateClient){
            return res.status(200).json({ok:true, message:"Client updated successfully"});
        }
    }catch(error){
        return res.status(500).json({ok:false, message:"Sorry there was a problem"});
    }
};

export async function deleteClient(req, res){
    try{
        let clientId = req.body.id
        let deleteClient = await Client.destroy({
            where: { id: clientId}
        });
        if(deleteClient){
            return res.status(200).json({ok:true, message:"Client deleted successfully"});
        }
    }catch(error){
        return res.status(500).json({ok:false, message:"Sorry there was a problem"});
    }
};