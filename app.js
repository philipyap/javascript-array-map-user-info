let data = [

    {
        name: 'Sarah',
        age: '20',
        address: 'Dallas'
    },
    {
        name: 'Mike',
        age: '24',
        address: 'New York'
    },
    {
        name: 'Carrie',
        age: '25' ,
        address :  'Los Angelos'
    },
    {
        name: 'Dane',
        age: '35',
        address: 'Seattte'
    },
    {
        name: 'Gus',
        age: '21',
        address: 'Boston'
    },
    {
        name: 'Kate',
        age: '31',
        address: 'Salt Lake City'
    },
    {
        name: 'May',
        age: '23',
        address: 'San Francisco'
    },
    {
        name: 'Nancy',
        age: '51',
        address: 'New Jersey'
    },
    {
        name: 'John',
        age: '48',
        address: 'San Diego'
    },
    {
        name: 'Justin',
        age: '25',
        address: 'North Carolina'
    }

]

// query selector 
const dataInfo = document.querySelector('.info')

// create a function to map thru all info
// then return to name, age, and address
let details = data.map((item) => {
    return '<div>' 
    + 'Name: ' + item.name + 
    '<br>' 
    +'Age: ' + item.age + 
    '<br>' 
    +'Address: ' + item.address +
    '</div>';
})

// to show the info on page by joining them
dataInfo.innerHTML = details.join('\n')