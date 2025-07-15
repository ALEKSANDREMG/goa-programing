def check_lowercase(user_str):
    if user_str == user_str.lower():
        print(True)
    else:
        print(False)

check_lowercase("hello")
check_lowercase("Hello")
check_lowercase("HELLO")


def list_join(user_list, str_to_join):
    print(str_to_join.join(user_list))

list_join(['apple', 'banana', 'cherry'], '-')
list_join(['2025', '02', '09'], '/')
list_join(['hello', 'world'], ' ')



def element_remover(user_list, index_to_remove):
    if 0 <= index_to_remove < len(user_list):
        user_list.pop(index_to_remove)

list_1 = [1, 2, 3, 4, 5]
element_remover(list_1, 2)
print(list_1)

list_2 = ['apple', 'banana', 'cherry', 'date']
element_remover(list_2, 1)
print(list_2)

list_3 = [10, 20, 30, 40]
element_remover(list_3, 0)
print(list_3)
