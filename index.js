/**
 * Created by sbunke on 6/26/2015.
 */

    /*

var sql = require('./sql');

//console.log(sql);


sql.connection.request().query('select top 100 * from LogMessages', function(err, recordset) {
    // ... error checks
    console.log(err);
    //console.dir(recordset);
    console.log(recordset);
});


        */


var Promise = require('bluebird');

function getPromise1(){
    return new Promise(function(resolve, reject){
        //reject(new Error("Rejected error"))
    }).then(function(result) {
            console.log('Result 1 ' + result);
            return result;
        }).then(function(result) {
            console.log('Result 2 ' + result)
            return result;
        });
}
getPromise1()
    .then(function(finalResult){console.log("Final result " + finalResult)})
    .error(function(e){console.log("Error handler " + e)})
    .catch(function(e){console.log("Catch handler " + e)});


function p2(input) {
    return new Promise(function(resolve, reject) {
        if (input) {
            resolve()
        }
        else {
            //reject('rejecting');
            //Promise.reject(new Error("Bad parameter"))
        }


    });
}

p2().then(function() {
    console.log('in then')
}).error(function() {
    console.log('in error');
}).catch(function(e){console.log("Catch handler " + e)});