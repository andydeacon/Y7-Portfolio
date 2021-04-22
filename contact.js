// create variables from contact form data

$(function () {
      $('.submit').click(function (event) {
        var emailAddress = $("#email").val();
        var fName = $("#fname").val();
        var lName = $("#lname").val();
        var company = $("#company").val();
        var subject = "New Contact from " + fName + " " + lName + " of " + company;
        var comment = $("#comment").val();

        // add the appropriate body details to a single variable and format for legibility
        var emailBody = "Name: " + fName + ", " + lName;
        emailBody += "\nEmail: " + emailAddress;
        emailBody += "\nCompany: " + company;
        emailBody += "\nComment: " + comment;
        // bring up users default mail app and populate email        
      document.location = "mailto:costa@familycarersnet.co.uk"+"?subject="+subject+"&body="+encodeURIComponent(emailBody);
      });
    });
