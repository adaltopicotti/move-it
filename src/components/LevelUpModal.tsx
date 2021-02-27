import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/LevelUpModal.module.css';

export function LevelUpModal() {
  const { level, closeLevelUpModal } = useContext(ChallengesContext);
  return (
    <div className={styles.overlay}>
      <div className={styles.container}>
        <header>{level}</header>
        <strong>Parabéns</strong>
        <p>Você alcançou um novo level.</p>

        <button className={styles.closeButton} type="button" onClick={closeLevelUpModal}>
          <img src="/icons/close.svg" alt="Fechar modal" />
        </button>
        <a
          className={styles.share}
          target="_blank"
          href={`https://twitter.com/intent/tweet?text=🎉 Alcancei nível ${level} nos desafios do Move.it`}
        >
          Compartilhe no twitter
          <img src="/icons/twitter.svg" alt="Compartilhe no twitter" />
        </a>
      </div>
    </div>
  )
}