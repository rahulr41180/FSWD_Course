
class Index {

    public static void main(String[] args) {
        
        int num[] = {1, 2, 3, 4};

        // Here we have created array with 4 length
        int num2[] = new int[4];

        int num3[] = {};
        for(int i = 0; i<5; i++) {

            num3[i] = i;

        }

        System.out.print(num3); // won't work

    }

}