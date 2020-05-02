function asyncOperation ( a, b, c, callback ) 
{
  // ... lots of hard work ... 
  if ( /* an error occurs */ ) 
  { 
    return callback(new Error("An error has occurred")); 
  } 
  // ... more work ... 
  callback(null, d, e, f); 
} 

asyncOperation ( params.., function ( err, returnValues.. ) 
{ 
//This code gets run after the async operation gets run 
}); 




