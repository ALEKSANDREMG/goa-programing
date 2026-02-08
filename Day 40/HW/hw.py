def hello_world():
    print("Hello, World!")

def sum_numbers(a, b):
    print(a + b)

def multiply_by_ten(number):
    number * 10
    
def greet(name="Guest"):
    print(f"Hello, {name}!")

def outer_function():
    def inner_function():
        print("This is the inner function.")
    inner_function()
    print("This is the outer function.")

def check_even_odd(numbers):
    for num in numbers:
        if num % 2 == 0:
            print(f"{num} is Even")
        else:
            print(f"{num} is Odd")

def find_max(numbers):
    max_num = numbers[0]
    for num in numbers:
        if num > max_num:
            max_num = num
    return max_num

def positive_numbers(numbers):
    positive_list = []
    for num in numbers:
        if num > 0:
            positive_list.append(num)
    return positive_list

def sum_divisible_by_three(start, end):
    total = 0
    for num in range(start, end + 1):
        if num % 3 == 0:
            total += num
    return total

hello_world()

sum_numbers(5, 3)

result = multiply_by_ten(5)
print(result)

# greet()
# greet("Alice")

# outer_function()

# check_even_odd([1, 2, 3, 4, 5])

# result = find_max([1, 5, 3, 9, 2])
# print(f"The maximum number is: {result}")

# result = positive_numbers([-1, 2, 3, -4, 5])
# print(f"The positive numbers are: {result}")

# result = sum_divisible_by_three(1, 100)
# print(f"The sum of numbers divisible by 3 is: {result}")


