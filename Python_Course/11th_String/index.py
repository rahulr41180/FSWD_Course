
# Anything In the double coutes("") or in single coutes('') that will called string.

# Example :
name = "User1";
friend = 'User2';

# String : In python, anything that you enclose between single or double quotation marks is considered a string.
# A string is essentially a sequence or array of textual data.
# String are used when working with Unicode characters.

# Note : It does not matter whether you enclose your strings in single or double quotes, the output remains the same.

# Sometimes, the user might need to put quotation marks in between the string.
# Exampale : 
# He said, "I want to eat an apple".
# How will I print this statement in python? :
# We will definitely use single quotes for out convenience.
# There is also a another way to do this. So for that we can use Escape sequence characters(\");

withSingleQuotes = 'He said,"I want to eat an apple"';
print(withSingleQuotes);

withEscapeSequenceChar = "He said,\"I want to eat an apple\"";
print(withEscapeSequenceChar);

# Multiline Strings :
# If our string has multiple lines, we can create them with the help of :
# Three single or bouble quotes means.
# We have to wrote our text between single or bouble quotes like :
# It can be done by single quotes like :
# '''Our Text Start From Here

#  Our Text will Complete Here'''

# Or it can be done by double quotes also like :
# """Our Text Start From Here
# Our Text will Complete Here"""

# Example :

multilineTextWithSingleQuotes = '''
He Said,
Hi Rahul
Hey I am good
"I want to eat an apple"
'''
print(multilineTextWithSingleQuotes);

multilineTextWithDoubleQuotes = """He Said,
Hi Rahul
Hey I am good
"I want to eat and apple" 
"""
print(multilineTextWithDoubleQuotes);

# But In the result we are getting new line after the comepletion of text so for we can use \"

multilineTextWithDoubleQuotes_1 = """
He Said,
Hi Rahul
Hey I am good
"I want to eat and apple\""""
print(multilineTextWithDoubleQuotes_1);