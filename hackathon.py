import matplotlib as plt

end = False

# Get info about income and spending
income = float(input('Enter your monthly income: '))
spending = float(input('Enter your desired monthly expenses: '))
balance = float(input('Enter net balance of money: '))
invest = 0

# Food expenses
food = 0
fun = 0
rent = 0
health = 0

count = 0
while income < 0 or spending<0:
    income = float(input('Please enter valid monthly income: '))
    spending = float(input('Please enter your desired monthly expenses: '))

# Breakdown of money into usable and inherent expenses
left = income - spending
if balance >= 0:
    invest = float(input('Enter what percentage of your spending do you want to invest: '))
while not 0 <= invest <= 100:
    invest = float(input('Please enter a percentage between 0 and 100: '))
saved = left - invest/100 * spending
if saved <= 0.2 * income:
    print('Consider saving more money because it will benefit you in the long term')

while not end:
    # Categories for expenses
    expenses = ['food','fun','rent','health']
    food = 20
    fun = 10
    rent = 300
    health = 0
    values = [food,fun,rent,health]
    i = 0
    emojis = {'good':'https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/65532/happy-emoji-clipart-md.png',
              'ok':'https://creazilla-store.fra1.digitaloceanspaces.com/emojis/55321/neutral-face-emoji-clipart-md.png',
              'bad':'https://creazilla-store.fra1.digitaloceanspaces.com/emojis/54055/worried-face-emoji-clipart-xl.png'}
    
    # Adjusted balance
    total =  saved + balance
    figure1 = plt.pyplot.figure()
    ax = figure1.add_axes([0,0,1,1])
    ax.axis('equal')
    ax.pie(values,labels = expenses,autopct = '%1.3f%%')
    plt.pyplot.show()
    
    count+=1
    if count == 2:
        end = True