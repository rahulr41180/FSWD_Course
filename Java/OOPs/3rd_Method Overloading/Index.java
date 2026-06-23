
// another concept we also know method overwriting
class Calculator {

    public int add(int n1, int n2) {
        return n1 + n2;
    }

    // we can't do this method add(int,int) is already defined in class Calculator Calculator public int add(int n1,int n2)
    // public int add(int n1, int n2) {
    //     return n1 + n2;
    // }
    // it is fine
    public int add(int n1, int n2, int n3) {
        return n1 + n2 + n3;
    }

    // it is possible method have same no of arguments with different type
    // but we can't write method with same no of arguments which already exists
    public double add(double n1, int n2) {
        return n1 + n2;
    }

    // this will also not work because it has same no or arguments eventhough it has different return type
    // public double add(int n1, int n2) {
    //     return n1 + n2;
    // }

}

public class Index {

    public static void main(String[] args) {

        Calculator sum = new Calculator();

        sum.add(2, 4);
        // but what if I want to add three no.
        // For this we can create another method in Calculator Class with same name but rull is that
        // method can have same name but it should take no of argument different then another method which has same name
        // to add three permaterers we have write same method with three argument 
        // if we wrote same name method with same no. of argument then it through error
        sum.add(2, 4, 6);
        sum.add(15, 20);

    }

}
