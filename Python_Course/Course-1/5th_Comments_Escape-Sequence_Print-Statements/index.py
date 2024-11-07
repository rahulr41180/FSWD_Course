
# --------- This print(""); statement is fine ----------------

print("Hey I am a good boy");

# -------------------------------------------------------

# --------- This print("
# ") statement is not fine. It will give us error
# Error is : EOL While scanning string literal
# But actually we want that "Thank You" statement will print in new line so for that in the Python we have
# Escape Sequence : \n

# print("Hey I am a good boy
# Thank You");

# --------------------------------------------

# Here "Thank You" statement will print in new line with space.
# If you don't want space before of "Thank You" Then.

print("Hey I am a godd boy \n Thank You");

# ----------------------------------------------

print("Hey I am a good boy \nThank You");

# --------------------------------------

# \n is a Escape Sequence character

# For comment the text we are using "#" before a new line

# Python comments is a part of the coding file that the programmer does not want to execute, rather the
# programmer uses it to either explain a block of code or to avoid the execution of a specific part of
# code while testing.

# -------------------------------------------------

# Multi Line Comments ->

'''

To write multi-line comments you can use "#" at each line or we can use the six single or double coutes : 
''' 

'''


'''
# ----------------------------------------------------


# Escape Sequence Characters ->
'''
To insert characters that can not be directly used in a string, we use an escape sequence character.
Ex : "Hey I am a "good boy" and this viewer is also a good boy/girl"
Here I want to print "good boy" in seperate string in the whole example but we can't use "good boy" in
the main string content.
But for that we can use : 

An escape sequence charater is a backslash \ followed by the character you want to insert.

An example of a character that cannot be directly used in a string is a double quote inside a string that
is surrounded by double quotes.
'''

# print("This doesn't "execute""); : Here I want to print "execute" with the double quotes inside the
# whole string
# For that we can use : forward slash (\") for producing one double quotes(") but for producing double quotes so we will double backslash with double quotes
# Like : \" Text Here \"

print("This will \"execute\" ");

# So here what happend we are using backslash with double quotes (\"Text Here\") which will produce single double code("Output");.

# --------------------------------------------------------

# Print Statement : 


'''

    sep=seprator : Specify how to seprate the objects, If there is more than one. Default is " "(space);

    end=end : Specify what to print at the end. Default is "\n" (line feed);

    file : An object with a write method. Default is sys.stdout 

'''

print("Hey", 5, 6, "I \"am\" a good boy");


# We can seperate or join multiple text or number with one special character
# For that we are using : sep="Special Character";

print("Hey", 5, 6, "I \"am\" a good boy", sep="~");

# end="Any text which we want to add in the last of content";
# syntax : end="Any Text/Number";

print("Hey",5,6,"I \"am\" a good boy",sep="~", end="8001");

print("Hey",5,6,"I \"am\" a good boy",sep="~");

# Here we are using end="8001" and we will see that because of end="" statement. The end statement
# concatenate with first print and second print is also concatenate with end="" statement.

# For print the second print("") statement in the new line please use "\n"

print("Hey",5,6,"I \"am\" a good boy",sep="~", end="8001\n");

print("Hey",5,6,"I \"am\" a good boy",sep="~");