const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const firebase = require("firebase-admin");
const {
  getFirestore,
  Timestamp,
  FieldValue,
  DocumentReference,
} = require("firebase-admin/firestore");

const db = getFirestore();

router.post('/adddata',async(req,res)=>{
    const {name, title, image,year,description } = req.body;
    const projects = db.collection(`${year}`);
    try{
        await projects.add({
            name: name,
            title: title,
            image: image,
            description:description
          });
          res.status(200).send({ msg: "sucessfully sent " });
      
    }catch(e){
        console.log(e)
        res.status(500).send({ error: e.message });
    }


})

router.delete("/delete/:id/:collectionname", async (req, res) => {
    
    try {
      const projects = db.collection(`${req.params.collectionname}`);
  
      const cardcheck = await projects.doc(req.params.id).delete();
      if (!cardcheck) {
        return res.status(404).send("not found");
      }
      res.send({ msg: "done" });
    } catch (e) {
      res.status(500).send({ error: e.message });
    }
  });
router.put("/update/:id/", async (req, res) => {
    
    try {
      const projects = db.collection(`${req.params.collectionname}`);
      const {name, title, image,year,description } = req.body;
      const info={}
      if(title){`${req.params.collectionname.title=title}`}
      if(description){`${req.params.collectionname.description=description}`}
      if(image){`${req.params.collectionname.image=image}`}
      if(year){`${req.params.collectionname.year=year}`}
      if(name){`${req.params.collectionname.name=name}`}
      await Cards.doc(req.params.id).update(`${req.params.collectionname}`)
        res.send({msg:"done"})
        
      
    } catch (e) {
      res.status(500).send({ error: e.message });
    }
  });

module.exports=router;