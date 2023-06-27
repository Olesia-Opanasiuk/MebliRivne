"use strict"
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('form-order');
    form.addEventListener('submit', formSend);
    const commentForm = document.getElementById('comment-form');
    commentForm.addEventListener('submit', commentFormSend);
    const popupBanner = document.querySelector('.popup-banner');
    const popup = document.querySelector('.popup');

    document.querySelector('.close-popup-button').onclick = function () {
        popup.classList.remove('popup-shown');
    }

    const allUl = document.querySelectorAll('.ulRating');
    allUl.forEach((ul, index1) => {
        let dataRating = ul.dataset.stars;
        // console.log("----------------------");
        // console.log(dataRating);
        // console.log(ul);
        for (let i = 0; i < ul.childNodes.length; i++) {
            if (ul.childNodes[i].tagName == 'LI') {
                // console.log(ul.childNodes[i].tagName);
                // console.log(ul.childNodes[i]);
                // console.log(ul.childNodes[i].dataset.rating);
                ul.childNodes[i].dataset.rating <= dataRating ? ul.childNodes[i].classList.add('selected') : ul.childNodes[i].classList.remove('selected');
            }
        }
    })

    async function formSend(e) {
        e.preventDefault();
        let error = formValidate(form);
        let formData = new FormData(form);
        for (const value of formData.values()) {
            if (error === 0) {
                form.classList.add('sending');
                let response = await fetch('telegram.php', {
                    method: 'POST',
                    body: formData
                });
                if (response.ok) {
                    popupBanner.classList.add('popup-shown');
                    form.reset();
                    form.classList.remove('sending');
                }
                else {
                    // alert('Помилка');
                    console.log('response ' + response.status);
                    form.classList.remove('sending');
                }
            }
            // else alert('Заповніть обов\'язкові поля');
        }
    }

    async function commentFormSend(e) {
        e.preventDefault();
        let error = formValidate(commentForm);
        let formData = new FormData(commentForm);
        console.log('rating ' + rating);
        formData.append('rating', rating);
        if (error === 0) {
            commentForm.classList.add('sending');
            let response = await fetch('review.php', {
                method: 'POST',
                body: formData
            });
            console.log(response.status);
            if (response.ok) {
                popup.classList.add('popup-shown');
                commentForm.reset();
                commentForm.classList.remove('sending');
                stars.forEach((star, index1) => {
                    star.classList.remove('selected');
                });
            }
            else {
                alert('Помилка');
                console.log('response ' + response.status);
                commentForm.classList.remove('sending');
                stars.forEach((star, index1) => {
                    star.classList.remove('selected');
                });
            }
        }
        // else alert('Заповніть обов\'язкові поля');
    }

    const stars = document.querySelectorAll('.stars li');
    let rating = 0;
    stars.forEach((star, index1) => {
        star.addEventListener('click', () => {
            rating = star.dataset.rating;
            console.log(rating);
            stars.forEach((star, index2) => {
                index1 >= index2 ? star.classList.add('selected') : star.classList.remove('selected');
            });
        });
    })

    function formValidate(form) {
        const idForm = form.id;
        let error = 0;
        const str = '#' + idForm + ' .required';
        let formReq = document.querySelectorAll(str);
        for (let index = 0; index < formReq.length; index++) {
            const input = formReq[index];
            formRemoveError(input);
            if (input.value === '') {
                formAddError(input);
                error++;
            }

            else if (input.classList.contains('name')) {
                if (nameValidate(input)) {
                    formAddError(input);
                    error++;
                }
            }

            else if (input.classList.contains('email')) {
                if (emailValidate(input)) {
                    formAddError(input);
                    error++;
                }
            }
            else if (input.classList.contains('mob')) {
                if (!phoneValidate(input)) {
                    formAddError(input);
                    error++;
                }
            }
        }
        return error;
    }

    function formAddError(input) {
        input.parentElement.classList.add('error');
        input.classList.add('error');
    }

    function formRemoveError(input) {
        input.parentElement.classList.remove('error');
        input.classList.remove('error');
    }

    function nameValidate(input) {
        let inputStr = input.value;
        return inputStr.match(/[0-9]/) != null;
    }

    function emailValidate(input) {
        return !/^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/.test(input.value);
    }

    function phoneValidate(input) {
        let inputStr = input.value;
        inputStr = inputStr.replace(/[\s\-\(\)]/g, '');
        return inputStr.match(/^((\+3?)?8)?0\d{9}$/) != null;
    }
})



