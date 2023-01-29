import * as os from 'os';
import * as sys from 'sys';

class Application {
  constructor() {
    /*  INCOME INPUT  */
    this.income = 0;
    this.expenses = 0;
    this.expense_list = [];
    this.expense_name = [];
    this.income_name = [];
    this.income_list = [];
    this.prompt_income();
  }

  income_ask() {
    var add_income;
    add_income = input("Add income? [y/n]: ");
    return add_income;
  }

  income_sum() {
    this.income = sum(this.income_list);
  }

  expense_ask() {
    var add_expense;
    add_expense = input("Add expense? [y/n]: ");
    return add_expense;
  }

  expense_sum() {
    this.expenses = sum(this.expense_list);
  }

  income_check() {
    if (!this.income_list) {
      console.log("Please enter atleast one source of income. ");
      this.prompt_income();
    } else {
      return;
    }
  }

  expense_check() {
    if (!this.expense_list) {
      console.log("Please enter atleast one expense. ");
      this.prompt_expense();
    } else {
      return;
    }
  }

  prompt_income() {
    var income, income_input, income_name, incomedict, name, result, x;
    x = false;

    while (!x) {
      result = this.income_ask();

      if (result === "y") {
        income_input = Number.parseInt(input("Enter source of income. [Numbers Only]: "));
        this.income_list.append(income_input);
        income_name = input("Enter income name. [Name Only]: ");
        this.income_name.append(income_name);
      } else {
        this.income_check();
        x = true;
      }
    }

    this.income_sum();

    name = function () {
      var _pj_a = [],
          _pj_b = this.income_name;

      for (var _pj_c = 0, _pj_d = _pj_b.length; _pj_c < _pj_d; _pj_c += 1) {
        var name = _pj_b[_pj_c];

        _pj_a.push(name);
      }

      return _pj_a;
    }.call(this);

    income = function () {
      var _pj_a = [],
          _pj_b = this.income_list;

      for (var _pj_c = 0, _pj_d = _pj_b.length; _pj_c < _pj_d; _pj_c += 1) {
        var income = _pj_b[_pj_c];

        _pj_a.push(income);
      }

      return _pj_a;
    }.call(this);

    incomedict = dict(zip(name, income));

    for (var k, _pj_c = 0, _pj_a = incomedict, _pj_b = _pj_a.length; _pj_c < _pj_b; _pj_c += 1) {
      k = _pj_a[_pj_c];
      console.log(k + ": ", "$" + incomedict[k].toString());
    }

    console.log("Total user income: ", "$" + this.income.toString());
    this.prompt_expense();
  }

  prompt_expense() {
    var expense, expense_input, expense_name, expensedict, name, result, x;
    x = false;

    while (!x) {
      result = this.expense_ask();

      if (result === "y") {
        expense_input = Number.parseInt(input("Enter expense amount. [Numbers Only]: "));
        this.expense_list.append(expense_input);
        expense_name = input("Enter expense name. [Name Only]: ");
        this.expense_name.append(expense_name);
      } else {
        this.expense_check();
        x = true;
      }
    }

    this.expense_sum();

    name = function () {
      var _pj_a = [],
          _pj_b = this.expense_name;

      for (var _pj_c = 0, _pj_d = _pj_b.length; _pj_c < _pj_d; _pj_c += 1) {
        var name = _pj_b[_pj_c];

        _pj_a.push(name);
      }

      return _pj_a;
    }.call(this);

    expense = function () {
      var _pj_a = [],
          _pj_b = this.expense_list;

      for (var _pj_c = 0, _pj_d = _pj_b.length; _pj_c < _pj_d; _pj_c += 1) {
        var income = _pj_b[_pj_c];

        _pj_a.push(income);
      }

      return _pj_a;
    }.call(this);

    expensedict = dict(zip(name, expense));

    for (var k, _pj_c = 0, _pj_a = expensedict, _pj_b = _pj_a.length; _pj_c < _pj_b; _pj_c += 1) {
      k = _pj_a[_pj_c];
      console.log(k + ": ", "$" + expensedict[k].toString());
    }

    console.log("Total user expenses: ", "$" + this.expenses.toString());
    this.uservalue();
  }

  uservalue() {
    var another, valoutput;
    valoutput = this.income - this.expenses;

    if (valoutput < 0) {
      console.log("You are in the negative, you have a deficit of " + "$" + valoutput.toString());
    }

    if (valoutput === 0) {
      console.log("You have broken even, you are spending exactly as much as you make.");
    }

    if (valoutput > 0) {
      console.log("You are in the positive, you have a surplus of " + "$" + valoutput.toString());
    }

    another = input("Would you like to run another analysis? [y/n]: ");

    if (another === "y") {
      this.reset_program();
    } else {
      this.close_program();
    }
  }

  reset_program() {
    this.income = 0;
    this.expenses = 0;
    delete this.expense_list.slice(0);
    delete this.expense_name.slice(0);
    delete this.income_name.slice(0);
    delete this.income_list.slice(0);
    this.prompt_income();
  }

  close_program() {
    console.log("Exiting Program.");
    sys.exit(0);
  }

}

if (__name__ === "__main__") {
  new Application();
}
