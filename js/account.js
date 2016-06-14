//Business Logic
  var currentBalance;

  function newAccount(newname, newdeposit) {
    this.newname = newname;
    this.deposit = newdeposit;
   }

  //  Deposit.prototype.newDeposit = function() {
  //    return currentBalance = currentBalance + newDeposit;
  //  }
  //  Withdraw.prototype.newWithdrawal = function() {
  //    return currentBalance = currentBalance - newWithdrawal;
  //  }

//User Interface Logic
$(document).ready(function(){
  $("form#bank-account").submit(function(event){
    event.preventDefault();

    var inputtedNewName = $("input#new-name").val();
    var inputtedInitialDeposit = $("input#initial-deposit").val();

    var accountSetup = new newAccount(inputtedNewName, inputtedInitialDeposit)

    var currentBalance = accountSetup.deposit;
    console.log(accountSetup.deposit);

    var inputtedNewDeposit = $("input#new-deposit").val();
    var inputtedNewWithdrawal = $("input#new-withdrawal").val();




    $("#current-balance").text(newAccount.newDeposit());
    $("#current-balance").text(newAccount.newWithdrawal());


  });
});
