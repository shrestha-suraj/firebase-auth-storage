const message=document.querySelector("#message")
message.textContent="Identify yourself with google."
const auth=firebase.auth()
const provider=new firebase.auth.GoogleAuthProvider();


const loginBtn=document.querySelector("#googleLogin")
const logoutBtn=document.querySelector("#logoutButton")

loginBtn.addEventListener("click",()=>{
    auth.signInWithPopup(provider)
})

logoutBtn.addEventListener("click",()=>{
    auth.signOut();
})

auth.onAuthStateChanged((user)=>{
    if(user){
        message.textContent="Thank you for your identification. You can logout."
        loginBtn.hidden=true
        logoutBtn.hidden=false
    }else{
        message.textContent="Identify yourself with google."
        loginBtn.hidden=false
        logoutBtn.hidden=true
    }
})