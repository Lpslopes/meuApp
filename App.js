import React, {useState} from 'react';
import { View, Text, StyleSheet, Switch, TextInput, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';



function App(){

  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');
  const [limite, setLimite] = useState(250);
  const [sexo, setSexo] = useState(0);
  const [sexos, setSexos] = useState([
    {sexoNome: 'Masculino', valor: 1},
    {sexoNome: 'Feminino', valor: 2},
  ]);

  function enviarDados(){

    if(nome === '' || idade === ''){
      alert('Preencha todos os campos corretamente!')
      return;
    }
    
    alert(
      'Conta aberta com sucesso!! \n\n' +
      'Nome: '+nome + '\n' +
      'Idade: ' + idade + '\n' +
      'Sexo: ' + sexos[sexo].sexoNome + '\n' +
      'Limite Conta: ' + limite.toFixed(2) + '\n'
      );
  }

  
  let sexoItems = sexos.map(( v, k ) => {
    return <Picker.Item key={k} value={k} label={v.sexoNome}/>
  });


   return(
    <View style={styles.container}>
      <Text style={styles.text}>Banco do Lamart:</Text>
      
          
        <Text style={styles.nome}>Nome:</Text>
        
        <TextInput
          style={styles.textInput}
          placeholder="Digite seu Nome"
          onChangeText={(nome) => setNome(nome) }
        />
        
        <Text style={styles.nome}>Idade:</Text>
        
        <TextInput
          style={styles.textInput}
          placeholder="Digite sua Idade"
          onChangeText={(idade) => setIdade(idade) }
          keyboardType="numeric"
        />

        <View>
          <Text style={styles.nome}>Sexo:</Text>
          <Picker style={styles.pickersexo}
            selectedValue={sexo}
            onValueChange={(itemValue, itemIndex) => setSexo(itemValue)}>

              {sexoItems}

          </Picker>
        </View>

        <View>
          <Text style={styles.areaSlider}>Seu Limite:</Text>
          <Text style={styles.limite}>R$ {limite.toFixed(0)}</Text>
        </View>

        <View>
          <Slider
            minimumTrackColors="#CF0000"
            minimumValue={250}
            maximumValue={2000}
            value={limite}
            onValueChange={ (limite) => setLimite(limite) }
          />

        </View>

        <View>

          <TouchableOpacity style={styles.botao} onPress={ enviarDados }>
            <Text style={styles.botaoTexto}>ABRIR CONTA</Text>
          </TouchableOpacity>
        
        </View>
     
        
    </View>
   
  );
}

export default App;

const styles = StyleSheet.create({
  container:{
    marginTop:100,
    
    
  },
  text:{
    fontSize:30
  },
  nome:{
    marginTop:20,
    marginLeft:20,
    fontSize:20
  },
  textInput:{
    height: 45,
    borderWidth: 1,
    margin: 10,
    padding:10,
    fontSize: 20

  },
  pickersexo:{
    flex:1
  },
  areaSlider:{
    marginTop: 40,
    fontSize:20,
    marginLeft: 20

  },
  limite:{
    fontSize:25,
    marginLeft:20
  },
  botaoTexto:{
    fontSize:20,
    color: 'white',
    fontWeight:'bold'
  },
  botao:{
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
    backgroundColor:'#000000',
    borderRadius:150,
  }
  

  
  
})



