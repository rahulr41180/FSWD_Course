
class Hello1 {
    public static void main(String args[]) {
        int num1 = 7;
        num1 = num1 + 2; // fine
        System.out.println(num1);
        num1 += 2; // fine
        System.out.println(num1);
        num1 -= 2; // fine
        System.out.println(num1);
        num1 *= 2; // fine
        System.out.println(num1);
        num1 /= 2; // fine
        System.out.println(num1);
        num1++;
        System.out.println(num1);
        num1--;
        System.out.println(num1);
        ++num1;
        System.out.println(num1);
        --num1;
        System.out.println(num1);
    }
}