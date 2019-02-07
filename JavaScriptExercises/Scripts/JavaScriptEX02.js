$(document).ready(function () {
    $(".frm-test2").submit(function (e) {
        e.preventDefault();
        var num01 = $("#input01").val();
        var factorial = function fac(n) {
            if (num01 <= 0) {
                return alert('Type a positive number')
            }else
                return n < 2 ? 1 : n * fac(n - 1);
        };

        $(".test-content").html(factorial(num01));
    })
})

