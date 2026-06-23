
class Hello {

    public static void main(String[] args) {

        int i = 1;

        do { 
            // If condition is passed it will run for each condition
            System.out.println("Hi"+ i);

            i++;
        } while (i <= 5);

    }

}

// --------------------------------------------


class Hello1 {

    public static void main(String[] args) {

        int i = 6;

        do { 
            // Now condition is failed at start then it run at least one time
            System.out.println("Hi"+ i);

            i++;
        } while (i <= 5);

    }

}