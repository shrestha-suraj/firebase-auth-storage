const auth=firebase.auth()
const provider=new firebase.auth.GoogleAuthProvider();


const loginBtn=document.querySelector("#loginButton")
const logoutBtn=document.querySelector("#logoutButton")

loginBtn.addEventListener("click",()=>{
    auth.signInWithPopup(provider)
})

logoutBtn.addEventListener("click",()=>{
    auth.signOut();
})

auth.onAuthStateChanged((user)=>{
    if(user){
        console.log("User is present")
        loginBtn.hidden=true
        logoutBtn.hidden=false
    }else{
        console.log("User loged out")
        loginBtn.hidden=false
        logoutBtn.hidden=true
    }
})