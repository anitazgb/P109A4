function validateForm() {
  var errorMessages = ""; // Variable to store error messages

  // Variables control the status of each field and initially set to false
  var validFirstname = false;
  var validLastname = false;
  var validEmail = false;
  var validPhone = false;
  var validUsername = false;
  var validPassword = false;
  var validAddress = false;
  var validCity = false;
  var validState = false;
  var validCountry = false;
  var validZipcode = false;

  // Get form field values
  var firstname = document.getElementById("firstname").value;
  var lastname = document.getElementById("lastname").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  var address = document.getElementById("address").value;
  var city = document.getElementById("city").value;
  var state = document.getElementById("state").value;
  var country = document.getElementById("country").value;
  var zipcode = document.getElementById("zipcode").value;

  // Validate FirstName
  if (firstname === "" || firstname === "null" || firstname.length > 20 || !/^[A-Za-z]+$/.test(firstname)) {
    errorMessages += "<p>The firstname is required and should contain only alphabetical characters, maximum 20 characters.</p>";
  } else {
    validFirstname = true;
  }

  // Validate LastName
  if (lastname === "" || lastname === "null" || lastname.length > 50 || !/^[A-Za-z]+$/.test(lastname)) {
    errorMessages += "<p>The lastname is required and should contain only alphabetical characters, maximum 50 characters.</p>";
  } else {
    validLastname = true;
  }

  // Validate Email
  var atpos = email.indexOf("@");
  var dotpos = email.lastIndexOf(".");
  if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= email.length) {
    errorMessages += "<p>Invalid email address.</p>";
  } else {
    validEmail = true;
  }

  // Validate Phone
  var formattedPhone = phone.replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3");
  if (isNaN(phone) || phone.length > 15 || phone === null || phone === "") {
    errorMessages = "<p>Invalid phone number</p>";
  } else {
    document.getElementById("phone").value = formattedPhone;
    validPhone = true;
  }

  // Validate Username
  if (username === "" || username === "null" || username.length > 12) {
    errorMessages += "<p>Username is required and should be maximum 12 characters.</p>";
  } else {
    validUsername = true;
  }

  // Validate Password
  var uppercase = /[A-Z]/;
  var lowercase = /[a-z]/;
  var number = /[0-9]/;
  var specialChar = /[!@#$%^&*]/;

  if (
    password === "" ||
    password.length > 7 ||
    !uppercase.test(password) ||
    !lowercase.test(password) ||
    !number.test(password) ||
    !specialChar.test(password)
  ) {
    errorMessages += "<p>Password is required and should contain 1 UPPER, 1 lower, 1 number, and 1 special character.</p>";
  } else {
    validPassword = true;
  }

  // Validate Address
  if (address === "" || address === "null") {
    errorMessages += "<p>Address is required.</p>";
  } else {
    validAddress = true;
  }

  // Validate City
  if (city === "" || city === "null") {
    errorMessages += "<p>City is required.</p>";
  } else {
    validCity = true;
  }

  // Validate State
  if (state === "" || state === null) {
    errorMessages += "<p>State is required.</p>";
  } else {
    validState = true;
  }

  // Validate Country
  if (country === "" || country === null) {
    errorMessages += "<p>Country is required.</p>";
  } else {
    validCountry = true;
  }

  // Validate ZipCode
  if (country === "USA" && (zipcode === "" || zipcode === null || !/^[0-9]{5}$/.test(zipcode))) {
    errorMessages += "<p>Invalid ZIP code. Required only if the country is USA, and should be 5 digits.</p>";
  } else {
    validZipcode = true;
  }

  // Display error messages
  document.getElementById("errorMessages").innerHTML = errorMessages;

  // Return true if there are no error messages (form is valid), otherwise return false
  return errorMessages === "";
}

