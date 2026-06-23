
// System.out.print("Hello World");
// User Written Java Code -> Compiler(javac) -> Byte Code(From javac) -> JVM(Java Virtual Machine)( But JVM says, from which file should it start means
// suppose I have 100 of .java file of my project so out 100 .java file there should be a one file which would be the entry file
// or execution file where I have written main() method means main file should have some kind of signature to run your java application by JVM and that signature is
// public static void main(String a[]))

// User has written Java Code -> we compile with the help of javac means we just give the command to compile
// but who will compile so JDK is Java Development Kit responsible to compile you java code
// Once code will compile in byte format then there should be a machine which run your java compiled code that machine is JVM
// JVM instance for Java Virtual Machine.


// Suppose we have run our code now if we want to use third party library or suppose our code is dependent on some external file
// suppose we have used some in built classes or library 
// means we need some extra files which we will use in our code as external library but question from where I can find this
// for this we have one extra layer on top of JVM which is JRE which instance for Java Runtime Enviroment
// we pull all inbuilt classes from JRE and it also validate our byte codes but ultimately our byte code run in JVM 
// and top of JRE we have layer called JDK so if we installed updated JDK then we will get updated JRE and updated JVM so the flow is
// our code on top of it we have JVM on top of it we have JRE and top of it we have JDK

// -------------------------------------------------------------------------------------------------


/*

    public static void main(String a[]) {
        System.out.println('Hello world');
    }

Absolutely. This is one of the most important lines in Java because it is the **entry point** of every Java application.

public static void main(String a[])

Let's break it down word by word.

# Complete Structure

public static void main(String[] args) {
    // program starts here
}

Your version:

public static void main(String a[]) is also valid Java syntax. Java treats:

String a[]

and

String[] a

the same way.

# 1. `public`

public static void main(String a[])

`public` is an **access modifier**.

It means: This method can be accessed from anywhere.

When you run:

java Hello

the JVM (Java Virtual Machine) must be able to access the `main()` method.

If you write:

private static void main(String a[])

the JVM cannot access it.

Compilation succeeds, but execution fails.

## Visual

JVM
 │
 ▼
main()

The JVM needs permission to call `main()`.

`public` provides that permission.

# 2. `static`

public static void main(String a[])

This is the most important keyword here.

`static` means: The method belongs to the class, not to an object.

Because when Java starts your program:

java Hello

there is no object yet.

Imagine:

class Hello {

    public void main(String[] args) {

    }
}

To call this method:

Hello obj = new Hello();
obj.main(args);

But who creates `obj`?
The program hasn't started yet!
Therefore Java requires:

static

so JVM can call:

Hello.main(args);

without creating an object.

## Memory Diagram

Method Area

Hello.class
│
├── static main()
│
└── other members

The JVM can directly access static methods from the class.

# 3. `void`

public static void main(String a[])

`void` means: This method returns nothing.

Example:

public static int add() {
    return 10;
}

returns an integer.

But: public static void main()

returns nothing.

The JVM does not expect any value back from `main()`.

# 4. `main`

public static void main(String a[])

This is the method name.

The JVM specifically looks for:

```java
main
```

when starting a Java application.

If you write:

```java
public static void start(String a[])
```

the JVM cannot find the entry point.

You get:

```text
Error: Main method not found
```

---

# 5. `String a[]`

```java
public static void main(String a[])
```

This is an array of strings.

It stores command-line arguments.

---

## Example

Program:

```java
class Hello {

    public static void main(String[] args) {

        System.out.println(args[0]);
    }
}
```

Run:

```bash
java Hello Rahul
```

Output:

```text
Rahul
```

---

### Internally

JVM creates:

```java
args = {"Rahul"};
```

Memory:

```text
args
 │
 ▼
┌─────────┐
│ Rahul   │
└─────────┘
```

---

## Multiple Arguments

Command:

```bash
java Hello Rahul Java 25
```

JVM creates:

```java
args = {"Rahul", "Java", "25"};
```

Memory:

```text
Index  Value
-----  -----
0      Rahul
1      Java
2      25
```

---

# What Happens When You Run a Java Program?

Suppose:

```java
class Hello {

    public static void main(String[] args) {

        System.out.println("Hello World");
    }
}
```

---

## Step 1

Compile:

```bash
javac Hello.java
```

Produces:

```text
Hello.class
```

---

## Step 2

Run:

```bash
java Hello
```

---

## Step 3

JVM loads:

```text
Hello.class
```

into memory.

---

## Step 4

JVM searches for:

```java
public static void main(String[])
```

---

## Step 5

JVM calls:

```java
Hello.main(args);
```

---

## Step 6

Execution begins inside `main()`.

---

# Why Exactly This Signature?

The JVM expects:

```java
public static void main(String[] args)
```

because:

| Part          | Reason                            |
| ------------- | --------------------------------- |
| public        | JVM must access it                |
| static        | JVM can call without object       |
| void          | JVM doesn't expect a return value |
| main          | Standard entry-point name         |
| String[] args | Receives command-line arguments   |

---

# Fun Fact

All of these are valid:

```java
public static void main(String[] args)
```

```java
public static void main(String args[])
```

```java
public static void main(String... args)
```

because `String... args` is internally treated as a `String[]`.

---

# Simple Analogy

Think of a Java program as a house.

```text
House (Class)
│
├── Kitchen
├── Bedroom
├── Bathroom
└── Main Door (main())
```

When someone (JVM) visits the house, they need a known entry point.

That entry point is:

```java
public static void main(String[] args)
```

The JVM always enters your program through this "main door."


Here I will get error because of class keyword
*/

// --------------------------------------------------------------------------------------------------

class Hello1 {
    public static void main(String a[]) {
        System.out.print("Hello World");
    }
}

/*
To this code we have first compile with javac index.java and it will compile the code in byte and to run the byte code we have run the class file class file
means, Here we have create the class with Hello so after compile there is a file created called Hello.class that file we have to run with java Hello just after that 
we will get our output.
*/

// ------------------------------------------------------------------------------------------------------

/* 
To run the extra library we have JRE(Java Runtime Environment) which is wrap around JVM
JVM is in JRE and another library also is in JRE but JVM is responsible to run that library or main class file.

For development purpose the architecture like : JDK will have JRE will have JVM
For production or to run jave application in an another machine the architecture like : JRE will have JVM
*/

// -----------------------------------------------------------------------------------------------------


class Hello2 {
    public static void main(String a[]) {
        System.out.print(3 + 5); 
        // 8;
    }
}

// --------------------------------------------

class Hello3 {
    public static void main(String a[]) {
        System.out.print(3 + 5);
        System.out.print(7 + 10);
        // 817
    }
}


// --------------------------------------------

class Hello4 {
    public static void main(String a[]) {
        System.out.println(3 + 5);
        System.out.println(7 + 10);
        // 8
        // 17
    }
}

// ---------------------------------------------

class Hello5 {
    public static void main(String a[]) {
        int num = 5;
        System.out.println(num);
    }
}

// -----------------------------------------------

class Hello6 {
    public static void main(String a[]) {
        int num1 = 5;
        int num2 = 10;
        int result = num1 + num2;
        System.out.println(result);
    }
}