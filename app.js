// let ally = {
//   age: "20",
//   gender: "men",
//   brithday: "18.11.2004"
// }

// console.log(ally.brithday);


// let obb = {
//   age: "20",
//   birthday: "18.11.2004",
//   getYearsBeforeRetirement: function () {
//     console.log(`sizin pensiay yasiniza ${60 - +obb.age} iliniz qalib`);
//   },
//   setAGe: function () {
//     console.log(`sizin yasiniz 10 yas artirildi ${+obb.age + 10}`);
//   }
// }

// obb.getYearsBeforeRetirement()
// obb.setAGe()

let caltulator = {
  eded1: +prompt("Ilk ededinizi daxil edin"),
  eded2: +prompt("Ikinci ededi daxil edin"),
  emeliyyat: prompt("Etmek istediyiniz emeliyyati daxil edin"),
  toplama: function () {
    if (this.emeliyyat === "+") {
      console.log(`Sizin emeliyyatin neticesi ${this.eded1 + this.eded2}`);
    }

  },
  cixma: function () {
    if (this.emeliyyat === "-") {
      console.log(`Sizin emeliyyatin neticesi ${this.eded1 - this.eded2}`);
    }
  },
  vurma: function () {
    if (this.emeliyyat === "*") {
      console.log(`Sizin emeliyyatin neticesi ${this.eded1 * this.eded2}`);
    }
  },
  bolme: function () {
    if (this.emeliyyat === "/") {
      console.log(`Sizin emeliyyatin neticesi ${this.eded1 / this.eded2}`);

    }
  },
  quvvet: function () {
    if (this.emeliyyat === "**") {
      console.log(`Sizin emeliyyatin neticesi ${this.eded1 ** this.eded2}`);

    }
  },
  faiz: function () {
    if (this.emeliyyat === "%") {
      console.log(`Sizin emeliyyatin neticesi ${this.eded1 * this.eded2 / 100}`);

    }
  }
}
caltulator.toplama()
caltulator.cixma()
caltulator.vurma()
caltulator.bolme()
caltulator.quvvet()
caltulator.faiz()