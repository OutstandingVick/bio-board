const roles=[
  {period:'Now',role:'Content Writer',company:'FossaPay',note:'Research-led content and market-facing narratives for a Web3 payments company.'},
  {period:'Recent',role:'Operations & Marketing',company:'Bounsser',note:'Connected brand, operations and audience strategy to help the product communicate with intent.'},
  {period:'Former',role:'State Lead',company:'Superteam Nigeria',note:'Led local ecosystem activity, relationships and community programming.'},
  {period:'Earlier',role:'Junior Writer & Researcher',company:'The Network State',note:'Produced accessible research and editorial work across emerging Web3 themes.'}
];
export default function Experience(){return <section className="section-block section-rule" id="experience"><div className="section-meta"><span>Known Whereabouts</span><span>Movements on record</span></div><div className="section-heading"><span>Professional record</span><h2>The Career Ledger</h2></div><div className="ledger">{roles.map((r,i)=><article key={r.company}><span className="ledger-no">0{i+1}</span><span className="ledger-period">{r.period}</span><div><h3>{r.role}</h3><strong>{r.company}</strong><p>{r.note}</p></div></article>)}</div></section>}
