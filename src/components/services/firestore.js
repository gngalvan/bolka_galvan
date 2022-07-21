import { async } from "@firebase/util";
import { initializeApp } from "firebase/app";
import { collection, getDocs, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyABjrHcT8rSxCRvy70v4fV-6x_d9cvtn4o",
  authDomain: "bolka-2c532.firebaseapp.com",
  projectId: "bolka-2c532",
  storageBucket: "bolka-2c532.appspot.com",
  messagingSenderId: "368353938234",
  appId: "1:368353938234:web:a26399472a46c48da85e03"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export function testDB(){
    console.log(db);
}

export async function getAllProducts(){
    const productsCollectionRef = collection(db, "bolka");
    const docSnapshot = await getDocs(productsCollectionRef);
    const dataProducts = docSnapshot.docs.map(item => {
        return item.data();
    })
    return(dataProducts);
}

export default db;