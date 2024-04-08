import inquirer from "inquirer";
let myBalance = 10000;
let myPin = 9367;
let pinAnswer = await inquirer.prompt({
    name: "PIN",
    message: "Enter Your PIN",
    type: "number",
});
if (pinAnswer.PIN === myPin) {
    console.log("Your PIN is Correct");
    let operationAnswer = await inquirer.prompt([{
            name: "operations",
            message: "Please select Options",
            type: "list",
            choices: ["Withdraw", "Fast Cash", "Check Balance"],
        }]);
    if (operationAnswer.operations === "Withdraw") {
        let amountAns = await inquirer.prompt([{
                name: "Amount",
                message: "Enter Your Amount",
                type: "number"
            }]);
        if (amountAns.Amount <= myBalance) {
            let Balance = myBalance - amountAns.Amount;
            console.log(`The Remaining Balance is ${Balance}`);
        }
        else {
            console.log(`You have Insufficient Balance`);
        }
    }
    else if (operationAnswer.operations === "Fast Cash") {
        let FastCashAns = await inquirer.prompt([{
                name: "Amount",
                type: "list",
                choices: [10000, 3000, 4000, 7000, 150000],
            }
        ]);
        if (FastCashAns.Amount <= myBalance) {
            let balance2 = myBalance - FastCashAns.Amount;
            console.log(`The remaining balance is ${balance2}`);
        }
        else {
            console.log(`You have insufficient amount`);
        }
    }
    else if (operationAnswer.operations === "Chech Balance") {
        console.log(myBalance);
    }
}
else {
    console.log("Your PIN is Incorrect");
}
