// sample profile object
var sampProf = {
    name: "John Doe",
    currentEmployment: "Marketing Inc.",
    monthlyIncome: "2500.00",
    isA : "lender",
    profilePicture: "http://beyondfifteen.com/wp-content/uploads/2014/08/team3.jpg",
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
    profilePicture: "http://beyondfifteen.com/wp-content/uploads/2014/08/team3.jpg",
    email: "mollyFee@domain.com",
    phone: "1-677-555-0987",
    principal: 400.00,
    interest: 6,
    numberOfMonths: 7
    }

var profiles = [sampProf, sampProf2];

function getProfiles() {
  $.each(profiles, function(index, profile) {
    $(".profiles").append("<div class=\"profile\"><div class=\"profile-name\">" + profile.name + "</div><div class=\"principal\">$ " + profile.principal.toFixed(2) + "</div><div class=\"interest\">" + profile.interest  + "%</div><div class=\"numberOfMonths\">" + profile.numberOfMonths + "</div></div><br>");
  });
}

$(document).ready(function() {
  getProfiles();
    $(".subbySub").click(function() {
        var loanAmount = document.getElementById("loanAmount").value;
        var interestRate = document.getElementById("interestRate").value;
        var monthsToPay = document.getElementById("monthsToPay").value;
    });
});