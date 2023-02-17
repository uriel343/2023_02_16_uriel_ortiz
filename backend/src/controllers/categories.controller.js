import db from '../../db.js'

export const createCategory = (req, res) => {
    try {
        
        const queryDB = "INSERT INTO categories(`name`) VALUES (?)"

        const values = [
            req.body.name,
            req.body.enabled
        ]

        db.query(queryDB, [values], (err, categoryCreated) => {
            if(err) return res.status(400).send({ msg: "Something was wrong please try again", err })
            return res.status(200).send({ msg: "Success!", categoryCreated })
        })

    } catch (error) {
        return res.status(500).send({ msg : "Internal server error!", error })
    }
}

export const listCategories =  (req, res) => {
    try {
        const queryDB = "SELECT * FROM categories";
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