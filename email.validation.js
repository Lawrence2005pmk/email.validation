function validationform() {
    let username = document.emailcd.username.value.trim();
    let username2 = document.emailcd.username2.value.trim();
    let mobile = document.emailcd.mobile.value.trim();
    let email = document.emailcd.email.value.trim();
    let password1 = document.emailcd.password1.value.trim();
    let password2 = document.emailcd.password2.value.trim();

    if (username === '') {
        alert('username fill must')
        document.emailcd.username.focus()
        return false
    }
    if (username === username2) {
        alert('frist name and last name fill diferent')
        document.emailcd.username2.focus()
        return false
    }
    if (mobile === '') {
        alert("mobile number is empty")
        document.emailcd.mobile.focus();
        return false;
    }
    if (!(/^[0-9]{10}$/).test(mobile)) {
        alert('not a valid number')
        document.emailcd.mobile.focus();
        return false;
    }
    if (email === '') {
        alert('please create your emailid')
        document.emailcd.email.focus();
        return false
    }
    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
        alert('please create proper email')
        document.emailcd.email.focus()
        return false
    }
    if (password1 !== password2) {
        alert('Password dont match');
        document.emailcd.password1.focus();
        return false;
    }
    if (password1 === '') {
        alert("password can't empty")
        document.emailcd.password1.focus();
        return false
    }
    if (password2 === '') {
        alert('Confirm password is empty');
        document.emailcd.password2.focus();
        return false;
    }
    return true


}
//  <form name="email" action="#" method="get" onsubmit="return validationform()">
//         <label for="username">frist name</label>
//         <input type="text" name="fristname">
//         <br><br>
//         <label for="username2">Lastname</label>
//         <input type="text" name="username2">
//         <br><br>
//         <label for="mobile">phonenumber</label>
//         <input type="text" name="mobile">
//         <br><br>
//         <label fro="email">create your mail id</label>
//         <input type="text" name="email">
//         <br><br>
//         <label for="password1">password</label>
//         <input type="password" name="password1">
//         <br><br>
//         <label for="password2">conform password</label>
//         <input type="password" name="password2">
//         <br> <br>
//         <input type="submit" value="singin"></input>