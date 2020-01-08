const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const evens = arr.filter(i => i % 2 == 0)

function namedFunction() { }

const anonymousFunction = () => { }

interface anInterface {
    someProperty: string
}

class aClass implements anInterface {
    someProperty: "hello world";

    someMethod(): number {
        return 123
    }
}

const anInstance = new aClass()
anInstance.someMethod() + 2
