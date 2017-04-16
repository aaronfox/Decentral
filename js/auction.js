// sample profile object
var sampProf = {
    name: "John Doe",
    currentEmployment: "Marketing Inc.",
    monthlyIncome: "2500.00",
    isA : "lender",
    profilePicture: "http://icelawfirm.com/wp-content/uploads/2013/01/team5-270x270.jpg",
    email: "johnDoe@domain.com",
    phone: "1-765-555-0967",
    principal: 500.00,
    interest: 11,
    numberOfMonths : 3
    }

var sampProf2 = {
    name: "Molly Fee",
    currentEmployment: "Jackson Inc.",
    monthlyIncome: "5500.00",
    isA : "lendee",
    profilePicture: "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/4/000/138/1d4/35f3c45.jpg",
    email: "mollyFee@domain.com",
    phone: "1-677-555-0987",
    principal: 400.00,
    interest: 6,
    numberOfMonths: 7
    }

var sampProf3 = {
    name: "Richard Smith",
    currentEmployment: "GAE LLC",
    monthlyIncome: "7500.00",
    isA : "both",
    profilePicture: "http://www.wileyrein.com/assets/images/248.jpeg",
    email: "mollyFee@domain.com",
    phone: "1-775-555-3095",
    principal: 800.00,
    interest: 7,
    numberOfMonths: 12
    }

var profiles = [sampProf, sampProf2, sampProf3];

function getProfiles() {
  $.each(profiles, function(index, profile) {
    $(".profiles").append("<div class=\"profile\"><img class=\"profilePicture\" src=\""+profile.profilePicture+"\"><div class=\"profile-name\">" + profile.name + "</div><div class=\"principal\">$ " + profile.principal.toFixed(2) + "</div><div class=\"interest\">" + profile.interest  + "%</div><div class=\"numberOfMonths\">" + profile.numberOfMonths + "</div></div><br>");
  });
}

$(document).ready(function() {
  getProfiles();
    $(".calculator").hide();
    $(".calcButton").click(function() {
        $(".calcButton").hide();
        $(".calculator").show();
    });
    $(".subbySub").click(function() {
        var loanAmount = document.getElementById("loanAmount").value;
        var interestRate = document.getElementById("interestRate").value;
        var monthsToPay = document.getElementById("monthsToPay").value;
        console.log(loanAmount * Math.pow(1 + (interestRate / 100) / monthsToPay, monthsToPay));

    });
});
