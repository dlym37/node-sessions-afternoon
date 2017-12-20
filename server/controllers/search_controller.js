const swag = require('../models/swag');

module.exports = {
    search: (req,res,next) => {
        const {category} = req.query;
        if(!category){
            res.status(200).send(swag);
        } else {
            const carArr = swag.filter(swag => { swag.category === category});
            // const catArr = []
            // for(i=0; i < swag.length; i++){
            //     if(swag[i].category = category){
            //         catArr.push(swag[i]);
            //     }
            // }
            res.status(200).send(catArr);            
        }
    }
}