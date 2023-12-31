// //========================== log in==============================

// var userEmail = document.getElementById("input1").value
// function login() {
//     if ( input1.length == 0){
//         // console.log("All inputs is required");
//         document.getElementById("span").innerHTML = ("All inputs is required")
//        document.getElementById("input1").innerHTML=""


//         }else  {
//             document.getElementById("span").innerHTML = ("incorrect email or password")

//         }
// }
// document.getElementById("butLog").addEventListener("click" , function () {
//     if (input1.length == 0) {
//         // console.log("All inputs is required");
//         document.addEventListener(click, function name(params) {

//         })
//     }
// })






// if (localStorage.getItem("elUser") != null) {
//     allDe = JSON.parse(localStorage.getItem("elUser"))
// }


// function isEmailExist() {
//     for (var i = 0; i < allDe.length; i++) {
//         if (allDe[i].pEmail.toLowerCase() == email.toLowerCase) {
//             return true
//         }
//         return false
//     }
// }
function clearInput() {
    var email = document.getElementById("email").innerHTML = ""

}


var email = document.getElementById("email");
var password = document.getElementById("password")
var allDe = []

if(document.getElementById("butLog")!=null){
    document.getElementById("butLog").addEventListener("click", function () {
        var userLog = {
            pEmail: email.value,
            pPassword: password.value
        }
    
    
    
        if (userLog.pEmail == "" || userLog.pPassword == "") {
            document.querySelector(".one").innerHTML = "  all inputs is required "
            document.querySelector(".tow").innerHTML = ""
        }
        // else if (isEmailExist() == true) {
        //     document.querySelector(".tow").innerHTML = "  incorrect email or password "
        //     document.querySelector(".one").innerHTML = ""
        // }
        else {
            var arr = JSON.parse(localStorage.getItem("elUser"))
            console.log(arr);
    
            for (var i = 0; i < arr.length; i++) {
                if (arr[i].pEmail == email.value) {
                    
                    localStorage.setItem("userName",arr[i].pName)
                    window.location.href = "indx3.html"
    
                   
                }
                else {
                    document.querySelector(".tow").innerHTML = "  incorrect email or password "
                    document.querySelector(".one").innerHTML = ""
                }
            }
    
            // allDe.push(userLog);
            // localStorage.setItem("elUser", JSON.stringify(allDe))
    
            clearInput()
            // document.getElementById("butLog").innerHTML= success
    
        }
    })
}

if (document.getElementById("h1")!=null){
    document.getElementById("h1").innerHTML= " Welcome " +   localStorage.getItem( "userName" );

}

function logout(){
    window.location.href = "indx.html"
}


















// ================================SIGNUP================================
