/**
 * Created by sbunke on 6/26/2015.
 */

module.exports = function()
{

    var sql = require('mssql');

    var con = 'Server=tcp:vwn2cbsiwx.database.windows.net,1433;Database=Pulse;User ID=gmradmin@vwn2cbsiwx;Password=p@ssw0rd;Trusted_Connection=False;Encrypt=True;Connection Timeout=30;MultipleActiveResultSets=True'

    var dev_config = {
        user: 'gmradmin@vwn2cbsiwx',
        password: 'p@ssw0rd',
        server: 'vwn2cbsiwx.database.windows.net', // You can use 'localhost\\instance' to connect to named instance
        database: 'PulseTelemetry',

        options: {
            encrypt: true // Use this if you're on Windows Azure
        }
    }


    var config = {
        user: 'gmradmin@vwn2cbsiwx',
        password: 'p@ssw0rd',
        server: 'vwn2cbsiwx.database.windows.net', // You can use 'localhost\\instance' to connect to named instance
        database: 'PulseTelemetry',

        options: {
            encrypt: true // Use this if you're on Windows Azure
        }
    }

    var module = {};

    var connection = new sql.Connection(config, function (err) {
        // ... error checks
        console.log(err);
        // Query

        var request = new sql.Request(connection); // or: var request = connection.request();

        /*
         request.query('select top 100 * from LogMessages', function(err, recordset) {
         // ... error checks
         console.log(err);
         //console.dir(recordset);
         console.log(recordset);
         });
         */
    });

    return module;

}