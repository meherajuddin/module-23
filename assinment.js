// 1.cosnvert radian to degree
function redianToDegree(redian) {
  return redian * 57.2958;
}
const degree = redianToDegree(2);
console.log(degree);

// 2.check whether the given file name is a javascript file or not
function oliPrice(diesel, petrol, octane) {
  const dieselLiter = 114;
  const petrolLiter = 130;
  const octaneLiter = 135;
  const totalOile =
    diesel * dieselLiter + petrol * petrolLiter + octane * octaneLiter;
  return totalOile;
}
const dieselnibo = 4;
const petrolnibo = 5;
const octanenibo = 6;
const totalprice = oliPrice(dieselnibo, petrolnibo, octanenibo);
console.log(totalprice);