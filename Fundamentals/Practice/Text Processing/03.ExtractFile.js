function extractFile(data) {

  let path = data.split("\\");
  let file = path[path.length-1].split(".");
  let extension = file[file.length-1];
file.pop();
file= file.join(".")
console.log(`File name: ${file}`);
console.log(`File extension: ${extension}`);
 
}
extractFile("C:\\Internal\\training-internal\\Template.bak.pptx");
extractFile("C:\\Projects\\Data-Structures\\LinkedList.cs");
