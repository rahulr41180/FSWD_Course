
class index {

    public static void main(String[] args) {
        
        int nums[][] = new int[3][4];

        for(int i = 0; i<3; i++) {

            for(int j = 0; j<4; j++) {

                // (int) here we are doing type conversion because Math.random() return dobule value but in nums we are storing int type value

                nums[i][j] = (int)(Math.random() * 10);

            }

        }

        for(int i = 0; i<3; i++) {

            for(int j = 0; j<4; j++) {
                System.out.print(nums[i][j] + " ");
            }
            System.out.println();
        }

        // We can also iterate over two dimensional array like

        // Enhanced for loop and it automatically detect the 2D array size and each row size means we don't need to define like
        // i < nums.length and j < nums[0].length
        // this for loop take each row as array
        for(int n[]: nums) {

            // this for loop take each element of current row which coming from parent loop means it is a column of each row
            for(int m: n) {
                System.out.print(m + " ");
            }
            System.out.println();
        }

    }

}