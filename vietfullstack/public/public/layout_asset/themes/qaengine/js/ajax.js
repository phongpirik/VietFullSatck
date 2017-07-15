var Login = function(){
    var data = $("#login-form").serialize();
    $.ajaxSetup({
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            }
        });
    $.ajax({
        url: '/login/',
        type: "POST",
        data: data,
        success: function(data){
          if(data.msg){
            $("#error_password").html(data.msg);
            $("#password_error").fadeIn();
            $("#email_error").fadeOut();
            $("#username_login").removeClass("alert alert-danger");
            $("#password_login").removeClass("alert alert-danger");
          } else location.reload();
        },
        error: function(data){
          if(data.responseJSON.username_login){
            $("#error_email").html(data.responseJSON.username_login);
            $("#email_error").fadeIn();
            $("#username_login").addClass("alert alert-danger");
          } else $("#email_error").fadeOut();
          if(data.responseJSON.password_login){
            $("#error_password").html(data.responseJSON.password_login);
            $("#password_error").fadeIn();
            $("#password_login").addClass("alert alert-danger");
          } else $("#password_error").fadeOut();
            
        }
    });
    return false;
}
    var Register = function(){
        var data = $("#register-form").serialize();
        $.ajaxSetup({
                headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                }
            });
        $.ajax({
            url: '/register/',
            type: "POST",
            data: data,
            success: function(data){
                location.reload();
            },
            error: function(data){
              if(data.responseJSON.username){
                $("#error_regis_username").html(data.responseJSON.username);
                $("#username_regis_error").fadeIn();
                $("#username").addClass("alert alert-danger");
              } else $("#username_regis_error").fadeOut();
              if(data.responseJSON.email_register){
                $("#error_regis_email").html(data.responseJSON.email_register);
                $("#email_regis_error").fadeIn();
                $("#email_register").addClass("alert alert-danger");
              } else $("#email_regis_error").fadeOut();
              if(data.responseJSON.password_register){
                $("#error_regis_password").html(data.responseJSON.password_register);
                $("#password_regis_error").fadeIn();
                $("#password_register").addClass("alert alert-danger");
              } else $("#password_regis_error").fadeOut();
              if(data.responseJSON.phone_number){
                $("#error_regis_phone").html(data.responseJSON.phone_number);
                $("#phone_regis_error").fadeIn();
                $("#phone_number").addClass("alert alert-danger");
              } else $("#phone_regis_error").fadeOut();
              $("#error_captcha").html("Check nếu bạn không phải robot!");
                $("#captcha_error").fadeIn();
            }
        });
        return false;
    }
    var Post = function(){
        var response = grecaptcha.getResponse();
        var question_category =$('#question_category').val();
        var post_content = CKEDITOR.instances.insert_question.getData();
        $.ajaxSetup({
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            }
        });
        $.ajax({
            url: 'post_question',
            type: "POST",
            data: {
                "question_category":question_category,
                "post_content":post_content,
                "g-recaptcha-response":response,
            },
            success: function(data){
                location.reload();
            },
            error: function(data){
              if(data.responseJSON.question_category){
                $("#error_post_category").html(data.responseJSON.question_category);
                $("#post_category_error").fadeIn();
                $("#question_category").addClass("alert alert-danger");
              } else $("#post_category_error").fadeOut();
              if(data.responseJSON.post_content){
                $("#error_post_content").html(data.responseJSON.post_content);
                $("#post_content_error").fadeIn();
                $("#insert_question").addClass("alert alert-danger");
              } else $("#post_content_error").fadeOut();
              $("#error_post_captcha").html("Check nếu bạn không phải robot!");
                $("#captcha_post_error").fadeIn();
            }
    });
    return false;
  }
  var Post_Mobile = function(){
      var question_category =$('#question_category_mobile').val();
      var post_content = CKEDITOR.instances.insert_question_mobile.getData();
    $.ajaxSetup({
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            }
        });
    $.ajax({
        url: 'post_question',
        type: "POST",
        data: {
            "question_category":question_category,
            "post_content":post_content
        },
        success: function(data){
            location.reload();
        },
        error: function(data){
          if(data.responseJSON.question_category){
            $("#error_post_category_mobile").html(data.responseJSON.question_category);
            $("#post_category_error_mobile").fadeIn();
            // $("#question_category_mobile").addClass("alert alert-danger");
          } else $("#post_category_error_mobile").fadeOut();
          if(data.responseJSON.post_content){
            $("#error_post_content_mobile").html(data.responseJSON.post_content);
            $("#post_content_error_mobile").fadeIn();
            $("#insert_questio_mobilen").addClass("alert alert-danger");
          } else $("#post_content_error_mobile").fadeOut();
        }
    });
    return false;
  }