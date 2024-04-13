function validate_signup(){
    const name = document.getElementById("name")
    const mail = document.getElementById("mail")
    const ph_no = document.getElementById("ph_no")
    const password = document.getElementById("password")
    const confirmp = document.getElementById("confirmp")

    if(name.value==""){
        alert("Please provide a name")
        document.form2.name.focus()
        return false
    }

    if(mail.value==""){
        alert("Please provide a Email")
        document.form2.mail.focus()
        return false
    }

    if(ph_no.value==""){
        alert("Please provide a Phone number")
        document.form2.ph_no.focus()
        return false
    }

    if(password.value==""){
        alert("Please provide a Password")
        document.form2.password.focus()
        return false
    }


    if(confirmp.value==""){
        alert("Please provide a confirmed password")
        document.form2.confirmp.focus()
        return false
    }

    if (password!=confirmp){
        alert("Password should be equal")
        document.form2.confirmp.focus()
        return false
    }

return true

}