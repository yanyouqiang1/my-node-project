/// <reference path = "first.ts" />

namespace Drawing{
    interface Animal{
        say: ()=>string
    }


    class Dog implements Animal{
        say(): string {
            return "wangwang";
        }
    }

    class Cat implements Animal{
        say(): string {
            return "miaomiao";
        }
    }

    var animal = new Dog()
    animal.say()

}
