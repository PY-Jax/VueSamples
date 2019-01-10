// 数组排序
function sortNum(a,b){
    return a-b;
}
// 数组对象排序
function sortByKey(array,key){
    return array.sort(function(a,b){
      var x=a[key];
      var y=b[key];
      return ((x<y)?-1:((x>y)?1:0));
   });
};