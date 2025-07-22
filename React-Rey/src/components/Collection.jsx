import {collection,getDocs,getFirestore} from "firebase/Firestore";
import { useEffect } from "react";

const Collection = () => {

    useEffect(()=>{
        const db = getFirestore();
        const itemCollection = collection(db, "products");
        getDocs(itemCollection).then(snapshot => snapshot.docs.map(doc =>{
            console.log(doc.data());
            console.log(doc.id)
        }
        ))
    }, [])

    return (
        <div>
            
        </div>
    );
}

export default Collection;
