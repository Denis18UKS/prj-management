$(document).ready(function () {
    $('#register').submit(function (event) {
        event.preventDefault();

        $.ajax({
            url: 'http://prj-backend/api/auth/register',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({
                name: $('#username').val(),
                email: $('#email').val(),
                password: $('#password').val()
            }),
            success: function (response) {
                alert(response.message);
            },
            error: function (error) {
                // console.log(error);
                if (error.status === 409) {
                    alert(error.responseJSON.message);
                } else if (error.status === 422) {
                    const messages = Object.values(error.responseJSON.errors).flat();
                    alert(messages.join('\n'));
                } else {
                    alert('Произошла ошибка. Пожалуйста, попробуйте позже');
                }
            }
        });
    });
});
