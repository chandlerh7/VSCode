// Reference variables
const loginFormRef = document.querySelector("#login");
const usernameRef = document.querySelector("#username");
const passwordRef = document.querySelector("#password");

const contentRef = document.querySelector("#content");
const logoutRef = document.querySelector("#logout");

function loginUser(e) {
    e.preventDefault();
    const usernameValue = usernameRef.value;
    const passwordValue = passwordRef.value;
    const users = JSON.parse(localStorage.getItem ("users") || "[]");
    console.log(users);

     let activeUser = JSON.parse(localStorage.getItem("activeUser") || "[]") 
    //  *redo the line above after looking at the professor's vid 

    let userFound = false; 

    for( let i = 0; i < users.length; i++) {
        const currentUser = users[i];

        if (currentUser.username === usernameValue) {
            userFound = true;

            if (currentUser.password === passwordValue) { }
        }
            
        

        {
            // You are not on the list
            if (userFound===false) {
                // make user
                users.push({username: usernameValue, password: passwordValue});
                localStorage.setItem("users", JSON.stringify(users));
            }
           
            // You put the wrong password 
            else if (correctPassword === false) {

            }


    }
   

    // console.log(usernameValue,passwordValue);
}



}

function toggleLogin() {
    if (!activeUser.username){
        loginFormRef.style.display = "none"
    }
}

loginFormRef.onsubmit = loginUser;