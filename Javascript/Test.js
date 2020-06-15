QUnit.test( "Whazzah!", function( assert ) {
  var whizzah = 1;
  const result = whizzah;

 assert.equal( result, 1);
});
 QUnit.test( "Velge en stolpe", function( assert ) {
     const result = selectStolpe(2);
  
    assert.equal( result, 2);
  });
  QUnit.test( "Slette en stolpe", function( assert ) {
    dltStolpe(numbers.length -1);
    const result = numbers.length;
     assert.equal(result, numbers.length = numbers.length);
 });
  QUnit.test( "Endre en stolpe", function( assert ) {
  inputValue = 7;
  endrStolpe(2);
  const result = numbers;
 assert.deepEqual( result, numbers = [7, 7, 1, 5, 8]);
});

QUnit.test( "Legge til en stolpe", function( assert ) {
  inputValue = 10;
  addStolpe();
  const result = numbers.length;

 assert.equal( result, 6);
});