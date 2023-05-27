function validateForm() {
  var errorMessages = ""; // Variable to store error messages

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
  if (firstname === "" || firstname.length > 20 || !/^[A-Za-z]+$/.test(firstname)) {
    errorMessages += "<p>The firstname is required and should contain only alphabetical characters, maximum 20 characters.</p>";
  }

  // Validate LastName
  if (lastname === "" || lastname.length > 50 || !/^[A-Za-z]+$/.test(lastname)) {
    errorMessages += "<p>The lastname is required and should contain only alphabetical characters, maximum 50 characters.</p>";
  }

  // Validate Email
  if (email === "" || !/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(email)) {
    errorMessages += "<p>Invalid email address.</p>";
  }

  // Validate Phone
  if (phone === "" || !/^[0-9]+$/.test(phone) || phone.length > 15) {
    errorMessages += "<p>Invalid phone number. Only numerical values are allowed, maximum 15 digits.</p>";
  }

  // Validate Username
  if (username === "" || username.length > 12) {
    errorMessages += "<p>Username is required and should be maximum 12 characters.</p>";
  }

  // Validate Password
  if (password === "" || password.length > 7) {
    errorMessages += "<p>Password is required and should be maximum 7 characters.</p>";
  }

  // Validate Address
  if (address === "") {
    errorMessages += "<p>Address is required.</p>";
  }

  // Validate City
  if (city === "") {
    errorMessages += "<p>City is required.</p>";
  }

  // Validate State
  if (state === "") {
    errorMessages += "<p>State is required.</p>";
  }

  // Validate Country
  if (country === "") {
    errorMessages += "<p>Country is required.</p>";
  }

  // Validate ZipCode
  if (country === "USA" && (zipcode === "" || !/^[0-9]{5}$/.test(zipcode))) {
    errorMessages += "<p>Invalid ZIP code. Required only if the country is USA, and should be 5 digits.</p>";
  }

  // Display error messages
  document.getElementById("errorMessages").innerHTML = errorMessages;

  // Return true if there are no error messages (form is valid), otherwise return false
  return errorMessages === "";
}

