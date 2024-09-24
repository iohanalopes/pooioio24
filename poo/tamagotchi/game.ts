import { Pet } from "./pet";

class Game {

    pet: Pet;

    constructor(pet: Pet) {
        this.pet = pet;
    }
    
    private testAlive(): boolean {
        if(!this.pet.isAlive()) {
            return false;
        } else {
            return true;
        }
    }
    public play() {
        if (!this.testAlive()) {
            console.log("fail: pet esta morto");
            return;
        }
        this.pet.setEnergy(this.pet.getEnergy() - 2);
        this.pet.setHungry(this.pet.getHungry() - 1);
        this.pet.setClean(this.pet.getClean() - 3);
        this.pet.setAge(this.pet.getAge() + 1);
        this.pet.setDiamonds(this.pet.getDiamonds() + 1);
    }
    public shower() {
        if (!this.testAlive()) {
            console.log("fail: pet esta morto");
            return;
        }
        this.pet.setEnergy(this.pet.getEnergy() - 3);
        this.pet.setHungry(this.pet.getHungry() - 1);
        this.pet.setClean(this.pet.getCleanMax());
        this.pet.setAge(this.pet.getAge() + 2);
        this.pet.setDiamonds(this.pet.getDiamonds());
    }
    public eat() {
        if (!this.testAlive()) {
            console.log("fail: pet esta morto");
            return;
        }
        this.pet.setEnergy(this.pet.getEnergy() - 1);
        this.pet.setHungry(this.pet.getHungry() + 4);
        this.pet.setClean(this.pet.getClean() - 2);
        this.pet.setAge(this.pet.getAge() + 1);
        this.pet.setDiamonds(this.pet.getDiamonds());
    }
    public sleep() {
        if (!this.testAlive()) {
            console.log("fail: pet esta morto");
            return;
        }
        else if (this.pet.getEnergyMax() - this.pet.getEnergy() < 5) {
            console.log("fail: nao esta com sono");
            return;
        }
        this.pet.setAge(this.pet.getAge() + (this.pet.getEnergyMax() - this.pet.getEnergy()));
        this.pet.setEnergy(this.pet.getEnergyMax());
        this.pet.setHungry(this.pet.getHungry() - 1);
        this.pet.setClean(this.pet.getClean() - 0);
        this.pet.setDiamonds(this.pet.getDiamonds() + 0);
    }
    toString() {
        return this.pet.toString();
    }
}


export { Game };