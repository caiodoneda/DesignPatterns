abstract class Vehicle {
  constructor(public id: Number, public model: String, public brand: String) {}
  public abstract getTopSpeed(): Number;
}

class Car extends Vehicle {
  public getTopSpeed(): Number {
    return 100;
  }
}

class Ship extends Vehicle {
  public getTopSpeed(): Number {
    return 30;
  }
}

class Truck extends Vehicle {
  public getTopSpeed(): Number {
    return 80;
  }
}

enum VehicleType {
  Car = "C",
  Ship = "S",
  Truck = "T"
}

class VehicleFactory {
  createVehicle(
    VehicleType: VehicleType,
    id: Number,
    model: String,
    brand: String
  ): Vehicle {
    switch (VehicleType) {
      case "C":
        return new Car(id, model, brand);
      case "S":
        return new Ship(id, model, brand);
      case "T":
        return new Truck(id, model, brand);
      default:
        throw new Error("This Vehicle type does not exist");
    }
  }
}

const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question(
  "Welcome to Vehicle creator, what type o vehicle do you want to create? ( C | S | T ) ",
  (vehicleType: VehicleType) => {
    const vehicleFactory = new VehicleFactory();
    const vehicle = vehicleFactory.createVehicle(
      vehicleType,
      1,
      "Model",
      "Brand"
    );
    console.log(`Top speed: ${vehicle.getTopSpeed()}`);
    rl.close();
  }
);
