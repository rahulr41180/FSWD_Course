
/* 

JVM used 

Stack memory and Heap Memory to initialize it's variable function and method

Keep in mind each method has it's own main stack


*/


class Calculator {

    // this variable is instance variable
    int num1;

    // Here n1 and n2 are called local variable
    public int add(int n1, int n2) {
        /* 

            n2: 4
            n1: 2
        
        */
        

        return n1 + n2;
    }

}

class Index {

    // this method has it's own main stack
    // how stack store stack store in key and value
    /* 

        result: what value we put here so result have another method add method that means add have it's seperate stack which I have deffined above
                once we return addition of two variable from add method that value come here means 7
        data : 10
    */

    public static void main(String[] args) {

        int data = 10;

        Calculator sum = new Calculator();
        int result = sum.add(2, 4);
        System.out.println(result);

    }

}
