// window.onload = function() {
// 	function addzero(num) {
// 		if (num >= 10) {
// 			return "" + num;
// 		} else {
// 			return "0" + num;
// 		}
// 	}
// 
// 	function times() {
// 		var date = new Date();
// 		var aTime = document.getElementById('aTime');
// 		var str = addzero(date.getHours()) + ":" + addzero(date.getMinutes()) + ":" + addzero(date.getSeconds());
// 		aTime.innerHTML = str;
// 	}
// 	setInterval(times, 1000);
// 	times();
// 
// 	function Ttranform() {
// 		var date = new Date();
// 		var hours = document.getElementById('hours');
// 		var minutes = document.getElementById('minutes');
// 		var seconds = document.getElementById('seconds');
// 		var num = date.getHours();
// 		var num2 = date.getMinutes();
// 		var num3 = date.getSeconds();
// 		hours.style.transform = "rotate(" + (num * 30 - 90) + "deg)";
// 		minutes.style.transform = "rotate(" + (num2 * 6 - 90) + "deg)";
// 		seconds.style.transform = "rotate(" + (num3 * 6 - 90) + "deg)";
// 
// 	}
// 	setInterval(Ttranform, 1000);
// 	Ttranform();
// 	Adate();
// }
// 
// function Adate() {
// 	var date = new Date();
// 	var aDate = document.getElementById("aDate");
// 	var week = document.getElementById('week');
// 	var weekList = ["星期天", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
// 	var str = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
// 	aDate.innerHTML = str;
// 	var westr = weekList[date.getDay()];
// 	week.innerHTML = westr;
// }
// 


window.onload = function() {
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

ctx.strokeStyle = '#00ffff';
ctx.lineWidth = 10;//时钟针粗细
ctx.shadowBlur = 15;
ctx.shadowColor = '#00ffff'

function degToRad(degree) {
    var factor = Math.PI / 180;
    return degree * factor;
}

function renderTime() {
    var now = new Date();
    var today = now.toDateString();
    var time = now.toLocaleTimeString();
    var hrs = now.getHours();
    var min = now.getMinutes();
    var sec = now.getSeconds();
    var mil = now.getMilliseconds();
    var smoothsec = sec + (mil / 1000);
    var smoothmin = min + (smoothsec / 60);

    //Background
    gradient = ctx.createRadialGradient(250, 250, 5, 250, 250, 300);
    gradient.addColorStop(0, "#03303a");
    gradient.addColorStop(1, "black");
    ctx.fillStyle = gradient;
    //ctx.fillStyle = 'rgba(00 ,00 , 00, 1)';
    ctx.fillRect(0, 0, 500, 500);
    //Hours
    ctx.beginPath();
    ctx.arc(250, 250, 200, degToRad(270), degToRad((hrs * 30) - 90));
    ctx.stroke();
    //Minutes
    ctx.beginPath();
    ctx.arc(250, 250, 170, degToRad(270), degToRad((smoothmin * 6) - 90));
    ctx.stroke();
    //Seconds
    ctx.beginPath();
    ctx.arc(250, 250, 140, degToRad(270), degToRad((smoothsec * 6) - 90));
    ctx.stroke();
    //Date
    ctx.font = "25px Helvetica";
    ctx.fillStyle = 'rgba(00, 255, 255, 1)'
    ctx.fillText(today, 175, 250);
    //Time
    ctx.font = "25px Helvetica Bold";
    ctx.fillStyle = 'rgba(00, 255, 255, 1)';
    ctx.fillText(time + ":" + mil, 175, 280);

}

setInterval(renderTime, 40);
}