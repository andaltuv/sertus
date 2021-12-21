import Service from '../models/ServiceModel';

export async function createService(req, res){

    try{

        let { service_type, service_description, service_spare_parts, service_date, service_price, clientId } = req.body;
        let newService = await Service.create({
            service_type, 
            service_description, 
            service_spare_parts, 
            service_date, 
            service_price,
            clientId
        }, {
            fields:['service_type', 'service_description', 'service_spare_parts', 'service_date', 'service_price', 'clientId']
        });

        if(newService){
            return res.status(200).json({ok:true, message:"Service created successfully"});
        }

    }catch(error){
        console.log(error);
        return res.status(500).json({ok:false, message:"Sorry there was a problem"});
    }
}

export async function getAllServices(req, res){
    try{
        let allServices = await Service.findAll();
        if(allServices){
            return res.status(200).json({ok:true, allServices});
        }
    }catch(error){
        return res.status(500).json({ok:false, message:"Sorry thee was a problem"});
    }
}

export async function getServiceById(req, res){
    try{
        let serviceId = req.body.id;
        let service = await Service.findAll({
            where:{id: serviceId}
        });
        if(service){
            return res.status(200).json({ok:true, service});
        }

    }catch(error){
        return res.status(500).json({ok:false, message:"Sorry there was a problem"});
    }
}

export async function getServiceByClientId(req, res){
    try{

        let clientId = req.body.clientId;
        let serviceClient = await Service.findAll({
            where:{clientId}
        });

        if(serviceClient){
            return res.status(200).json({ok:true, serviceClient});
        }

    }catch(error){
        return res.status(500).json({ok:false, message:"Sorry there was a problem"});
    }
}

export async function editService(req, res){
    try{
        let { id, service_type, service_description, service_spare_parts, service_date, service_price} = req.body;
        let editService = await Service.update({
            service_type, 
            service_description, 
            service_spare_parts, 
            service_date, 
            service_price
        },{
            where:{id}
        });

        if(editService){
            return res.status(200).json({ok:true, message:"Service edited successfully"})
        }

    }catch(error){
        return res.status(500).json({ok:false, message:"Sorry there was a problem"});
    }
};

export async function deleteService(req, res){

    try{

        let serviceId = req.body.id;
        let service = await Service.destroy({
            where: { id: serviceId}
        });

        return res.status(200).json({ok:true, message:"Service deleted successfully"});

    }catch(error){
        return res.status(500).json({ok:false, message:"Sorry there was a problem"});
    }

};