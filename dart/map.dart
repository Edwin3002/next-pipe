void main() {
 Map <String, dynamic> person = {
   "name":"Ed",
   "age": "19"
 };
  
  print(person);
  print(person.keys);
  print(person.values);
  print(person["name"]);
  
  if(person["town"] == null){
    print('no tenes pais che');
  }else{
    print('si tenes pasis che');
  }
}