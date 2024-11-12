let coders = [
    'Will',
    'Charlie',
    'Connor',
    'Josh',
    'Zeek',
    'Janjala',
    'Favor',
    'Lachelle',
    'Clint',
    'Christopher',
    'Renee',
    'Chloe',
    'Trelin',
    'Darius'
];

//Repetition Structures

/*
Looping

for loop
while loop
forEach loop

*/

/* 
for loop

Allows us to loop through a data set


syntax: 

for (initialization; condition; iteration) {

do stuff

}
*/


for (let i = 0; i < coders.length; i++) {
    console.log(`Good Morning ${coders[i]}`);
};


for (let i = coders.length -1; i >= 0; i--) {
    console.log(`Good Morning ${coders[i]}`);
};

for ( let i = 1; i < 11 ; i++) {
    console.log(i);
};


for (let i = 1; i <= 10; i+=2) {
    console.log(i);
};



/* 
While loop will complete a task while a condition is true

syntax: while(condition) {
    //do stuff
    }
    
    
    */
let i = 0;
while (i < coders.length) {
    console.log(`Good Morning ${coders[i]}`)
    i++;
}

let j = 1
while (j < 11) {
    console.log(j)
    j++;
};

/*
forEach loops works specifically for arrays and will complete a task for every item in the array


syntax: arrName.forEach(item => {
    //do stuff})

*/

coders.forEach(coder => {
    console.log(`Good Morning ${coder}!!`)
    
});

coders.forEach(coder => console.log(`Goodbye, ${coder}`))   


const teams = [
    ['los angeles', 'dodgers', ]
    ['detroit', 'lions'],
    ['green bay', 'packers'],
    ['edmonton', 'oilers'],
    ['new york', 'liberty']
]

for(let i = 0; i < teams.length; i++) {
    console.log(teams[i])
}