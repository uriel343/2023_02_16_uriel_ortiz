import db from '../../db.js'

export const createDepartment =  (req, res) => {
    try {
        let name = req.body.name
        const queryDB = "INSERT INTO departments(`name`) VALUES (?)"
        db.query(queryDB, [name], (err, departmentCreated) => {
            if(err) return res.status(400).send({ msg: "Something was wrong please try again", err })
            return res.status(200).send({ msg: "Success!", departmentCreated })
        })
        
    } catch (error) {
        return res.status(500).send({ msg : "Internal server error!", error })
    }
}

export const listDepartments =  (req, res) => {
    try {
        const queryDB = "SELECT * FROM departments";
        db.query(queryDB, (err, data) => {
          if (err) {
            console.log(err);
            return res.status(400).send({ msg: err })
          }
          return res.status(200).send({ msg: data })
        });
    } catch (error) {
        return res.status(500).send({ msg : "Internal server error!", error })
    }
}

export const updateDepartment =  (req, res) => {
    try {
        const id = req.params.id;
        const queryDB = "UPDATE departments SET `name`= ?, `enabled`= ? WHERE id = ?";
      
        const values = req.body.name
      
        db.query(queryDB, [...values,id], (err, data) => {
          if (err) return res.status(400).send({msg: err});
          return res.status(200).send({ msg: "Success!", data });
        });
    } catch (error) {
        return res.status(500).send({ msg : "Internal server error!", error })
    }
}

export const deleteDepartment =  (req, res) => {
    try {
        
    } catch (error) {
        return res.status(500).send({ msg : "Internal server error!", error })
    }
}