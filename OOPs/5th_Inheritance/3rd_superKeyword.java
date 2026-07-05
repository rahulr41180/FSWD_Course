
class Vehicle {

    void start() {
        System.out.println("Vehicle Started");
    }

}

class Car extends Vehicle {

    void start() {

        super.start();

        System.out.println("Car Started");
    }

}