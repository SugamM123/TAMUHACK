




income = 50000
savings = 20000
debt = 15000

# use inputs from text boxes

def give_advice(income, savings, debt):

    """"
    This function will give advice based on the given parameters.
    """


    if income > 0 and savings > 0 and debt == 0:
        return "You are in good financial shape. Keep saving and investing for your future."
    elif income > 0 and savings > 0 and debt > 0:
        return "You have some debt, but you are saving and earning income. Keep paying off your debt and continue saving."
    elif income > 0 and savings == 0 and debt > 0:
        return "You have debt and no savings. Start saving a portion of your income and work on paying off your debt."
    elif income > 0 and savings == 0 and debt == 0:
        return "You have no savings and no debt. Start saving a portion of your income for your future."
    else:
        return "I'm sorry, I am not able to give advice with the information provided."


give_advice(income, savings, debt)