import db from '../../db.js'

export const createCategory = (req, res) => {
    try {
        
        const queryDB = "INSERT INTO categories(`name`) VALUES (?)"

        let name = req.body.name

        db.query(queryDB, [name], (err, categoryCreated) => {
            if(err) return res.status(400).send({ msg: "Something was wrong please try again", err })
            return res.status(200).send({ msg: "Success!", categoryCreated })
        })

    } catch (error) {
        return res.status(500).send({ msg : "Internal server error!", error })
    }
}

export const listCategories =  (req, res) => {
    try {
        
    } catch (error) {
        return res.status(500).send({ msg : "Internal server error!", error })
    }
}

export const listCategory =  (req, res) => {
    try {
        
    } catch (error) {
        return res.status(500).send({ msg : "Internal server error!", error })
    }
}

export const updateCategory =  (req, res) => {
    try {
        
    } catch (error) {
        return res.status(500).send({ msg : "Internal server error!", error })
    }
}

export const deleteCategory =  (req, res) => {
    try {
        
    } catch (error) {
        return res.status(500).send({ msg : "Internal server error!", error })
    }
}