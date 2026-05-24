
class Hello1 {
    public static void main(String a[]) {
        // byte b = 10;
        // byte c = 30;     
        // if we will do b*c than we will get 300 and this value is crossing the byte range
        // and we can resolve this by using type promotion 
    }
}

class Hello2 {
    public static void main(String a[]) {

        byte d = 10;
        byte e = 30;     
        // we have saw previously that we can assign byte to int directly we have to do casting but here we can do this
        // by using type promotion and java do this internally 
        int f = d * e; // this wiil work fine
        System.out.println(f);
    }
}