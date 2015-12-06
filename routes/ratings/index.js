/**
 * Created by Bharath on 10/26/15.
 */
exports.postReview = function(req,res){
var reviewData = req.query.data;
    console.log(req.query.data);
    var newData = reviewData.split(":");

    var uname = '\''+newData[0]+'\'';
    var iname = '\'\%'+newData[1]+'\%\'';
    var review = '\''+newData[2]+'\'';
    var rating = newData[3];

    var arr = iname.split('_');
    iname='';
    iname=iname+arr[0];
    for(var i=1;i<arr.length;i++){
        iname=iname+' '+arr[i];
    }

    console.log('iname '+iname);

    var arr1 = uname.split('_');
    uname='';
    uname=uname+arr1[0];
    for(var i=1;i<arr1.length;i++){
        uname=uname+' '+arr1[i];
    }

    console.log('uname '+uname);

    var arr2 = review.split('_');
    review='';
    review=review+arr2[0];
    for(var i=1;i<arr2.length;i++){
        review=review+' '+arr2[i];
    }

    console.log('review '+review);

    var query = 'insert into reviews(usr,iid,review, rating) values('+uname+','+'(select itid from item where itname like '+iname+' limit 1)'+','+review+','+rating+')';

    console.log(query);
    connection.query(query,function(err,rows) {
        if(err)
            console.log(err);
        else{
            console.log('Inserted');
            res.setHeader('Content-Type', 'application/json');
            res.send(JSON.stringify('Review Posted', null,3));
        }
    });
};

exports.getReview = function(req,res){
    var iname = req.query.data;

    var arr = iname.split('_');
    iname='';
    iname=iname+arr[0];
    for(var i=1;i<arr.length;i++){
        iname=iname+' '+arr[i];
    }

    console.log(iname);
    var query = 'select usr, review, rating from reviews where iid= (select itid from item where itname = '+'\''+iname+' \''+' limit 1)';

    console.log(query);
    connection.query(query,function(err,rows) {
        if(err)
            console.log(err);
        else{
            console.log('Sent');
            res.setHeader('Content-Type', 'application/json');
            res.send(JSON.stringify(rows, null,3));
        }
    });
};


exports.getReview1 = function(req,res){

    var data=req.query.data;
    var d1 = data.split(':');
    var iname = d1[0];
    var uname = d1[1];

    var arr = iname.split('_');
    iname='';
    iname=iname+arr[0];
    for(var i=1;i<arr.length;i++){
        iname=iname+' '+arr[i];
    }

    var arr1 = uname.split('_');
    uname='';
    uname=uname+arr1[0];
    for(var i=1;i<arr1.length;i++){
        uname=uname+' '+arr1[i];
    }

    uname = '\''+uname+'\'';

    console.log(iname);
    console.log(uname);
    var query = 'select usr, review, rating from reviews where iid= (select itid from item where itname = '+'\''+iname+' \''+' limit 1) and usr = '+uname;

    console.log(query);
    connection.query(query,function(err,rows) {
        if(err)
            console.log(err);
        else{
            console.log('Sent');
            res.setHeader('Content-Type', 'application/json');
            res.send(JSON.stringify(rows, null,3));
        }
    });
};
