import { getAge } from "../../src/plugins";

describe('plugins/ get-age.plugin.ts', () => { 
  test('getAge() should return the age of a person', () => { 
    const birthDate = '1995-11-21';
    const age = getAge(birthDate)
    expect(typeof age).toBe('number')
  })
  
  test('getAge() should return current age', () => { 
     const birthDate = '1995-11-21';
     const age = getAge(birthDate)
     const calculatedAge = new Date().getFullYear() - new Date(birthDate).getFullYear();
     expect(age).toBe(calculatedAge);
    })

 })