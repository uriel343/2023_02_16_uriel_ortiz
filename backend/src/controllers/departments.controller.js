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
        
    } catch (error) {
        return res.status(500).send({ msg : "Internal server error!", error })
    }
}

export const updateDepartment =  (req, res) => {
    try {
        
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