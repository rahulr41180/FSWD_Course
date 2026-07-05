
class Vehicle {

    void start() {
        System.out.println("Vehicle Started");
    }

}

class Car extends Vehicle {

    @Override
    
    void start() {
        System.out.println("Car Started");
    }

}