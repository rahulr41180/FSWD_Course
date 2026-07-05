
interface Flyable {
    void fly();
}

interface  Suimmable {
    void swim();
}

class Duck implements Flyable, Suimmable {
    public void fly() {}
    public void swim() {}
    
}