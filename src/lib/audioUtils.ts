let audioContext: AudioContext | null = null;

function getAudioContext(): AudioContext {
  if (!audioContext) {
    audioContext = new AudioContext();
  }
  return audioContext;
}

export function playTick() {
  try {
    const ctx = getAudioContext();
    const oscillator = ctx.createOscillator();
    const gain = ctx.createGain();
    
    oscillator.connect(gain);
    gain.connect(ctx.destination);
    
    oscillator.type = "square";
    oscillator.frequency.setValueAtTime(800 + Math.random() * 400, ctx.currentTime);
    
    gain.gain.setValueAtTime(0.03, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.05);
    
    oscillator.start(ctx.currentTime);
    oscillator.stop(ctx.currentTime + 0.05);
  } catch {
    // Audio not available
  }
}

export function playDing() {
  try {
    const ctx = getAudioContext();
    const oscillator = ctx.createOscillator();
    const gain = ctx.createGain();
    
    oscillator.connect(gain);
    gain.connect(ctx.destination);
    
    oscillator.type = "sine";
    oscillator.frequency.setValueAtTime(1200, ctx.currentTime);
    oscillator.frequency.exponentialRampToValueAtTime(600, ctx.currentTime + 0.3);
    
    gain.gain.setValueAtTime(0.08, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.3);
    
    oscillator.start(ctx.currentTime);
    oscillator.stop(ctx.currentTime + 0.3);
  } catch {
    // Audio not available
  }
}
