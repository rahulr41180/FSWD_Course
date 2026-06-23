
class Hello1 {

    public static void main(String args[]) {

        for(int i = 0; i < 5; i++) {
            System.out.println("index "+  i);
        }

    }

}

// ------------------------------------------------------

class Hello2 {

    public static void main(String args[]) {
        // this will work fine
        int i = 0;
        for(; i < 5;) {
            System.out.println("index "+  i);

            i++;
        }

    }

}