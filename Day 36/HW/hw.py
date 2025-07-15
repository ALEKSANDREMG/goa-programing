sentence = input("Enter a sentence: ")
print(sentence.upper())

name = input("Enter your name: ")
print(name.upper())

strings = ['hello', 'world', 'python']
for s in strings:
    print(s.upper())

sentence = input("Enter a sentence: ")
print(sentence.lower())

email = input("Enter your email address: ")
print(email.lower())

mixed_case = "Hello WORLD"
print(mixed_case.lower())

sentence = input("Enter a sentence: ")
print(sentence.capitalize())

strings = ['hello', 'world', 'python']
for s in strings:
    print(s.capitalize())

string = "hello world"
print(string.capitalize())

sentence = input("Enter a sentence: ")
print(sentence.find("Python"))

sentence = input("Enter a sentence: ")
substring = input("Enter the substring to search for: ")
print(sentence.find(substring))

string = "hello world"
char = 'o'
print(string.find(char))

string = input("Enter a string: ")
print(len(string))

strings = ["hello", "world", "python"]
for s in strings:
    print(len(s))

paragraph = input("Enter a paragraph: ")
print(paragraph.lower().split().count('the'))

string = input("Enter a string: ")
char = input("Enter a character to count: ")
print(string.count(char))

text = "Python is great and python is popular"
word = "python"
print(text.lower().split().count(word.lower()))
