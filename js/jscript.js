

// function Person(names, account) {
//     this.names = names;

//     this.account = acount;
// }

// var person1 = new Person(inputtNames, inputAccount);

function Account(names, accountN, balance) {
    this.names = names;
    this.accountN = accountN;
    this.balance = balance;
}

Account.prototype.withdrawMoney = function () {

    this.withdraw = withdraw;
    this.balance = balance


    if (this.balance === 0) {
        return "no money"
    }
    else if (this.balance > 0) {
        var LastBalance = balance - withdraw;
    }
    return balance

}
Account.prototype.DepositMoney = function () {
    this.balance = balance;
    this.deposit = deposit;
    var lastBalance = balance + deposit;
    return (lastBalance)
}


$(document).ready(function () {
    $("form#bank").submit(function (event) {
        event.preventDefault();

        var inputtNames = $("input#full-Name").val();
        var inputAccount = $("input#accountn").val();
        var inputInitialDeposit = $("input#initial-amount").val();
        var myAccount = new Account(inputtNames, inputAccount, inputInitialDeposit);
        // console.log(myAccount)
        // var inputedDeposit = $("input#deposit-Amount").val();
        // var inputedwithdraw = $("input#withdraw-amount").val();
        $("#show").show(myAccount)
    });


    // $("form#deposit").submit(function(){})
});
