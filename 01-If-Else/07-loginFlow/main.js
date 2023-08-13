let username = prompt("username")
let password = prompt("password")

if(username == null || username.trim() === ""){
    alert("username is required");
}else if (password === null || password.trim() === "") {
    alert("password is required");
}else if((username == "admin" && password == "1234") || (username == "john" && password == "qwerty")){
    alert(`Hello! Mr. ${username}`)
}else{
    alert("invalid username or password");   
}