import styled from 'styled-components/native';

export const SView = styled.ScrollView`
`

export const Container = styled.View`
 	flex:1;
 	flex-direction:column;
 	align-items:center;
 	justify-content:flex-end;
	margin: 36px 0;
	width:100%;
`;

/*Barra de progresso*/
export const BarraDeProgressoCinza = styled.View`
	border: 2.8px solid #808080;
	width:100%;
	/* margin-top:22px; */
	position:absolute;
`;

export const BarraDeProgresso = styled.View`
	border: 2.8px solid #e42d6b;
	width:78%;
	/* margin-top:22px;	 */
	border-radius: 2px;
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
	border: 1px solid ${props => props.clicado === 'certa' ? '#3bcd7e' : props.clicado === 'errada' ? '#e42d6b' : '#808080'};
	border-radius: 5px;
	margin: 10px 0;
	padding: 14px;
`;

export const TextoAlternativa = styled.Text`
	/* font-family: Arial; */
	color: 	#808080;
	font-size: 18px;
	padding-left: 5px;
`;

export const TextoColorido = styled.Text`
	/* font-family: Arial; */
	color: ${props => props.clicado === 'certa' ? '#3bcd7e' : props.clicado === 'errada' ? '#e42d6b' : '#808080'};
	font-size: 18px;
`;

export const Imagem = styled.View`
	flex:1;
 	flex-direction:column;
 	align-items:flex-end;
	display:${props => props.clicado ? 'flex' : 'none'};
`;

/*Resultado*/
export const Resultado = styled.View`
	margin: 15px 0px 20px 0px;
`;

export const TextoResultadoAcertos = styled.Text`
	/* font-family: Arial; */
	font-size: 45px;
	font-weight: bold;
	color: ${props => props.clicado ? '#3BCD7E' : '#ffffff'};
`;

export const TextoResultado = styled.Text`
	/* font-family: Arial; */
	font-size: 20px;
	color: ${props => props.clicado ? '#3BCD7E' : '#ffffff'};
`;

/*Botao da parte de baixo da tela*/
export const BotaoRosa = styled.TouchableOpacity`
	width: 54%;
	background-color:#a51966;
	align-items:center;
	padding: 15px 0;
	border-radius: 5px;
	margin-top: 10px;
`;

export const TextoBotaoRosa = styled.Text`
	/* font-family: Arial; */
	font-size: 20px;
	color: #ffffff;
`;
