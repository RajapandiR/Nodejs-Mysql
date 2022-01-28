import Stud from '../models/stud_model';
import StudValidation  from '../validations/stud_validation';

class StudController {
    static async getStud(req, res) {  
        try{
            const dataArray = []
            // var newdata = {};
            const data = await Stud.findAll()
            console.log(data.length);
            
            //Calculate Total mark
            for (var i = 0 ; i<data.length; i++){
                var newdata = {};
                newdata.id = data[i].id
                newdata.name = data[i].name
                newdata.age = data[i].age
                newdata.mark1 = data[i].mark1
                newdata.mark2 = data[i].mark2
                newdata.mark3 = data[i].mark3
                const total = data[i].mark1 + data[i].mark2 + data[i].mark3
                newdata.total = total
                newdata.createdAt = data[i].createdAt
                newdata.updatedAt = data[i].updatedAt
                dataArray.push(newdata)
            }
            
            const response = {
                statusCode: 200,
                message: "Data Found",
                data: dataArray
            }
            res.status(200).json(response)
        }catch(err){
            res.status(400).json({
                // message: "",
                error: err.message
            })
        }
        
    }

    static async postStud(req, res) {
        const { body } = req;
        try{

            const {errors, isValid} = await StudValidation(req.body);
            if(!isValid){
                return res.status(400).json(errors);
            }
            if(req.file != undefined && (req.file.filename != undefined && req.file.filename != ''))
                body.image = req.file.filename;
            const data = await Stud.create(body)
            const response = {
                statusCode: 200,
                message: "Create Successfull",
                data: data
            }
            res.status(200).json(response)
        }catch(err){
            console.log("err", err);
            res.status(400).json({
                error: err.message
            })
        }
        
        
    }

    static async putStud(req, res) {
        const { body } = req;
        const id = body.id;
        try{
            if(req.file != undefined && (req.file.filename != undefined && req.file.filename != ''))
                body.image = req.file.filename;
            const data = await Stud.update(body, {where: {id: id}})
            const response = {
                statusCode: 200,
                message: "Update Successfull",
                // data: data
            }
            res.status(200).json(response)
        }catch(err){
            res.status(400).json({
                // message: "",
                error: err.message
            })
        }
        
        
    }

    static async deleteStud(req, res) {
        const { params } = req;
        const id = params.id;
        try{
            const data = await Stud.destroy({where: {id: id}})
            const response = {
                statusCode: 200,
                message: "Delete Successfull",
                
            }
            res.status(200).json(response)
        }catch(err){
            res.status(400).json({
                // message: "",
                error: err.message
            })
        }
        
        
    }

    static async findByIdStud(req, res) {
        const { params } = req;
        const id = params.id;
        try{
            const data = await Stud.findByPk(id)
            const response = {
                statusCode: 200,
                message: "Data Found",
                data: data
                
            }
            res.status(200).json(response)
        }catch(err){
            res.status(400).json({
                // message: "",
                error: err.message
            })
        }
                
    }

}

export default StudController;
