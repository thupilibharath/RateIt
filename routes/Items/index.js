/**
 * Created by Bharath on 10/26/15.
 */
exports.getItems = function(req,res){
    var rname = req.query.data;

    var arr = rname.split('_');
    rname='';
    rname=rname+arr[0];
    for(var i=1;i<arr.length;i++){
        rname=rname+' '+arr[i];
    }

    var connection = mysql.createConnection({
        host: 'mydb.cev9f9km5ing.us-east-1.rds.amazonaws.com',
        user: 'root',
        password: 'rootroot',
        database: 'rest'
    });


    console.log(rname);
    var query = 'select iname from newrest where rname= '+'\''+rname+'\'';

    connection.query(query,function(err,rows) {
        if(err)
            console.log(err);
        else{
            console.log('Sent');
            res.setHeader('Content-Type', 'application/json');
            res.send(JSON.stringify(rows,null,3));
        }
        connection.end();
    });
};