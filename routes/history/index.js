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

    var query = 'select rating, (select itname from item where itid = iid) as item, (select rname from newrest where itid = iid) as rest from reviews where rating is not null and usr = '+uname;
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

exports.getReview = function(req,res){

    var postData = req.query.data;
    var arrData = postData.split(":");
    var uname  = arrData[0];
    var item = arrData[1];


    var arr2 = uname.split('_');
    uname='';
    uname=uname+arr2[0];
    for(var i=1;i<arr2.length;i++){
        uname=uname+' '+arr2[i];
    }

    uname = '\''+uname+'\'';

    console.log(uname);

    var arr3 = item.split('_');
    item='';
    item=item+arr2[1];
    for(var i=1;i<arr2.length;i++){
        item=item+' '+arr2[i];
    }

    item = '\''+item+'\'';

    console.log(item);


    var query = 'select review from reviews where iid = (select itid from item where itname = '+item+' limit 1) and usr = '+uname;
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