function cancel() {
    if ($("#login-form").dialog("isOpen")) {
        $("#login-form").dialog("close");
        document.getElementById('username').value = '';
        document.getElementById('password').value = '';
    }
    if ($("#register-form").dialog("isOpen")) {
        $("#register-form").dialog("close");
        document.getElementById('new_username').value = '';
        document.getElementById('password1').value = '';
        document.getElementById('password2').value = '';
    }
}

$('#login-form').dialog({
    autoOpen: false,
    modal: false,
    resizable: false,
    width: 275,
    height: 210,
    position: { my: "left top", at: "right top+10%" },
    show: {
        effect: "fold",
        duration: 500
    },
    hide: {
        effect: "blind",
        duration: 500
    },
    dialogClass: 'custom-dialog'
});

$('#register-form').dialog({
    autoOpen: false,
    modal: false,
    resizable: false,
    width: 275,
    height: 255,
    position: { my: "left top", at: "right top+10%" },
    show: {
        effect: "fold",
        duration: 500
    },
    hide: {
        effect: "blind",
        duration: 500
    },
    dialogClass: 'custom-dialog'
});

$(function() {
    $("#call-loginbtn").click(function() {
        ($("#login-form").dialog("isOpen") == false) ? $("#login-form").dialog("open") : $("#login-form").dialog("close");
        if ($("#register-form").dialog("isOpen") === true) $("#register-form").dialog("close");
    });
});

$(function() {
    $("#registerbtn").click(function() {
        ($("#register-form").dialog("isOpen") == false) ? $("#register-form").dialog("open") : $("#register-form").dialog("close");
        if ($("#login-form").dialog("isOpen") === true) $("#login-form").dialog("close");
    });
});

window.onload = function() {
    document.getElementById("male").click();
};

document.addEventListener('DOMContentLoaded', function() {
    const overlay = document.querySelector('.overlay');
    const closeBtn = overlay.querySelector('.close');

    closeBtn.addEventListener('click', function() {
        overlay.style.display = 'none';
    });
});
