function classifyAnimals(animals, type) {
    return animals.filter((animal) => {
        if (animal.type === type) {
            return animal
        };
    });
};

function createZooDisplays(animals) {
    if (!animals.length) return [];
    const newAnimals = animals.map((animal) => {
        return `My name is ${animal.name}, and I am a ${animal.species} and I'm originally from ${animal.nativeRegion}`;
    });
    return newAnimals;
};

function createAnimalTally() {}

module.exports = { classifyAnimals, createZooDisplays, createAnimalTally };
