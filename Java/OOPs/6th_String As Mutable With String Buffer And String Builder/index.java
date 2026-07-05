
// String Buffer and String Builder

class index {

    public static void main(String[] args) {
        
        // With the help of StringBuffer we can mutate the string because it give us buffer size which is of 16 bytes default
        StringBuffer sb = new StringBuffer();

        // if StringBuffer is empty it give us 16 bytes size.
        System.out.println(sb.capacity());

    }

}

class index1 {

    public static void main(String[] args) {
        
        StringBuffer sb = new StringBuffer("Rahul");

        // Now the capacity will be StringBuffer Default Capacity(16) + Given String(5) Size so it because 16 + 5
        // Which means it give us extra 16 bytes
        System.out.println(sb.capacity()); // 21

        // Why it gives me that space is because every time we change data and if it consumes a continuous memory location
        // inside our heap memory what if there's no continuous location next mean what if there's no location available there
        // is no space available that case it has to relocate so to reduce the relocating of the string it gives us buffer of 16 bytes 

    }

}

class index2 {

    public static void main(String[] args) {
        
        StringBuffer sb = new StringBuffer("Rahul");

        System.out.println(sb.length()); // 5

    }

}

class index3 {

    public static void main(String[] args) {
        
        StringBuffer sb = new StringBuffer("Rahul");

        sb.append(" Rathor");
        System.out.println(sb); // Rahul Rathor

    }

}

class index4 {

    public static void main(String[] args) {
        
        StringBuffer sb = new StringBuffer("Rahul");

        sb.append(" Rathor");
        
        System.out.println(sb); 

        // We can't directly assing the StringBuffer to String we have to convert it String then we can assign the String Buffer to Sring
        String str = sb.toString();

        System.out.println(str); 
    }

}

class index5 {

    public static void main(String[] args) {
        
        StringBuffer sb = new StringBuffer("Rahul");

        sb.append(" Rathor");
        System.out.println(sb);

        sb.deleteCharAt(5); 
        System.out.println(sb);
        
    }

}

class index6 {

    public static void main(String[] args) {
        
        StringBuffer sb = new StringBuffer("Rahul");

        sb.append(" Rathor");
        System.out.println(sb);

        sb.insert(5, " rRathor");
        System.out.println(sb);
        
    }

}