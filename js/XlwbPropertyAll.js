function showDate() { /*定义函数*/
	var myDate = new Date();
	var myWeek = '&nbsp;星期' + '日一二三四五六'.charAt(myDate.getDay());

	/*var myWeek = myDate.getDay();
	if(myWeek==0){
		myWeek='星期日';
	}else if(myWeek==1){
		myWeek='星期一';
	}
	else if(myWeek==2){
		myWeek='星期二';
	}
	else if(myWeek==3){
		myWeek='星期三';
	}*/

	document.getElementById('sTime').innerHTML = myDate.toLocaleString() + myWeek;
	// document.write(myDate.toLocaleString()+myWeek);
}
//window.onload=showDate;//showDate();/*调用函数*/
window.onload = setInterval(showDate, 1000); //动态显示当前日期和时间


//校验账号的格式
function check_code() {
	//获取账号
	var userName = document.getElementById("login_userName").value;
	//校验其格式(\w字母或数字或下划线)
	var txtColor = document.getElementById("login_userNameCodeTest").style.color;
	var reg = /^\w{6,10}$/;
	if (reg.test(userName)) {
		//通过，增加ok样式
		document.getElementById("login_userNameCodeTest").style.color = "green";
		document.getElementById("login_userNameCodeTest").style.borderColor = "green";
		document.getElementById("login_userNameCodeTest").style.animation = "flyOut 2s";
		document.getElementById("login_userNameCodeTest").style.right = "-800px";
		document.getElementById("login_userName").style.border = "2px solid springgreen";
	} else {
		//不通过，增加error样式
		document.getElementById("login_userNameCodeTest").style.color = 'red';
		document.getElementById("login_userNameCodeTest").style.borderColor = "red";
		document.getElementById("login_userName").style.border = "2px solid red";
	}

}

function check_pwd() {
	//获取密码
	var userPassword = document.getElementById("login_userPassword").value;
	var txtColor2 = document.getElementById("login_userPassswordCodeTest").style.color;
	var reg2 = /^\w{8,20}$/;
	if (reg2.test(userPassword)) {
		document.getElementById("login_userPassswordCodeTest").style.color = "green";
		document.getElementById("login_userPassswordCodeTest").style.borderColor = "green";
		document.getElementById("login_userPassswordCodeTest").style.animation = "flyOut 2s";
		document.getElementById("login_userPassswordCodeTest").style.right = "-800px";
		document.getElementById("login_userPassword").style.border = "2px solid springgreen";
	} else {
		document.getElementById("login_userPassswordCodeTest").style.color = "red"
		document.getElementById("login_userPassswordCodeTest").style.borderColor = "red";
		document.getElementById("login_userPassword").style.border = "2px solid red";
	}

}


