
class Index {

    public static void main(String arg[]) {

        // It is not a normal string but we can use string using this String class and we can perform addition here between string
        String name = new String();
        System.out.println(name); // it print empty

    }

}


class Index1 {

    public static void main(String arg[]) {

        String name = new String("Rahul");
        System.out.println(name); // it print Rahul

    }

}

class Index2 {

    public static void main(String arg[]) {

        String name = new String("Rahul");
        System.out.println(name.hashCode()); // it print hashcode of string 78722128

    }

}

class Index3 {

    public static void main(String arg[]) {

        String name = new String("Rahul");
        System.out.println("Hello " + name); // it print hashcode of string 78722128

    }

}

class Index4 {

    public static void main(String arg[]) {

        // Usally in Java we do like this so internally it also create an String object from String class that we were doing
        // Previously by our self but now java do it internally
        String name = "Rahul";
        System.out.println("Hello " + name); // it print hashcode of string 78722128

    }

}

class Index5 {

    public static void main(String arg[]) {

        String name = "Rahul";
        name = "Hello" + name + "Rathor"; // Here we are not changing the value we are creating new value with new memory allocation
                                          // Means till Rahul name is pointing to suppose 101 address in heap but now we have change the value 
                                          // Now name is pointing to 102 address becuase here we are not mutating because primitve are unmutable
                                          // That is why it is creating new value which is Hello Rahul Rathor with new memory location which 102
                                          // Then what happened with 101 memory location value means what happened with Rahul location value
                                          // It still in heap memory heap memory will check continuous that does this Rahul memory location is
                                          // using in anywhere in stack memory if yes then keep it in heap memory if it's refernce is not using in 
                                          // stack memory then it is eligible for garbase collection means it will remove from heap after some time
                                          // Now the question is why new value will go in new memory location even though we are just assigning new
                                          // value to same variable the question is in there is a space called string constant pool means all string
                                          // value will store in this location and suppose we are using String s1 = 'abc'; and String s2 = s1;
                                          // and we changed the value of s1 to 'def'; then what will happened with s2 because we did not change the value of
                                          // now s2 is still pointing to 'abc' value that is why we heap memory is not overwriting the 'abc' instead it creating
                                          // new value with new memory location this is the main reason;  
        System.out.println(name);


    }

}

class Index6 {

    public static void main(String arg[]) {

        String name = "Rahul";
        name = "Hello" + name + "Rathor"; 
        System.out.println(name);
        
        String s1 = name;
        String s2 = s1;

        System.out.println("s1 : " + s1 + ", s2 : " + s2);
    }

}