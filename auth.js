// Your Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyD8C74L3VddED8ToArBcU0ZCUPZUsjoXeU",
  authDomain: "streamnova-4dbc3.firebaseapp.com",
  projectId: "streamnova-4dbc3",
  storageBucket: "streamnova-4dbc3.firebasestorage.app",
  messagingSenderId: "834796110267",
  appId: "1:834796110267:web:070b24b6ed05d2664fc49e",
  measurementId: "G-K00DN1ZM5Q"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Firebase Auth
const auth = firebase.auth();

function signUp() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  auth.createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      document.getElementById("status").innerText = "✅ Sign up successful!";
    })
    .catch((error) => {
      document.getElementById("status").innerText = `❌ ${error.message}`;
    });
}

function logIn() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  auth.signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      document.getElementById("status").innerText = "✅ Logged in!";
      // Redirect to dashboard or another page if you want
      // window.location.href = "dashboard.html";
    })
    .catch((error) => {
      document.getElementById("status").innerText = `❌ ${error.message}`;
    });
}
