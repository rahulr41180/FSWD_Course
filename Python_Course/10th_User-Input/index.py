
#  Taking User Input in Python

# In Python, We can take user input directly by using input() function. This input function gives a return value as string/character hence we have to pass that into a variable.

# Syntax : 

# variable = input();

# But input function return the value as string. Hence we have to typecast them whenever required to antoher datatype.

# Example 1 : 

a = input();
print("Input has taken from user :", a);

# Example 2 :

# Input by suggestion : 

suggestion = input("Please Enter Your Name : ",);
print("Your name is :", suggestion);

# Example 3 :

x = input("Enter first Number : ",);
print("Type of x is :", print(type(x)));
y = input("Enter second Number : ",);
print("Type of y is :", print(type(y)));
print(x+y);
# If x = 10; and y = 10. then It print(x+y) will give us 1010 not 20 because
# In python the input take the all value in string format not type format

# That's why it is concatenating the x and y value.
# If x = user and y = 10. Then it will give us user10

# So suppose we give number to input. But input will take it as a string but we want that input will take it
# as number so for that we have to convert that string into number with the help of typeCasting method means by int() function.

x1 = int(input("Enter first Number : ",));
print("Type of x1 is :", print(type(x1)));
y1 = int(input("Enter second Number : ",));

print("Type of y1 is :", print(type(y1)));
print(x1+y1);