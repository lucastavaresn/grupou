import React, { useState } from 'react';
import { Image, StyleSheet, ActivityIndicator } from 'react-native';
import acerto from '../../assets/icones/icone_certo.png';
import erro from '../../assets/icones/icone_errado.png';


import {
	Container,
	ProgressBarGrey,
	Imagem,
	ProgressBar,
	TextoNegrito,
	Texto,
	Alternativas,
	BotaoAlternativa,
	TextoAlternativa,
	Resultado,
	TextoResultado,
	TextoResultadoAcertos,
	BotaoRosa,
	TextoBotaoRosa
} from './styles';

export default function Pergunta() {

	const [btnText, SetBtnText] = useState("Confirmar");


	return (
		<>	
		
			<ProgressBarGrey/>
			<ProgressBar/>
			<Container>
			
				<TextoNegrito>
					Questão do dia
        		</TextoNegrito>
				<Texto>
					HTML
        		</Texto>
				<TextoNegrito>
					Que tipo de linguagem
				</TextoNegrito>
				<TextoNegrito>
					o HTML é?
        		</TextoNegrito>

				<Alternativas>
					<BotaoAlternativa
						style={btnText === "Conluido" ? styles.redBorder : false}
						>
						
						<TextoAlternativa style={btnText === "Conluido" ? styles.redTxt : false}>
							A    
						</TextoAlternativa>

						<TextoAlternativa>
							. De programação
						</TextoAlternativa>
						<Imagem 
							clicked={btnText === "Conluido" ? true : false}>
							<Image source={erro} style={{width:30, height:30}}/>
						</Imagem>
					</BotaoAlternativa>
					<BotaoAlternativa 
						clicked={btnText === "Conluido" ? true : false}> 

						<TextoAlternativa style={btnText === "Conluido" ? styles.greenTxt : false}>
							B   
						</TextoAlternativa>
						<TextoAlternativa>
							. De marcação
						</TextoAlternativa>
						<Imagem 
							clicked={btnText === "Conluido" ? true : false}>
							<Image source={acerto} style={{width:30, height:30}}/>
						</Imagem>
					</BotaoAlternativa>
					<BotaoAlternativa>
						<TextoAlternativa>
							C. Figura de linguagem
						</TextoAlternativa>
					</BotaoAlternativa>
					<BotaoAlternativa>
						<TextoAlternativa>
							D. De português
						</TextoAlternativa>
					</BotaoAlternativa>
				</Alternativas>
            
				<Resultado>
					<TextoResultadoAcertos 
						clicked={btnText === "Conluido" ? true : false}>
						97% {/* {acertos}% */}
					</TextoResultadoAcertos>
					<TextoResultado 
						clicked={btnText === "Conluido" ? true : false}>
						dos Alunos acertaram esta questão
					</TextoResultado>
				</Resultado>
				

				<BotaoRosa
				onPress={ () =>
					SetBtnText(btnText === "Concluido" ? "Confirmar" : "Conluido")
				}>
					<TextoBotaoRosa>{btnText}</TextoBotaoRosa>
				</BotaoRosa>

			</Container>
		</>
	);
}


const styles = StyleSheet.create({
	redBorder: {
	  borderWidth: 1,
	  borderColor: "red",
	},
	redTxt: {
		color: "red",
	  },
	greenTxt: {
	color: "#3BCD7E",
	},
  });