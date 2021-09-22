const colors = require('colors')
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Простые числа из диапазона. Введите первое число: ', (first) => {
    rl.question('Введите второе число ', (last) => {
        console.log(isNaN(first), isNaN(last))
        console.log(typeof first, typeof last)
        if(isNaN(first) || isNaN(last)) {
            console.log(colors.red("Не диапазон чисел"))
        } else {
            if(+first > +last) {
                console.log(colors.red("Первое число больше второго"))
            } else {
                console.log(colors.green(`Ваш диапазон чисел: ${first} - ${last}`));
                let result = 0, colorId = 0, arr = []
                for(let i = first; i <= last; i++) {
                    for(let j = 2; j < i; j++) {
                        result = i / j % 1
                        if(result === 0) {
                            break
                        }
                    }
                    if(result !== 0 || i === 2) {
                        ++colorId
                        switch (colorId) {
                            case 1:
                                arr.push(colors.green(i))
                                break
                            case 2:
                                arr.push(colors.yellow(i))
                                break
                            case 3:
                                arr.push(colors.red(i))
                                break
                        }
                        if(colorId === 3) colorId = 0
                    }
                }
                if (arr.length < 1) {
                    console.log(colors.red("В указанном диапазоне нет простых чисел"))
                } else {
                    console.log(...arr)
                }

            }
        }
        rl.close();
    });
});