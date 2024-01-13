/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import styled from "styled-components";
import './App.css'
import Input from './components/Input';
import Display from './components/Display';
import Botao from './components/Botao';

function App() {
	const [intervalo, setIntervalo] = useState<number>(0);
	const [ativo, setAtivo] = useState<boolean>(false);
	const [tempo, setTempo] = useState<number>(0);

	useEffect(() => {
		if (ativo) {
			setTempo(intervalo);
			regressiva(intervalo);
		} 
	}, [ativo]);

	const regressiva = (contador: number = 0) => {
		setTimeout(() => {
				if (contador > 0) {
					setTempo(contador - 1);
					return regressiva(contador - 1);
				} 
				setAtivo(!ativo);
		}, 1000)
	}

	function handleOnClick() {
		if (intervalo > 0) {
			if (tempo === 0) setAtivo(!ativo);
		} else {
			alert('Digite um intervalo');
		}
	}

	return (
		<>
			<Title>Cronômetro Regressivo</Title>
			<Input
				setIntervalo={setIntervalo}
			/>
			<Display
				tempo={tempo}
			/>
			<Botao
				handleOnClick={handleOnClick}
				ativo={ativo}
			/>
		</>
	)
}

export default App


const Title = styled.h1`
	font-size: 2rem;
  	line-height: 1.1;
`
