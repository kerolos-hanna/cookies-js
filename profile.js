var div = document.querySelector('#div')


var visits = getCookies("counter")
if (!visits) {
  counter = 1;
} else {
  counter = parseInt(visits) + 1;
}
UpdateCookie("counter", counter, 0);



div.innerHTML = "Hello " + getCookies("name").fontcolor(getCookies("selection")) + " your gender is " + getCookies("gender") + " you " + getCookies("age") + " years old" + " you have been here " + getCookies("counter").fontcolor(getCookies("selection")) + " times"