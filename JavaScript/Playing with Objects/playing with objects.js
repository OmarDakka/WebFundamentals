var users = [{
        name: "Michael",
        age: 37
    },
    {
        name: "John",
        age: 30
    },
    {
        name: "David",
        age: 27
    }
];

//1//
console.log(users[1].age);

//2//
console.log(users[0].name);
//3//
for (var omar in users) {
    console.log(users[omar].name + "-" + users[omar].age);
};