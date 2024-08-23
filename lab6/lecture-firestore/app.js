const admin = require('firebase-admin')

// Get a reference to the private key
const serviceAccount = require('./service-account.json')

// Initialise the access to Firebase
admin.initializeApp({ 
    credential: admin.credential.cert(serviceAccount )
})

// Now, lets access Firestore database
const db = admin.firestore()

// This method is for saving data
async function saveData() {
    // The collection name (i.e., table) is 'units'
    await db.collection('units')
        .doc('unit-1') // The key of the document (not auto generated for this case)
        .set({'name': 'Fullstack Development', 'code': 'FIT2095'})
    
    await db.collection('units')
        .doc() // Auto-generated key (recommended)
        .set( { 'name': 'Mobile Development', 'code': 'FIT2081' } )
}

// Lets read our data and iterate through al the documents
async function getData() {
    const data = await db.collection('units').get()
    data.forEach((doc) => { console.log(doc.data()) })
}

// Run one of them at a time
//saveData()
getData()