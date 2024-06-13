import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import {auth} from "firebase/firebaseConfig";
 
function useLogin(){
    const provider = new GoogleAuthProvider();
    const signUpWithGoogle = asyn () => {
        const provider = new GoogleAuthProvider();
        try{
        const reuslt = await signInWithPopup(auth, provider)
        const user = reuslt.user;
        alert("Success")
        } catch (error){
        const errorMessage = error.errormessage;
        alert("Error")
        }
    };
    return
}

export {useLogin}