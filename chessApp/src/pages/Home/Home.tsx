import React, { useState } from 'react'
import './home.css'
import { useSelector } from 'react-redux';
import type { RootState } from '../../store/store';
import { useLocation, useNavigate } from 'react-router-dom';
import GeneralInput from '../../components/GeneralInput/GeneralInput';
import GeneralCard from '../../components/GeneralCard/GeneralCard';
import GeneralButton from '../../components/GeneralButton/GeneralButton';
function Home() {
  const navigate = useNavigate();
  const location = useLocation();
  const [pgn, setPgn] = useState<string>();
  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated)
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isAuthenticated) {
      navigate("/login",
        {
          state:
            { from: location.pathname }
        });
    }
  }

  return (
    <main>
      <section className='hero-content'>
        <h1>A Arte da <br /><span>Estratégia</span></h1>
        <p className="hero-desc">
          O xadrez não é apenas um jogo, é um legado. Utilize nossa ferramenta para arquivar, analisar e estudar suas partidas com a precisão dos grandes mestres.
        </p>
        <div className="stats">
          <div className="stat-item">
            <strong></strong>
            <span>Partidas Salvas</span>
          </div>
          <div className="stat-item">
            <strong>GM</strong>
            <span>Engine Level</span>
          </div>
        </div>
      </section>

      <GeneralCard>
        <div className="card-header">
          <div className="card-title">Novo Registro</div>
          <span className='PGN'>Insira o PGN abaixo</span>
        </div>

        <GeneralInput
          placeholder="Ex: [Event 'Campeonato']&#10;[White 'Alekhine']&#10;1. e4 e6 2. d4 d5..."
          value={pgn}
          onChange={(e) => setPgn(e.target.value)}
          className="input"
        />

        <GeneralButton
          type='submit'
        >
          Send match
        </GeneralButton>
      </GeneralCard>

    </main>
  )
}

export default Home;