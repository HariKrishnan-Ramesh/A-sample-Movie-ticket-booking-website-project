function validate(){
    const mail = document.getElementById("mail")
    const password = document.getElementById("password")

    if(mail.value==""){
        alert("Please provide a username or password")
        document.form1.name.focus()
        return false
    }

    if(password.value==""){
        alert("Please provide a Password")
        document.form1.name.focus()
        return false
    }

    return true
}