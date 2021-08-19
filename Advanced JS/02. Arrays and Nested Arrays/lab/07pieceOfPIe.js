function piece(pieArr, tf1, tf2){
return pieArr.slice(pieArr.indexOf(tf1), pieArr.indexOf(tf2) + 1);
}

console.log(piece(['Apple Crisp',
'Mississippi Mud Pie',
'Pot Pie',
'Steak and Cheese Pie',
'Butter Chicken Pie',
'Smoked Fish Pie'],
'Pot Pie',
'Smoked Fish Pie'
));