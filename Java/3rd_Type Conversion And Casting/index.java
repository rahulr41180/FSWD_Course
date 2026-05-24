
/* 

byte b = 127;

int a = 256;

b = a : we can't assign int to byte because int is bigger than byte 

a = b : yes we can assign byte to int : this is called implicit conversion and it will not be called as casting

byte c = 127;

int d = 12;

c = d : still we can't assign int to byte 

but to assign we have to do type casting

c = (byte)d; so this is explicit conversion and it will be called casting 

but what happened if we assign int number to byte means suppose int number is 257 and we know that byte range is -127 to 127
now in this case what will happened

so in this case java automatically modularize the value with 256 if we assign int to byte because total range of byte is 256(-127 to 127)

byte i = 127;
int j = 257;
i = (byte)j; so here we will get 1 because modularize value will be : 257%256 than remainder will be 1

------------------------------------------

int e = 5.6f; this will not work because float can't be assign to int type;

float g = 5.6f;

int h = (int)g; this will work fine : but here we will loose float value means we will get only 5 in h.

 */
class Hello1 {

    public static void main(String a[]) {
        byte b = 127;

        System.out.println(b);
    }
}

class Hello2 {

    public static void main(String a[]) {
        // index.java:51: error: incompatible types: possible lossy conversion from int to byte
        // byte c = 256;
        // byte c = 256; 

        // System.out.println("c "+ c);
    }
}

class Hello3 {

    public static void main(String a[]) {
        byte d = 127;
        int e = d; // will work
        System.out.println("e " + e);
    }
}

class Hello4 {

    public static void main(String a[]) {
        // int f = 12;
        /* 
        index.java:70: error: incompatible types: possible lossy conversion from int to byte
        byte g = f;
        */
        // byte g = f;
        // System.out.println("g " + g);
    }
}

class Hello5 {

    public static void main(String a[]) {
        int f = 12;
        byte g = (byte)f; // will work
        System.out.println("g " + g);
    }
}

class Hello6 {
    public static void main(String a[]) {
        int f = 257;
        byte g = (byte)f; // will get 1 here because of modules approach because int value is out of range of byte which is 127 
        System.out.println("g " + g);
    }
}

class Hello7 {
    public static void main(String a[]) {
        // float h = 5.6f;
        // index.java:102: error: incompatible types: possible lossy conversion from float to int
        // int i = h;
        // int i = h;
        // System.out.println("i " + i);
    }
}

class Hello8 {
    public static void main(String a[]) {
        float j = 5.6f;
        int k = (int)j; // Here we will get 5 not 5.6
        System.out.println("k " + k);
    }
}