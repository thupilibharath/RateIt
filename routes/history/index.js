/**
 * Created by Bharath on 11/2/15.
 */
exports.getHistory = function(req,res){

    var uname = '\''+req.query.data+'\'';

    var arr2 = uname.split('_');
    uname='';
    uname=uname+arr2[0];
    for(var i=1;i<arr2.length;i++){
        uname=uname+' '+arr2[i];
    }

    var query = 'select review, (select itname from item where itid = iid) as item from reviews where usr = '+uname;
    console.log(query);
    connection.query(query,function(err,rows) {
        if(err)
            console.log(err);
        else{
            console.log('Sending reviews of user');
            res.setHeader('Content-Type', 'application/json');
            res.send(JSON.stringify(rows,null,3));
        }
    });

};