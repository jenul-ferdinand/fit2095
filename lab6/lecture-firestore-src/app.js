const admin = require("firebase-admin");

//Get a reference to the private key
const serviceAccount = require("./service-account.json");

// initialize the access to Firebase
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});
// now, lets access Firestore database
const db = admin.firestore()

//this method is for saving data
async function saveData() {
    // the collection name (i.e. table) is 'units'
    await db.collection('units')
        .doc('unit-1') // the key of the document (not auto generated for this case)
        .set({ 'name': 'Fullstack Development', 'code': 'FIT2095' });
    await db.collection('units')
        .doc() // auto-generated key (recommended)
        .set({ 'name': 'Mobile Development', 'code': 'FIT2081' });

}

// lets read our data and iterate through all the documents
async function getData() {
    const data = await db.collection('units').get();
    data.forEach((doc) => { console.log(doc.data()); })
}
// run one of them at a time
// saveData();
getData();