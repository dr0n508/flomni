$(document).ready(function () {

    $('.fl-launcher-button').click(function () {
       $('.widget-messages').toggle();
    });

    $('.btn-close ').click(function () {
        $('.widget-messages').hide();
    });

    $('.list-messengers .btn-social').click(function () {
        $(this).parent().addClass('active');
        $('.footer-chat').addClass('slim');
        $('#hide-block').toggle();
        $('.chat-box').addClass('small');
        $('.btn-message-template').hide();
    });

    $('#connectOtherDevice').click(function () {
        $('#qrCode-block').toggle();
        $('#hide-block, .chat-box').hide();
        $('.header-chat').addClass('border-bottom');
    });

    $('.link-cancel a').click(function () {
        $('#qrCode-block').toggle();
        $('#hide-block, .chat-box').toggle()();
        $('.header-chat').removeClass('border-bottom');
    });






});