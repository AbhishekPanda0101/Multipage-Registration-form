 
function validateBasic() {           
    var fname = document.registration.fname;    
    var lname = document.registration.lname;
    var fatherfname = document.registration.fatherfname;
    var motherfname = document.registration.motherfname;
    var fatherlname = document.registration.fatherlname;
    var motherlname = document.registration.motherlname;
    var dob =document.registration.dob;   
    var nationality = document.registration.nationality; 
    var address = document.registration.address;
    var city = document.registration.city;   
    var country = document.registration.country;
    var gender = document.registration.gender;    
    var email = document.registration.email;     
    var mobile = document.registration.telmob;     
    var home = document.registration.telhome; 

    if (fname.value.length <= 0) {    
        alert("First Name is required");    
        fname.focus();    
        return false;    
    }
    
    if (lname.value.length <= 0) {    
        alert("Last Name is required");    
        lname.focus();    
        return false;    
    }
    if (dob.value.length <= 0) {    
        alert("Date of Birth is required");    
        dob.focus();    
        return false;    
    }    
    if (email.value.length <= 0) {    
        alert("Email Id is required");    
        email.focus();    
        return false;    
    } 
    if (fatherfname.value.length <= 0) {    
        alert("Father's First Name is required");    
        fatherfname.focus();    
        return false;    
    }
    if (fatherlname.value.length <= 0) {    
        alert("Father's Last Name is required");    
        fatherlname.focus();    
        return false;    
    }
    
    if (motherfname.value.length <= 0) {    
        alert("Mother's First Name is required");    
        motherfname.focus();    
        return false;    
    } 
    if (motherlname.value.length <= 0) {    
        alert("Mother's Last Name is required");    
        motherlname.focus();    
        return false;    
    } 
    if (gender.value.length <= 0) {    
        alert("Gender is required");    
        gender.focus();    
        return false;    
    }    

    if (nationality.value.length <= 0) {    
        alert("Nationality is required");    
        nationality.focus();    
        return false;    
    } 

    if (address.value.length <= 0) {    
        alert("Address is required");    
        address.focus();    
        return false;    
    } 
    
    if (country.value.length <= 0) {     
        alert("Country is required");    
        country.focus();     
        return false;    
    }   
    if (mobile.value.length <= 0) {    
        alert("Mobile number is required");    
        mobile.focus();    
        return false;    
    }
    let basic_data = {
        "First name": fname,
        "Last name": lname,
        "Date of Birth": dob,
        "Email": email,
        "Father's First name": fatherfname,
        "Father's Last name": fatherlname,
        "Mother's First name": motherfname,
        "Mother's Last name": motherlname,
        "gender": gender,
        "Nationality": nationality,
        "StreetAddress": address,
        "City": city,
        "Country": country,
        "TelePhone": home,
        "Mobile Number": mobile
    };
    localStorage.setItem("Basic_details", JSON.stringify(basic_data));
    location.href='educationdetails.html';     
}    
function validateMail(id)  
{     var element = document.getElementById(id);
         var RegExp = /^[a-zA-Z0-9._]+@[a-zA-Z0-9._]+\.[a-zA-Z]{2,4}$/;
         if (!RegExp.test(element.value))
          {
             alert("Enter valid Email Id !");
        }
}  
function validateMobile(id)
{
    {
        var number = document.getElementById(id);
        var RegExp = /^[0-9]{10}$/;
        if (!RegExp.test(number.value)) {
            alert("Enter valid Mobile Number !");
            return false;
        }
    }
}
function validateedudetails()
{
    var hscinst = document.registration.hscinstitute;    
    var hscboard = document.registration.hscboard;
    var hscscore = document.registration.hscscore;
    var sscinst = document.registration.sscinstitute;
    var sscboard = document.registration.sscboard;
    var sscscore = document.registration.sscscore;
    var pursuing = document.registration.pursuing;   
    var institution = document.registration.institute; 
    var overallpercentage = document.registration.overallper;
    var backlog = document.registration.backlog;
   
    if (hscinst.value.length <= 0) {    
        alert("Enter your HSC institute name");    
        hscinst.focus();    
        return false;    
    }
    if (hscscore.value.length <= 0) {    
        alert("Enter your HSC score");    
        hscscore.focus();    
        return false;    
    }
    if (hscboard.value.length <= 0) {    
        alert("Select your HSC Board name");    
        hscboard.focus();    
        return false;    
    }
    if (sscinst.value.length <= 0) {    
        alert("Enter your SSC institute name");    
        sscinst.focus();    
        return false;    
    }
    if (sscscore.value.length <= 0) {    
        alert("Enter your SSC score");    
        sscscore.focus();    
        return false;    
    }
    if (sscboard.value.length <= 0) {    
        alert("Enter your SSC Board name");    
        sscboard.focus();    
        return false;    
    }
    if (pursuing.value.length <= 0) {    
        alert("Enter what you're currently pursuing");
        pursuing.focus();    
        return false;    
    }
    if (institution.value.length <= 0) {    
        alert("Enter your current institution name");    
        institution.focus();    
        return false;    
    }  if (overallpercentage.value.length <= 0) {    
        alert("Enter your overall percentage");    
        overallpercentage.focus();    
        return false;    
    }
    if (backlog.value.length <= 0) {    
        alert("This field can't be left empty");    
        backlog.focus();     
        return false;    
    }
    let education_data = {
        "HSC Institution name": hscinst,
        "HSC Board": hscboard,
        "Score in HSC in percentage": hscscore,
        "SSC Board": sscinst,
        "SSC Board": sscboard,
        "Score in SSC in percentage": sscscore,
        "Currently pursuing": pursuing,
        "Current educational institution name": institution,
        "Overall percentage": overallpercentage,
        "Current backlogs if any": backlog};
    localStorage.setItem("Education_details", JSON.stringify(education_data));

    location.href='uploaddocument.html';
}
function validatedocument() 
{
    var photo,HSC,SSC,All;
    photo = document.getElementById("photo").value;
    HSC = document.getElementById("hscsheet").value;
    SSC = document.getElementById("sscsheet").value;
    All = document.getElementById("allsemsheet").value;

    if (document.getElementById("photo").value == "") {

        alert("Please select a passport size photograph.");
        return false;

    }
    if (document.getElementById("hscsheet").value == "") {

        alert("Please select an image, PDF or docs  for HSC mark sheet.");
        return false;
    }
    if (document.getElementById("sscsheet").value == "") {

        alert("Please select an image, PDF or docs for SSC mark sheet");
        return false;
    }
    if (document.getElementById("allsemsheet").value == "") {

        alert("Please select  all semesters mark sheet in a single PDF or docs.");
        return false;
    }
    let document_data = {
        "Recent passport size photograph": photo,
        "HSC mark sheet": HSC,
        "SSC mark sheet": SSC,
        "All semesters mark sheet": All
    };
    localStorage.setItem("Document_details", JSON.stringify(document_data));
    alert("Registration completed please wait for the confirmination mail.");
}

   
function checkimage() {
    var image = document.getElementById("photo").value;
    var checkimg = image.toLowerCase();
    var filedetails = document.getElementById("photo");
    var size = parseFloat(filedetails.files[0].size / (1024 * 1024)).toFixed(4);
    if (image != '') {
        if (!checkimg.match(/(\.jpg|\.png|\.JPG|\.PNG|\.jpeg|\.JPEG)$/)) {
            alert("Please Select .jpg,.png File");
            document.getElementById("photo").value = "";
            document.getElementById("file_name").innerHTML = "Choose file"; return;
        } else if (size > 4) {
            alert(" Size must be less than 4 MB");
            document.getElementById("photo").value = "";
            document.getElementById("file_name").innerHTML = "Choose file"; return;
        } else {
            uploadFile();
            document.getElementById("photo").value = "";
            document.getElementById("file_name").innerHTML = "Choose file";
        }
    }
}
function checkhsc(){
    var image = document.getElementById("hscsheet").value;
    var checkimg = image.toLowerCase();
    var filedetails = document.getElementById("hscsheet");
    var size = parseFloat(filedetails.files[0].size / (1024 * 1024)).toFixed(4);
    if (image != '') {
        if (!checkimg.match(/(\.jpg|\.png|\.JPG|\.PNG|\.jpeg|\.JPEG|\.doc|\.docx|\.pdf)$/)) {
            alert("Please upload image, PDF or docs only ");
            document.getElementById("hscsheet").value = "";
            document.getElementById("file_name").innerHTML = "Choose file"; return;
        } else if (size > 4) {
            alert(" Size must be less than 4 MB");
            document.getElementById("hscsheet").value = "";
            document.getElementById("file_name").innerHTML = "Choose file"; return;
        } else {
            uploadFile();
            document.getElementById("hscsheet").value = "";
            document.getElementById("file_name").innerHTML = "Choose file";
        }
    }

}
function checkssc(){
    var image = document.getElementById("sscsheet").value;
    var checkimg = image.toLowerCase();
    var filedetails = document.getElementById("sscsheet");
    var size = parseFloat(filedetails.files[0].size / (1024 * 1024)).toFixed(4);
    if (image != '') {
        if (!checkimg.match(/(\.jpg|\.png|\.JPG|\.PNG|\.jpeg|\.JPEG|\.doc|\.docx|\.pdf)$/)) {
            alert("Please upload image, PDF or docs only ");
            document.getElementById("sscsheet").value = "";
            document.getElementById("file_name").innerHTML = "Choose file"; return;
        } else if (size > 4) {
            alert(" Size must be less than 4 MB");
            document.getElementById("sscsheet").value = "";
            document.getElementById("file_name").innerHTML = "Choose file"; return;
        } else {
            uploadFile();
            document.getElementById("sscsheet").value = "";
            document.getElementById("file_name").innerHTML = "Choose file";
        }
    }

}
function checkallsem(){
    var image = document.getElementById("allsemsheet").value;
    var checkimg = image.toLowerCase();
    var filedetails = document.getElementById("allsemsheet");
    var size = parseFloat(filedetails.files[0].size / (1024 * 1024)).toFixed(10);
    if (image != '') {
        if (!checkimg.match(/(\.doc|\.docx|\.pdf)$/)) {
            alert("Please Select  PDF or docs only ");
            document.getElementById("allsemsheet").value = "";
            document.getElementById("file_name").innerHTML = "Choose file"; return;
        } else if (size > 10) {
            alert(" File size must be less than 10 MB");
            document.getElementById("allsemsheet").value = "";
            document.getElementById("file_name").innerHTML = "Choose file"; return;
        } else {
            uploadFile();
            document.getElementById("allsemsheet").value = "";
            document.getElementById("file_name").innerHTML = "Choose file";
        }
    }
}
