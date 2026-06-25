import React from 'react';
import type { PartData } from '../data/quizData';
import { sfx } from '../utils/soundEffects';

interface StudyPanelProps {
  part: PartData;
  onBack: () => void;
  onStartPostQuiz: () => void;
}

export const StudyPanel: React.FC<StudyPanelProps> = ({
  part,
  onBack,
  onStartPostQuiz
}) => {
  return (
    <div className="study-panel-container">
      <header className="study-header">
        <button 
          className="exit-btn" 
          onClick={() => {
            sfx.playClick();
            onBack();
          }}
        >
          ← 나가기
        </button>
        <span className="study-badge">📖 돌봄 가이드 학습: {part.title}</span>
      </header>

      <div className="study-card card-glow text-center">
        <div className="study-visual-box" style={{ margin: '20px 0 30px' }}>
          <span className="visual-illustration animate-float">🚧</span>
          <p className="visual-caption" style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--color-primary)' }}>
            콘텐츠 준비 중
          </p>
        </div>

        <h3 style={{ fontSize: '1.25rem', marginBottom: '12px', fontWeight: 800 }}>학습 자료 준비 중</h3>
        <p className="study-text" style={{ fontSize: '0.95rem', color: 'var(--text-muted)', marginBottom: '30px', lineHeight: '1.6' }}>
          본 파트의 상세 학습 교안은 준비 중입니다.<br />
          아래 버튼을 클릭하여 바로 <strong>사후 퀴즈(최종 테스트)</strong>에 도전하실 수 있습니다!
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <button 
            className="primary-btn pulse-anim" 
            onClick={() => {
              sfx.playVictory();
              onStartPostQuiz();
            }}
          >
            🔥 사후 퀴즈 바로 도전!
          </button>
          <button 
            className="secondary-btn" 
            onClick={() => {
              sfx.playClick();
              onBack();
            }}
          >
            퀴즈 목록으로 돌아가기
          </button>
        </div>
      </div>
    </div>
  );
};
