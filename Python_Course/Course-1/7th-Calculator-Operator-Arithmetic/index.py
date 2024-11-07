
# ------------------------------- Operator -----------------------------

# Python has different types of operator for different operations. To create a calculator we require
# Arithmetic oeprators

# + : Addition
print(15+6);

# - : Subtraction
print(15-6);


# * : Multiplication
print(15*6);

# / : Divison
print(15/6);

# // : Floor Divison
print(15//6);


# % : Modulus
print(15%6);

# ** : Exponential
print(2**4);

# ----------------------------------------- Exercise ------------------------------

n = 15;

m = 7;
ans1 = n+m;
print("Addition of :", n, "and", m, "is", ans1);
ans2 = n-m;
print("Subtraction of :", n, "and", m, "is", ans2);
ans3 = n*m;
print("Multiplication of :", n, "and", m, "is", ans3);
ans4 = n/m;
print("Divison of :", n, "and", m, "is", ans4);

ans5 = n%m;
print("Modulus of :", n, "and", m, "is", ans5);
ans6 = n//m;
print("Floor Division of :", n, "and", m, "is", ans6);


# Create a calculator capable of performing addition, subtraction, multiplication and division
# operations on two numbers. Your program should format the output in a readable manner.


# This function adds two numbers
def add(x, y):
    return x+y;

# This function subtracts two numbers
def subtract(x, y):
    return x-y;

# This function multiplies two numbers

def multiply(x, y):
    return x*y;

# This function divides two numbers
def divide(x, y):
    return x/y;

print("Select Operation..");
print("Type 1 for add");
print("Type 2 for subtract");
print("Type 3 for multiply");
print("Type 4 for divide");



while True:
    print("While loop is running because condition is true");

    choice = input("Enter a number for performing the above operation.. : ");

    # take input from the user
    if choice in ("1","2","3","4"):
        print(choice);
        try:
            num1 = float(input("Enter First Number : "));
            num2 = float(input("Enter Second Number : "));
        except ValueError:
            print("Invalid input. Please Enter a number");
            continue
        print("continue");
        if choice == "1":
            print(num1, "+", num2, "=", add(num1, num2));
        elif choice == "2":

            print(num1, "-", num2, "=", subtract(num1, num2));
        elif choice == "3":
            print(num1, "*", num2, "=", multiply(num1, num2));
        elif choice == "4":
            print(num1, "/", num2, "=", divide(num1, num2));
        
        # check if user wants another calculation
        # break the while loop if answer is no
        next_Calculation = input("Let's do next calculation? (Yes/No): ");
        if next_Calculation == "No":
            break;
        elif next_Calculation == "no":
            break;

    else:
        print("Invalid Input");

print("While loop is not running because condition is false ");