export const createProducts =  (req, res) => {
    try {

        const values = [
            req.body.title, 
            req.body.description,
            req.body.category,
            req.body.enabled
        ]

        const queryDB = "INSERT INTO products(`title`, `description`, `category`, `enabled`) VALUES(?)"
        db.query(queryDB, [values], (err, productCreated) => {
            if(err) return res.status(400).send({ msg: "Something was wrong please try again", err })
            return res.status(200).send({ msg: "Success!", productCreated })
        })        

    } catch (error) {
        return res.status(500).send({ msg : "Internal server error!", error })
    }
};

export const listProducts =  (req, res) => {
    try {
        
    } catch (error) {
        return res.status(500).send({ msg : "Internal server error!", error })
    }
};

export const listProduct =  (req, res) => {
    try {
        
    } catch (error) {
        return res.status(500).send({ msg : "Internal server error!", error })
    }
};

export const updateProduct =  (req, res) => {
    try {
        
    } catch (error) {
        return res.status(500).send({ msg : "Internal server error!", error })
    }
};

export const deleteProduct =  (req, res) => {
    try {
        
    } catch (error) {
        return res.status(500).send({ msg : "Internal server error!", error })
    }
};
