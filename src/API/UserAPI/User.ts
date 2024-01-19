import { UserI } from './UserI';

class User implements UserI {
  name: string;
  age: number;
  sex: string;
  weight: number;
  height: number;
  gain: string;
  lifestyle: number;

  constructor(
    name: string,
    age: number,
    sex: string,
    weight: number,
    height: number,
    gain: 'lose' | 'hold' | ' rise',
    lifestyle: 1.2 | 1.375 | 1.46 | 1.55 | 1.64 | 1.72 | 1.9
  ) {
    this.name = name;
    this.age = age;
    this.sex = sex;
    this.weight = weight;
    this.height = height;
    this.gain = gain;
    this.lifestyle = lifestyle;
  }

  getIdealUserMeal() {
    const parametres = {
      calories: 0,
      proteins: 0,
      fats: 0,
      carbohydrates: 0,
    };

    if (this.gain === 'lose') {
      parametres.proteins = +(this.weight * 1.2).toFixed();
      parametres.fats = +(this.weight * 0.7).toFixed();
      parametres.carbohydrates = +(this.weight * 1.5).toFixed();
    } else if (this.gain === 'hold') {
      parametres.proteins = +(this.weight * 1.2).toFixed();
      parametres.fats = +(this.weight * 0.8).toFixed();
      parametres.carbohydrates = +(this.weight * 2).toFixed();
    } else {
      parametres.proteins = +(this.weight * 1.5).toFixed();
      parametres.fats = +(this.weight * 1).toFixed();
      parametres.carbohydrates = +(this.weight * 2.5).toFixed();
    }

    if (this.sex === 'm') {
      if (this.gain === 'lose') {
        parametres.calories = +(
          0.8 *
          this.lifestyle *
          (9.99 * this.weight + 6.25 * this.height - 4.92 * this.age + 5)
        ).toFixed();
      }

      if (this.gain === 'hold') {
        parametres.calories = +(
          this.lifestyle *
          (9.99 * this.weight + 6.25 * this.height - 4.92 * this.age + 5)
        ).toFixed();
      }

      if (this.gain === 'rise') {
        parametres.calories = +(
          1.2 *
          this.lifestyle *
          (9.99 * this.weight + 6.25 * this.height - 4.92 * this.age + 5)
        ).toFixed();
      }
    } else {
      if (this.gain === 'lose') {
        parametres.calories = +(
          0.8 *
          this.lifestyle *
          (9.99 * this.weight + 6.25 * this.height - 4.92 * this.age - 161)
        ).toFixed();
      }

      if (this.gain === 'hold') {
        parametres.calories = +(
          this.lifestyle *
          (9.99 * this.weight + 6.25 * this.height - 4.92 * this.age - 161)
        ).toFixed();
      }

      if (this.gain === 'rise') {
        parametres.calories = +(
          1.2 *
          this.lifestyle *
          (9.99 * this.weight + 6.25 * this.height - 4.92 * this.age - 161)
        ).toFixed();
      }
    }

    return parametres;
  }

  getIMT() {
    return this.weight / ((this.height * this.height) / 10000);
  }
}

export default User;
