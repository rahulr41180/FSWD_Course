
class Calculator {

    public int add(int n1, int n2) {
        int r = n1 + n2;
        return r;
    }

}


// public class Hello1 {
//     public static void main(String args[]) {
//         // Here we have just given the type reference of Calculator class
//         Calculator calc;
//     }
// }

class index {
    
    public static void main(String args[]) {
        
        int num1 = 2;
        int num2 = 2;

        // Here I have created an instance of a class with new keyword
        Calculator calc = new Calculator();

        int res = calc.add(num1, num2);

        System.out.println(res);

    }

}