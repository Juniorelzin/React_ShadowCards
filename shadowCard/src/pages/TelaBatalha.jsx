import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './TelaBatalha.css';


function TelaBatalha() {

    const [slotCarta1, setSlotCarta1] = useState();
    const [slotCarta2, setSlotCarta2] = useState();
    const [slotCarta3, setSlotCarta3] = useState();
    const [slotCarta4, setSlotCarta4] = useState();
    const [slotCarta5, setSlotCarta5] = useState();
    const [slotCarta6, setSlotCarta6] = useState();

    const [cartas, setCartas] = useState([
        { id: 1, deckId: 1, imagem: "./src/assets/images/Carta 1.png", nome: "Dragão", descricao: "Destruidor", atk: 145, def: 150 },
        { id: 2, deckId: 1, imagem: "./src/assets/images/Carta 2.png", nome: "cavaleiro", descricao: "Usa espada", preco: 60, peso: 400 },
        { id: 3, deckId: 1, imagem: "./src/assets/images/Carta 3.png", nome: "goblin", descricao: "é verde", preco: 120, peso: 100 },
        // Adicionar mais cartas com deckId para diferentes decks
      ]);

    return (

      <div className='containerTelaBatalha'>

        <div className='divDeckAdversario'>

        </div>

        <div className='containerBatalha'>

                <div className='divMaoAdversario'>

                </div>
                <div className='divBatalhaAdversario'>
                    {slotCarta4}{slotCarta5}{slotCarta6}
                </div>
                <div className='divBatalhaJogador'>
                    {slotCarta1}{slotCarta2}{slotCarta3}
                </div>
                <div className='divMaoJogador'>
                    
                </div>

        </div>

       
        <div className='divDeckJogador'>

        </div>


        
      </div>
    );
  }
  
  export default TelaBatalha;
  
  