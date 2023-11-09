function createAccount(pin, initialDeposit) {
    let balance = initialDeposit;
    let accountPin = pin;
  
    return {
      checkBalance: function(inputPin) {
        if (inputPin === accountPin) {
          return "Current balance: $" + balance;
        } else {
          return "Invalid PIN.";
        }
      },
      deposit: function(inputPin, amount) {
        if (inputPin === accountPin) {
          balance += amount;
          return "Successfully deposited $" + amount + ". Current balance: $" + balance + ".";
        } else {
          return "Invalid PIN.";
        }
      },
      withdraw: function(inputPin, amount) {
        if (inputPin === accountPin) {
          if (amount <= balance) {
            balance -= amount;
            return "Successfully withdrew $" + amount + ". Current balance: $" + balance + ".";
          } else {
            return "Withdrawal amount exceeds account balance. Transaction cancelled.";
          }
        } else {
          return "Invalid PIN.";
        }
      },
      changePin: function(oldPin, newPin) {
        if (oldPin === accountPin) {
          accountPin = newPin;
          return "PIN successfully changed!";
        } else {
          return "Invalid PIN.";
        }
      },
    };
  }
  
module.exports = { createAccount };
