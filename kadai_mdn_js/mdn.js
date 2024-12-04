const date1 = new Date();

const date2 = date1.getMonth() +1;

if (date2 === 13) {
  const date2 = 1;
}

console.log(date1.getFullYear() + '年' + date2 + '月' + date1.getDate() +'日');

