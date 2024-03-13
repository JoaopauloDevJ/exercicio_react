import { useState } from "react";
import styles from './calculadora.module.css';

const calculandoImc = () => {
    const [peso, setPeso] = useState('');
    const [altura, setAltura] = useState('');
    const [resultado, setResultado] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const pesoValue = parseFloat(peso);
        const alturaValue = parseFloat(altura);

        if(isNaN(pesoValue) || isNaN(alturaValue) || pesoValue <= 0 || alturaValue <= 0) {
            setResultado('Preencha os campos com valores corretos para poder calcular seu IMC!');
            return;
        }
        const imc = pesoValue / (alturaValue * alturaValue)
        let bmiText = '';
    
            if(imc <= 18.5) {
                    bmiText = 'você está abaixo do peso!'
            } else if(imc >= 18.6 & imc <= 24.9){
                    bmiText = 'você no peso ideal, Parabéns!'
            } else if(imc >= 25 & imc <= 29.9){
                    bmiText = 'você está um pouco a cima do peso!'
            } else if(imc >= 30 & imc <= 34.9){
                    bmiText = 'Você está com obesidade grau 1!'
            } else if(imc >= 35 & imc <= 39.9){
                    bmiText = 'Você está com obesidade grau 2!'
            } else {
                    bmiText = 'Você está com obesidade grau 3!'
                }
            
                setResultado(`Seu IMC é: ${imc.toFixed(2)} - ${bmiText}`)
    }

    

    return (
        <div>
            <form className={styles.form} onSubmit={handleSubmit}>
                <input onChange={(e) => setPeso(parseFloat(e.target.value))} className={styles.input} type='text' placeholder='Digite seu peso'/>
                <input onChange={(e) => setAltura(parseFloat(e.target.value))} className={styles.input} type='text' placeholder='Digite sua altura'/>
                <button className={styles.button} type='submit'>Calcular o IMC</button>
            </form>
            <div>
                <p className={styles.resultado}>{resultado}</p>
            </div>
        </div>
    )
}

export default calculandoImc;