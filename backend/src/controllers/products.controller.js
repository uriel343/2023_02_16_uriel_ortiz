import db from '../../db.js'

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
    const queryDB = "SELECT * FROM locations";
    db.query(queryDB, (err, data) => {
      if (err) {
        console.log(err);
        return res.status(400).send({ msg: err })
      }
      return res.status(200).send({ msg: data })
    });
    try {
        const queryDB = "SELECT * FROM products";
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
};

export const listProduct =  (req, res) => {
    try {
        let id = req.params.id
        const queryDB = "SELECT * FROM products WHERE id = ?";
        db.query(queryDB, [id], (err, data) => {
          if (err) {
            console.log(err);
            return res.status(400).send({ msg: err })
          }
          return res.status(200).send({ msg: data })
        });
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
