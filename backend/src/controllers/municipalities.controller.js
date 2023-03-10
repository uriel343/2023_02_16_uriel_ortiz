import db from '../../db.js'

export const createMunicipality =  (req, res) => {
    try {
        const values = [
            req.body.name, 
            req.body.department
        ]

        const queryDB = "INSERT INTO municipalities(`name`, `department`) VALUES(?)"
        db.query(queryDB, [values], (err, municipalityCreated) => {
            if(err) return res.status(400).send({ msg: "Something was wrong please try again", err })
            return res.status(200).send({ msg: "Success!", municipalityCreated })
        })

    } catch (error) {
        return res.status(500).send({ msg : "Internal server error!", error })
    }
}

export const listMunicipalities =  (req, res) => {
    try {
        const queryDB = "SELECT * FROM municipalities";
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

export const updateMunicipality =  (req, res) => {
    try {
        const id = req.params.id;
        const queryDB = "UPDATE municipalities SET `name`= ?, `department`= ? WHERE id = ?";
      
        const values = [
          req.body.name,
          req.body.department
        ];
      
        db.query(queryDB, [...values,id], (err, data) => {
          if (err) return res.status(400).send({msg: err});
          return res.status(200).send({ msg: "Success!", data });
        }); 
    } catch (error) {
        return res.status(500).send({ msg : "Internal server error!", error })
    }
}

export const deleteMunicipality =  (req, res) => {
    try {
        
    } catch (error) {
        return res.status(500).send({ msg : "Internal server error!", error })
    }
}