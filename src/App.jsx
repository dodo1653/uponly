import { motion } from 'framer-motion'

function App() {
  return (
    <div className="app">
      <motion.div 
        className="marquee"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <div className="marquee-track">
          <span>UP ONLY ▲ UP ONLY ▲ UP ONLY ▲ UP ONLY ▲ UP ONLY ▲ UP ONLY ▲ UP ONLY ▲ UP ONLY ▲ UP ONLY ▲ UP ONLY ▲ UP ONLY ▲ UP ONLY ▲ UP ONLY ▲ UP ONLY ▲</span>
          <span>UP ONLY ▲ UP ONLY ▲ UP ONLY ▲ UP ONLY ▲ UP ONLY ▲ UP ONLY ▲ UP ONLY ▲ UP ONLY ▲ UP ONLY ▲ UP ONLY ▲ UP ONLY ▲ UP ONLY ▲ UP ONLY ▲ UP ONLY ▲</span>
        </div>
      </motion.div>

      <nav className="nav">
        <span className="logo">UP ONLY</span>
        <div className="nav-links">
          <a href="#lore">LORE</a>
          <a href="#studio">STUDIO</a>
          <a href="#tokenomics">TOKENOMICS</a>
          <a href="#howto">HOW TO BUY</a>
          <a href="https://pump.fun/launchpad" target="_blank" rel="noopener" className="buy-btn">BUY NOW</a>
        </div>
      </nav>

      <section className="hero">
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="hero-illustration"
        >
          <img src="/uponly.png" alt="UP ONLY" className="hero-image" />
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="hero-title"
        >
          THE FINANCE IS
        </motion.h1>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="hero-title highlight"
        >
          UP ONLY
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="hero-desc"
        >
          A shirt. A cult. A lifestyle.
        </motion.p>
      </section>

      <section id="lore" className="lore">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="section-content"
        >
          <p className="section-label">THE LORE</p>
          
          <div className="lore-card">
            <p>Once upon a time, in a land far away, there was a bear who believed in only one thing: the finance goes up. Not down. Not sideways. UP.</p>
            <p>They said he was crazy. They said it wouldn't last.</p>
            <p>But every morning, he'd put on his shirt, look in the mirror, and say:</p>
            <p className="quote">"UP ONLY."</p>
            <p>And you know what? It was.</p>
            <p>Now the shirt has a token. Now the cult has a symbol. Now the finance is up only.</p>
          </div>
        </motion.div>
      </section>

      <section id="studio" className="studio">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="section-content"
        >
          <p className="section-label">THE STUDIO</p>
          
          <div className="studio-grid">
            {[1, 2, 3, 4].map((i) => (
              <motion.div 
                key={i}
                className="studio-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="studio-placeholder">UP ONLY</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <section id="tokenomics" className="tokenomics">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="section-content"
        >
          <p className="section-label">TOKENOMICS</p>
          
          <div className="token-grid">
            <motion.div 
              className="token-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <span className="token-value">1B</span>
              <span className="token-label">TOTAL SUPPLY</span>
            </motion.div>
            <motion.div 
              className="token-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <span className="token-value">0</span>
              <span className="token-label">TAX</span>
            </motion.div>
            <motion.div 
              className="token-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <span className="token-value">LP</span>
              <span className="token-label">BURNED</span>
            </motion.div>
            <motion.div 
              className="token-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <span className="token-value">OWNED</span>
              <span className="token-label">MINT</span>
            </motion.div>
          </div>
        </motion.div>
      </section>

      <section id="howto" className="howto">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="section-content centered"
        >
          <p className="section-label">HOW TO BUY</p>
          
          <div className="steps">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="step"
            >
              <span className="step-num">01</span>
              <p>Create a Phantom wallet</p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="step"
            >
              <span className="step-num">02</span>
              <p>Get some SOL</p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="step"
            >
              <span className="step-num">03</span>
              <p>Swap on pump.fun</p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="step"
            >
              <span className="step-num">04</span>
              <p>HODL forever. Up only.</p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      <footer className="footer">
        <span>UP ONLY © 2025</span>
        <div className="footer-links">
          <a href="https://x.com/uponlyshirt" target="_blank" rel="noopener">TWITTER</a>
          <a href="https://t.me/onlyupshirt" target="_blank" rel="noopener">TELEGRAM</a>
        </div>
      </footer>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Anybody:wght@400;500;600;700;800&display=swap');
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          font-family: 'Anybody', sans-serif;
          background: #FFF8E7;
          color: #1a1a1a;
          -webkit-font-smoothing: antialiased;
          overflow-x: hidden;
        }

        .app {
          min-height: 100vh;
          background: #FFF8E7;
        }

        .marquee {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          background: #00FF00;
          color: #1a1a1a;
          padding: 0.5rem 0;
          overflow: hidden;
          z-index: 100;
        }

        .marquee-track {
          display: flex;
          white-space: nowrap;
          animation: marquee 20s linear infinite;
          font-size: 0.75rem;
          letter-spacing: 0.2em;
          font-weight: 800;
        }

        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .nav {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem 2rem;
          z-index: 50;
        }

        .logo {
          font-size: 1rem;
          font-weight: 800;
          letter-spacing: 0.1em;
        }

        .nav-links {
          display: flex;
          gap: 1.5rem;
        }

        .nav-links a {
          font-size: 0.875rem;
          color: #1a1a1a;
          font-weight: 600;
          transition: opacity 0.2s;
        }

        .nav-links a:hover {
          opacity: 0.5;
        }

        .nav-links .buy-btn {
          background: #00FF00;
          color: #1a1a1a;
          padding: 0.5rem 1rem;
          border-radius: 0.5rem;
          font-weight: 700;
        }

        .nav-links .buy-btn:hover {
          opacity: 1;
        }

        .hero {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 6rem 2rem 2rem;
          text-align: center;
        }

        .hero-illustration {
          margin-bottom: 2rem;
        }

        .hero-image {
          max-width: 400px;
          width: 90%;
          height: auto;
          border-radius: 1rem;
        }

        .hero-title {
          font-size: clamp(2.5rem, 8vw, 6rem);
          font-weight: 800;
          line-height: 0.9;
          letter-spacing: -0.03em;
        }

        .hero-title.highlight {
          color: #00FF00;
          text-shadow: 4px 4px 0 #1a1a1a;
        }

        .hero-desc {
          margin-top: 2rem;
          font-size: 1.25rem;
          font-weight: 500;
          letter-spacing: 0.1em;
        }

        .section-content {
          max-width: 800px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        .section-content.centered {
          text-align: center;
        }

        .section-label {
          font-size: 0.875rem;
          font-weight: 700;
          color: #1a1a1a;
          letter-spacing: 0.3em;
          margin-bottom: 3rem;
        }

        .lore {
          padding: 8rem 0;
        }

        .lore-card {
          background: #FFF8E7;
          border: 3px solid #1a1a1a;
          border-radius: 1rem;
          padding: 3rem;
          box-shadow: 8px 8px 0 #1a1a1a;
        }

        .lore-card p {
          font-size: 1.125rem;
          line-height: 1.8;
          margin-bottom: 1.5rem;
        }

        .lore-card .quote {
          font-size: 2rem;
          font-weight: 800;
          color: #00FF00;
          text-shadow: 2px 2px 0 #1a1a1a;
          margin: 2rem 0;
        }

        .studio {
          padding: 8rem 0;
          background: #1a1a1a;
        }

        .studio .section-label {
          color: #FFF8E7;
        }

        .studio-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5rem;
        }

        .studio-card {
          aspect-ratio: 1;
          background: #FFF8E7;
          border: 3px solid #FFF8E7;
          border-radius: 1rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .studio-placeholder {
          font-size: 1.5rem;
          font-weight: 800;
          color: #1a1a1a;
        }

        .tokenomics {
          padding: 8rem 0;
        }

        .token-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5rem;
        }

        .token-card {
          background: transparent;
          border: 2px solid #1a1a1a;
          border-radius: 1rem;
          padding: 2rem;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .token-value {
          font-size: 2rem;
          font-weight: 800;
          color: #00FF00;
        }

        .token-label {
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.1em;
        }

        .howto {
          padding: 8rem 0;
          background: #1a1a1a;
        }

        .howto .section-label {
          color: #FFF8E7;
        }

        .steps {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          max-width: 500px;
          margin: 0 auto;
        }

        .step {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          padding: 1.5rem;
          background: transparent;
          border: 2px solid #FFF8E7;
          border-radius: 1rem;
        }

        .step-num {
          font-size: 1.5rem;
          font-weight: 800;
          color: #00FF00;
        }

        .step p {
          font-size: 1.125rem;
          font-weight: 600;
          color: #FFF8E7;
        }

        .footer {
          padding: 3rem 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-top: 2px solid #1a1a1a;
        }

        .footer span {
          font-weight: 700;
        }

        .footer-links {
          display: flex;
          gap: 1.5rem;
        }

        .footer-links a {
          font-weight: 600;
          font-size: 0.875rem;
        }

        @media (max-width: 768px) {
          .nav-links {
            display: none;
          }
          
          .token-grid {
            grid-template-columns: 1fr;
          }
          
          .footer {
            flex-direction: column;
            gap: 1rem;
          }
        }
      `}</style>
    </div>
  )
}

export default App