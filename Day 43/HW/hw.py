def get_first_and_last(lst):
    if len(lst) == 0:
        return "List is empty"
    return [lst[0], lst[-1]]

def get_max_of_three(a, b, c):
    return max(a, b, c)

def reverse_string(s):
    reversed_s = ""
    for char in s:
        reversed_s = char + reversed_s
    return reversed_s

print(get_first_and_last([1, 2, 3, 4]))
print(get_first_and_last([5]))
print(get_first_and_last([]))

print(get_max_of_three(1, 2, 3))
print(get_max_of_three(5, 4, 6))

print(reverse_string("hello"))
