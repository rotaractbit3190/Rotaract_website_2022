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



const testdata=[
  {
    "title": "DS Prajwal Gowda",
    "USN": "1BI21AI018 ",
    "Date of birth": "12/18/2003",
    "Blood Group": "B+",
    "post": "President",
    "instagram": "@prajwal.btc",
    "linkedin": "https://www.linkedin.com/in/ds-prajwal-gowda/",
    "Hobbies": "A book enthusiast and coding aficionado. Animals hold a special place his my heart. ",
    "image":"https://firebasestorage.googleapis.com/v0/b/rotaract-2022-42d17.appspot.com/o/Board%2FInShot_20211204_131738283%20-%20Anushka%20Thakur.jpg?alt=media&token=c6fd2fa8-8a00-4cb7-b1f0-28d61c84b401" 
  },
   {
    "title": "Anushka Thakur ",
    "USN": "1BI20EC020 ",
    "Date of birth": "07/17/2001",
    "Blood Group": "B+",
    "post": "Immediate Past President ",
    "instagram": "@thakur_anushka1702",
    "linkedin": "https://www.linkedin.com/in/anushka-thakur-231419201",
    "Hobbies": "Playing guitar,  singing, painting, binge watching and coding. ",
    "image":"https://firebasestorage.googleapis.com/v0/b/rotaract-2022-42d17.appspot.com/o/Board%2FInShot_20211204_131738283%20-%20Anushka%20Thakur.jpg?alt=media&token=c6fd2fa8-8a00-4cb7-b1f0-28d61c84b401"
   },
   {
    "title": "Hritika M Kalaria ",
    "USN": "1BI21EC058",
    "Date of birth": "04/22/2002",
    "Blood Group": "O+",
    "post": "Vice President ",
    "instagram": "hritikamk2",
    "linkedin": "Hritika M Kalaria ",
    "Hobbies": "Dancing, painting, reading novels, listening to music, Taking a walk in nature",
    "image":"https://firebasestorage.googleapis.com/v0/b/rotaract-2022-42d17.appspot.com/o/Board%2FIMG-20220224-WA0024%20-%20Hritika%20Kalaria.jpg?alt=media&token=b45189e0-ac0e-48b8-a542-ea7deb235fed",
    "description":"The amazing bomb shell of talents and an amazing analyst. Our passionate coordinator, whose curiosity is the real-life cheat code to her learning engine. With nature as her closest friend, nothing stops her from working."
   },
   {
    "title": "Prateek Kota",
    "USN": "1BI21CS098",
    "Date of birth": "12/17/2003",
    "Blood Group": "O+",
    "post": "Event coordinator ",
    "instagram": "Prateek kota",
    "linkedin": "https://www.linkedin.com/in/prateekkota2003/",
    "Hobbies": "Playing drums,listening to music, playing cricket ",
    "image":"https://firebasestorage.googleapis.com/v0/b/rotaract-2022-42d17.appspot.com/o/Board%2Fe13a8431-9963-4296-8184-d31f061321ca.jpg?alt=media&token=39bdd942-99dd-4181-abff-240f1768e01b",
    "description":"He is brave, honest and straight forward. Amidst chaos, one can find him thinking for a solution with patience and composure."
   },
   {
    "title": "Nikita D'Souza ",
    "USN": "1BI21CS086",
    "Date of birth": "12/19/2003",
    "Blood Group": "O+",
    "post": "Joint Secretary ",
    "instagram": "__.nikiiiiiii.__",
    "linkedin": "Nikita D'Souza ",
    "Hobbies": "Singing, Playing the piano, photography, travelling and gardening ",
    'image':"https://firebasestorage.googleapis.com/v0/b/rotaract-2022-42d17.appspot.com/o/Board%2FImage2%20-%20Nikita%20D'Souza.png?alt=media&token=8f69885f-8c6f-423d-a52b-e7163fc39488",
    "description":"A Kind hearted and compassionate person, who is quite a chatty one too and loves outgoing. Along with that she has a deep affection for animals."
   },
   {
    "title": "Ashish A Ankam ",
    "USN": "1BI21IS018",
    "Date of birth": "06/10/2003",
    "Blood Group": "B+",
    "post": "Treasurer ",
    "instagram": "ashishaankam",
    "linkedin": "Ashish Ankam",
    "Hobbies": "Designing, shuttle badminton, treking, solo exploration ",
    "image":"https://firebasestorage.googleapis.com/v0/b/rotaract-2022-42d17.appspot.com/o/Board%2FIMG_20220706_204126_541%20-%20Ashish%20Ankam.jpg?alt=media&token=08ca2169-56e7-4e32-aeea-b8ada3b4d099"
   },
   {
    "title": "R Aakash Kashyap",
    "USN": "1BI20CS106",
    "Date of birth": "07/14/2002",
    "Blood Group": "O+",
    "post": "Sergeant",
    "instagram": "aakash._.kashyap",
    "linkedin": "https://www.linkedin.com",
    "Hobbies": "Trekking",
    'image':"https://firebasestorage.googleapis.com/v0/b/rotaract-2022-42d17.appspot.com/o/Board%2F1661320738011%20-%20koushal%20shastry.jpg?alt=media&token=1bd8868c-aab3-431d-8899-0cbde638c5f5"
   },
   {
    "title": "Manu Vickram Siva S ",
    "USN": "1BI21IS052",
    "Date of birth": "12/24/2002",
    "Blood Group": "B+",
    "post": "Club Media Lead ",
    "instagram": "manu_vickkk",
    "linkedin": "https://linkedin.com/in/manuvickram",
    "Hobbies": "Graphic designing, digital art ,gaming , travelling, photography,cycling ,gymming",
    "image":"https://firebasestorage.googleapis.com/v0/b/rotaract-2022-42d17.appspot.com/o/Board%2FIMG-20220809-WA0005_2%20-%20Manu%20Vickram%20Siva.jpg?alt=media&token=64f8a6c9-5565-4694-ba14-3a3bb6664fd8",
    "description":"He is creative, innovative and loves designing and art. He believes in working as a team and he contributes his best skills and creates an everlasting impression!"
   },
   {
    "title": "Krushik R",
    "USN": "1BI22IS050",
    "Date of birth": "02/03/2004",
    "Blood Group": "O+",
    "post": "International Service Director",
    "instagram": "bujj_gowda",
    "linkedin": "https://www.linkedin.com/",
    "Hobbies": "Singing, Drawing, writing poems, playing football and basketball. ",
    "image":"gs://rotaract-2022-42d17.appspot.com/Board_2023/Krushik R.jpg",
    "description":"Our ambitious and enthusiastic International director. The bright tech-head whose best day would be spent playing badminton and exploring."
   },
   {
    "title": "Dia Sharma",
    "USN": "1BI22CD011 ",
    "Date of birth": "9/13/2004",
    "Blood Group": "AB+",
    "post": "Professional Service Director",
    "instagram": "dia_153shawarma",
    "linkedin": "None",
    "Hobbies": "Badminton",
    "image":"https://firebasestorage.googleapis.com/v0/b/rotaract-2022-42d17.appspot.com/o/Board%2FAnji_1%20-%20Anjali%20Singh.JPG?alt=media&token=2bb9eeaf-c617-42ec-91cb-1ec096510ff6",
    "description":"A wanderlust, who is easily approachable, dedicated and passionate about her work also good in networking with people. She describes herself as a discipline and sincere person and also a dog lover."
   },
   {
    "title": "Sudhanshu Kumar ",
    "USN": "1BI22RI047",
    "Date of birth": "02/28/2004",
    "Blood Group": "B+",
    "post": "Community Service Director ",
    "instagram": "Sud_singh01",
    "linkedin": "None",
    "Hobbies": "I'm a versatile individual who enjoys exploring diverse facets of life, from immersing myself in Netflix and tech articles to engaging with literature. Passionate about technology.",
    'image':"https://firebasestorage.googleapis.com/v0/b/rotaract-2022-42d17.appspot.com/o/Board%2FImage2%20-%20Nikita%20D'Souza.png?alt=media&token=8f69885f-8c6f-423d-a52b-e7163fc39488",
    "description":"A Kind hearted and compassionate person, who is quite a chatty one too and loves outgoing. Along with that he has a deep affection for animals."
   },
   {
    "title": "Yashvi Bhuwalka ",
    "USN": "1BI22CD063",
    "Date of birth": "01/19/2004",
    "Blood Group": "B+",
    "post": "Club Service Director ",
    "instagram": "theyashvibhuwalka ",
    "linkedin": "https://www.linkedin.com/",
    "Hobbies": "I love reading books, I am fond of listening to music and I am hardworking.",
    "image":"https://firebasestorage.googleapis.com/v0/b/rotaract-2022-42d17.appspot.com/o/Board%2FIMG_20220824_073359%20-%20priyesh%20awadh.jpg?alt=media&token=20dede73-47c6-41d7-8045-6e3ea687aa8b",
    "description":"Our enthusiastic, lovable, and sarcastic director whose ideology is to live the moment and love dogs. The most versatile and eager-to-learn ambivert you will ever meet."
   },
   {
    "title": "Anushka Kathija K S",
    "USN": "1BI21IS014 ",
    "Date of birth": "04/16/2003",
    "Blood Group": "B+",
    "post": "Public Relations Director ",
    "instagram": "@anushka_kathija_",
    "linkedin": "None",
    "Hobbies": "Kabaddi, basketball, Travelling ",
    'image':"https://firebasestorage.googleapis.com/v0/b/rotaract-2022-42d17.appspot.com/o/Board%2FPSX_20210712_215140.jpg?alt=media&token=a19459f5-3d83-4dc5-ac5c-f04135031328",
    "description":"She is an ambitious and self-motivated person who thrives in challenges and constantly sets goals for herself. Besides this she is also a resourceful person. She enjoys a fast-paced team-oriented environment and possess leadership qualities."
   },
   {
    "title": "Aditya ",
    "USN": "1BI22IS004",
    "Date of birth": "07/07/2004",
    "Blood Group": "0+",
    "post": "Club Photographer ",
    "instagram": "offo_adiii",
    "linkedin": "https://www.linkedin.com/",
    "Hobbies": "Photography, Love to travel",
    "image":"https://firebasestorage.googleapis.com/v0/b/rotaract-2022-42d17.appspot.com/o/Board%2FIMG-20220809-WA0046%20-%20Abhishek%20Govind.jpg?alt=media&token=5168cdb2-59e1-4d2b-832e-2aa4095957da",
    "description":"A flexible, hardworking and honest person. A passionate photographer who is just not into photography but also has a keen interest in music."
   },
   {
    "title": "Srineeta Esap ",
    "USN": "1BI22RI046",
    "Date of birth": "03/13/2001",
    "Blood Group": "B+",
    "post": "Club Photographer ",
    "instagram": "srineeta_",
    "linkedin": "https://www.linkedin.com/",
    "Hobbies": "Photography, Videography",
    "image":"https://firebasestorage.googleapis.com/v0/b/rotaract-2022-42d17.appspot.com/o/Board%2FIMG-20220809-WA0046%20-%20Abhishek%20Govind.jpg?alt=media&token=5168cdb2-59e1-4d2b-832e-2aa4095957da",
    "description":"A flexible, hardworking and honest person. A passionate photographer who is just not into photography but also has a keen interest in music."
   },
   {
    "title": "Sara Tahoor",
    "USN": "1BI22CD045",
    "Date of birth": "05/17/2004",
    "Blood Group": "AB+",
    "post": "Club designer ",
    "instagram": "sara_tahoor",
    "linkedin": "None",
    "Hobbies": "Photography, Sketching ",
    "image":"https://firebasestorage.googleapis.com/v0/b/rotaract-2022-42d17.appspot.com/o/Board%2FIMG_20220706_204126_541%20-%20Ashish%20Ankam.jpg?alt=media&token=08ca2169-56e7-4e32-aeea-b8ada3b4d099"
   },
   {
    "title": "Bhagath P",
    "USN": "1BI22EC026",
    "Date of birth": "08/29/2004",
    "Blood Group": "AB+",
    "post": "Club designer ",
    "instagram": "bhagath_p",
    "linkedin": "None",
    "Hobbies": "Music,Reading books, travelling",
    "image":"https://firebasestorage.googleapis.com/v0/b/rotaract-2022-42d17.appspot.com/o/Board%2FIMG_20220706_204126_541%20-%20Ashish%20Ankam.jpg?alt=media&token=08ca2169-56e7-4e32-aeea-b8ada3b4d099"
   },
   {
    "title": "Thanya S",
    "USN": "1BI22CD058",
    "Date of birth": "04/24/2005",
    "Blood Group": "--",
    "post": "Club designer ",
    "instagram": "_thanya_s_",
    "linkedin": "None",
    "Hobbies": "Music,Reading books, travelling",
    "image":"https://firebasestorage.googleapis.com/v0/b/rotaract-2022-42d17.appspot.com/o/Board%2FIMG_20220706_204126_541%20-%20Ashish%20Ankam.jpg?alt=media&token=08ca2169-56e7-4e32-aeea-b8ada3b4d099"
   },
  {
    "Timestamp": "9/2/2022 15:57:48",
    "title": "Sindhu L",
    "USN": "1BI22IS409",
    "Date of birth": "7/25/2002",
    "Blood Group": "O+",
    "post": "Editorial ",
    "instagram": "optimist_uh",
    "linkedin": "https://www.linkedin.com/",
    "Hobbies": "Embroidery, painting and listening music",
    "image":"https://firebasestorage.googleapis.com/v0/b/rotaract-2022-42d17.appspot.com/o/Board%2FInShot_20220902_155151108%20-%20Supriya%20Rani.jpg?alt=media&token=ad7d9e52-06d0-491c-bef9-f0f1e66261f8",
    "description":"A creative, funny, fun loving and highly extrovert person.. Who adores shine shades, art and music."
   },
   {
    "title": "Laasya Nagraj",
    "USN": "1BI22ME025",
    "Date of birth": "11/05/2002",
    "Blood Group": "A+",
    "post": "Editorial",
    "instagram": "laasya_nagraj",
    "linkedin": "www.linkedin.com/in/",
    "Hobbies": "Cooking, Cleaning and Travelling ",
    "image":"https://firebasestorage.googleapis.com/v0/b/rotaract-2022-42d17.appspot.com/o/Board%2FPicsart_22-08-24_04-07-30-710%20-%20Rishika%20Jallan.jpg?alt=media&token=1d6a54b4-b17a-4069-922a-7ffe0b82c389",
    "description":"A very ambitious, fun-loving, hard-working and energetic person, who thrives on challenges and constantly sets goals for herself, so that she has something to strive towards. She is also a very friendly and lively person."
   },
   {
    "title": "Nidhi Kushwaha",
    "USN": "1BI22AI032",
    "Date of birth": "04/05/2005",
    "Blood Group": "O+",
    "post": "Editorial member",
    "instagram": "nid_hi__05",
    "linkedin": " https://www.linkedin.com/",
    "Hobbies": "RMy hobbies are reading and writing(poems), and I also like to go out and explore.",
    "image":"https://firebasestorage.googleapis.com/v0/b/rotaract-2022-42d17.appspot.com/o/Board%2FIMG_20211214_113939_104%20-%20Siri%20Prakash.webp?alt=media&token=f2ebc55c-6aec-4a7b-ad9c-f76df0b3fe43",
    "description":"A person who believes and lives as said “Don’t be another brick in the wall”. She loves to travel new places and also a foodie.. She is very passionate about helping the needy and making this world a better place to live."
   },
  {
    "title": "Annapoorna R ",
    "USN": "1BI22EC019",
    "Date of birth": "06/03/2004",
    "Blood Group": "B+",
    "post": "Editorial member",
    "instagram": "None",
    "linkedin": " https://www.linkedin.com/",
    "Hobbies": "Reading books , listening to music , cooking ",
    "image":"https://firebasestorage.googleapis.com/v0/b/rotaract-2022-42d17.appspot.com/o/Board%2FIMG_20211214_113939_104%20-%20Siri%20Prakash.webp?alt=media&token=f2ebc55c-6aec-4a7b-ad9c-f76df0b3fe43",
    "description":"A person who believes and lives as said “Don’t be another brick in the wall”. She loves to travel new places and also a foodie.. She is very passionate about helping the needy and making this world a better place to live."
   },
   {
    "title": "Lovelesh Debnath ",
    "USN": "1BI21IS049",
    "Date of birth": "07/31/2002",
    "Blood Group": "B+",
    "post": "Editor team member",
    "instagram": "lovelesh_debnath_o_o",
    "linkedin": "Lovelesh Debnath (Kartik)",
    "Hobbies": "Cooking, calligraphy, learning new skills, drawing, books, guitar and IDK.",
    "image":"https://firebasestorage.googleapis.com/v0/b/rotaract-2022-42d17.appspot.com/o/Board%2FIMG-20220824-WA0003%20-%20Lovelesh%20Debnath%20(1).jpg?alt=media&token=6b1cbf94-2dc6-4519-8359-e024b63c470d",
    "description":"A Goofy person at most times, but, a serious Soul at crucial times. He loves to stay indoor with minimum human infaction."
   },
   {
    "title": "Hritika M Kalaria ",
    "USN": "1BI21EC058",
    "Date of birth": "04/22/2002",
    "Blood Group": "O+",
    "post": "Event Coordinator ",
    "instagram": "hritikamk2",
    "linkedin": "Hritika M Kalaria ",
    "Hobbies": "Dancing, painting, reading novels, listening to music, Taking a walk in nature",
    "image":"https://firebasestorage.googleapis.com/v0/b/rotaract-2022-42d17.appspot.com/o/Board%2FIMG-20220224-WA0024%20-%20Hritika%20Kalaria.jpg?alt=media&token=b45189e0-ac0e-48b8-a542-ea7deb235fed",
    "description":"The amazing bomb shell of talents and an amazing analyst. Our passionate coordinator, whose curiosity is the real-life cheat code to her learning engine. With nature as her closest friend, nothing stops her from working."
   },
{
  "title": "Shriya Naragund",
  "USN": "1BI22EC146",
  "Date of birth": "12/21/2003",
  "Blood Group": "AB+",
  "post": "Event Coordinator",
  "instagram": "iam_shriya21",
  "linkedin": None,
  "Hobbies": "Reading books, swimming, love traveling, introverted but likes meeting new people.",
  "image": "https://drive.google.com/open?id=1bIomy_DqetlbNJ_cEOTD8ziQ-q50jzOu"
},
{
  "title": "Lakshay Rai",
  "USN": "1BI22CS080",
  "Date of birth": "7/12/2004",
  "Blood Group": "B+ve",
  "post": "Event Coordinator",
  "instagram": "itz_lak_shay_12",
  "linkedin": None,
  "Hobbies": "Love to interact with new people, play games and music. Dynamic nature with good adaptation towards people and places.",
  "image": "https://drive.google.com/open?id=1unP0wnNdZoIg9dzFzhxkrEO-EWcY5Upf"
},
{
  "title": "Sanjay KN",
  "USN": "1BI22RI039",
  "Date of birth": "8/12/2004",
  "Blood Group": "O+",
  "post": "Event Coordinator",
  "instagram": "sanjayk4239",
  "linkedin": None,
  "Hobbies": "Feeding birds, spending time with family and friends, exercise, drawing, planting.",
  "image": "https://drive.google.com/open?id=1S0CQLPxmTfPj2t7tffjxVB3if3owVDgz"
},
{
    "title": "Mayank Raj",
    "USN": "1BI22RI032",
    "Date of birth": "3/25/2005",
    "Blood Group": "AB+",
    "post": "Event Coordinator",
    "instagram": "___mayank___raj___",
    "linkedin": None,
    "Hobbies": "Extrovert, making new friends, meeting new people. Hodophile, playing badminton, cricket, riding bike.",
    "image": "https://drive.google.com/open?id=1Vd3JDg_yC-GSbXEVe3PMtdJV9V6smgDM"
},
 


  
 
 
 
 ]



router.get(
  "/getallbod/:year",

  async (req, res) => {
    const theyear = req.params.year;
    try {
      const citiesRef = db.collection(`${theyear}`);
      const snapshot = await citiesRef.orderBy('title').get();
      const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      res.json(testdata);
      // res.json(alldata)
    } catch (err) {
      
    }
  }
);

router.post("/adddata", async (req, res) => {
  const { post, title, image, year, description, instagram, linkedin } =
    req.body;
  const projects = db.collection(year);
  
  try {
    await projects.add({
      test: {
        post: post,
        title: title,
        description: description,
        year: year,
        linkedin: linkedin,
        instagram: instagram,
        image:image
      },
    });
    res.status(200).send({ msg: "sucessfully sent " });
  } catch (e) {
    
    res.status(500).send({ error: e.message });
  }
});

router.delete("/delete/:id/:collectionname", async (req, res) => {
  try {
    const projects = db.collection(`${req.params.collectionname}`);
    
    

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
