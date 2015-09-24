/**
 * Created by mike on 9/24/2015.
 */

var array1 = ["apple", "pear"];
var array2 = ["you", "can", "win"];

function addLength(array)
{
    return _.map(array, function(word){return word.concat(" " + word.length);});
}

console.log(addLength(array1));
console.log(addLength(array2));