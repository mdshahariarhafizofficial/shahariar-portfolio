import styled from 'styled-components';

export default function LoadingPage() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-95">
      <StyledWrapper>
        <div className="terminal-box">
          {/* Header */}
          <div className="terminal-header">
            <div className="terminal-title">🚀 Booting Portfolio...</div>
            <div className="terminal-controls">
              <div className="control red" />
              <div className="control yellow" />
              <div className="control green" />
            </div>
          </div>

          {/* Terminal Body */}
          <div className="terminal-body">
            <div className="line welcome">[INFO] Welcome, visitor!</div>
            <div className="line blue">[INIT] Preparing frontend modules...</div>
            <div className="line green">[OK] React Engine Loaded</div>
            <div className="line yellow">[LOADING] Tailwind System Booting...</div>
            <div className="line pink">[READY] UI Components Ready</div>
            <div className="line typing">[STATUS] Initializing... <span className="cursor">|</span></div>
          </div>
        </div>
      </StyledWrapper>
    </div>
  );
}

const StyledWrapper = styled.div`
  @keyframes blinkCursor {
    50% {
      opacity: 0;
    }
  }

  @keyframes typing {
    0% {
      width: 0;
    }
    100% {
      width: 26ch;
    }
  }

  .terminal-box {
    width: 360px;
    background-color: #111827;
    color: #10b981;
    font-family: 'Courier New', Courier, monospace;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 0 20px rgba(16, 185, 129, 0.2);
    border: 1px solid #2dd4bf;
  }

  .terminal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #1f2937;
    padding: 0.5em 1em;
    border-bottom: 1px solid #2dd4bf;
  }

  .terminal-title {
    font-weight: bold;
    color: #22d3ee;
    font-size: 0.9em;
  }

  .terminal-controls {
    display: flex;
    gap: 0.4em;
  }

  .control {
    width: 0.75em;
    height: 0.75em;
    border-radius: 9999px;
  }

  .control.red {
    background-color: #f87171;
  }

  .control.yellow {
    background-color: #facc15;
  }

  .control.green {
    background-color: #4ade80;
  }

  .terminal-body {
    padding: 1em 1.2em;
    display: flex;
    flex-direction: column;
    gap: 0.4em;
    font-size: 0.9em;
  }

  .line {
    white-space: nowrap;
    overflow: hidden;
  }

  .welcome {
    color: #a78bfa;
  }

  .blue {
    color: #38bdf8;
  }

  .green {
    color: #34d399;
  }

  .yellow {
    color: #fbbf24;
  }

  .pink {
    color: #ec4899;
  }

  .typing {
    color: #2dd4bf;
    width: 26ch;
    animation: typing 2.5s steps(26, end) infinite;
  }

  .cursor {
    display: inline-block;
    animation: blinkCursor 0.8s step-end infinite;
  }
`;
