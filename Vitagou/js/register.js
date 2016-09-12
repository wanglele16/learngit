/**
 * Created by Administrator on 2016/9/9.
 */
$(function () {
   //弹出协议框
    var closepanel;
    $(".yx_box p a").click(function () {
        closepanel = $(".popup_panle").bPopup();
    });
    $(".close_popupPanle, .agree_continue").click(function () {
        $("#register_protocol").attr("checked", "checked");
        closepanel.close();
    });

    //头部切换
    $('.login_list li a').each(function(index){
        $(this).click(function(){
            $('.login_list li a').removeClass('thisbj');
            $(this).addClass('thisbj');
            $('.block_hide').hide();
            $('.block_hide').eq(index).show();
            $('.infor_xf').hide();
            if(index == 0){
                $('#loginType').val('auth');
            }else{
                $('#loginType').val('pwd');
            }
        });

    });

    //注册验证码部分
    /*$('.fs_yzm').click(function(){
        var phone = $('.userphone').val();
        var act = $('#actType').val();
        if(!verifiCationPhone()){
            return false;
        }
        $.ajax({
            url: api_url+'sms/send',
            dataType:'json',
            type:'post',
            data:{phone:phone,act:act},
            success:function(data){
                if(data.status != 1){
                    alert(data.msg);
                    return false;
                }else{
                    var i = 60;
                    $('.fs_yzm').attr('disabled',true);
                    var time = setInterval(function(){
                        i--;
                        if(i > 0){
                            $('.fs_yzm').text('已发送('+i+')');
                        }else{
                            clearInterval(time);
                            $('.fs_yzm').text('发送验证码').attr('disabled',false);
                        }

                    },1000);
                }
            }
        });
        return false;
    });*/

    //注册页面、登录页面手机验证
    $('.sub_btn').click(function(){
        var Userphone = $('.userphone').val();
        var Yzm = $('.yzm').val();
        if(checkFormByPhone(Userphone,Yzm)){
            if($('#register_protocol').is(':checked')==true){
                $.ajax({
                    url: "http://localhost:8080/user/register",
                    type: "post",
                    dataType: "json",
                    data: {
                        "name": Userphone,
                        "password": Yzm
                    },
                    success: function(data) {
                        if (data == 1) {
                            alert("创建成功，请登录!");
                            window.location = "login.html";
                        } else {
                            alert("用户名已存在，请直接登录!");
                            window.location = "login.html";
                        }
                    },
                    error:function(){
                        alert("ajax error");
                    }
                });

            }else{
                $('.infor_xf').text('您必须同意维他购的注册协议！').show();
                return false;
            }
        }else{
            return false;
        }
    });

    $('.login_btn').click(function(){
        var Userphone = $('.userphone').val();
        var Yzm = $('.yzm').val();
        if(checkFormByPhone(Userphone,Yzm)){
            return true;
        }else{
            return false;
        }
    });

    //登录页面账户密码验证
    $('.sub_btns').click(function(){
        var patrn = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{4,25}$/;
        var reg = /^0?1[3|4|5|8|7][0-9]\d{8}$/;
        var userName = $('.username').val();
        var password = $('.password').val();
        if(userName != null && userName != ''){
            if(!reg.test(userName)){
                $('.infor_xf').text('账号必须为手机号码！').show();
                $('.username').css('border-color','#e41e4d');
                return false;
            }else{
                //通过基础验证
                $('.infor_xf').hide();
                $('.username').css('border-color','#03d103');
            }
        }else{
            $('.infor_xf').text('请填写您的手机号码！').show();
            $('.username').css('border-color','#e41e4d');
            return false;
        }


        if(password != null && password != ''){
            if(!patrn.test(password)){
                $('.infor_xf').text('密码必须由4位以上字母+数字组成！').show();
                $('.password').css('border-color','#e41e4d');
                return false;
            }else{
                //通过基础验证
                $('.infor_xf').hide();
                $('.password').css('border-color','#03d103');

                $.ajax({
                    url: "http://localhost:8080/user/login",
                    type: "post",
                    dataType: "json",
                    data: {
                        "name": userName,
                        "password": password
                    },
                    success: function(data) {
                        if (data == 1) {
                            alert("登录成功!");
                            /*window.location = "";*/
                        } else {
                            alert("用户名或密码错误");
                            /*window.location = "login.html";*/
                        }
                    },
                    error:function(){
                        alert("ajax error");
                    }
                });
            }
        }else{
            $('.infor_xf').text('请填写密码！').show();
            $('.password').css('border-color','#e41e4d');
            return false;
        }
        return true;
    });

    //当前手机输入框失去焦点时，进行判断
    $('.userphone').blur(function(){
        verifiCationPhone();
    });

    /*//当前验证码输入框失去焦点时，进行判断
    $('.yzm').blur(function(){
        verifiCationYzm();
    });*/

    //账户输入框失焦时，进行判断
    $('.username').blur(function(){
        verifiCationUserName();
    });

    //密码输入框失焦时，进行判断
    $('.password').blur(function(){
        verifiCationPassWord();
    });

    //勾选注册协议
    $('#register_protocol').click(function(){
        if($('#register_protocol').is(':checked')==true){
            $('.infor_xf').hide();
        }
    });

    //验证用户名
    function verifiCationUserName(){
        var reg = /^0?1[3|4|5|8|7][0-9]\d{8}$/;
        var userName = $('.username').val();
        if(userName != null && userName != ''){
            if(!reg.test(userName)){
                $('.infor_xf').text('用户名必须为手机号码！').show();
                $('.username').css('border-color','#e41e4d');
                return false;
            }else{
                //通过基础验证
                $('.infor_xf').hide();
                $('.username').css('border-color','#03d103');

            }
        }else{
            $('.infor_xf').text('请填写您的手机号码！').show();
            $('.username').css('border-color','#e41e4d');
            return false;
        }
    }

    //验证密码
    function verifiCationPassWord(){
        var patrn = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{4,25}$/;
        var password = $('.password').val();
        if(password != null && password != ''){
            if(!patrn.test(password)){
                /*$('.infor_xf').text('密码2222必须由字母+数字组成！').show();
                 $('.password').css('border-color','#e41e4d');
                 return false;*/
                return true;
            }else{
                //通过基础验证
                $('.infor_xf').hide();
                $('.password').css('border-color','#03d103');

            }
        }else{
            $('.infor_xf').text('请填写密码！').show();
            $('.password').css('border-color','#e41e4d');
            return false;
        }
    }

    //验证手机号码
    function verifiCationPhone(){
        var reg = /^0?1[3|4|5|8|7][0-9]\d{8}$/;
        var Userphone = $('.userphone').val();
        if(Userphone != null && Userphone != ''){
            if(!reg.test(Userphone)){
                $('.infor_xf').text('手机号码格式不正确！').show();
                $('.userphone').css('border-color','#e41e4d');
                return false;
            }else{
                $('.userphone').css('border-color','#03d103');
                $('.infor_xf').hide();
                return true;
            }
        }else{
            $('.infor_xf').text('请填写您的手机号码！').show();
            $('.userphone').css('border-color','#e41e4d');
            return false;
        }
    }

   /* //验证验证码
    function verifiCationYzm(){
        var Yzm = $('.yzm').val();
        if(Yzm != null && Yzm != ''){
            if(!(/^\d{6}$/.test(Yzm))){
                $('.infor_xf').text('验证码格式错误！').show();
                $('.yzm').css('border-color','#e41e4d');
                return false;
            }else{
                //基础验证已通过
                $('.yzm').css('border-color','#03d103');
                $('.infor_xf').hide();
                return true;
            }
        }else{
            $('.infor_xf').text('请输入验证码！').show();
            $('.yzm').css('border-color','#e41e4d');
            return false;
        }
    }*/

    function checkFormByPhone(Userphone,Yzm){
        var reg = /^0?1[3|4|5|8|7][0-9]\d{8}$/;
        if(Userphone != null && Userphone != ''){
            if(!reg.test(Userphone)){
                $('.infor_xf').text('手机号码格式不正确！').show();
                $('.userphone').css('border-color','#e41e4d');
                return false;
            }
        }else{
            $('.infor_xf').text('请填您的写手机号码！').show();
            $('.userphone').css('border-color','#e41e4d');
            return false;
        }

        var patrn = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{4,25}$/;
        if(Yzm != null && Yzm != ''){
            if(!patrn.test(Yzm)){
                $('.infor_xf').text('密码必须由4位以上字母+数字组成！').show();
                $('.yzm').css('border-color','#e41e4d');
                return false;
            }else{
                //通过基础验证
                $('.infor_xf').hide();
                $('.yzm').css('border-color','#03d103');

            }
        }else{
            $('.infor_xf').text('请填写密码！').show();
            $('.yzm').css('border-color','#e41e4d');
            return false;
        }
        return true;
       /* if(Yzm != null && Yzm != ''){
            if(!(/^\d{6}$/.test(Yzm))){
                $('.infor_xf').text('验证码格式不正确！').show();
                $('.yzm').css('border-color','#e41e4d');
                return false;
            }
        }else{
            $('.infor_xf').text('请输入验证码！').show();
            $('.yzm').css('border-color','#e41e4d');
            return false;
        }
        return true;*/
    }


});