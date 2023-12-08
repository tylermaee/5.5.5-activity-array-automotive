//this includes the vehicle class as a module
import Vehicle from './vehicleBaseClass.js';

//this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mercury", "Sedan", "1965", "color", "mileage");
console.log(v.make)


//After you write the derived Car class, you should test it out.

//Note: You can code your derived Car class here or make a file named index.js and do it there.


//TO DO: Code the Car subclass here or in index.js file, i.e. class Car extends Vehicle ...

class Car extends Vehicle {
    super constructor (maxiumumPassengers, passengers, numberOfWheels, maximumSpeed, fuel, scheduleService) {
        this.maxiumumPassengers = 5;
        this.passengers = 0;
        this.numberOfWheels = 4;
        this.maximumSpeed = 160;
        this.fuel = 10;
        this.scheduleService = false;
    }

    loadPassenger(num);

    Start() {
        if (this.fuel > 0);
        start = true;
    }

    scheduleService(mileage) {
        if (mileage > 30000) {
            this.scheduleService = true;
        }
    }

    
}










//TO DO: Creating Instances and Testing Them

//You can use the same instance "v" of the Vehicle class above for the base class.





//Create at least two new instances of the Car class and test them here:
