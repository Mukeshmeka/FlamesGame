function flames(){
    let name1=document.getElementById("input1").value;
    let name2=document.getElementById("input2").value;
    let gameresult=document.getElementById("result");
    let arr1 = name1.toLowerCase().replace(/\s/g, '').split('');
    let arr2 = name2.toLowerCase().replace(/\s/g, '').split('');
    for (let i = 0; i < arr1.length; i++) {
    let index = arr2.indexOf(arr1[i]);
    if (index !== -1) {
      arr1.splice(i, 1);
      arr2.splice(index, 1);
      i--;
    }
  }

    const totalCount = arr1.length + arr2.length;
  
    let flames = ['f', 'l', 'a', 'm', 'e', 's'];
    let index = 0;

    while (flames.length > 1) {
    index = (index + totalCount - 1) % flames.length;
    flames.splice(index, 1);
  }
    const resultMap = {
    f: 'Friends',
    l: 'Love',
    a: 'Affection',
    m: 'Marriage',
    e: 'Enemy',
    s: 'Siblings'
  };

  let result=resultMap[flames[0]];
  gameresult.textContent=result;

}
