def manual_capitalize(user_str):
    print(user_str[0].upper() + user_str[1:].lower())

manual_capitalize("hello")
manual_capitalize("world")
manual_capitalize("PyTHON")
manual_capitalize("test")
manual_capitalize("stRing")


def lower_or_upper(user_str, choice):
    if choice == "upper":
        print(user_str.upper())
    elif choice == "lower":
        print(user_str.lower())
    else:
        print("wrong choice")

lower_or_upper("Hello, World!", "upper")
lower_or_upper("Hello, World!", "lower")
lower_or_upper("Hello, World!", "other")


def count_symbols(main_str, str_to_search):
    print(main_str.count(str_to_search))
count_symbols("hello world, hello", "hello")
count_symbols("apple pie is delicious", "apple")
count_symbols("banana banana banana", "banana")


def big_sentence(name, surname, age, academy, role):
    print("Hello, my name is {}, my surname is {}. I am {} years old. I study at {}, my role is {}.".format(name, surname, age, academy, role))


