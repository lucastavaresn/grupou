import React from 'react';

import {
	Container,
	TextoNegrito,
	Texto,
	Alternativas,
	BotaoAlternativa,
	TextoAlternativa,
	TextoColorido,
	Resultado,
	TextoResultado,
	TextoResultadoAcertos,
	BotaoRosa,
	TextoBotaoRosa
} from './styles';

export default function Pergunta_Resultado() {
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
					<BotaoAlternativa>
						<TextoColorido>
							A.
						</TextoColorido>
						<TextoAlternativa>
							De programação
						</TextoAlternativa>
					</BotaoAlternativa>
					<BotaoAlternativa>
						<TextoColorido>
							B.
						</TextoColorido>
						<TextoAlternativa>
							De marcação
						</TextoAlternativa>
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

				<Resultado >
					<TextoResultadoAcertos>

					</TextoResultadoAcertos>
					<TextoResultado>

					</TextoResultado>
				</Resultado>

				<BotaoRosa>
					<TextoBotaoRosa>
						Confirmar
					</TextoBotaoRosa>
				</BotaoRosa>
			</Container>
		</>
	);
}
