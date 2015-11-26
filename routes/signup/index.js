/**
 * Created by Bharath on 11/2/15.
 */
exports.signup = function(req, res){
  var data = req.query.data;


    var data1 = data.split(':');
    var uname = '\''+data1[0]+'\'';
    var pwd = '\''+data1[1]+'\'';

    var arr = uname.split('_');
    uname='';
    uname=uname+arr[0];
    for(var i=1;i<arr.length;i++){
        uname=uname+' '+arr[i];
    }
    var query = 'insert into users values ('+uname+','+pwd+')';

    console.log(query);
    pool.getConnection(function(err,connection){
    connection.query(query,function(err,rows) {
        if(err) {
            console.log(err);
            res.json('Account not created');
        }
        else{
            console.log('Account Created');
            res.setHeader('Content-Type', 'application/json');
            res.send(JSON.stringify('User Registered', null,3));
        }
        connection.release();
    });
    });


};