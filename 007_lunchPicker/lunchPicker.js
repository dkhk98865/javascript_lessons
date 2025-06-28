let lunches = [];

function addLunchToEnd(arr, string) {
    arr.push(string);
    console.log(`${string} added to the end of the lunch menu.`);
    return arr;
};

function addLunchToStart(arr, string) {
    arr.unshift(string);
    console.log(`${string} added to the start of the lunch menu.`);
    return arr;
};

function removeLastLunch(arr) {
    if (arr.length === 0) {
        console.log("No lunches to remove.");
    } else {
        const removedLunch = arr.pop();
        console.log(`${removedLunch} removed from the end of the lunch menu.`);
    }
    return arr;
};

function removeFirstLunch(arr) {
    if (arr.length === 0) {
        console.log("No lunches to remove.");
    } else {
        const removedLunch = arr.shift();
        console.log(`${removedLunch} removed from the start of the lunch menu.`)
    }
    return arr;
}

function getRandomLunch(arr) {
    if (arr.length === 0) {
        console.log("No lunches available.");
    } else {
        const randomArrayElement = arr[Math.floor(Math.random() * arr.length)];
        console.log(`Randomly selected lunch: ${randomArrayElement}`);
    }
};

function showLunchMenu(arr) {
    if (arr.length === 0) {
        console.log("The menu is empty.");
    } else {
        console.log(`Menu items: ${arr.join(", ")}`);
    }
};