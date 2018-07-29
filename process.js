// process object
console.log(process.argv);

const grab = flag => {
    const index = process.argv.indexOf(flag);
    if (index === -1) {
        return null;
    }

    return process.argv[index + 1];
};

const greeting = grab("--greeting");
const user = grab("--user");

if (greeting && user) {
    console.log(`Welcome ${user}, ${greeting}`);
} else {
    console.log("Missing parameters");
}
