class Application {
    constructor() {
      this.income = 0;
      this.expenses = 0;
      this.expenseList = [];
      this.expenseName = [];
      this.incomeName = [];
      this.incomeList = [];
      this.promptIncome();
    }
  
    incomeAsk() {
      let addIncome = prompt("Add income? [y/n]: ");
      return addIncome;
    }
  
    incomeSum() {
      this.income = this.incomeList.reduce((a, b) => a + b);
    }
  
    expenseAsk() {
      let addExpense = prompt("Add expense? [y/n]: ");
      return addExpense;
    }
  
    expenseSum() {
      this.expenses = this.expenseList.reduce((a, b) => a + b);
    }
  
    incomeCheck() {
      if (this.incomeList.length === 0) {
        console.log("Please enter at least one source of income.");
        this.promptIncome();
      }
    }
  
    expenseCheck() {
      if (this.expenseList.length === 0) {
        console.log("Please enter at least one expense.");
        this.promptExpense();
      }
    }
  
    promptIncome() {
      let x = false;
      while (!x) {
        let result = this.incomeAsk();
        if (result === "y") {
          let incomeInput = parseInt(
            prompt("Enter source of income. [Numbers Only]: ")
          );
          this.incomeList.push(incomeInput);
          let incomeName = prompt("Enter income name. [Name Only]: ");
          this.incomeName.push(incomeName);
        } else {
          this.incomeCheck();
          x = true;
        }
      }
      this.incomeSum();
      let name = [...this.incomeName];
      let income = [...this.incomeList];
      let incomedict = Object.fromEntries(name.map((v, i) => [v, income[i]]));
      for (const k in incomedict) {
        console.log(k + ": $" + incomedict[k]);
      }
      console.log("Total user income: $" + this.income);
      this.promptExpense();
    }
  
    promptExpense() {
      let x = false;
      while (!x) {
        let result = this.expenseAsk();
        if (result === "y") {
          let expenseInput = parseInt(
            prompt("Enter expense amount. [Numbers Only]: ")
          );
          this.expenseList.push(expenseInput);
          let expenseName = prompt("Enter expense name. [Name Only]: ");
          this.expenseName.push(expenseName);
        } else {
          this.expenseCheck();
          x = true;
        }
      }
      this.expenseSum();
      let name = [...this.expenseName];
      let expense = [...this.expenseList];
      let expensedict = Object.fromEnt
  