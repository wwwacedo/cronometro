import style from './Botao.module.scss';

interface Props {
	ativo: boolean;
	handleOnClick: () => void;
}

export default function Botao({ ativo, handleOnClick }: Props) {

	return (
		<button
			className={`${style.botao} ${ativo ? style.disabled : style.enabled}`} 
			onClick={() => handleOnClick()}>
				{ativo ? 'Aguarde...' : 'Iniciar'}
		</button>
	)
}

