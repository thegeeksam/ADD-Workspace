function validateForm() {
  var name = document.forms.RegForm.Name.value;
  //var name = document.forms["RegForm"]["Name"].value;
  var email = document.forms["RegForm"]["EMail"].value;
  var phone = document.forms["RegForm"]["Telephone"].value;
  var sel = document.forms["RegForm"]["Subject"].value;
  var password = document.forms["RegForm"]["Password"].value;
  var address = document.forms["RegForm"]["Address"].value;

  //Javascript reGex for Email Validation.
  var regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;

  // Javascript reGex for Phone Number validation.
  var regPhone = /^\d{10}$/;

  // Javascript reGex for Name validation
  var regName = /\d+$/g;

  if (name == "" || regName.test(name)) {
    alert("Please Enter your name properly.");
    return false;
    console.log("Hello CSE!");
  }

  if (address == "") {
    alert("Please enter your address.");
    return false;
  }

  if (email == "" || !regEmail.test(email)) {
    alert("Please enter a valid e-mail address.");
    return false;
  }

  if (password == "") {
    alert("Please enter your password");
    return false;
  }

  if (password.length < 8) {
    alert("Password should be at least 8 character long");
    return false;
  }

  if (phone == "" || !regPhone.test(phone)) {
    alert("Phone Number Must be 10 Digits Long");
    return false;
  }

  if (sel.selectedIndex == -1) {
    alert("Please enter your course.");
    return false;
  }
  alert("Form Successfully Submitted");

  return true;
}

// Obsolete code
// var name = document.forms.RegForm.Name.value;
// var email = document.forms.RegForm.EMail.value;
// var phone = document.forms.RegForm.Telephone.value;
// var what = document.forms.RegForm.Subject.value;
// var password = document.forms.RegForm.Password.value;
// var address = document.forms.RegForm.Address.value;
