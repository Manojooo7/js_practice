//1
const convertions = ['underscore_case','first_name','Some_Variable','calculate_AGE','delayed_departure']
for(const [i,convertion] of convertions.entries()){
    const [first,second] = convertion.toLowerCase().split('_');
    const output = `${first}${second.replace(second[0],second[0].toUpperCase())}`;
    console.log(`${output.padEnd(20)}${'✅'.repeat(i + 1)}`);

    // console.log(output);

}

