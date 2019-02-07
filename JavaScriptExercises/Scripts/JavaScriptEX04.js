$(document).ready(function () {
    $(".frm-test4").submit(function (e) {
        e.preventDefault();
        var myArray = [$("#input01").val()];
         myArray.filter(function (textA, textB) {
            var currentText = textA.split('').reverse().join('')
             if (textA == currentText) {
                 $(".test-content").html(myArray[textB] + " " + " is Palindrome");
             }
             else {
                 $(".test-content").html("Isn't Palindrome")
             }
        });
    })
})









