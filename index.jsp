<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta charset="UTF-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge,Chrome=1" />
		<!--使用Bootstrape兼容IE8-->
		<meta http-equiv="X-UA-Compatible" content="IE-9" />
		<!--使用Bootstrape兼容IE9-->
		<!--[if lt IE 9-->
		<script src="https://cdn.bootcss.com/html5shiv/3.7.3/html5shiv.min.js"></script>
		<script src="https://cdn.bootcss.com/respond.js/1.4.2/respond.min.js"></script>

		<script src="js/XlwbPropertyAll.js"></script>
		<!--[end if]-->
		<meta name="viewport" content="width=device-width,initial-scale=1" /><!-- 新 Bootstrap 核心 CSS 文件 -->
		<link href="https://cdn.staticfile.org/twitter-bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet"><!-- jQuery文件。务必在bootstrap.min.js 之前引入 -->
		<script src="https://cdn.staticfile.org/jquery/2.1.1/jquery.min.js"></script><!-- 最新的 Bootstrap 核心 JavaScript 文件 -->
		<script src="https://cdn.staticfile.org/twitter-bootstrap/3.3.7/js/bootstrap.min.js"></script>
		<!--自编css-->
		<link rel="stylesheet" href="css/xlwb.css" />
		<!--网络图标库-->
		<link href="//netdna.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet">
		<link rel="icon" type="image/x-icon" href="img/favicon.ico" />
		<link href="css/style.css" rel="stylesheet" type="text/css" />
		<script type="text/javascript" src="js/script.js"></script>
		<!--分享导入js-->
		<script type="text/javascript" src="js/jquery.min.js"></script>
		<!--分享导入css-->
		<link rel="stylesheet" type="text/css" href="css/share.css" />
		<script type="text/javascript" src="js/Oclock.js"></script>
		<script src="js/jquery.min.js"></script>
		<script src="js/jq-slideVerify.js" type="text/javascript" charset="utf-8"></script>
		<!-- <link rel="stylesheet" type="text/css" href="css/demo.css" /> -->
		<title>微博-随时随地发现新鲜事</title>
</head>
<body>
		<!-- 代码 开始 -->
		<div id="appgame-leftside-share">
			<div class="appgame-leftside-share rwt_share" id="rwt_share">
				<a class="appgame-leftside-weixin" data-cmd="weixin" title="分享到微信">微信</a>
				<a class="appgame-leftside-qzone" data-cmd="qzone" title="分享到QQ空间">QQ空间</a>
				<a class="appgame-leftside-sqq" data-cmd="sqq" title="分享到QQ好友">QQ好友</a>
				<a class="appgame-leftside-tsina" data-cmd="tsina" title="分享到新浪微博">新浪微博</a>
				<a class="appgame-leftside-fbook" data-cmd="fbook" title="分享到Facebook">Facebook</a>
				<a class="appgame-leftside-twi" data-cmd="twi" title="分享到Twitter">Twitter</a>
			</div>
			<a class="appgame-leftside-top" onclick="gotoTPoint(&#39;top&#39;,400)"></a>
		</div>
		<script type="text/javascript" src="js/lrtk.js"></script>
		<script type="text/javascript" src="js/share.min.js"></script>
		<!-- 代码 结束 -->
		<!--style="background: linear-gradient(to top, #fbc2eb 0%, #a6c1ee 100%);"-->
		<div class="container">
			<div class="row r_nav_fix">
				<nav class="navbar navbar-default" role="navigation">
					<!-- <div class="col-xs-12 col-md-6"><div class="header_redline"></div></div> -->
					<!--放LOGO位置-->
					<div class="col-xs-12 col-md-3"><a class="navbar-brand logo_box" href="#"><img class="logo" src="img/logoimg.png"></a></div>
					<div class="col-xs-12 col-md-4">
						<!--放搜索框位置-->
						<div class="search_input"><input type="text" class="input_XXX" placeholder="搜索微博、找人">
							<a href="#search" style="display: inline-block;width: 28px;height: 28px;background: url(img/icon_search2.png) 0px 0px no-repeat;"></a></div>
					</div>
					<div class="col-xs-12 col-md-4">
						<!--放导航链接-->
						<div class="navbar-right nav_title">
							<ul>
								<li><a href="#shouye" style="transform:scale(0.35);display: inline-block;width:70px;height: 68px;top: -21px;background: url(img/nav_icon.png) -286px -13px no-repeat;"><span
										 class="text1" style="font-size: 42px; position: relative;top: 25px; left: 80px;">首页</span></a></li>
								<li><a href="#video" style="transform:scale(0.35);display: inline-block;width:70px;height: 68px;top: -21px;background: url(img/nav_icon.png) -16px -310px no-repeat;"><span
										 class="text1" style="font-size: 42px; position: relative;top: 25px; left: 80px;">视频</span></a></li>
								<li><a href="#find" style="transform:scale(0.35);display: inline-block;width:70px;height: 68px;top: -21px;background: url(img/nav_icon.png) -354px -13px no-repeat;"><span
										 class="text1" style="font-size: 42px; position: relative;top: 25px; left: 80px;">发现</span></a></li>
								<li><a href="#game" style="transform:scale(0.35);display: inline-block;width:70px;height: 68px;top: -21px;background: url(img/nav_icon.png) -424px -13px no-repeat;"><span
										 class="text1" style="font-size: 42px; position: relative;top: 25px; left: 80px;">游戏</span></a></li>
								<li style="position: relative; right: 305px;"><a href="registPersonal.html" style=" font-size: 15px;">注册</a></li>
								<li style="position: relative; right: 315px; top: 10px;border-left-width: 1px; border-left-style: solid;border-color: #d9d9d9; height: 15px;">&nbsp;</li>
								<li style="position: relative; right: 310px;"><a href="reighter" style=" font-size: 15px;">登录</a></li>
								<!-- 显示时间 -->
								<span id="sTime" style="position: fixed; right: 20px; top: 11px; font-size: 16px; color: red;"></span>
							</ul>
						</div>
					</div>
				</nav>
			</div>
			<!--row-->
			<div class="row r_mainContent">
				<div class="col-xs-2 col-md-3">
					<!-- <div id="tab">
						<div id="Tradion">
							<div id="hours" class="tran"></div>
							<div id="minutes" class="tran"></div>
							<div id="seconds" class="tran"></div>
							<div id="dian"></div>
							
						</div>
						<h1 id="aTime"></h1>
						<h3 id="aDate"></h3>
						<h2 id="week"></h2>
					</div> -->
					<!--固定一列导航条-->
					<div class="column">
						<!--1列-->
						<ul class="col_ul">
							<div class="col_div"><a class="col_a" href="#"> 热门</a></div>
							<div class="col_div"><a class="col_a_noHaveColor" href="#">头条</a></div>
							<div class="col_div"><a class="col_a_noHaveColor" href="#">视频</a></div>
							<div class="col_div"><a class="col_a_noHaveColor" href="#">新鲜事</a></div>
							<div class="col_div"><a class="col_a_noHaveColor" href="#">榜单</a></div>
							<div class="col_div"><a class="col_a_noHaveColor" href="#">搞笑</a></div>
							<div class="col_div"><a class="col_a_noHaveColor" href="#">社会</a></div>
							<div class="col_div"><a class="col_a_noHaveColor" href="#">时尚</a></div>
							<div class="col_div"><a class="col_a_noHaveColor" href="#">电影</a></div>
							<div class="col_div"><a class="col_a_noHaveColor" href="#">美女</a></div>
							<div class="col_div"><a class="col_a_noHaveColor" href="#">体育</a></div>
							<div class="col_div"><a class="col_a_noHaveColor" href="#">动漫</a></div>
						</ul>
					</div>
					<!--文字放大、文字减小-->
					<button id="contentSizeUp" style="width: 40px; font-size: 40px;position: fixed; float: left; bottom: 5px; left: 10px;border: none;">+</button>
					<button id="contentSizeDown" style="width: 40px; font-size: 40px;position: fixed; float: left; bottom: 5px; left: 60px;border: none;">-</button>
					<!--modal fade-->
					<!--漂浮的灯，控制是否夜间模式-->
					<button id="light" style=" width:50px;height: 78px; border: none; background-repeat: no-repeat;font-size: 1px;
						position: fixed; float: left; bottom: 5px; left: 120px; text-indent:-9999px;
						background: url(img/CloseLight.png); color: #000000;">
						夜间模式
					</button>
					<button id="changeBackgroundColor" onmouseover="MouseOver(this)" onmouseout="MouseOut(this)" style=" width:50px;height: 51px; border: none; background-repeat: no-repeat;font-size: 1px;
						position: fixed; float: left; bottom: 18px; left: 195px;
						background: url(img/changeColorfulBackground.png); color:transparent;
						transform:rotate(30deg);
						-moz-animation:rotate(30deg); /* IE 9 */
						-webkit-transform:rotate(0deg); /* Safari and Chrome */
						">
						colorful
					</button>
					<!--漂浮的小人-->
					<!--
					<div id="container" style=" display:none; ">
						<div id="header">
							<div class="inner clearfix">
							</div>
						</div>
						<div id="content" style="width: 900px; height: 300px; background-color: #ccc; margin: 0px auto;">
							内容
						</div>
					</div>
					<script type="text/javascript">
						var global = {
							serverUrl: 'http://www.funet8.com',
							templateUrl: '',
							colapseTheme: '',
							includeEmailFeed: '1',
							emailFeedUrl: '',

						};
					</script>
					<div id="spig" class="spig">
						<div id="message">
							加载中……</div>
						<div id="mumu" class="mumu">
						</div>
					</div>
					<script type="text/javascript">
						var isindex = false;
						var title = "欢迎你的到来喔，我们可以做好朋友";
						var visitor = "这位帅哥美眉";
					</script>
					-->


				</div>
				<div class="col-xs-10 col-md-5">
					<div id="myCarousel" class="carousel slide" style="width: 666px;margin-bottom: 15px;">
						<!-- 轮播（Carousel）指标 -->
						<ol class="carousel-indicators">
							<li data-target="#myCarousel" data-slide-to="0" class="active"></li>
							<li data-target="#myCarousel" data-slide-to="1"></li>
							<li data-target="#myCarousel" data-slide-to="2"></li>
							<li data-target="#myCarousel" data-slide-to="3"></li>
							<li data-target="#myCarousel" data-slide-to="4"></li>
						</ol><!-- 轮播（Carousel）项目 -->
						<div class="carousel-inner cycle_pic">
							<div class="item active "><img src="https://desk-fd.zol-img.com.cn/t_s960x600c5/g5/M00/00/0F/ChMkJ1g1WYmIdjyuAAK2AFYZK9IAAYAlQPqRpkAArYY926.jpg"
								 alt="First slide">
								<div class="carousel-caption">蔚来EP9极限性能电动超跑汽车</div>
							</div>
							<div class="item"><img src="https://desk-fd.zol-img.com.cn/t_s960x600c5/g5/M00/02/04/ChMkJlpZZLeIGFB8AATf7vf_nYQAAkD4wFg_xEABOAG369.jpg"
								 alt="Second slide">
								<div class="carousel-caption">绝地求生大逃杀，你一定要体验的“吃鸡”世界​</div>
							</div>
							<div class="item"><img src="https://desk-fd.zol-img.com.cn/t_s960x600c5/g5/M00/0F/09/ChMkJ1auza-ISz3uAAaWyKqPRq0AAH9HQM3VIQABpbg297.jpg"
								 alt="Third slide">
								<div class="carousel-caption">Lykan HyperSport 超 跑</div>
							</div>
							<div class="item"><img src="https://desk-fd.zol-img.com.cn/t_s960x600c5/g5/M00/0B/0C/ChMkJlaoiJWIVyvaABT4V3RMwQ0AAHuDQDyN8sAFPhv917.jpg"
								 alt="Third slide">
								<div class="carousel-caption">奇异果（猕猴桃）</div>
							</div>
							<div class="item"><img src="https://desk-fd.zol-img.com.cn/t_s960x600c5/g5/M00/09/03/ChMkJ1ZdOzeIcO0KABzuys2wtrwAAFkHwA9bJYAHO7i176.jpg"
								 alt="Third slide">
								<div class="carousel-caption">冰蓝美味的QQ糖</div>
							</div>
						</div><!-- 轮播（Carousel）导航 --><a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev"><span
							 class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span><span class="sr-only">Previous</span></a><a
						 class="right carousel-control" href="#myCarousel" role="button" data-slide="next"><span class="glyphicon glyphicon-chevron-right"
							 aria-hidden="true"></span><span class="sr-only">Next</span></a>
					</div>
					<!--下面是正文部分-->
					<div class="text_content" id="txtProperty">
						<ul>
							<div class="list_v1">
								<div class="main_pic"><img src="https://wx4.sinaimg.cn/thumb180/005vnhZYly1fwlxja4vu8j30go0chk17.jpg" alt="图片1"
									 style="height: 200px;width: 190px;">
									<div class="main_text">
										<div style="width: 465px; height: 100px; overflow: hidden;">
											<span class="main_title" id="bodyText">​
											【从24岁到55岁！这位大学老师31年只讲课不评职称】近日，在接受几个学生的采访后，湖南师范大学新闻与传播学院55岁
											的讲师龚德才在网上走红。1987年，24岁的龚德才成为湖南师大最年轻的讲师。他在讲师这个岗位上干了31年，专注教学但
											始终没有参评职称。他所在院系的很多教授都曾是他的学生。“我曾开玩笑说，要创个纪录，从最年轻讲师一直干到最年长讲
											师。”龚德才说，不评职称是他的一种态度，不想为了评职称而写文章，但对于31年的讲师经历而言，“一切都很值得。”新华
											网</span>
										</div>
										<div class="subinfo_box">
											<a href="#">
												<span class="subinfo_face">
													<img src="https://tvax1.sinaimg.cn/crop.11.10.275.275.50/005vnhZYly8ftjmwo0bx4j308c08cq32.jpg" width="20px"
													 height="20px" />
												</span>
											</a>
											<a href="#">
												<span class="right_text">澎湃新闻</span>
												<span class="right_text">10月26日21:16</span>
											</a>
											<span>
												<em style="display: inline-block;width: 47px;height: 47px;background: url(img/Share_comment_thumbup.png) 0px -50px no-repeat;"></em>
											</span>
										</div>
									</div>
								</div>
							</div>
							<!--list_v1-->
							
						</ul>
					</div>
				</div>
				<!-- <script>
					document.getElementById("contentSizeUp").onclick = function(){
						var originalSize = document.getElementById("bodyText").size;
						var tempSize = originalSize+1;
						document.getElementById("bodyText").size = tempSize;
					}
					document.getElementById("contentSizeDown").onclick = function(){
						var originalSize = document.getElementById("bodyText").size;
						var tempSize = originalSize-1;
						document.getElementById("bodyText").size = tempSize;
					}
				</script> -->
				<!--登录面板-->
				<div class="col-xs-12 col-md-4 login_block" style="position: relative; right: 40px;  width: 360px;">
					<!--3列-->
					<div class="panel panel-default">
						<div class="panel-body" style="background-color: #F2F2F5; height: 335px; padding: 18px;">
							<div class="panel panel-default">
								<!--作者：fdgk2016@sina.com时间：2018-10-28描述：登录面板下的标签页-->
								<ul id="myTab" class="nav nav-tabs" style="margin-bottom: 13px;">
									<li class="label_panel">
										<a href="#accountLogin" data-toggle="tab" style="float: left; left: 15px; width: 135px;outline: none; 
										border-style: none;border-bottom-style: none; border-bottom:solid; border-bottom-color: #fA7D3C; 
										text-align: center;cursor:pointer;">账号登录</a>
									</li>
									<li>
										<a href="#safeLogin" data-toggle="tab" style="float: left; left: 13px; width: 135px;outline: none; 
										border-style: none;border-bottom-style: none; border-bottom:solid; border-bottom-color: #fA7D3C;
										text-align: center;cursor:pointer;">安全登录</a>
									</li>
								</ul>
								<div id="myTabContent" class="tab-content">
									<div class="tab-pane fade in active" id="accountLogin">
										<!--作者：fdgk2016@sina.com时间：2018-10-28描述：--><br />
										<div class="panel-body" style="padding-bottom:5px ;">
											<form role="form" id="login_Notice">
												<div class="form-group" style="margin-top: -30px;">

													<input type="text" class="form-control loginUserInput" id="login_userName" onblur="check_code()"
													 placeholder="邮箱/会员账号/手机号" style=" margin-bottom: 12px; font-size: 12px;">

													<span class="float_notice_userName" id="login_userNameCodeTest">
														请输入6-10位字母、数字、下划线</span>

													<input type="password" class="form-control loginPassInput)" id="login_userPassword" onblur="check_pwd()"
													 placeholder="请输入密码" style="margin-top: 12px; font-size: 12px;">

													<span class="float_notice_userPassword" id="login_userPassswordCodeTest">
														请输入8-20位字母、数字、下划线</span>

												</div>
												<div class="checkbox">
													<label>
														<input type="checkbox">
														<span style="color: #979797;font-size: 12px;">记住我</span>
														<a class="forgetMM" style="float: left;position: absolute;right: 1px;top: 0px;color: #979797;font-size: 12px;"
														 href="#" data-toggle="modal" data-target="#userRegisterModal">忘记密码</a>
													</label>
												</div>
											</form>
											<button type="button" class="btn" id="login_btn" style="width: 100%;color:#FFFFFF;background-color: #F7671D;margin-bottom: 10px;">登录</button>
											<span style="color: #979797;font-size: 12px;">还没有微博?</span>
											<a href="registPersonal.jsp" style="color: #EB7350;font-size: 12px;">立即注册!</a>
											<hr style="margin-top: 10px;margin-bottom: 10px;"><span style="color: #808080;font-size: 12px;">其他登录：</span>
											<div style="float: left; width: 16px; height: 16px;overflow: hidden;margin-right: 3px;margin-top: -1px;position: absolute;left: 105px; top: 293px; bottom: 46px;"><a
												 href="https://login.taobao.com/member/login.jhtml?from=wblogin&style=wblogin&wbp=&redirect_url=http%3A%2F%2Fweibo.com%2Fa%2Fbind%2Flogin%3Fentry%3Dtaobao%26sid%3D626f7ddecd1eb5041c40771ba5d2f2d1"
												 style="display: inline-block;width: 47px;height: 47px;background: url(img/sprite_login.png) 0px -50px no-repeat;"></a></div>
											<div style="float: left; width: 16px; height: 16px;overflow: hidden;margin-right: 3px;margin-top: -1px;position: absolute;left: 124px; top: 293px; bottom: 46px;"><a
												 href="https://graph.qq.com/oauth2.0/show?which=Login&display=pc&client_id=101019034&response_type=code&scope=get_info%2Cget_user_info&redirect_uri=https%3A%2F%2Fpassport.weibo.com%2Fothersitebind%2Fbind%3Fsite%3Dqq%26state%3DCODE-yf-1Ggmwt-45EVQk-sHyR0NM95BEcNwx0f7b47%26bentry%3Dminiblog%26wl%3D&display="
												 style="display: inline-block;width: 47px;height: 47px;background: url(img/sprite_login.png) -50px -50px no-repeat;"></a></div>
											<div style="float: left; width: 16px; height: 16px;overflow: hidden;margin-right: 3px;margin-top: -1px;position: absolute;left: 143px; top: 293px; bottom: 46px;"><a
												 href="https://www.cmpassport.com/openapi/oauth/login.html?forceAuthn=true&isPassive=false&callBackURL=https%3A%2F%2Fopen.mmarket.com%3A443%2Fomee-aus%2Fservices%2Foauth%2Fshow&display=web&asDomain=account.weibo.com&authType=UPDS&clientId=300009888263&relayState=99cde5c2536369eff16871d049890413098a633443f82c6d808a33a91941cc6c2bddeb1dd63bd118c68b8cb3eda3ac8718a8d2ae6f639e1f4db6086ca57aad6392644f553cd692e04994e60cc4400f2608ec30352fcc31a0a0fcff127c33c78113ea981422a61c8cd3e47bf16a1656ec619dc2e4a717ef56"
												 style="display: inline-block;width: 47px;height: 47px;background: url(img/sprite_login.png) -300px -50px no-repeat;"></a></div>
											<div style="float: left; width: 16px; height: 16px;overflow: hidden;margin-right: 3px;margin-top: -1px;position: absolute;left: 162px; top: 293px; bottom: 46px;"><a
												 href="http://sersh.passport.189.cn/OAuth/authorize.aspx?client_id=3535450001600701&response_type=code&redirect_uri=https%3A%2F%2Faccount.weibo.com%2Fset%2Fbindsns%2Fcallback&state=telecom"
												 style="display: inline-block;width: 47px;height: 47px;background: url(img/sprite_login.png) -100px -50px no-repeat;"></a></div>
											<div style="float: left; width: 16px; height: 16px;overflow: hidden;margin-right: 3px;margin-top: -1px;position: absolute;left: 181px; top: 293px; bottom: 46px;"><a
												 href="https://openapi.360.cn/oauth2/authorize?client_id=8819d1babbbc50a42021ee957c4b6e63&response_type=code&redirect_uri=https://account.weibo.com/set/bindsns/callback&scope=basic&display=default&state=360&relogin=sina"
												 style="display: inline-block;width: 47px;height: 47px;background: url(img/sprite_login.png) -150px -50px no-repeat;"></a></div>
											<div style="float: left; width: 16px; height: 16px;overflow: hidden;margin-right: 3px;margin-top: -1px;position: absolute;left: 200px; top: 293px; bottom: 46px;"><a
												 href="https://account.weibo.com/set/bindsns/unicomoauth" style="display: inline-block;width: 47px;height: 47px;background: url(img/sprite_login.png) -200px -50px no-repeat;"></a></div>
										</div>
									</div>
									<div class="tab-pane fade QRcode" id="safeLogin" style="height:235px;">
										<div style="border: 1px solid #f3f3f3;    position: relative;width: 172px; height: 185px; margin: auto; box-shadow: 0px 1px 2px rgba(0,0,0,0.1); text-align: center; padding-top: 14px;"><img
											 src="//v2.qr.weibo.cn/inf/gen?api_key=a0241ed0d922e7286303ea5818292a76&data=https%3A%2F%2Fpassport.weibo.cn%2Fsignin%2Fqrcode%2Fscan%3Fqr%3D2YjVb2FcMAAN4Sv3KHOyVy2HDzFGzAkX8BnFyY29kZQ..%26sinainternalbrowser%3Dtopnav%26showmenu%3D0&datetime=1540904716&deadline=0&level=M&logo=http%3A%2F%2Fimg.t.sinajs.cn%2Ft6%2Fstyle%2Fimages%2Findex%2Fweibo-logo.png&output_type=img&redirect=0&sign=95f587123095df0eb3aa970061842cb5&size=180&start_time=0&title=sso&type=url"
											 style="height: 150px; width: 150px;" height="150" width="150" alt="" />
											<p style="color: #333;text-decoration: none;">请打开微博客户端“扫一扫”</p>
										</div>
										<div style="margin-top: 12px;text-align: center;"><span style="color: #808080;">还没有微博？</span>
										<a href="registPersonal.html"
											 style="color: #eb7350;">立即注册！</a></div>
									</div>
								</div>
							</div>
						</div>
					</div>
					
					<!--时钟-->
					<!-- <canvas id="canvas" width="500" height="500">cccc</canvas> -->

					<!--作者：fdgk2016@sina.com时间：2018-10-29描述：微博新鲜事-->
					<div class="panel panel-default" style="background-color: #F2F2F5;">
						<div class="panel-body"><span style="font-size: 19px; font-weight: bold;border-bottom-style: none;">微博新鲜事</span></div><br />
						<div class="panel_things" style="margin-bottom: -20px;">
							<!--正文部分-->
							<div class="list_fresh_things1" style="display: block;cursor: pointer;margin-bottom: 20px;">
								<div class="pic_fresh_things" style="width: 120px;height: 70px;float: right; position: relative;right: 20px; top: -10px; margin-bottom: 10px;overflow: hidden; margin-left: 10px;"><a
									 href="/a/hot/7560821943605249_1.html?type=new"><img src="https://wx3.sinaimg.cn/crop.0.0.319.180/006OVbdely1fvp4cbvef9j308w05074x.jpg"
										 style="height: auto!important;width: 100%;min-height: 100%;" /></a></div>
								<div class="list_desk_info_title" style="margin-left: 20px ;">
									<h3 href="/a/hot/7560821943605249_1.html?type=new" style="color: #333;text-decoration: none;font-size: 14px;">英雄联盟S8</h3>
									<div style="margin-bottom: 50px; color: #333; text-decoration: none;"><span style=" display: inline-block; vertical-align: middle;font-size: 12px; line-height: 12px; color: #808080;cursor: pointer;">今天
											14:55</span></div>
								</div>
							</div>
						</div>
						<div class="panel-footer" style="text-align: center; margin-top: 10px;">
							<div class="wb_fresh_things_foot_panel"><a class="" style="cursor: pointer;">查看更多</a></div>
						</div>
					</div>
				</div>
				<!--登录面板-->
			</div>
			<!--row-->

			<div class="row">
				<!--底部版权模块-->
				<hr />
				<div class="foot-link" style="margin-bottom: 20px;">
					<table align="center" style="margin:auto;">
						<tr>
							<td>
								<div><span>微博精彩</span><br /><a href="http://hot.plaza.weibo.com/?bottomnav=1&wvr=6&type=re&act=day">热门微博</a>&nbsp;&nbsp;&nbsp;&nbsp;<a
									 href="http://huati.weibo.com/?bottomnav=1&wvr=6">热门话题</a><br /><a href="http://verified.weibo.com/?bottomnav=1&wvr=6">名人堂</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a
									 href="http://vip.weibo.com/home?bottomnav=1&wvr=6">微博会员</a><br /><a href="http://photo.weibo.com/?bottomnav=1&wvr=6">微相册</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a
									 href="http://game.weibo.com/?bottomnav=1&wvr=6">微游戏</a><br /><a href="http://data.weibo.com/index/?bottomnav=1&wvr=6">微指数</a></div>
							</td>
							<td>
								<div><span>手机玩微博</span>
									<div>
										<table>
							<th><img src="./img/footer_code.jpg" alt="二维码" /></th>
							<th>
								<div style="margin-left:12px ;margin-right: -5px;"><a href="http://m.weibo.cn/client/guide/show">扫码下载，更多版本<br />戳这里</a></div>
							</th>
					</table>
				</div>
			</div>
			</td>
			<td>
				<div><span>认证&合作</span><br /><a href="http://verified.weibo.com/verify?bottomnav=1&wvr=6">申请认证</a><a href="http://open.weibo.com/connect?bottomnav=1&wvr=6">链接网站</a><br /><a
					 href="http://e.weibo.com/introduce/introduce?bottomnav=1&wvr=6">企业微博</a><a href="http://tui.weibo.com/?bottomnav=1&wvr=6">广告服务</a><br /><a
					 href="http://weibo.com/static/logo?bottomnav=1&wvr=6">微博标识</a><a href="http://tui.weibo.com/intro/agent?bottomnav=1&wvr=6">广告代理商</a><br /><a
					 href="http://open.weibo.com/?bottomnav=1&wvr=6">开放平台</a></div>
			</td>
			<td>
				<div style="margin-left: 10px;"><span>微博帮助</span><br /><a href="http://help.weibo.com/faq/q/358?bottomnav=1&wvr=6">常见问题</a><br /><a
					 href="http://help.weibo.com/selfservice?bottomnav=1&wvr=6">自助服务</a></div>
			</td>
			</tr>
			</table>
		</div>
		<div class="vision_footer" align="center">
			<p class="copy"><a class="s_txt2" href="http://help.weibo.com/?refer=didao&bottomnav=1&wvr=6"><i class="icon icon_weibo"></i>微博客服</a><span
				 class="s_txt2" style="margin-right: 20px;color: #808080;text-decoration: none;">客服热线4000-960-960</span><a class="s_txt2"
				 href="http://help.weibo.com/newtopic/suggest?bottomnav=1&wvr=6">意见反馈</a><a class="s_txt2" href="http://weibo.com/aj/static/report.html?_wv=6">舞弊举报</a><a
				 class="s_txt2" href="http://open.weibo.com/?bottomnav=1&wvr=6">开放平台</a><a class="s_txt2" href="http://hr.weibo.com/?bottomnav=1&wvr=6">微博招聘</a><a
				 class="s_txt2" href="http://news.sina.com.cn/guide/?bottomnav=1&wvr=6">新浪网导航</a><a class="s_txt2" href="http://service.account.weibo.com/?bottomnav=1&wvr=6">投诉处理大厅</a>
				<!--作者：fdgk2016@sina.com时间：2018-10-30描述：语言选择--><select>
					<option value="volvo">中文(简体)</option>
					<option value="saab">中文(臺灣)</option>
					<option value="opel">中文(香港)</option>
					<option value="audi">English</option>
				</select></p>
			<p class="copy_v2"><a class="s_txt2" href="http://weibo.com/aj/static/jicp.html?_wv=6">京ICP证100780号</a><a class="s_txt2"
				 href="http://weibo.com/aj/static/medi_license.html?_wv=6">互联网药品服务许可证</a><a class="s_txt2" href="http://weibo.com/aj/static/medi_health_license.html?_wv=6">互联网医疗保健许可证</a><a
				 class="s_txt2" href="http://weibo.com/aj/static/jww.html?_wv=6">京网文[2017]10291-1172号</a><a class="s_txt2" href="http://www.miibeian.gov.cn">京ICP备12002058号</a><a
				 class="s_txt2" href="http://weibo.com/aj/static/license.html?_wv=6">增值电信业务经营许可证B2-20140447</a></p>
			<p class="company"><a class="s_txt2" href="./BackPageLogin.html">后台管理</a>
			<span class="copy s_txt2">Copyright © 2009-2018 WEIBO 北京微梦创科网络技术有限公司</span><span><a class="s_txt2"
					 href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11000002000019"><i class="icon_netsecurity"></i>京公网安备11000002000019号</a></span></p>
		</div>
		<div class="modal fade" id="userRegisterModal" role="dialog" aria-hidden="true">
			<div class="modal-dialog">
				<div class="modal-content">
					<div class="modal-header"><input type="button" value="&times;" class="close" data-dismiss="modal" aria-hidden="true">
						<h4 class="modal-title">
							<!--模态弹窗（Modal）标题（如用户注册）--><span class="glyphicon glyphicon-user"></span>&nbsp;&nbsp;密码找回</h4>
					</div>
					<div class="modal-body">
						<!--模态弹窗主体（放用户注册表单）-->
						<div class="row">
							<div class="userRegisterText">用户名<i class="fa fa-user fa-spin"></i>&nbsp;&nbsp;</div>
							<div class="userRegisterInput">
								<input type="text" class="form-control" id="findBackUserName" onblur="check_code()" name="username">
								<span id="findBackUserP">6~10个字符，可使用字母、数字、下划线，需以字母开头</span>
							</div>
						</div>
						<div class="row">
							<div class="userRegisterText">密码<i class="fa fa-key fa-spin"></i>&nbsp;&nbsp;</div>
							<div class="userRegisterInput">
								<input type="password" class="form-control" id="findBackPassword">
								<span id="findBackPassP">6~8个字符，区分大小写</span>
							</div>
						</div>
						<div class="row">
							<div class="userRegisterText">确认密码<i class="fa fa-key fa-spin"></i>&nbsp;&nbsp;</div>
							<div class="userRegisterInput"><input type="password" class="form-control">
								<span>请再次填写密码</span>
							</div>
						</div>
						<div class="row">
							<div class="userRegisterText">Email<i class="fa fa-envelope fa-spin"></i>&nbsp;&nbsp;</div>
							<div class="userRegisterInput"><input type="password" class="form-control">
								<span>Email格式：rjxy@163.com</span>
							</div>

							<div class="row">
								<div class="verify-wrap" id="verify-wrap2" style="left: 34px;"></div>
							</div>
							<div style="text-align: center;">
								<button type="button" id="resetBtn2" style="display: inline-block;">重置2</button>
								<button type="button" id="getState2" style="display: inline-block;">获取2验证状态</button>
							</div>
							<style type="text/css">
								/*设置用户注册项左边文字容器的样式*/
								.userRegisterText {
									display: inline-block;
									/*社会容器为内联块对象*/
									width: 20%;
									/*设置容器宽度*/
									text-align: right;
									/*设置文本对齐方式为右对齐*/
									padding-right: 5px;
									/*设置右边距，让文本与输入框有5像素的距离*/
									font: bold 15px"microsoft yahei";
									/*设置文本字体*/
									vertical-align: top;
									/*设置容器垂直对齐方式为顶端对其*/
								}

								/*设置用户注册项右边输入框容器的样式*/
								.userRegisterInput {
									display: inline-block;
									/*设置容器为内联块对象*/
									width: 70%;
									/*设置容器宽度*/
								}

								/*设置用户注册项右边输入提示文字容器的样式*/
								.userRegisterNotice {
									font: 15px"microsoft yahei";
									/*设置文本字体*/
									color: #444444;
									/*设置文本颜色*/
									padding: 8px 0px;
									/*设置容器内边距，上下分别为8像素，左右为0*/
								}
							</style>

						</div>
						<div class="modal-footer"><input type="submit" class="btn btn-success" value="立即找回" /></div>
					</div>
				</div>

			</div>
		</div>
		<script type="text/javascript">
			$(function() {
				console.log(parseFloat('1px'))

				var SlideVerifyPlug = window.slideVerifyPlug;
				var slideVerify = new SlideVerifyPlug('#verify-wrap', {
					wrapWidth: '450', //设置 容器的宽度 ，默认为 350 ，也可不用设，你自己css 定义好也可以，插件里面会取一次这个 容器的宽度
					initText: '请按住滑块，123', //设置  初始的 显示文字
					sucessText: '验证通过最右边最右边最右边', //设置 验证通过 显示的文字
					getSucessState: function(res) {
						//当验证完成的时候 会 返回 res 值 true，只留了这个应该够用了 
						console.log(res);
					}
				});
				$("#resetBtn").on('click', function() {
					slideVerify.resetVerify(); //可以重置 插件 回到初始状态 
				})
				$("#getState").on('click', function() {
					alert(slideVerify.slideFinishState); //这个可以拿到 当前验证状态  是否完成
				})
				var slideVerify2 = new SlideVerifyPlug('#verify-wrap2', {
					wrapWidth: '420',
					initText: '请按住滑块',
					sucessText: '验证通过',

				});
				$("#resetBtn2").on('click', function() {
					slideVerify2.resetVerify();
				})
				$("#getState2").on('click', function() {
					alert(slideVerify2.slideFinishState);
				})
			})
		</script>
		<button id="return_Top" style="background: url(img/up.png); border-style: none; position: fixed; right: 10px;bottom: 30px; width:38px; height:32px"></button>
		<!--row-->
		</div>
		<!--container-->
</body>
</html>