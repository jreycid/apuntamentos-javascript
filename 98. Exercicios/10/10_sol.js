/*
    Atopa todas as ocurrencias dun elemento
    nun array
 */
    const array = ['a', 'b', 'a', 'c', 'b', 'd'];
    const element = 'b';
    const indices = [];

    let idx = array.indexOf(element);

    while (idx !== -1) {
        indices.push(idx);
        idx = array.indexOf(element, idx + 1);
    }
    console.log(indices);