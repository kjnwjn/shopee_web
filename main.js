var formValues = [
 { field: 'name', value: 'Sơn Đặng' },
 { field: 'age', value: 18 }
 ]
function getRequestBodyFromValues(formValues) {

    var newObjects = {}
    for(var i in formValues ){
        console.log(formValues[i])
        var key = formValues[i].field
        var value = formValues[i].value
        newObjects[key] = value
        console.log(newObjects)
    }
    
}
function getComment (){
    console.log('123')
}


// getRequestBodyFromValues(formValues)
// var monsters = [ { name: 'Cá heo', attack: 150, }, { name: 'Khủng long', attack: 150, }, ]
 a= ['1.2', '2', 6, 8]
 inputs= [1, 'hi', false, 8, undefined, '', NaN]


console.log( [1, 2, 3, 4].reduce2(function reducer(total, number) { return total + number }))
