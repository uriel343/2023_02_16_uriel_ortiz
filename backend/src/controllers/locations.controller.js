export const createLocation =  (req, res) => {
    try {
        const values = [
            req.body.name,
            req.body.address,
            req.body.department,
            req.body.phone,
            req.body.municipalities,
            req.body.enabled
        ]
        const queryDB = "INSERT INTO departments(`name`, `address`, `department`, `phone`, `municipalities`) VALUES (?)"
        db.query(queryDB, [values], (err, locationCreated) => {
            if(err) return res.status(400).send({ msg: "Something was wrong please try again", err })
            return res.status(200).send({ msg: "Success!", locationCreated })
        })
        

    } catch (error) {
        return res.status(500).send({ msg : "Internal server error!", error })
    }
}

export const listLocations =  (req, res) => {
    try {
        const queryDB = "SELECT * FROM locations";
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

export const listLocation =  (req, res) => {
    try {
        
    } catch (error) {
        return res.status(500).send({ msg : "Internal server error!", error })
    }
}

export const updateLocation =  (req, res) => {
    try {
        
    } catch (error) {
        return res.status(500).send({ msg : "Internal server error!", error })
    }
}

export const deleteLocation =  (req, res) => {
    try {
        
    } catch (error) {
        return res.status(500).send({ msg : "Internal server error!", error })
    }
}
