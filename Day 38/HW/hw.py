user_input = input("Please enter a string: ")

if user_input.islower():
    print("The string contains only lowercase letters.")
elif user_input.isupper():
    print("The string contains only uppercase letters.")
else:
    print("The string does not contain only lowercase letters. It contains both.")





user_input = input("Enter a string: ")
if user_input.isupper():
    print("All characters are uppercase.")
else:
    print("Not all characters are uppercase.")

def is_all_uppercase(s):
    return s.isupper()

string_input = input("Enter a string: ")
result = is_all_uppercase(string_input)
print(f"Is the string entirely uppercase? {result}")

user_input = input("Enter a string: ")
if user_input.isupper():
    print("The string is in uppercase.")
else:
    print("The string is not in uppercase.")






user_input = input("Enter a string: ")
print(user_input.swapcase())

def swap_case(sentence):
    return sentence.swapcase()

sentence_input = input("Enter a sentence: ")
print(swap_case(sentence_input))




def welcome_message(name, age):
    print(f"Welcome, {name}! You are {age} years old.")

name_input = input("Enter your name: ")
age_input = input("Enter your age: ")
welcome_message(name_input, age_input)






def split_sentence(sentence):
    print(sentence.split())

sentence_input = input("Enter a sentence: ")
split_sentence(sentence_input)
