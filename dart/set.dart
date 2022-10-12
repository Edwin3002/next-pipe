void main() {
  Set<String> paises = {};
  
  paises = {'col', 'arg', 'mex'};
  
  print(paises);
  
  paises.add('brazil');
  
  print(paises);
  
  for(int i = 0; i <paises.length; i ++){
    print(paises.elementAt(i));
  }
}
