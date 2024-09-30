
var close = document.getElementsByClassName("close");
var notificationIndicator = document.getElementById("notification_circle");
var notificationsNone = document.getElementById("notificationsnone");

var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
    i = i - 1;
    if(i == 0){
      notificationIndicator.style.display = "none";
      notificationsNone.style.display = "block";
    } else {
      notificationIndicator.style.display = "block";
      notificationsNone.style.display = "none";
    }
    setInterval(() => {
      console.log(i);
    }, 1000);
  }
}
console.log(i);

function notificationsCloseOpen() {
  var notificationsEl = document.getElementById("notifications_window");
  notificationsEl.classList.toggle("display__none");
}