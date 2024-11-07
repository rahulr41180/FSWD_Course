
'''

What is variables?
->
Variable is like a container that holds data. Very similar to how our containers in kitchen holds sugar,
salts etc. Creating a variable is like creating a placeholder in memory and assigning it some value.
In Python its as easy as writing.
'''

a = 1; # Int Type
b = True # Boolean Type

c = "Harry"; # String Type
d = None; # None Type

a = 1;
print(a);
b = 1234567891;
print(b);

c = "ABCD";
print(c);
d = "ABCDEFGH";
print(d);


# ----------------------------- What is a Data Types ? ---------------------------

# Data type specifies the type of value a variable holds. This is required in programming to do various
# operations without causing an error.
# In Python. We can print the type of any operator using type() function

a = 1;
b = "Hello";
print("The type of the a is :", type(a));
print("The type of the b is :", type(b));

# ---------------------------- Built In Data Type In Python ------------------------

# 1. Numeric data : int, float, complex


# int :
typeInt = 1;
print("The type of the typeInt is :", type(typeInt), typeInt);

# Float Type : 
typeFloat = 1.1;
print("The type of the typeFloat is :", type(typeFloat), typeFloat);

# Complex Number : 

typeComplex = complex(8, 2);
print("The type of the typeComplex is :", type(typeComplex), typeComplex);
# complex are the number related imaginary type.

# 2. Text data : str(String)

# str(String) type
typeStr = "Hello World";
print("The type of the typeStr is :", type(typeStr), typeStr);

# 3. Boolean data : Boolean data consists of values True or False

typeBoolean = True;
print("The type of typeBoolean is :", type(typeBoolean), typeBoolean);

# 4. Sequence data : list, tuple

# list : A list is an ordered collection of data with elements separated by a comma and enclosed within
# square brackets. List are mutable and can be modified after creation.

typeList = [8, 2.3, [-4, 5], ["apple", "banana"]];
print("The type of typeList is :", print(typeList), typeList);

# tuple : A tuple is an ordered collection of data with elements separated by a comma and enclosed within
# parentheses.Tuples are immutable and can not be modified after creation.

typeTuple = (("parrot", "sparrow"), "Hello", 1, 2, ("Lion", "Tiger"));
print("The type of typeTuple is :", print(typeTuple), typeTuple);


# Mapped data : dict

# dict : A dictionary is an unordered collection of data containing a key : value pair.
# The Key : Value paris are enclosed within curly brackets.

typeDict = {
    "name" : "Sakshi",
    "age" : 20,
    "canVote" : True
};

print("The type of typeDict is :", type(typeDict), typeDict);

# Everything in Python are Object.