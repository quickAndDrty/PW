


function validateForm() {

    errMsg =""
    var nume = document.forms["myForm"]["nume"].value
    var data = document.forms["myForm"]["data"].value
    var varsta = document.forms["myForm"]["varsta"].value
    var email = document.forms["myForm"]["mail"].value

    if (nume == "")
    {
        document.forms["myForm"]["nume"].style.border = "2px solid red"
        errMsg = errMsg.concat("Name must be filled out\n");
    }
    else{
        document.forms["myForm"]["nume"].style.border = ""
    }

    if (data == "")
    {
        document.forms["myForm"]["data"].style.border = "2px solid red"
        errMsg = errMsg.concat("date must be filled out\n");
    }
    else{
        document.forms["myForm"]["data"].style.border = ""
    }
    var parts = data.split('/');
    if (parts.length < 3)
    {
        document.forms["myForm"]["data"].style.border = "2px solid red"
        errMsg = errMsg.concat("invalid date\n");
    }

    else {
        var day = parseInt(parts[0]);
        var month = parseInt(parts[1]);
        var year = parseInt(parts[2]);
        if (isNaN(day) || isNaN(month) || isNaN(year))
        {
            document.forms["myForm"]["data"].style.border = "2px solid red"
            errMsg = errMsg.concat("invalid date\n");
        }
        if (day < 1 || year < 1)
        {
            document.forms["myForm"]["data"].style.border = "2px solid red"
            errMsg = errMsg.concat("invalid date\n");
        }
        if(month>12||month<1)
        {
            document.forms["myForm"]["data"].style.border = "2px solid red"
            errMsg = errMsg.concat("invalid date\n");
        }
        if ((month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12) && day > 31)
        {
            document.forms["myForm"]["data"].style.border = "2px solid red"
            errMsg = errMsg.concat("invalid date\n");
        }
        if ((month == 4 || month == 6 || month == 9 || month == 11 ) && day > 30)
        {
            document.forms["myForm"]["data"].style.border = "2px solid red"
            errMsg = errMsg.concat("invalid date\n");
        }
        if (month == 2) {
            if (((year % 4) == 0 && (year % 100) != 0) || ((year % 400) == 0 && (year % 100) == 0)) {
                if (day > 29)
                {
                    document.forms["myForm"]["data"].style.border = "2px solid red"
                    errMsg = errMsg.concat("invalid date\n");
                }
            } else {
                if (day > 28)
                {
                    document.forms["myForm"]["data"].style.border = "2px solid red"
                    errMsg = errMsg.concat("invalid date\n");
                }
            }
        }

    }
    if (varsta == "")
    {
        document.forms["myForm"]["varsta"].style.border = "2px solid red"
        errMsg = errMsg.concat("age must be filled out\n");
    }
    else{
        document.forms["myForm"]["varsta"].style.border = ""
    }
    if (isNaN(Number(varsta)))
    {
        document.forms["myForm"]["varsta"].style.border = "2px solid red"
        errMsg = errMsg.concat("age invalid\n");
    }
    else{
        document.forms["myForm"]["varsta"].style.border = ""
    }

    if (email == "" )
    {
        document.forms["myForm"]["mail"].style.border = "2px solid red"
        errMsg = errMsg.concat("email must be filled out\n");
    }
    else

    if (email.includes("@") == false)
    {
        document.forms["myForm"]["mail"].style.border = "2px solid red"
        errMsg = errMsg.concat(" invalid email\n");
    }
    else{
        document.forms["myForm"]["mail"].style.border = ""
    }




    if(errMsg!=""){
        alert(errMsg)
        return false;
    }
    if(errMsg==""){
        alert("date corecte")
        return false;
    }




}