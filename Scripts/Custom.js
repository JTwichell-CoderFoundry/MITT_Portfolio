$(document).ready(function () {

    $("#btnmath").click(function () {
        //First we need to get the user input
        var num1 = Number($("#input1").val());
        var num2 = Number($("#input2").val());
        var num3 = Number($("#input3").val());
        var num4 = Number($("#input4").val());
        var num5 = Number($("#input5").val());

        //next we need to perform the necessary calculations
        var sum = num1 + num2 + num3 + num4 + num5;
        var product = num1 * num2 * num3 * num4 * num5;
        var average = sum / 5;
        var smallest = Math.min(num1, num2, num3, num4, num5);
        var largest = Math.max(num1, num2, num3, num4, num5);

        //finally we need to output the results
        $("#sum").text("The sum is: " + sum);
        $("#product").text("The product is: " + product);
        $("#average").text("The average is: " + average);
        $("#smallest").text("The smallest number is: " + smallest);
        $("#largest").text("The largest number is: " + largest);
    });

    $("#mathcode").hide();
    $("#btncodemath").click(function () {
        $("#mathcode").toggle();
    });



    $("#btnfb").click(function () {
        //Step 1: get the information from the user
        var num1 = Number($("#fbnum1").val());
        var num2 = Number($("#fbnum2").val());

        //var numbers = [];
        var output = "";

        //Step 2: Perform the algorithm
        for (var loop = 1; loop <= 100; loop++) {
            //Here is where we determine whether to print Fizz, Buzz, FizzBuzz or the loop counter
            if (loop % num1 == 0 && loop % num2 == 0) {
                //$("#fbout").text("FizzBuzz");
                //numbers.push("FizzBuzz");
                output += "FizzBuzz, ";
            }
            else if (loop % num1 == 0) {
                //$("#fbout").text("Fizz");
                //numbers.push("Fizz");
                output += "Fizz, ";
            }
            else if (loop % num2 == 0) {
                //$("#fbout").text("Buzz");
                //numbers.push("Buzz");
                output += "Buzz, ";
            }
            else {
                //$("#fbout").text(loop);
                //numbers.push(loop);
                output += loop + ", ";
            }
        }

        //Step 3: Output the result
        //var output = numbers.join(', ');
        $("#fbout").text(output.substring(0, output.length - 2));
    });

    $("#btnclose").click(function () {
        //Clear the information from the screen
        $("#fbnum1").val("");
        $("#fbnum2").val("");
        $("#fbout").text("");
    });

    $("#btnpal").click(function () {
        //Step 1: Get the data
        var word = $("#palin").val();

        //Step 2: Perform the calculation
        var revword = word.split('').reverse().join('');

        //Step 3: Output the result
        if (word == revword) {
            $("#palout").text(word + " IS a palidrome");
        }
        else {
            $("#palout").text(word + " is NOT a palidrome");
        }
    });



});