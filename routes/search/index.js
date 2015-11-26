/**
 * Created by Bharath on 9/13/15.
 */
exports.search = function(req, res) {

    console.log('search request received');



    var postData = req.query.data;
    console.log(postData);
    var arrData = postData.split(":");
    var key  = arrData[0];
    var value = arrData[1];
    console.log(key);

    pool.getConnection(function(err,connection){


    // Search Database based on key

            if(key=='category'){

                var arr = arrData[1].split('_');
                value='';
                console.log(arr);
                value=value+arr[0];
                for(var i=1;i<arr.length;i++){
                    value=value+' '+arr[i];
                }

                value='\''+value+'\'';

                console.log('value is ******'+value);

                var arr1 = arrData[2].split('_');
                var  value1='';
                console.log(arr1);
                value1=value1+arr1[0];
                for(var i=1;i<arr1.length;i++){
                    value1=value1+' '+arr1[i];
                }

                value1='\''+value1+'\'';
                console.log('value1 is ******'+value1 );

                console.log(value);
                var query = 'select itname as name, itdesc as description from category c, item i where c.cid=(select cid from category where cname = '+value+' and resid =(select rid from restaurant where rname = '+value1+') ) AND c.cid=i.catid';
                console.log(query);

                connection.query(query, function (err, rows) {

                    if(err) {
                        console.log('error occured while search'+err);
                        res.json('Error Occured');
                    }
                    else if (rows.length == 0) {
                        res.json('No matching records found');
                    }
                    else if(rows.length>0)
                    {
                        console.log('-----Items relevant to category are being sent----->');
                        res.setHeader('Content-Type', 'application/json');
                        res.send(JSON.stringify(rows,null,3));
                    }
                    connection.end();

                });

                //connection.close();
            }

            else if(key=='restaurant'){

                var arr = value.split('_');
                value='';
                console.log(arr);
                value=value+arr[0];
                for(var i=1;i<arr.length;i++){
                    value=value+' '+arr[i];
                }

                value='\'\%'+value+'\%\'';

                console.log(value);


                var sql = 'select cname as name from restaurant r, category c where c.resid = (select rid from restaurant where rname like '+value+') AND c.resid=r.rid';

                console.log(sql);
                connection.query(sql, function (err, rows) {

                    if(err) {
                        console.log('error occured while search'+err);
                        res.json('Error Occured');
                    }
                    else if (rows.length == 0) {
                        res.json('No matching records found');
                    }
                    else if(rows.length>0)
                    {
                        res.setHeader('Content-Type', 'application/json');
                        res.send(JSON.stringify(rows,null,3));
                    }

                    connection.end();
                });

                //connection.close();
            }

            else if(key=='cuisine'){

                var arr = value.split('_');
                value='';
                console.log(arr);
                value=value+arr[0];
                for(var i=1;i<arr.length;i++){
                    value=value+' '+arr[i];
                }

                value='\'\%'+value+'\%\'';

                console.log(value);


                //var newvalue='\''+value+'\'';
                connection.query('select rname as name from restaurant where rtype like '+value, function (err, rows) {

                    if(err) {
                        console.log('error occured while search'+err);
                        res.json('Error Occured');
                    }
                    else if (rows.length == 0) {
                        res.json('No matching records found');
                    }
                    else if(rows.length>0)
                    {
                        res.setHeader('Content-Type', 'application/json');
                        res.send(JSON.stringify(rows,null,3));
                    }

                    connection.end();
                });

                //connection.close();
            }

            else {
                /*connection.query('select itname as name from item ', function (err, rows) {

                 if (err) {
                 console.log('error occured while search' + err);
                 //res.json('Error Occured');
                 }
                 else if (rows.length == 0) {
                 //res.json('No matching records found');
                 }
                 else if (rows.length > 0) {
                 res.send(JSON.stringify(rows));
                 }

                 });*/
                res.send(JSON.stringify({data:'Invalid Request'}));

            }
    });




};

