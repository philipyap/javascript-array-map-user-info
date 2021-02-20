###### This is another simple and quick javascript project using array and map

###### user experience: user is able to map through all people name, age, and address

###### Note:

###### mapping thru all the array we have 

```
let details = data.map((item) => {
    return '<div>' 
    + 'Name: ' + item.name + 
    '<br>' 
    +'Age: ' + item.age + 
    '<br>' 
    +'Address: ' + item.address +
    '</div>';
})

```

###### after that, show thru all results on page

```
dataInfo.innerHTML = details.join('\n')
```
