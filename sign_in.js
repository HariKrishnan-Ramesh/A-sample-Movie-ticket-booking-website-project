function validate(){
    const email = forms["form1"]["email"].value;
    const password = document.getElementById("password")

    if(email==""){
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