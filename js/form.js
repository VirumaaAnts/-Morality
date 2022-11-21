$(document).ready(function () {
    $("#send").submit(function (e) { 
        e.preventDefault();
        let form = this
        $.ajax({
            type: "post",
            url: "../form.php",
            data: {"name":form.name.value, "email":form.email.value, "age":form.age.value, "description":form.description.value, "sex":form.sex.value},
            dataType: "html",
            success: function (response) {
                if (response == 1){
                    form.name.value = ""
                    form.email.value = ""
                    form.description.value = ""
                    $("#send_text").text("SENT");
                    $('.send').attr('disabled',true);
                    $(".send").css({
                        background: "rgba(255,255,255)"
                    });
                    setTimeout(function(){
                        $("#send_text").text("SEND");
                        $('.send').attr('disabled',false);
                        $(".send").css({
                            background: "linear-gradient(to right, #a29c7aa6 0%, #f1dfc2 51%, #857a3ea6 100%)"
                            
                        });
                    },2000)
                }
            }
        });
    });
});