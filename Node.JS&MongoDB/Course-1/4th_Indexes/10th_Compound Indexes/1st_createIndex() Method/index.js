
use("Indexes");

// createIndex() Method :

/* 
In the compound index we are creating Indexes with combination of two property.

db.getColllection("users").createIndex({ property1 : 1, property2 : 2 })
*/

// Order Matter :

/* 
Whatever order of property we are giving to createIndex() method.that will be important
*/

// Example :

db.getCollection("users").createIndex({ "age" : 1, "gender" : 1 });
// name for the createIndex is age_1_gender_1

/* 
Here we have given order like : 
first we have given :
    age : 1
second we have given :
    gender : 1

As we know MongoDB is doing indexes for property in B-Tree structure means either in assending order or either in decending and this will be depend on given value like : age : 1 or age : -1

So What will happen :
    Suppose we have documents like : [{age : 20, gender : male1}, {age : 25, gender : male2}, {age : 20, gender : female1}, {age : 20, gender : female2}, {age : 20, gender : male3}, {age : 25, gender : female3}]
        Step : 1
            MongoDB first sort the document based on age
                [{age : 20, gender : male1}, {age : 20, gender : female1}, {age : 20, gender : female2}, {age : 20, gender : male3}, {age : 25, gender : male2}, {age : 25, gender : female3}]
        Step : 2
            Now MongoDB take the sorted document from first step 1. That Data MongoDB will sort based on gender.
                Now we have sorted data : [{age : 20, gender : male1}, {age : 20, gender : female1}, {age : 20, gender : female2}, {age : 20, gender : male3}, {age : 25, gender : male2}, {age : 25, gender : female3}]
                    How MongoDB sort the data in Step 2 :
                        MongoDB first take all the same type of age like : For now in our case first sorted age is 20, So it will take all the Sorted 20 age data
                            and then MongoDB sorted those 20 age documents based on gender value and we know in gender we have two value : male and female and female word come before male word So MongoDB sort all the 20 age data like : 20 with female, 20 with male
                        Same Process will be followed for all the different type value of age
                        MongoDB first take all the same type of age like : For now in our case first sorted age is 25, So it will take all the Sorted 25 age data
                            and then MongoDB sorted those 20 age documents based on gender value and we know in gender we have two value : male and female and female word come before male word So MongoDB sort all the 25 age data like : 25 with female, 25 with male
                        Same Process will be followed for all the different type of value of age property

                        Now we have sorted documents like : [{age : 20, gender : female1}, {age : 20, gender : female2}, {age : 20, gender : male1}, {age : 20, gender : male3}, {age : 25, gender : female3}, {age : 25, gender : male2}]
*/

// Example 2 :

db.getCollection("users").createIndex({ "gender" : 1, "age" : 1 });
// name for createIndex is gender_1_age_1

/* 
Here we have given order like : 
first we have given :
    gender : 1
second we have given :
    age : 1

As we know MongoDB is doing indexes for property in B-Tree structure means either in assending order or either in decending and this will be depend on given value like : age : 1 or age : -1

So What will happen :
    Suppose we have documents like : [{age : 20, gender : male1}, {age : 25, gender : male2}, {age : 20, gender : female1}, {age : 25, gender : female2}, {age : 30, gender : male3}, {age : 35, gender : female3}]
        Step : 1
            MongoDB first sort the document based on gender value
                [{age : 20, gender : female1}, {age : 25, gender : female2}, {age : 35, gender : female3}, {age : 20, gender : male1}, {age : 25, gender : male2}, {age : 30, gender : male3}]
        Step : 2
            Now MongoDB take the sorted document from first step 1. Now That Data MongoDB will sort based on age.
                Now we have sorted data based on gender : [{age : 20, gender : female1}, {age : 25, gender : female2}, {age : 35, gender : female3}, {age : 20, gender : male1}, {age : 25, gender : male2}, {age : 30, gender : male3}]
                    How MongoDB sort the data in Step 2 :
                        MongoDB first take all the same type of gender like : For now in our case first sorted gender is female, So it will take all the female age data
                            and then MongoDB sorted those female gender documents based on age value and we know in age we have multiple value : 20, 25, and 35
                        Same Process will be followed for all the different type value of gender but in our there are only two value male and female and we already sorted data for female now we will do same process for male gender
                        MongoDB first take all the same type of gender like : For now in our case second sorted gender is female, So it will take all the female gender data
                            and then MongoDB will sort those female age documents based on age value and we know in age we have multiple value : 20, 25, and 35
                        Same Process will be followed for all the different type of value of age property

                        Now we have sorted documents like : [{age : 20, gender : female1}, {age : 25, gender : female2}, {age : 35, gender : female3}, {age : 20, gender : male1}, {age : 25, gender : male2}, {age : 30, gender : male3}]
*/