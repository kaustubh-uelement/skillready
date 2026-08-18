"use client";
import Link from 'next/link'
import useReveal from '@/lib/useReveal'
import PageHero from '@/components/ui/PageHero'
import { SectionHeading as SecHead } from '@/components/ui/SectionHeading'
import CtaBand from '@/components/ui/CtaBand'
import Faq from '@/components/ui/Faq'
import { Arrow, Tick } from '@/components/ui/Icons'
import { PLANS, FAQ_PLANS } from '@/data/site'

export default function Plans() {
  useReveal()
  return (
    <>
      <PageHero
        crumb="Plans"
        eyebrow="Plans and subscriptions"
        title="Start free. Upgrade when the drives get real."
        actions={[
          { to: '/signup', label: 'Start free', style: 'btn-violet', icon: <Arrow /> },
          { to: '/contact', label: 'Ask about college rates', style: 'btn-ghost' }
        ]}
      >
        A free account is genuinely useful, not a teaser. Subscriptions open the full question bank,
        company-specific papers, and the recruiter side of the platform.
      </PageHero>

      <section className="section">
        <div className="wrap">
          <div className="plans">
            {PLANS.map((p) => (
              <article className={'plan reveal' + (p.featured ? ' featured' : '')} key={p.name}>
                <h3>{p.name}</h3>
                <div className="price">
                  {p.price} {p.per && <small>{p.per}</small>}
                </div>
                <p className="note-sm">{p.note}</p>
                <ul>
                  {p.features.map((f) => (
                    <li key={f}><Tick />{f}</li>
                  ))}
                </ul>
                <Link className={'btn btn-block ' + p.cta.style} href={p.cta.to}>
                  {p.cta.label} {p.featured && <Arrow />}
                </Link>
              </article>
            ))}
          </div>
          <p style={{ marginTop: '1.5rem', fontSize: '.9rem', color: 'var(--ink-40)' }}>
            Live courses are priced per course and are separate from the subscription.{' '}
            <Link href="/courses" style={{ color: 'var(--violet-deep)', fontWeight: 600 }}>See courses</Link>.
          </p>
        </div>
      </section>

      <section className="section tint">
        <div className="wrap">
          <SecHead eyebrow="And for the other two" title="What colleges and companies pay" />
          <div className="grid-2">
            <article className="card reveal">
              <h3>Colleges — training, product, or both</h3>
              <p>
                Take the trainer-led programme, license the monitoring and testing product on its own, or combine
                them. Rates are deliberately disruptive against what most institutions currently spend on training
                plus assessment. We do not charge for placements and do not commit placement outcomes.
              </p>
              <div style={{ marginTop: '1.3rem' }}>
                <Link className="btn btn-dark btn-sm" href="/contact">Ask for the rate card <Arrow /></Link>
              </div>
            </article>
            <article className="card reveal">
              <h3>Companies — nothing</h3>
              <p>
                Posting roles, searching candidates and shortlisting are free for employers, permanently. Our
                revenue comes from college programmes and student subscriptions, which is exactly why we can keep
                the hiring side open.
              </p>
              <div style={{ marginTop: '1.3rem' }}>
                <Link className="btn btn-dark btn-sm" href="/companies">Open a hiring account <Arrow /></Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <SecHead eyebrow="Questions" title="About plans and payment" />
          <Faq items={FAQ_PLANS} />
        </div>
      </section>

      <CtaBand />
    </>
  )
}
