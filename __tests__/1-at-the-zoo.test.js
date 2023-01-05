const {
  classifyAnimals,
  createZooDisplays,
  createAnimalTally
} = require('../sections/1-at-the-zoo.js');

describe('classifyAnimals', () => {
  test('should return an array with one object that matches the type requested', () => {
    const animals = [{ name: 'koala bear', type: 'mammal' }];
    expect(classifyAnimals(animals, 'mammal')).toEqual(animals);
  });
  test('should return an array of correct matches, ignoring incorrect', () => {
    const animals = [
      { name: 'koala bear', type: 'mammal' },
      { name: 'python', type: 'reptile' },
      { name: 'otter', type: 'mammal' },
      { name: 'eagle', type: 'bird' }
    ];
    const expected = [{ name: 'koala bear', type: 'mammal' }, { name: 'otter' , type: 'mammal' }];
    expect(classifyAnimals(animals, 'mammal')).toEqual(expected);
  });
  test('should return an empty array when passed an empty array', () => {
    expect(classifyAnimals([])).toEqual([]);
  });
  test('should not mutate the original input and returns a new array', () => {
    const animals = [
      { name: 'koala bear', type: 'mammal' },
      { name: 'python', type: 'reptile' },
      { name: 'otter', type: 'mammal' },
      { name: 'eagle', type: 'bird' }
    ];
    const animalsCopy = [
      { name: 'koala bear', type: 'mammal' },
      { name: 'python', type: 'reptile' },
      { name: 'otter', type: 'mammal' },
      { name: 'eagle', type: 'bird' }
    ];
    classifyAnimals(animals, 'mammal');
    expect(animals).toEqual(animalsCopy);
    expect(classifyAnimals(animals, 'mammal')).not.toBe(animals);
  });
});

describe('createZooDisplays', () => {
  test('should return an empty array if passed an empty array', () => {
    expect(createZooDisplays([])).toEqual([]);
  });
  test('should return an array containing a single string when passed an array with one object', () => {
    const animals = [
      {
        name: 'Montgomery',
        species: 'Southern African meerkat',
        nativeRegion: 'Botswana'
      }
    ];
    const expected = ["My name is Montgomery, and I am a Southern African meerkat and I'm originally from Botswana"];
    expect(createZooDisplays(animals)).toEqual(expected);
  });
  test('should return an array of multiple strings when passed an array of multiple objects', () => {
    const animals = [
      {
        name: 'Montgomery',
        species: 'Southern African meerkat',
        nativeRegion: 'Botswana'
      },
      {
        name: 'Salome',
        species: 'Rattlesnake',
        nativeRegion: 'Argentina'
      }
    ];
    const expected = ["My name is Montgomery, and I am a Southern African meerkat and I'm originally from Botswana",
    "My name is Salome, and I am a Rattlesnake and I'm originally from Argentina"];
    expect(createZooDisplays(animals)).toEqual(expected);
  });
  test('should not mutate the original input and returns a new array', () => {
    const animals = [
      {
        name: 'Montgomery',
        species: 'Southern African meerkat',
        nativeRegion: 'Botswana'
      },
      {
        name: 'Salome',
        species: 'Rattlesnake',
        nativeRegion: 'Argentina'
      }
    ];
    const animalCopy = [
      {
        name: 'Montgomery',
        species: 'Southern African meerkat',
        nativeRegion: 'Botswana'
      },
      {
        name: 'Salome',
        species: 'Rattlesnake',
        nativeRegion: 'Argentina'
      }
    ];
    createZooDisplays(animals);
    expect(animals).toEqual(animalCopy);
    expect(createZooDisplays(animals)).not.toBe(animals);
  });
});

describe('createAnimalTally', () => {});