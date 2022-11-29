import { initializeApp} from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA8JqotmaQXPZo3N1ZTsvstFSi_HDccbNA",
  authDomain: "fir-react-tutorial-yt-a6e27.firebaseapp.com",
  projectId: "fir-react-tutorial-yt-a6e27",
  storageBucket: "fir-react-tutorial-yt-a6e27.appspot.com",
  messagingSenderId: "483656037110",
  appId: "1:483656037110:web:2f5b54b790767d0efcf2d7",
  measurementId: "G-M51STNCDGV"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
// export app;