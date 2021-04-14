import styled from 'styled-components/native';

export const Container = styled.View`
	width:100%;
	height:100%;
 	flex:1;
 	flex-direction:column;
 	align-items:center;
 	justify-content:flex-end;
	padding-top:40px;
`;

/*Textos antes da alternativas*/
export const TextoNegrito = styled.Text`
	/* font-family: Arial; */
	padding: 0 20px;
	text-align: left;
	font-size: 25px;
	width:100%;
	font-weight: bold;
`;

export const Texto = styled.Text`
	/* font-family: Arial; */
	color: #b0b5c1;
	padding: 0px 20px 20px;
	text-align: left;
	font-size: 20px;
	width:100%;
`;

/* Alternativas*/
export const Alternativas = styled.View`
	margin-top: 25px;
	width: 90%;
	/* margin-bottom: 40%; */
`;

export const BotaoAlternativa = styled.TouchableOpacity`
 	flex-direction:row;
	width: 100%;
	border: 1px solid ${props => props.acerto ? "#3BCD7E" : props.erro ? "#A51966" : "#cccccc"};
	border-radius: 5px;
	margin: 7px 0;
	padding: 10px;
`;

export const TextoColorido = styled.Text`
	/* font-family: Arial; */
	color: ${props => props.acerto ? "#3BCD7E" : props.erro ? "#A51966" : "#b0b5c1"};
	font-size: 18px;
	margin-right: 5px;
`;

export const TextoAlternativa = styled.Text`
	/* font-family: Arial; */
	color: #b0b5c1;
	font-size: 18px;
`;

export const Imagem = styled.View`
	flex:1;
 	flex-direction:column;
 	align-items:flex-end;
`;

/*Resultado*/
export const Resultado = styled.View`
	margin: 15px 20px 40px;
`;

export const TextoResultadoAcertos = styled.Text`
	/* font-family: Arial; */
	font-size: 30px;
	font-weight: bold;
	color: ${props => props.clicado ? "#3BCD7E" : "#ffffff"};
`;

export const TextoResultado = styled.Text`
	/* font-family: Arial; */
	font-size: 20px;
	color: ${props => props.clicado ? "#3BCD7E" : "#ffffff"};
`;

/*Botao da parte de baixo da tela*/
export const BotaoRosa = styled.TouchableOpacity`
	width: 54%;
	background-color:#A51966;
	align-items:center;
	padding: 15px;
`;

export const TextoBotaoRosa = styled.Text`
	/* font-family: Arial; */
	font-size: 20px;
	color: #fff;
`;
