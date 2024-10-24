$(document).ready(function () {
    $('#login').submit(function (event) {
        event.preventDefault();

        $.ajax({
            url: 'http://prj-backend/api/auth/login',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({
                email: $('#email').val(),
                password: $('#password').val()
            }),
            success: function (response) {
                console.log(response);

                if (response.token) {

                    var token = response.token;
                    localStorage.setItem('jwtToken', token);

                    // window.location.href='../';
                    alert('test');
                } else {
                    alert('Токен не был получен')
                }
            },

            error: function (error) {
                console.log(error);
                alert('Ошибка при авторизации. Проверьте введённые данные');
            }
        })
    })
})