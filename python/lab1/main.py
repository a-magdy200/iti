import math
from collections import Counter


vowels = {'a', 'e', 'u', 'i', 'o', 'A', 'E', 'U', 'I', 'O'}


def problem_one(**args):
    return math.sqrt(math.pow((args.get('x1') - args.get('x2')), 2) + math.pow((args.get('y1') - args.get('y2')), 2))


def problem_two(*args):
    return list(set(args))


def problem_three(*args):
    front_string = back_string = ''
    for index in range(len(args)):
        current_string = args[index]
        string_length = len(current_string)
        mid_string = int(string_length / 2)
        if string_length % 2 == 0:
            front_string += current_string[:mid_string]
            back_string += current_string[mid_string:]
        else:
            front_string += current_string[:mid_string + 1]
            back_string += current_string[mid_string + 1:]

    return front_string + back_string


def problem_four():
    file_path = input("Enter file path: ")
    file_pointer = open(file_path, "r")
    file_contents = file_pointer.read()
    file_pointer.close()
    words = file_contents.split()
    counted_words = Counter(words)
    most_common = list(map(lambda word_tuple: word_tuple[0], counted_words.most_common(20)))
    file_pointer = open("most_common.txt", "w")
    file_pointer.write("\n".join(most_common))
    file_pointer.close()


def problem_five(string):
    final_string = string
    for letter in vowels:
        final_string = final_string.replace(letter, '')
    return final_string


def problem_six(string, character):
    locations = []
    current_index = -1
    while current_index < len(string):
        current_index = string.find(character, current_index + 1)
        if current_index == -1:
            break
        locations.append(current_index)

    return locations


# def problem_bonus():

# print(problem_one(x1=1, x2=2, y1=1, y2=3))
# print(problem_two(1, 2, 2, 3, 2))
# print(problem_three("abced", "abdg"))
# problem_four()
# print(problem_five("mobile"))
print(problem_six("Google", "o"))

