# for x in range(11):
#     print(x)

# for x in range(1,21):
#     if x % 2==0:
#         print(x)


# x = 20

# while x > 0:
#     print(x)
#     x -= 1

# import random 

# random_number = random.randint(1, 10)

# while True:
   
#     user_guess = int(input("გთხოვთ, გამოიცნოთ რიცხვი 1-დან 10-მდე: "))

    
#     if user_guess == random_number:
#         print("შესანიშნავია! თქვენ სწორად გამოიცნეთ რიცხვი.")
#         break  
#     else:
#         print("არასწორი რიცხვი, სცადეთ კიდევ ერთხელ")


#დაწერეთ პროგრამა, რომელიც იღებს რიცხვს შეყვანის სახით და განსაზღვრავს, თუ არის ის ლუწი თუ კენტი. 
# გამოიყენეთ if-else პირობა შესაბამისი შეტყობინების დასაბეჭდად.
num1 = int(input("enter your number :"))
if  num1 %2==0:
    print("your number is even")
else:
    print("your number is odd")