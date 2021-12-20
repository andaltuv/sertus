import Brand from '../models/BrandModel';

export async function createBrand(req, res){
    try{

        const {brand_name} = req.body;
        let newBrand = await Brand.create({
            brand_name
        },{
            fields:['brand_name']
        });

        if(newBrand){
            return res.status(200).json({ok:true, message:'Brand created successfully'});
        }

    }catch(error){return res.status(500).json({ok:false, message:"Sorry there was a problem"});}
}

export async function allBrands(req, res){

    try{
        let allBrands = await Brand.findAll();
        if(allBrands){
            return res.status(200).json({ok:true, allBrands});
        }
    }catch(error){return res.status(500).json({ok:false, message:"Sorry there was a problem"});}

}

export async function editBrand(req,res){
    try{
        const { id, brand_name} = req.body;
        let brand = await Brand.update({
            brand_name
        },{
            where: { id }
        });

        return res.status(200).json({ok:true, message:"Brand edited successfully"});

    }catch(error){
        return res.status(500).json({ok:false, message:"Sorry there was a problem"});
    }
}

export async function deleteBrand(req,res){

    try{
        console.log(req.body);
        let brandId = req.body.id;
        let brand = await Brand.destroy({
            where:{ id: brandId}
        });

        return res.status(200).json({ok:true, message:"Brand deleted successfully"});

    }catch(error){
        return res.status(500).json({ok:false, message:"Sorry there was a problem"});
    }

}