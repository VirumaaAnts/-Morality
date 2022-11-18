$(document).ready(function () {
    $("#send").submit(function (e) { 
        e.preventDefault();
        $.ajax({
            type: "post",
            url: "../form.php",
            data: {"name":this.name.value, "email":this.email.value, "description":this.description.value},
            dataType: "html",
            success: function (response) {
                console.log(response)
            }
        });
    });
});