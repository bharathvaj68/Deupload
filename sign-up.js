// // Import the functions you need from the SDKs you need
//   import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
//   import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-analytics.js";
//   // TODO: Add SDKs for Firebase products that you want to use
//   // https://firebase.google.com/docs/web/setup#available-libraries

//   // Your web app's Firebase configuration
//   // For Firebase JS SDK v7.20.0 and later, measurementId is optional
//   const firebaseConfig = {
//     apiKey: "AIzaSyDG1Y7iwejRqS-aKBblxhSkKIyuS7mCBsE",
//     authDomain: "deupload-ebff4.firebaseapp.com",
//     projectId: "deupload-ebff4",
//     storageBucket: "deupload-ebff4.firebasestorage.app",
//     messagingSenderId: "1093150935544",
//     appId: "1:1093150935544:web:f83910a04c55b93ed7ae0d",
//     measurementId: "G-M5GR4YKZV7"
//   };

//   // Initialize Firebase
//   const app = initializeApp(firebaseConfig);
//   const analytics = getAnalytics(app);
//   const auth = getAuth(app);


//   //inputs
//   const email = document.getElementById("email").value;
//   const password = document.getElementById("password").value;

//   //sign-up button
//   const submit = document.getElementById("sign-up");
//   submit.addEventListener("click", function(e){
//     e.preventDefault();

//     createUserWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     // Signed up 
//     const user = userCredential.user;
//     alert("Creating account")
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     alert(errorMessage)
//     // ..
//   });
//   })
//   //firebase
  

// Your Supabase credentials


import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://tuuxpejmdfdkhstduzeu.supabase.co'
const supabaseKey = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR1dXhwZWptZGZka2hzdGR1emV1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQ2Nzc2NjAsImV4cCI6MjA3MDI1MzY2MH0.EzkEAO1gTUNtC46GopRf0oOCgMIfCFPY0xe5PxSsgY0
const supabase = createClient(supabaseUrl, supabaseKey)


document.getElementById("sign-up").addEventListener("click", async (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    if (!email || !password) {
        alert("Please fill in both fields.");
        return;
    }

    // Sign up user in Supabase
    const { data, error } = await supabase.auth.signUp({
        email: email,
        password: password
    });

    if (error) {
        alert("Sign-up failed: " + error.message);
    } else {
        alert("Sign-up successful! Please check your email to confirm your account.");
        window.location.href = "sign.html"; // redirect to login page
    }
});
