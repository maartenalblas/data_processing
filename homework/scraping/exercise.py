# Name :
# Student number :
'''
This module contains an implementation of split_string.
'''

# You are not allowed to use the standard string.split() function, use of the
# regular expression module, however, is allowed.
# To test your implementation use the test-exercise.py script.

# A note about the proper programming style in Python:
#
# Python uses indentation to define blocks and thus is sensitive to the
# whitespace you use. It is convention to use 4 spaces to indent your
# code. Never, ever mix tabs and spaces - that is a source of bugs and
# failures in Python programs.


def split_string(source, separators):
    '''
    Split a string <source> on any of the characters in <separators>.

    The ouput of this function should be a list of strings split at the
    positions of each of the separator characters.
    '''

    split_list = []

    # at start_index start slicing string
    start_index = 0

    # loop over each character in source
    for i in range(len(source)):

        # loop over each separator
        for separator in separators:

            # if separator is equal to character in source
            if source[i] == separator:
                word = source[start_index:i]

                # when the word is not empty add to split_list
                if len(word) > 0:
                    split_list.append(word)
                    word = ""

                # update start_index
                start_index = i + 1

    # if the last char is no separator
    word = source[start_index:len(source)]
    if word != "":
        out.append(word)

    return split_list


if __name__ == '__main__':
    # You can try to run your implementation here, that will not affect the
    # automated tests.
    print split_string('abacadabra', 'ba')  # should print: ['c', 'd', 'r']
