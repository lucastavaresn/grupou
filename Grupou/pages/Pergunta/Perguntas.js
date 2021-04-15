import React, { useState } from 'react';
import { Image } from 'react-native';
import acerto from '../../assets/icones/icone_certo.png';
import erro from '../../assets/icones/icone_errado.png';

import {
	Container,
	BarraDeProgressoCinza,
	BarraDeProgresso,
	Imagem,
	TextoNegrito,
	Texto,
	Alternativas,
	BotaoAlternativa,
	TextoColorido,
	TextoAlternativa,
	Resultado,
	TextoResultado,
	TextoResultadoAcertos,
	BotaoRosa,
	TextoBotaoRosa
} from './styles';

export default function Pergunta() {
	const acertos = 97;
	const [TextoBotao, SetTextoBotao] = useState("Confirmar");
	const certa = 'certa';
	const errada = 'errada';

	return (
		<>
			<BarraDeProgressoCinza />
			<BarraDeProgresso />

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
					<BotaoAlternativa clicado={TextoBotao === "Conluido" && errada} >
						<TextoColorido clicado={TextoBotao === "Conluido" && errada} >
							A.
						</TextoColorido>
						<TextoAlternativa>
							De programação
						</TextoAlternativa>
						<Imagem clicado={TextoBotao === "Conluido"} >
							<Image source={erro} style={{ width: 30, height: 30 }} />
						</Imagem>
					</BotaoAlternativa>
					<BotaoAlternativa clicado={TextoBotao === "Conluido" && certa} >
						<TextoColorido clicado={TextoBotao === "Conluido" && certa} >
							B.
						</TextoColorido>
						<TextoAlternativa>
							De marcação
						</TextoAlternativa>
						<Imagem clicado={TextoBotao === "Conluido"} >
							<Image source={acerto} style={{ width: 30, height: 30 }} />
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
					<TextoResultadoAcertos clicado={TextoBotao === "Conluido"} >
						{acertos}%
					</TextoResultadoAcertos>
					<TextoResultado clicado={TextoBotao === "Conluido"}>
						dos Alunos acertaram esta questão
					</TextoResultado>
				</Resultado>

				<BotaoRosa onPress={() => SetTextoBotao(TextoBotao === "Concluido" ? "Confirmar" : "Conluido")}>
					<TextoBotaoRosa>{TextoBotao}</TextoBotaoRosa>
				</BotaoRosa>

			</Container>
		</>
	);
}
