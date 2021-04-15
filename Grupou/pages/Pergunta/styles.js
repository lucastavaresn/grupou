import styled from 'styled-components/native';

export const ProgressBarGrey = styled.View`
	border: 2.8px solid #D3D3D3;
	width:100%;
	position:absolute;
	margin-top:22px;
`;

export const ProgressBar = styled.View`
	border: 2.8px solid #e42d6b;
	border-radius: 2px;
	width:78%;
	margin-top:22px;
	/* margin-left: 10px; */
`;


export const Container = styled.View`
 	flex:1;
 	flex-direction:column;
 	align-items:center;
 	justify-content:flex-end;
	margin: 36px 0;
	width:100%;
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
	padding: 0px 20px 20px;
	text-align: left;
	font-size: 20px;
	width:100%;
`;

/* Alternativas*/
export const Alternativas = styled.View`
	margin-top: 20px;
	width: 90%;
`;

export const BotaoAlternativa = styled.TouchableOpacity`
 	flex-direction:row;
	width: 100%;
	height: 55px;
	border: 1px solid ${props => props.clicked ? "#3BCD7E" : "#ccc"};
	border-radius: 5px;
	margin: 10px 0;
	padding: 14px;
`;

export const TextoAlternativa = styled.Text`
	/* font-family: Arial; */
	color: 	#808080;
	font-size: 18px;
`;


export const TextoColorido = styled.Text`
	/* font-family: Arial; */
	color: ${props => props.clicked ? "#3BCD7E" : "#A51966"};
	font-size: 18px;
`;


export const Imagem = styled.View`
	
	flex:1;
 	flex-direction:column;
 	align-items:flex-end;
	display:${props => props.clicked  ? "flex" : "none"};
`;

/*Resultado*/
export const Resultado = styled.View`
	margin: 15px 0px 20px 0px;
`;

export const TextoResultadoAcertos = styled.Text`
	/* font-family: Arial; */
	font-size: 45px;
	font-weight: bold;
	color: ${props => props.clicked  ?   "#3BCD7E": "#fff"};
`;

export const TextoResultado = styled.Text`
	/* font-family: Arial; */
	font-size: 20px;
	color: ${props => props.clicked  ?  "#3BCD7E": "#fff"};
`;

/*Botao da parte de baixo da tela*/
export const BotaoRosa = styled.TouchableOpacity`
	width: 54%;
	background-color:#A51966;
	align-items:center;
	padding: 15px 0;
	border-radius: 5px;
	margin-top: 10px;
`;

export const TextoBotaoRosa = styled.Text`
	/* font-family: Arial; */
	font-size: 20px;
	color: #fff;
`;
