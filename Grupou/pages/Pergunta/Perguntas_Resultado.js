import React from 'react';
import { Image } from 'react-native';

import {
	Container,
	TextoNegrito,
	Texto,
	Alternativas,
	BotaoAlternativa,
	TextoAlternativa,
	TextoColorido,
	Imagem,
	Resultado,
	TextoResultado,
	TextoResultadoAcertos,
	BotaoRosa,
	TextoBotaoRosa
} from './styles';

import acerto from '../../assets/icones/icone_certo.png';
import erro from '../../assets/icones/icone_errado.png';

export default function Pergunta_Resultado() {
	const acertos = 97;
	return (
		<>
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
						erro={true}
					>
						<TextoColorido
							erro={true}
						>
							A.
						</TextoColorido>
						<TextoAlternativa>
							De programação
						</TextoAlternativa>
						<Imagem>
							<Image source={erro} style={{width:30, height:30}}/>
						</Imagem>
					</BotaoAlternativa>
					<BotaoAlternativa
						acerto={true}
					>
						<TextoColorido
							acerto={true}
						>
							B.
						</TextoColorido>
						<TextoAlternativa>
							De marcação
						</TextoAlternativa>
						<Imagem>
							<Image source={acerto} style={{width:30, height:30}}/>
						</Imagem>
					</BotaoAlternativa>
					<BotaoAlternativa>
						<TextoColorido>
							C.
						</TextoColorido>
						<TextoAlternativa>
							Figura de linguagem
						</TextoAlternativa>
					</BotaoAlternativa>
					<BotaoAlternativa>
						<TextoColorido>
							D.
						</TextoColorido>
						<TextoAlternativa>
							De português
						</TextoAlternativa>
					</BotaoAlternativa>
				</Alternativas>

				<Resultado>
					<TextoResultadoAcertos
						clicado = {true}
					>
						{acertos}%
					</TextoResultadoAcertos>
					<TextoResultado
						clicado = {true}
					>
						dos Alunos acertaram esta questão
					</TextoResultado>
				</Resultado>

				<BotaoRosa>
					<TextoBotaoRosa>
						Concluir
					</TextoBotaoRosa>
				</BotaoRosa>
			</Container>
		</>
	);
}
