function trim(str) { //删除左右两端的空格
  return str.replace(/(^\s*)|(\s*$)/g, ""); //把空格替换为空
}