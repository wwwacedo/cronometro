import styled from "styled-components";

export default function Display({ tempo }: {tempo: number}) {
	const minutos = Math.floor(tempo / 60);
	const segundos = tempo % 60;
	const [ minutosEsquerda, minutosDireita ] = String(minutos).padStart(2, '0').split('');
	const [ segundosEsquerda, segundosDireita ] = String(segundos).padStart(2, '0').split('');
	
	return (
		<Wrapper>
			<Number>{minutosEsquerda}</Number>
			<Number>{minutosDireita}</Number>
			<Divisor>:</Divisor>
			<Number>{segundosEsquerda}</Number>
			<Number>{segundosDireita}</Number>
		</Wrapper>
	)
}

const Number = styled.span`
	font-size: 6rem;
	color: #0079FF;
`

const Divisor = styled.span`
	font-size: 3rem;
	color: #dae3ee;
	padding: .1rem;
`

const Wrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`