import styles from './WaveBorderBottom.module.css';

export default function WaveBorderBottom() {
  return (
  <div className={styles.waveBorder}>
    <svg viewBox="0 0 500 150" preserveAspectRatio="none" role="presentation">
      <path className={styles.path} d="M0.00,49.98 C149.99,150.00 271.49,-49.98 500.00,49.98 L500.00,0.00 L0.00,0.00 Z" ></path>
      <path className={styles.border} d="M0.00,49.98 C149.99,150.00 271.49,-49.98 500.00,49.98" ></path>
    </svg>
  </div>
  );
}