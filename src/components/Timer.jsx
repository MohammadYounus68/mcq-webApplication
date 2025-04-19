function Timer({ timeLeft }) {
    const hours = Math.floor(timeLeft / 3600);
    const minutes = Math.floor((timeLeft % 3600) / 60);
    const seconds = timeLeft % 60;
  
    const pad = (n) => String(n).padStart(2, '0');
  
    return (
      <h3>
        Time Left: {pad(hours)}:{pad(minutes)}:{pad(seconds)}
      </h3>
    );
  }
  
  export default Timer;
  