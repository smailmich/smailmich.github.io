$(document).ready(function(){

    $('.open').click(function(){
            $('#mailform').fadeIn();
            $('#blacked').fadeIn();
        });

    $('.close').click(function() { 
        $('#mailform').fadeOut();
        $('#blacked').fadeOut();
        });
    
    $('.burger').click(function(){
        $('#burger').toggleClass('burger_active');
        $('.menu_duo').toggleClass('center');
        $('.menu_lang').toggleClass('cent');
        $('.menu').toggleClass('menu_active');
    });

    
    $(document).mouseup(function (e) { 
        var mailvar = $('.mail');
        if (e.target!=mailvar[0]&&mailvar.has(e.target).length === 0){
            $('#mailform').fadeOut();
            $('#blacked').fadeOut();
            $('.document_png').removeClass('document_png_click');
        }
    });

    $('.document').click(function(){
        $('.document_png').addClass('document_png_click');
        $('#blacked').fadeIn();
    });

    var button = $('.scroll-up');
        $(window).scroll(function() {     
            if ($(window).scrollTop() > 300) {
                button.addClass('show');
            } else {
                button.removeClass('show');
            }
        });

        button.on('click', function(e) {
            e.preventDefault();
            $('html, body').animate({scrollTop:0}, '300');
        });

        $(function($){
            $('[name="phone"]').mask("+38(999) 999-99-99");
        });



   

        $("#email").blur(function(){
        var pattern = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
        var email= $("#email").val();
        if(email.val()!=''){
            if(email.val().test(pattern)){
                $('btn-success').attr('disabled', false);
                email.removeClass('error_inp').addClass('normal_inp');
            }
            else{
                $('#error_email').text("email уведено невірно");
                $('btn-success').attr('disabled', true);
                email.addClass('error_inp');
            }
        }
        else{
            $('#error_email').text("Поле email`у не має бути пусте");
            email.addClass('error_inp');
            $('btn-success').attr('disabled', true);
        }

    });


   

    document.getElementById("sendmail").addEventListener("click", function(){
        var name= $("#name").val();
        var phone= $("#phone").val();
        var email= $("#email").val();
        var message= $("#message").val();

        if(name == ""){
            $('#error_name').text("*Введіть ім'я");
            return false;}
        else if(phone == ""){
            $('#error_phone').text("*Введіть телефон");
            return false;
        } else  if(email == ""){
            $('#error_email').text("*Введіть email");
            return false;
        } else  if(message.length<10 ){
            $("#error_message").text("*Текст повідомлення має бути не менше 10 символів");
            return false;
        }
        
        $("#error_name").text("");
        $("#error_phone").text("");
        $("#error_email").text("");
        $("#error_message").text("");

    
    },false);



    




    


    });



