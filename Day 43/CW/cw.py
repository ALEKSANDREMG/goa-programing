def print_arr(arr):
    for element in arr:
        print(element)

    my_list = [1, 2, 3, 4, 5]
    print_arr(my_list)

def check(s):
    if 4 < len(s) < 8:
        return True
    else:
        return False

print(check("hello"))  
print(check("hi"))     
print(check("goodbye"))  
print(check("python"))  

def Is_best_academy():
    return "Goal-Oriented-Academy"
result = Is_best_academy()
print(result)


def complex_calc(a, b):
    if a % 2 == 0:
        return a + b
    else:
        return a * b

