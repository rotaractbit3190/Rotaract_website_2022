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

router.get(
  "/getallbod/:year",

  async (req, res) => {
    const theyear = req.params.year;
    try {
      const citiesRef = db.collection(`${theyear}`);
      const snapshot = await citiesRef.get();
      const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      res.json(data);
      // res.json(alldata)
    } catch (err) {
      console.log(err.message);
    }
  }
);

router.post("/adddata", async (req, res) => {
  const { post, title, image, year, description,instagram,linkedin } = req.body;
  const projects = db.collection(year);
  console.log(year);
  try {
    await projects.add({
      test: { post: post, title: title, description: description, year: year,linkedin:linkedin,instagram:instagram },
    });
    res.status(200).send({ msg: "sucessfully sent " });
  } catch (e) {
    console.log(e);
    res.status(500).send({ error: e.message });
  }
});

router.delete("/delete/:id/:collectionname", async (req, res) => {
  try {
    const projects = db.collection(`${req.params.collectionname}`);
    console.log(req.params.collectionname);
    console.log(req.params.id);

    const cardcheck = await projects.doc(req.params.id).delete();
    if (!cardcheck) {
      return res.status(404).send("not found");
    }

    res.send({ msg: `${req.params.collectionname}` });
  } catch (e) {
    res.status(500).send({ error: e.message });
  }
});
router.put("/update/:id", async (req, res) => {
  const { post, title, description, image, year } = req.body;

  try {
    console.log("we in");

    const projects = db.collection(`${year}`);

    const info = {};
    if (title) {
      `${(title = post)}`;
    }
    if (description) {
      `${(description = description)}`;
    }
    if (image) {
      `${(image = image)}`;
    }
    if (year) {
      `${(year = year)}`;
    }

    await projects.doc(req.params.id).update(`${year}`);
    res.send({ msg: "done" });
  } catch (e) {
    res.status(500).send({ error: e.message });
  }
});

module.exports = router;
