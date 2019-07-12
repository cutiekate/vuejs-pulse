function click_login() {
  document.querySelector('.cont_forms').className = "cont_forms cont_forms_active_login";
  document.querySelector('.cont_form_login').style.display = "block";
  document.querySelector('.cont_form_signup').style.opacity = "0";

  setTimeout(function() {
    document.querySelector('.cont_form_login').style.opacity = "1";
  }, 400);

  setTimeout(function() {
    document.querySelector('.cont_form_signup').style.display = "none";
  }, 200);
}

function click_signup(at) {
  document.querySelector('.cont_forms').className = "cont_forms cont_forms_active_signup";
  document.querySelector('.cont_form_signup').style.display = "block";
  document.querySelector('.cont_form_login').style.opacity = "0";

  setTimeout(function() {
    document.querySelector('.cont_form_signup').style.opacity = "1";
  }, 100);

  setTimeout(function() {
    document.querySelector('.cont_form_login').style.display = "none";
  }, 400);

}

function back_login_signup() {

  document.querySelector('.cont_forms').className = "cont_forms";
  document.querySelector('.cont_form_signup').style.opacity = "0";
  document.querySelector('.cont_form_login').style.opacity = "0";

  setTimeout(function() {
    document.querySelector('.cont_form_signup').style.display = "none";
    document.querySelector('.cont_form_login').style.display = "none";
  }, 500);

}
