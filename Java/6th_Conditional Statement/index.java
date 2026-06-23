
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

// -------------------------------------------------

class Hello4 {

    public static void main(String[] args) {
        int n = 6;

        switch(n) {
            case 1: 
                System.out.println("Mon");
                break;
            case 2: 
                System.out.println("Tue");
                break;
            case 3: 
                System.out.println("Wed");
                break;
            case 4: 
                System.out.println("Thu");
                break;
            case 5: 
                System.out.println("Fri");
                break;
            case 6: 
                System.out.println("Sat");
                break;
            default:
                System.out.println("Sun");
        }
    }

}