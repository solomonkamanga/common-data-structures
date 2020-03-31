// demonstrate hash table usage

// create a hash table all at once
var dict1 = {};
var dict1 = {"key1": 1, "key2": 2, "key3": "three"};
console.log(dict1);

// create a hash table progressively
var dict2 = {};
dict2["key1"] = 1;
dict2["key2"] = 2;
dict2["key3"] = 3;
console.log(dict2);

// try to access a nonexistent key
console.log(dict1["key6"]);

// replace an item
dict2["key2"] = "two";
console.log(dict2);

// iterate the keys and values in the dictionary
var key, value;
for(key in dict2){
    value = dict2[key];
    console.log("key: ", key, " value: ", value);
}