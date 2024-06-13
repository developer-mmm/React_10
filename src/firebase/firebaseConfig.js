import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import{getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDr30Q0-1SjpIfibJyuGMq6_CIsZC3KSfo",
  authDomain: "my-store-c2921.firebaseapp.com",
  projectId: "my-store-c2921",
  storageBucket: "my-store-c2921.appspot.com",
  messagingSenderId: "437196482736",
  appId: "1:437196482736:web:4fd6c18d11dc8a0296b375",
  measurementId: "G-W784T26351"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);