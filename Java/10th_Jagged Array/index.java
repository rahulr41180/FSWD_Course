
// In the two dimensional array we know the number of rows but we don't know the size of column of each row means each row size might be dynamic
// that type of array we called jagged array.

class index1 {

    public static void main(String[] args) {

        int nums[][] = new int[3][];

        nums[0] = new int[4];
        nums[1] = new int[3];

        nums[2] = new int[4];

        for(int i = 0; i<nums.length; i++) {

            for(int j = 0; j<nums[i].length; j++) {
                nums[i][j] = (int)(Math.random() * 10);
            }

        }

        for(int n[]: nums) {

            for(int m: n) {
                System.out.print(m + " ");
            }

            System.out.println("");
        }

    }

}