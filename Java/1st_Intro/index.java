
/*

// System.out.print("Hello World");
// User Written Java Code -> Compiler(javac) -> Byte Code(From javac) -> JVM(Java Virtual Machine)( But JVM says, from which file should it start means
// suppose I have 100 of .java file of my project so out 100 .java file there should be a one file which would be the entry file
// or execution file where I have written main() method means main file should have some kind of signature to run your java application by JVM and that signature is
// public static void main(String a[]))
*/

// -------------------------------------------------------------------------------------------------


/*

// public static void main(String a[]) {
    // System.out.println('Hello world');
// }

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