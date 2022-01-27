import Validator from "validator";
import isEmpty from "is-empty";

function validationEvent(data){

    let errors = {};

    data.name = !isEmpty(data.name) ? data.name : "";
    data.age = !isEmpty(data.age) ? data.age : "";
    data.mark1 = !isEmpty(data.mark1) ? data.mark1 : "";
    data.mark2 = !isEmpty(data.mark2) ? data.mark2 : "";
    data.mark3 = !isEmpty(data.mark3) ? data.mark3 : "";

    if(Validator.isEmpty(data.name)) {
        errors.name = "Event Name field is required";
    }


    var number = Number.parseInt(data.age);

    if(Number.isNaN(number)) {
        errors.age = "Age field is required";
    }

    var number = Number.parseInt(data.mark1);
    if(Number.isNaN(number)) {
        errors.mark1 = "Mark1 field is required";
    }
    
    var number = Number.parseInt(data.mark2);
    if(Number.isNaN(number)) {
        errors.mark2 = "Mark2 field is required";
    }
    
    var number = Number.parseInt(data.mark3);
    if(Number.isNaN(number)) {
        errors.mark3 = "Mark3 field is required";
    }
    
    return{
        errors,
        isValid:isEmpty(errors)
    };

}

export default validationEvent;