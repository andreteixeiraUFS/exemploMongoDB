import { StyleSheet, Text, View, Button } from 'react-native';
import URLSearchParams from 'url-search-params';

const axios = require('axios').default;

function buscarTodos() {
  axios.get('http://192.168.1.5:3000/all')
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.log(error);
    })
}

function buscarNome() {
  axios.get('http://192.168.1.5:3000/?nome:'+'maria')
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.log(error);
    })
}

function inserir (){
/*  let config = {
    headers: {
       'Content-Type': 'application/x-www-form-urlencoded',
    } 
}

//npm install url-search-params
let params = new URLSearchParams();
params.append('fisrtName', 'Fred1');
params.append('lastName', 'Flinstone');

//Finally

axios.post('http://192.168.1.5:3000/inserir',params, config).then( ( response ) => {
console.log(response.data);
});*/


 axios.post('http://192.168.1.5:3000/inserir', {
  firstName: 'Fred',
  lastName: 'Flintstone'
})
.then(function (response) {
  console.log(response);
})
.catch(function (error) {
  console.log(error);
});

}


export default function App() {
  return (
    <View style={styles.container}>
      <Button
        title="Buscar Todos"
        onPress={buscarTodos}
      />
      <Button
        title="Buscar Um pelo nome"
        onPress={buscarNome}
      />
            <Button
        title="Inserir documento"
        onPress={inserir}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
