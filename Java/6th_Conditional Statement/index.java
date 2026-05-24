
class Hello1 {
    public static void main(String[] args) {
        int x = 18;

        if(x > 8)
            System.out.println("Hello");
    }
}

// ---------------------------------


class Hello2 {
    public static void main(String[] args) {
        int x = 6;

        if(x > 8)
            System.out.println("Hello");
        else 
            System.out.println("Bye");
    }
}

// ------------------------------------------------------

class Hello3 {
    public static void main(String[] args) {
        int x = 7;
        int y = 8;

        // If we have multi statements in body than I have to used curly brackets {}
        if(x > y) {
            System.out.println(x);
            System.out.println("Thank You");
        }
        else if(y > x)
            System.out.println("Bye");
        else {
            System.out.println("a");
            System.out.println("b");
        }
    }
}