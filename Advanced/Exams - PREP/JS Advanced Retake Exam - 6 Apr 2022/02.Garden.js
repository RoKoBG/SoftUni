class Garden {
    constructor(spaceAvailable) {
        this.spaceAvailable = spaceAvailable;
        this.plants = [];
        this.storage = [];
    }
    addPlant(plantName, spaceRequired) {
        if (spaceRequired > this.spaceAvailable) {
            throw new Error("Not enough space in the garden.");
        }

        this.plants.push({
            plantName,
            spaceRequired,
            ripe: false,
            quantity: 0,
        });

        this.spaceAvailable -= spaceRequired;

        return `The ${plantName} has been successfully planted in the garden.`;
    }

    ripenPlant(plantName, quantity) {
        let currPlant = this.plants.find((p) => p.plantName === plantName);

        if (!currPlant) {
            throw Error(`There is no ${plantName} in the garden.`);
        }
        if (currPlant.ripe == true) {
            throw Error(`The ${plantName} is already ripe.`);
        }
        if (quantity <= 0) {
            throw Error("The quantity cannot be zero or negative.");
        }

        currPlant.ripe = true;
        currPlant.quantity += quantity;

        if (quantity == 1) {
            return `${quantity} ${plantName} has successfully ripened.`;
        } else if (quantity > 1) {
            return `${quantity} ${plantName}s have successfully ripened.`;
        }
    }

    harvestPlant(plantName) {
        let currPlant = this.plants.find((p) => p.plantName === plantName);

        if (!currPlant) {
            throw Error(`There is no ${plantName} in the garden.`);
        }
        if (currPlant.ripe == false) {
            throw Error(
                `The ${plantName} cannot be harvested before it is ripe.`
            );
        }
        this.plants = this.plants.filter(p => p.plantName != plantName);
        
        let currPlantQuantity = currPlant.quantity;

        this.storage.push({ plantName, quantity: currPlantQuantity });

        this.spaceAvailable += currPlant.spaceRequired;

        return `The ${plantName} has been successfully harvested.`;
    }

    generateReport() {
        let arr = [`The garden has ${this.spaceAvailable} free space left.`];
        this.plants = this.plants.filter((a, b) =>
            a.plantName.localeCompare(b.plantName)
        );
        arr.push(
            `Plants in the garden: ${this.plants
                .map((p) => p.plantName)
                .join(", ")}`
        );

        if (this.storage.length > 0) {
            arr.push(
                `Plants in storage: ${this.storage
                    .map((p) => {
                        return `${p.plantName} (${p.quantity})`;
                    })
                    .join(", ")}`
            );
        } else {
            arr.push(`Plants in storage: The storage is empty.`);
        }
        return arr.join("\n");
    }
}

const myGarden = new Garden(250)
console.log(myGarden.addPlant('apple', 20));
console.log(myGarden.addPlant('orange', 200));
console.log(myGarden.addPlant('raspberry', 10));
console.log(myGarden.ripenPlant('apple', 10));
console.log(myGarden.ripenPlant('orange', 1));
console.log(myGarden.harvestPlant('orange'));
console.log(myGarden.generateReport());