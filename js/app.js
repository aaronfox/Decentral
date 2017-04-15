var $password = $("#password");
var $confirmPassword = $("#confirm_password");
$("form span").hide();
function passwordEvent() {
  if($($password).val().lenght>8){
    $($password).next().hide();
  }
  else{
    $($password).next().show();
  }
}
function confirmPasswordEvent(){
  if($($password).val() === $($confirmPassword).val()){
    $confirmPassword.next().hide();
  }
  else{
    $confirmPassword.next().show();
  }
}
$password.focus(passwordEvent).keyup(passwordEvent);
$confirmPassword.focus(confirmPasswordEvent).keyup(confirmPassword);
