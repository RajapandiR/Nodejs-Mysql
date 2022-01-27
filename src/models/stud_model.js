import Sequelize from "sequelize";

import db from "../utils/db";


const stud = db.define('student', {
    name: { type: Sequelize.STRING },
    age: { type: Sequelize.INTEGER },
    mark1: { type: Sequelize.INTEGER },
    mark2: { type: Sequelize.INTEGER },
    mark3: { type: Sequelize.INTEGER },

})

stud.sync();

export default stud;