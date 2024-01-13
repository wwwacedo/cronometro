import { useState } from "react";
import styled from "styled-components";

interface Props {
	setIntervalo: React.Dispatch<React.SetStateAction<number>>;
}

export default function Input({ setIntervalo }: Props) {

	const [tempoInput, setTempoInput] = useState<string>('00:00');

	function formatarTempo(tempo: string): number {
		const [min, seg] = tempo.split(':');
		return Number(min) * 60 + Number(seg);
	}

	function handleOnChange(e: React.ChangeEvent<HTMLInputElement>) {
		setTempoInput(e.target.value);
		setIntervalo(formatarTempo(e.target.value));
	}

	return (
		<Wrapper>
			<Label>intervalo:</Label>
			<ThisInput
				type="time"
				step="0"
				min="00:00"
				value={tempoInput}
				onChange={e => handleOnChange(e)}
			/>
		</Wrapper>
	);
}

const Wrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 1rem;
`

const Label = styled.label`
	font-size: 1.5rem;
	color: #0079FF;
`

const ThisInput = styled.input`
	width: 120px;
	height: 40px;
	padding: 0 1rem;
	border-radius: 5px;
	border: 1px solid #0079FF;
	font-size: 1.5rem;
	color: #0079FF;
	&:focus {
		outline: none;
	}
`