$(document).ready(function () {
    $(".frm-test3").submit(function (e) {
        e.preventDefault();
        var num01 = $("#input01").val();
        var num02 = $("#input02").val();
        
        var i;
        for (i = 0; i < 100; i++) {
            
            if (i % num02 === 0 && i % num01 === 0) {
                console.log("FizzBuzz");
            }if (i % num01 === 0) {
                console.log("Fizz")
            }if (i % num02 === 0) {
                console.log("Buzz")
            } else {
                console.log(i)
            }

        }
        $(".test-content").html(length[i]);
        })
})
