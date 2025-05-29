import React from 'react';
import './MatchupGrid.css';

type Card = {
  id: string;
  title: string;
  description: string;
  url: string;
};

type Props = {
  chinaCards: Card[];
  usaCards: Card[];
};

const MatchupGrid: React.FC<Props> = ({ chinaCards, usaCards }) => {
  return (
    <main className="matchup-grid">
      <section className="column china">
        <h2>中国 AI 公司</h2>
        {chinaCards.map(card => (
          <div className="card" key={card.id}>
            <h3>{card.title}</h3>
            <p>{card.description}</p>
            <a href={card.url}>查看对比</a>
          </div>
        ))}
      </section>

      <div className="vs">VS</div>

      <section className="column usa">
        <h2>美国 AI 公司</h2>
        {usaCards.map(card => (
          <div className="card" key={card.id}>
            <h3>{card.title}</h3>
            <p>{card.description}</p>
            <a href={card.url}>查看对比</a>
          </div>
        ))}
      </section>
    </main>
  );
};

export default MatchupGrid;
