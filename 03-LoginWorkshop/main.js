let user = prompt("user");

if (user === null || user.trim() === "") {
  user = "guest";
  console.log(`Welcome ${user}`);
}

if (user == "codecamp") {
  let password = prompt("password");
  if ((password == "123456")) {
    user = "codecamp !!";
    console.log(user);
  } else {
    alert("Wrong password");
  }
} else {
  user = "guest";
}
alert("welcome " + user);

