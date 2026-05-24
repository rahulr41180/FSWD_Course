
/* 
Date Types -> 
    1. Primitive Types
    2. Non Primitive Types

        Primitive Types ->
            1. Integer
            2. Float
            3. Character
            4. Boolean

                Integer ->
                    1. byte
                        1 byte -> 2^7 to 2^7 -1 -> -128 to 127;
                    2. short
                        2 bytes
                    3. int
                        4 bytes
                    4. long
                        8 bytes

                Foat ->
                    1. double
                        8 bytes which is default type of decimal value in Java because it support more than 4 decimal value like
                        12345.1235678 here .12345678 is more than 4 decimal value
                    2. float
                        4 bytes

                Character
                    2 bytes
                    UNICODE support and it only take single character like : a, b, c, d,1 2 3 4 means only one word and keep it only in single quote not in double code
                    because we are only assigning a char not string that's why string will accept single and double quotes both

                Boolean
                    true and false 
                    Java only accept true and false as Boolean type it does not accept 0 as false and 1 as true;
*/

// ----------------------------------------------

class Hello {
    public static void main(String a[]) {
        double marks = 9.5;
        System.out.println(marks);
    }
}

class Hello1 {
    public static void main(String a[]) {
        float marks = 9.5f;
        System.out.println(marks);
    }
}

class Hello2 {
    public static void main(String a[]) {
        char vowel = 'a';
        System.out.println(vowel);
    }
}

class Hello3 {
    public static void main(String a[]) {
        boolean isAuthenticate = true;
        System.out.println(isAuthenticate);
    }
}

class Hello4 {
    public static void main(String a[]) {
        long bigNum = 5851l;
        System.out.println(bigNum);
    }
}

class Hello5 {
    public static void main(String a[]) {
        char c = 'a';
        c++; 
        System.out.println(c); // 'c'
    }
}

class Hello6 {
    public static void main(String a[]) {
        char c = '1';
        c++;
        System.out.println(c); // 2
    }
}