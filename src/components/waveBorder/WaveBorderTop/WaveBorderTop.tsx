import styles from './WaveBorderTop.module.css';

export default function WaveBordertop() {
  return (
  <div className={styles.waveBorder}>
    <svg viewBox="0 0 500 150" preserveAspectRatio="none" role="presentation">
      <path className={styles.path} d="M0.00,49.98 C149.99,150.00 349.20,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z" ></path>
      <path className={styles.border} d="M0.00,49.98 C149.99,150.00 349.20,-49.98 500.00,49.98" ></path>
    </svg>
  </div>
  );
}