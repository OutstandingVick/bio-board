export default function Developer() {
  return <section className="developer-feature section-rule" id="developer">
    <div className="section-meta"><span>The Other Desk</span><span>Filed under: Product Engineering</span></div>
    <div className="developer-feature__inner">
      <div className="developer-feature__copy">
        <p className="eyebrow">Frontend Engineer · Full-process Builder</p>
        <h2>He writes the story.<br/><em>He also builds the product.</em></h2>
        <p>Beyond research and writing, Victor designs and builds useful digital products—from the first rough idea to a polished experience people can actually use.</p>
        <p>His development work brings the same instinct for clarity to interfaces, systems and the details that make software feel considered.</p>
        <a className="button dark" href="https://www.builtbyvick.work/" target="_blank" rel="noreferrer">View developer portfolio →</a>
      </div>
      <aside className="developer-feature__ledger" aria-label="Development toolkit">
        <p className="label">Working toolkit</p>
        <ul>
          <li><span>Front end</span><strong>React · Next.js · Tailwind</strong></li>
          <li><span>Underneath</span><strong>Node.js · APIs · Databases</strong></li>
          <li><span>Web3</span><strong>Solana · Rust · Infrastructure</strong></li>
        </ul>
      </aside>
    </div>
  </section>;
}
