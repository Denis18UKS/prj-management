$(document).ready(function () {
    $('#login').submit(function (event) {
        event.preventDefault();

        $.ajax({
            url: 'http://prj-backend/api/auth/login',
            type: 'POST',
            contentType: 'application/json',
            headers: {
                'Accept': 'application/json'
            },
            data: JSON.stringify({
                email: $('#email').val(),
                password: $('#password').val()
            }),
            success: function (response) {
                console.log("Response:", response); // Логируем ответ для проверки
                alert('Вы успешно вошли!'); // Сообщение об успехе
                window.location.href = '/dashboard'; // Перенаправляем на защищенную страницу
            },
            error: function (error) {
                console.log("Ошибка:", error);

                if (error.responseJSON) {
                    let errorMessages = 'Ошибка: ';
                    const errors = error.responseJSON.errors;

                    for (const [key, messages] of Object.entries(errors || [])) {
                        errorMessages += messages.join(', ') + '\n';
                    }

                    alert(errorMessages);
                } else {
                    alert('Произошла неизвестная ошибка.');
                }
            }
        });
    });
});
