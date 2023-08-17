
# Type Casting

# The conversion of one data type into the other data type is known as type casting in python or type conversion in python.

# Python supports a wide variety of functions or methods like :
# int(), float(), str(), ord(), hex(), oct(), tuple(), set(), list(), dict(), etc..
# For the type casting in python.

# Normal Ex :
a = 1;
b = 4;

print(a+b);

# Type Casting Ex : 
a = "1";
b = 4;
# Now a is string, need to change it into number with the help of int() function().
print(int(a) + b);

# Two Types Of TypeCasting

# 1. Explicit Conversion (Explicit type casting in python).
# 2. Implicit Conversion (Implicit type casting in python).

# 1. Explicit typecasting : (Conversion done by developer) ->
# The conversion of one data type into another data type, done by developer or programmer's intervention or manually
# as per the requirement, is knwon as explicit type conversion.

# It can be achieved with the help of Python's built-in type converion function() such as int(), float(), hex(), oct(), etc.



# Example of explicit typecasting :
string = "15";
number = 7;
string_to_number = int(string) # It will throws an error if the string is not a valid integer
sum = number + string_to_number;
print("The sum of both the numbers is : ", sum, type(sum));

# Implicit type casting : (Conversion done by Python Interpreter)

# Data types in Python do not have the same level i.e. ordering of data types is not the same in Python.
# Some of the data types have higher-order, and some have lower order. While performing
# any operations on variables with different data types in Python, One of the varaible's data types will be changed to the higher
# data type. According to level, one data type is converted into other by the
# Python interpreter itself (automatically). This is called, implicit typecasting in Python.

# Python interpreter converts a smaller data type to a higher data type to prevent data loss.

# Example of implicit typecasting :

# Python automatically converts a to int :
a = 7;
print(type(a));

# Python automatically converts b to float :
b = 3.0;
print(type(b));

# Python automatically converts c to float as it is a float addition :

c = a + b;
print(c);
print(type(c));