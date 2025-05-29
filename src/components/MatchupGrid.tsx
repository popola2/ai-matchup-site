// src/components/MatchupGrid.jsx
import React from 'react';
import './MatchupGrid.css';

export function MatchupGrid({ chinaCards, usaCards }) {
  return (
    <main>
      <section className="column china" aria-label="中国 AI 公司">
        <h2>中国 AI 公司</h2>
        {chinaCards.map(card => (
          <div className="card" key={card.id} tabIndex="0" role="article" aria-labelledby={`${card.id}-title`}>
            <h3 id={`${card.id}-title`}>{card.title}</h3>
            <p>{card.description}</p>
            <a href={card.url} aria-label={`查看 ${card.title} 对比详情`}>查看对比</a>
          </div>
        ))}
      </section>

      <div className="vs" aria-hidden="true">VS</div>

      <section className="column usa" aria-label="美国 AI 公司">
        <h2>美国 AI 公司</h2>
        {usaCards.map(card => (
          <div className="card" key={card.id} tabIndex="0" role="article" aria-labelledby={`${card.id}-title`}>
            <h3 id={`${card.id}-title`}>{card.title}</h3>
            <p>{card.description}</p>
            <a href={card.url} aria-label={`查看 ${card.title} 对比详情`}>查看对比</a>
          </div>
        ))}
      </section>
    </main>
  );
}

export default MatchupGrid;
