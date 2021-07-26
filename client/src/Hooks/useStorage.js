import  {useState,useEffect} from 'react';
import {projectStorage,projectFirestore,timestamp} from '../firebase/config'
import {v4 as uuidv4} from 'uuid';

const useStorage = (file) => {

    const [progress,setProgress] = useState(0);
    const [error,setError] = useState(null);
    const [url, setUrl] = useState(null);

    useEffect (() => {
        // Reference to the firebase storage object
        // Creating a unique name for reference
        const storageRef = projectStorage.ref(`${file.name}-${uuidv4()}`);

        // Creating collection on the firestore
        const collectionRef = projectFirestore.collection('Images');
        
        storageRef.put(file).on('state_changed', (snapshot) => {
            let precentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            setProgress(precentage);
        }, (errorObject) => {
            setError(errorObject);
        }, async () => {
            const url = await storageRef.getDownloadURL();
            const createdAt = timestamp();
            await collectionRef.add({url, createdAt});
            setUrl(url);
        });
    } ,[file]);

    return {progress, url,error};
}

export default useStorage;