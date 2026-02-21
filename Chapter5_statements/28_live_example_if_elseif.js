// lets say weguide as three roles: Admin, Manager and Clinician
// we are checking which role the logged user has'

let islogggedIn = true;
let userRole = "Clinician";

if (islogggedIn) {
    if (userRole === "Admin") {
        console.log("Full access");
    } else if (userRole === "Manager") {
        console.log("Partial access");
    } else if (userRole === "Clinician") {
        console.log("partial access but better than Manager");
    } else {
        console.log("No access");
    }

} else {
    console.log("Please login to access the dashboard");
}

//another live example
//check if you are a student then you should access all the doors of school

let isInsideSchool = true;
let role = "Principal";

if (isInsideSchool) {
    if (role === "Teacher") {
        console.log("You can access all the doors");

    } else if (role === "Principal") {
        console.log("All door access plus can reset door access for everyone");

    } else if (role === "Student") {
        console.log("Only dedicated class room door access");

    } else {
        console.log("No access at all");

    }

} else {
    console.log("You are outside the school");
}
