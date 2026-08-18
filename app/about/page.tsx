"use client";
import useReveal from '@/lib/useReveal'
import PageHero from '@/components/ui/PageHero'
import { SectionHeading as SecHead } from '@/components/ui/SectionHeading'
import CtaBand from '@/components/ui/CtaBand'
import { Arrow } from '@/components/ui/Icons'
import { TEAM, STATS } from '@/data/site'

export default function About() {
  useReveal()
  return (
    <>
      <PageHero
        crumb="About"
        eyebrow="About us"
        title="A product built by the people who do the training"
        actions={[
          { to: '/contact', label: 'Talk to us', style: 'btn-violet', icon: <Arrow /> },
          { to: '/students', label: 'See the platform', style: 'btn-ghost' }
        ]}
      >
        Most assessment platforms are software with content bolted on. Ours was built by trainers, which is why
        the training and the product follow the same plan.
      </PageHero>

      <section className="section">
        <div className="wrap split">
          <div className="reveal">
            <span className="eyebrow">The vision</span>
            <h2 style={{ fontSize: 'clamp(1.8rem,3.1vw,2.5rem)', margin: '.8rem 0 1.1rem' }}>
              One place to find a job and upgrade the skills that get you one
            </h2>
            <p className="lede">
              Deployed across the majority of colleges in India: students training on the same platform their
              placement cell monitors and their recruiters search. Three states today, Pan India within two years.
            </p>
            <p className="lede" style={{ marginTop: '1rem' }}>
              We are deliberately not a placement agency. We do not charge for placements and we do not promise
              them. We make students better prepared and make that preparation visible to employers — the hiring
              decision belongs to the company.
            </p>
          </div>
          <div
            className="band-facts reveal"
            style={{ background: 'var(--ink)', padding: '1.6rem', borderRadius: 'var(--radius-lg)' }}
          >
            {STATS.map((s) => (
              <div className="fact" key={s.value + s.label}>
                <b>{s.value}</b>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section tint">
        <div className="wrap">
          <SecHead eyebrow="The team" title="Who built it" />
          <div className="team">
            {TEAM.map((m) => (
              <article className="member reveal" key={m.name}>
                <div className="mono">{m.initials}</div>
                <h3>{m.name}</h3>
                <div className="role">{m.role}</div>
                <p>{m.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <SecHead eyebrow="What makes us different" title="Training and assessment, designed together" />
          <div className="grid-3">
            <article className="card reveal"><h3>Trainers wrote the content</h3><p>Every question and video solution comes from people who have watched thousands of students get the same thing wrong, and know why.</p></article>
            <article className="card reveal"><h3>One platform, three sides</h3><p>Students, placement cells and employers work from the same data instead of three disconnected tools that never reconcile.</p></article>
            <article className="card reveal"><h3>Honest about the boundary</h3><p>We sell training and insight. We do not sell placements. That line is why colleges trust the numbers we show them.</p></article>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  )
}
