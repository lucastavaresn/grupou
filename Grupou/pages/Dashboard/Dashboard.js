import React from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  Image,
  ScrollView,
} from "react-native";
import {
  Container,
  SubContainerUm,
  Imagens,
  Titulo,
  BtnVer,
  BtnVerTexto,
  Tags,
  TagsTexto,
  Barrinha,
  PercContainer,
  Perc,
} from "./styles";
import Favicon from "../../assets/favicon.png";

export default function Dashboard() {
  const produtos = [
    {
      id: "01",
      curso: "Gestão de Design",
    },
    {
      id: "02",
      curso: "Fotografia",
    },
    {
      id: "03",
      curso: "Webdesign",
    },
  ];

  return (
    <ScrollView>
      <Container>
        <SubContainerUm>
          <View style={{}}>
            <Text style={styles.curso}>Minhas top soft skills</Text>
          </View>
          <View>
            <Tags>
              <TagsTexto>Liderança</TagsTexto>
            </Tags>
            <Tags>
              <TagsTexto>Comunicação</TagsTexto>
            </Tags>
            <Tags>
              <TagsTexto>Ver Mais</TagsTexto>
            </Tags>
          </View>
        </SubContainerUm>

        <FlatList
          data={produtos}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Titulo>
                <Text style={styles.curso}>{item.curso}</Text>

                <BtnVer>
                  <BtnVerTexto>Ver Mais</BtnVerTexto>
                </BtnVer>
              </Titulo>

              <Text style={styles.prod}> AV1 </Text>

              <Imagens>
                <Image style={styles.logo} source={Favicon} />
                <Image style={styles.logo} source={Favicon} />
                <Image style={styles.logo} source={Favicon} />
                <Image style={styles.logo} source={Favicon} />
                <Image style={styles.logo} source={Favicon} />
              </Imagens>

              <Text style={styles.prod}> Tarefas concluídas </Text>

              <PercContainer>
                <Barrinha></Barrinha>
                <Perc>75%</Perc>
              </PercContainer>
            </View>
          )}
        />
      </Container>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 25,
    margin: 10,
    width: 370,
    height: 250,
  },
  curso: {
    fontSize: 24,
    color: "#2A314C",
    fontWeight: "bold",
  },
  prod: {
    fontSize: 18,
    color: "#999CAE",
    fontWeight: "bold",
  },
  logo: {
    width: 60,
    resizeMode: "contain",
  },
});
