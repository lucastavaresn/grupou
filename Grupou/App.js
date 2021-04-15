import React from 'react';
import { StyleSheet, View, Text, FlatList, Image } from 'react-native';
import { Container, SubContainerUm, Imagens, Titulo,
         BtnVer, BtnVerTexto, Tags, TagsTexto, 
         Barrinha, PercContainer, Perc } from './styles';

export default function App()
{
  const produtos = 
  [
      {
          id: '01',
          curso: 'Gestão de Design',
      },
      {
          id: '02',
          curso: 'Fotografia',
      },
      {
          id: '03',
          curso: 'Webdesign',
      }
  ]

  return (
    <Container>
      <SubContainerUm>
        <Text style={estilos.curso} >Minhas top soft skills</Text>

        <Tags><TagsTexto>Liderança</TagsTexto></Tags>
        <Tags><TagsTexto>Comunicação</TagsTexto></Tags>
        <Tags><TagsTexto>Ver Mais</TagsTexto></Tags>

      </SubContainerUm>

      <FlatList data={produtos}
                keyExtractor={item => item.id}      
                renderItem={({ item }) =>
                <View style={estilos.item}> 
                  
                  <Titulo>
                    <Text style={estilos.curso}>
                          { item.curso }
                    </Text>
                      
                    <BtnVer>
                      <BtnVerTexto>Ver Mais</BtnVerTexto>
                    </BtnVer>
                  </Titulo>
                    
                  <Text style={estilos.prod}> AV1 </Text>

                  <Imagens>
                      <Image style={estilos.logo}
                             source={require('./assets/favicon.png')}/>
                      <Image style={estilos.logo}
                             source={require('./assets/favicon.png')}/>
                      <Image style={estilos.logo}
                             source={require('./assets/favicon.png')}/>
                      <Image style={estilos.logo}
                             source={require('./assets/favicon.png')}/>   
                      <Image style={estilos.logo}
                             source={require('./assets/favicon.png')}/>             
                  </Imagens>

                  <Text style={estilos.prod}> Tarefas concluídas </Text>
                  
                  <PercContainer>
                    <Barrinha></Barrinha>
                    <Perc> 75%</Perc>
                  </PercContainer>
                  
                </View>}
        />
    </Container>
  );
}

const estilos = StyleSheet.create
({
    item:
    {
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 25,
        margin: 10,
        width: 370,
        height: 250,
    },
    curso:
    {
      fontSize: 24,
      color: '#2A314C',
      fontWeight: "bold"
    },
    prod:
    {
      fontSize: 18,
      color: '#999CAE',
      fontWeight: "bold"
    },
    logo:
    {
      width: 60,
      resizeMode: 'contain',
    }
})

