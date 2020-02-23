var nameInput = document.querySelector('#nameInput');
var ageInput = document.querySelector('#ageInput');
var gender = document.querySelector('#gender');
var selection = document.querySelector('#selection');
var register = document.querySelector('[type=submit]');
var counter = 0;

register.addEventListener('click',()=>{
  AddCookie("name",nameInput.value,10);
  // console.log(document.cookie)
  AddCookie("age", ageInput.value, 10);
  AddCookie("gender", gender.value, 10);
  AddCookie("selection", selection.options[selection.selectedIndex].value, 10);

  AddCookie("counter", counter, 0);
})


