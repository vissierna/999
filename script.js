function ValidMail() {
    // Проверка заполненности поля email
    let emailField = document.getElementById('email');
    if (emailField.value === '') {
        alert("Пожалуйста, введите адрес электронной почты!");
        return false; // Отмена отправки формы
    }

    // Проверка заполненности поля с именем
    let nameField = document.getElementById('name');
    if (nameField.value === '') {
        alert("Пожалуйста, введите ваше имя!");
        return false; // Отмена отправки формы
    }

    // Проверка заполненности поля с заголовком
    const subjectField = document.getElementById('subject');
    if (subjectField.value == '') {
        alert("Пожалуйста, введите заголовок!");
        return false; // Отмена отправки формы
    } 

    let textareaField = document.getElementById('textarea');
    if (textareaField.value === '') {
        alert("Пожалуйста, введите отзыв!");
        return false; // Отмена отправки формы
    }

    // Проверка корректности введенного email
    let re = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;
    let valid = re.test(emailField.value);
    if (!valid) {
        alert("Адрес электронной почты введен неправильно!");
        return false; // Отмена отправки формы
    }

    alert("Отзыв оставлен!"); // Если все проверки пройдены
    return true; // Отправка формы
}