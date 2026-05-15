jQuery(document).ready(function ($) {

    $('#contactform').submit(function (e) {
        e.preventDefault(); // stop the form from submitting normally

        // Get form data
        var name = $('input[name=name]');
        var email = $('input[name=email]');
        var comment = $('textarea[name=comment]');
        var regx = /^([a-z0-9_\-\.])+\@([a-z0-9_\-\.])+\.([a-z]{2,4})$/i;
        var returnError = false;

        // Reset previous error states
        name.removeClass('error');
        email.removeClass('error');
        comment.removeClass('error');

        // Validation
        if (name.val().trim() === '') {
            name.addClass('error');
            returnError = true;
        }

        if (email.val().trim() === '' || !regx.test(email.val())) {
            email.addClass('error');
            returnError = true;
        }

        if (comment.val().trim() === '') {
            comment.addClass('error');
            returnError = true;
        }

        if (returnError) {
            return false;
        }

        var formData = $(this).serialize();

        // AJAX to EC2 backend
         $.ajax({
            url: 'http://54.164.119.16:3000',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(formData),

            success: function (response) {
                window.location.href = 'Thankyou.html';
            },

            error: function (err) {
                console.log(err);
                alert('Server error. Please try again.');
            }
        });

    });

});
