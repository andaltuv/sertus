import Heater from '../models/HeaterModel';
import Brand from '../models/BrandModel';

export async function createHeater(req, res) {
    try {

        let { model, tecnology, heater_type, capacity, brandId } = req.body;
        let newHeater = await Heater.create({
            model,
            tecnology,
            heater_type,
            capacity,
            brandId
        }, {
            fields: ['model', 'tecnology', 'heater_type', 'capacity', 'brandId']
        });

        if (newHeater) {
            return res.status(200).json({ ok: true, message: "Heater created successfully" });
        }

    } catch (error) {
        return res.status(500).json({ ok: false, message: "Sorry there was a problem" });
    }
};

export async function getAllHeaters(req, res){
    try{
        let allHeaters = await Heater.findAll({
            include: {model: Brand, as:'brand'}
        });
        if (allHeaters){
            return res.status(200).json({ok:true, allHeaters});
        }

    }catch(error){
        return res.status(500).json({ok:false, message:"Sorry there was a problem"});
    }
};

export async function getHeaterById(req, res){
    try{
        let heaterId = req.body.id;
        let heaterById = await Heater.findAll({
            where:{id: heaterId},
            include:{model:Brand, as:'brand'}
        });

        if(heaterById){
            return res.status(200).json({ok:true, heaterById});
        }

    }catch(error){
        return res.status(500).json({ok:false, message:"Sorry there was a problem"});
    }
}

export async function deleteHeater(req, res){
    try{
        let heaterId = req.body.id;
        let deleteHeater = await Heater.destroy({
            where:{id: heaterId}
        });

        return res.status(200).json({ok:true, message:"Heater deleted succcessfully"});

    }catch(error){
        return res.status(500).json({ok:false, message:"Sorry there was a problem"});
    }
}

