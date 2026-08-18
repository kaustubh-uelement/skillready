"use client";
import useReveal from '@/lib/useReveal'
import PageHero from '@/components/ui/PageHero'
import { SectionHeading as SecHead } from '@/components/ui/SectionHeading'
import CtaBand from '@/components/ui/CtaBand'
import Faq from '@/components/ui/Faq'
import { Arrow, Icon } from '@/components/ui/Icons'
import { COLLEGE_BENEFITS, FAQ_COLLEGE } from '@/data/site'

const STEPS = [
  ['01', 'Walkthrough with your cell', 'Thirty minutes with the dean, TPO or principal. We show the dashboard, not a slide deck.'],
  ['02', 'Pilot with one batch', 'Run the programme on a single batch with a baseline test, so the improvement is measurable rather than argued.'],
  ['03', 'Onboard the institution', 'Student accounts, the assessment calendar, and cell logins configured for your structure.'],
  ['04', 'Review each term', 'Batch reports at the end of every term, with the topics to target next.']
]

const WATCHLIST = [
  ['Student 1 — roll 21', '2 of 6 tests attempted · quants below batch average', 41],
  ['Student 2 — roll 34', 'All tests attempted · verbal dropped two tests running', 52],
  ['Student 3 — roll 47', 'No app activity in 14 days', 38],
  ['Student 4 — roll 58', 'Improving · ready for company-specific mocks', 74]
]

export default function Colleges() {
  useReveal()
  return (
    <>
      <PageHero
        crumb="Colleges"
        eyebrow="For colleges"
        title="Better training, and the data to prove it moved"
        actions={[
          { to: '/contact', label: 'Request a campus walkthrough', style: 'btn-violet', icon: <Arrow /> },
          { href: '#monitoring', label: 'See the monitoring system', style: 'btn-ghost' }
        ]}
      >
        For deans of training and placement, placement officers and principals who need to show progress with
        numbers rather than impressions. Take the training, the product, or both.
      </PageHero>

      <section className="section">
        <div className="wrap">
          <SecHead eyebrow="Six reasons cells sign" title="What the partnership actually includes" />
          <div className="grid-3">
            {COLLEGE_BENEFITS.map((b) => (
              <article className="card reveal" key={b.title}>
                <div className="icon"><Icon name={b.icon} /></div>
                <h3>{b.title}</h3>
                <p>{b.body}</p>
              </article>
            ))}
          </div>
          <div className="note reveal" style={{ marginTop: '2.2rem' }}>
            <b>What we don&apos;t do</b>
            <p>
              We do not charge colleges for placements and we do not commit placement outcomes. What we provide is
              better training and better insight through our monitoring system. Hiring decisions stay with
              companies, where they belong.
            </p>
          </div>
        </div>
      </section>

      <section className="section tint" id="monitoring">
        <div className="wrap">
          <SecHead eyebrow="The monitoring system" title="What your placement cell sees">
            Not attendance sheets. Attempt rates, score movement over time, and the specific topics where a batch
            is losing marks.
          </SecHead>
          <div className="mock reveal">
            <div className="mock-top">
              <i></i><i></i><i></i>
              <span className="mock-title">Batch monitoring — B.E. 2027, aptitude programme</span>
            </div>
            <div className="mock-body">
              <div className="filters">
                <h4>Batch health</h4>
                <div className="fgroup">
                  <label>Attempt rate — 84%</label>
                  <div className="track" role="img" aria-label="Attempt rate 84 percent">
                    <i style={{ width: '84%' }}></i><b style={{ left: '84%' }}></b>
                  </div>
                </div>
                <div className="fgroup">
                  <label>Average score movement</label>
                  <div className="track" role="img" aria-label="Score movement up 22 percent">
                    <i style={{ width: '62%' }}></i><b style={{ left: '62%' }}></b>
                  </div>
                  <p style={{ fontSize: '.82rem', color: 'var(--ink-40)', marginTop: '.4rem' }}>
                    +22% since the programme began
                  </p>
                </div>
                <div className="fgroup">
                  <label>Weakest topics</label>
                  <div className="chips">
                    <span className="on">Probability</span><span className="on">Data sufficiency</span><span>Para jumbles</span>
                  </div>
                </div>
                <div className="fgroup">
                  <label>Sections</label>
                  <div className="chips">
                    <span className="on">Quants</span><span>LR</span><span>Tech</span><span>Verbal</span>
                  </div>
                </div>
              </div>
              <div className="results">
                <div className="res-head"><span>Students needing attention</span><span>Latest</span></div>
                {WATCHLIST.map(([name, meta, score]) => (
                  <div className="res-row" key={name}>
                    <div className="res-av"></div>
                    <div>
                      <div className="res-name">{name}</div>
                      <div className="res-meta">{meta}</div>
                    </div>
                    <div className="res-score">{score}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <p style={{ marginTop: '1.2rem', fontSize: '.88rem', color: 'var(--ink-40)' }}>
            Illustrative view. Your dashboard shows your own batches and your own assessment schedule.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <SecHead eyebrow="How partnerships work" title="Three ways to engage, one conversation to start" />
          <div className="grid-3">
            <article className="card reveal"><h3>Training only</h3><p>Our trainers deliver the programme to your batches on a schedule that fits your term. Assessment stays with you.</p></article>
            <article className="card reveal"><h3>Product only</h3><p>License the platform and the monitoring system. Your own trainers deliver, and you get the data layer underneath them.</p></article>
            <article className="card reveal"><h3>Both</h3><p>The full package, and the option most cells choose: trainer-led sessions plus real-time monitoring of what those sessions changed.</p></article>
          </div>
          <div className="steps reveal" style={{ marginTop: '2.5rem' }}>
            {STEPS.map(([num, title, body]) => (
              <div className="step" key={num}>
                <b className="num">{num}</b>
                <div><h4>{title}</h4><p>{body}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section lilac">
        <div className="wrap">
          <SecHead eyebrow="Questions from placement cells" title="The things you'll ask in the first meeting" />
          <Faq items={FAQ_COLLEGE} />
        </div>
      </section>

      <CtaBand
        title="Talk to us before your next drive season"
        body="A walkthrough takes thirty minutes and we will show you the monitoring dashboard with live data, not slides."
        primary={{ to: '/contact', label: 'Request a walkthrough' }}
        secondary={{ to: '/login', label: 'Log in' }}
      />
    </>
  )
}
