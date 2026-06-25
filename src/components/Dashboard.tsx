import React, { useState } from 'react';
import { quizData, type RobotCategory } from '../data/quizData';
import { sfx } from '../utils/soundEffects';

interface DashboardProps {
  level: number;
  xp: number;
  xpToNextLevel: number;
  badges: Record<string, boolean>; // key format: "category-part" (e.g. "excretion-1")
  onSelectCategory: (category: RobotCategory) => void;
  isMuted: boolean;
  onToggleMute: () => void;
}

export const Dashboard: React.FC<DashboardProps> = ({
  level,
  xp,
  xpToNextLevel,
  badges,
  onSelectCategory,
  isMuted,
  onToggleMute
}) => {
  const [showXpModal, setShowXpModal] = useState(false);

  const getCategoryCompletionCount = (catId: string) => {
    let count = 0;
    const cat = quizData.find(c => c.id === catId);
    if (!cat) return 0;
    for (let p = 1; p <= cat.parts.length; p++) {
      if (badges[`${catId}-${p}`]) {
        count++;
      }
    }
    return count;
  };

  const totalParts = quizData.reduce((acc, cat) => acc + cat.parts.length, 0);
  const totalBadges = Object.values(badges).filter(Boolean).length;
  const xpPercent = Math.min(100, Math.floor((xp / xpToNextLevel) * 100));

  const handleCategoryClick = (cat: RobotCategory) => {
    sfx.playClick();
    onSelectCategory(cat);
  };

  return (
    <div className="dashboard-container">
      <header className="game-header">
        <div className="logo-section">
          <span className="logo-emoji">🤖</span>
          <div>
            <h1 className="logo-title">Care Bot Quiz</h1>
            <p className="logo-subtitle">돌봄로봇 교육 플랫폼</p>
          </div>
        </div>
        <div className="header-actions">
          <button 
            className="mute-btn" 
            onClick={() => {
              sfx.setMute(!isMuted);
              onToggleMute();
              sfx.playClick();
            }}
          >
            {isMuted ? '🔇 음소거 해제' : '🔊 음소거'}
          </button>
        </div>
      </header>

      {/* Hero Stats */}
      <section 
        className="stats-board card-glow" 
        style={{ cursor: 'pointer' }}
        onClick={() => {
          sfx.playClick();
          setShowXpModal(true);
        }}
        title="클릭하여 레벨업 조건 확인"
      >
        <div className="player-avatar-section">
          <div className="avatar-frame">
            <span className="avatar-emoji">🌟</span>
          </div>
          <div className="player-info">
            <h2 className="player-rank">초보 돌보미</h2>
            <div className="level-badge">LV. {level}</div>
          </div>
        </div>

        <div className="stats-progress-section">
          <div className="stat-row">
            <span>EXP 경험치 (클릭하여 레벨업 정보 보기)</span>
            <span>{xp} / {xpToNextLevel}</span>
          </div>
          <div className="progress-bar-container">
            <div className="progress-bar-fill" style={{ width: `${xpPercent}%` }}></div>
          </div>
        </div>

        <div className="badge-count-section">
          <span className="stat-label">획득 훈장</span>
          <span className="stat-value">🏆 {totalBadges} / {totalParts}</span>
        </div>
      </section>

      {/* Level-Up Info Modal */}
      {showXpModal && (
        <div className="level-up-overlay slide-up-anim" onClick={() => setShowXpModal(false)}>
          <div className="level-up-alert card-glow" onClick={(e) => e.stopPropagation()}>
            <span className="lvl-alert-emoji">⭐ 레벨업 가이드 ⭐</span>
            <h2>경험치(XP) 획득 및 레벨업 조건</h2>
            <p style={{ margin: '12px 0', textAlign: 'left', lineHeight: '1.6' }}>
              • <strong>사전 퀴즈 완료:</strong> +25 XP<br />
              • <strong>최종 테스트 완료:</strong> +60 XP<br />
              • 경험치가 목표 수치(현재 {xpToNextLevel} XP)에 도달하면 레벨이 오르고, 다음 목표 수치가 증가합니다.
            </p>
            <button className="primary-btn" onClick={() => setShowXpModal(false)}>확인</button>
          </div>
        </div>
      )}

      {/* Robot Categories Grid */}
      <main className="quest-map-area">
        <h2 className="section-title">돌봄로봇 목록</h2>
        <div className="categories-grid">
          {quizData.map((category) => {
            const completedCount = getCategoryCompletionCount(category.id);
            const isCompleted = completedCount === category.parts.length;

            return (
              <div 
                key={category.id} 
                className={`category-card ${isCompleted ? 'category-finished' : ''}`}
                onClick={() => handleCategoryClick(category)}
              >
                <div className="card-top">
                  <span className="cat-icon">{category.icon}</span>
                  <span className="cat-badge">{completedCount}/{category.parts.length} 완료</span>
                </div>
                <h3 className="cat-name">{category.name}</h3>
                <div className="card-footer" style={{ borderTop: 'none', marginTop: '0', paddingTop: '0' }}>
                  <div className="mini-progress-track">
                    {category.parts.map((part) => (
                      <span 
                        key={part.id} 
                        className={`mini-dot ${badges[`${category.id}-${part.id}`] ? 'active' : ''}`}
                      />
                    ))}
                  </div>
                  <button className="enter-btn">퀴즈 풀기 →</button>
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
};
