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
    });
};