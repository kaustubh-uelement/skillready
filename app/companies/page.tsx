"use client";
import Link from 'next/link'
import useReveal from '@/lib/useReveal'
import PageHero from '@/components/ui/PageHero'
import { SectionHeading as SecHead } from '@/components/ui/SectionHeading'
import CtaBand from '@/components/ui/CtaBand'
import Faq from '@/components/ui/Faq'
import { Arrow } from '@/components/ui/Icons'
import { FAQ_COMPANY } from '@/data/site'

const CANDIDATES = [
  ['Candidate A — B.E. CSE', 'CGPA 8.4 · Python, SQL · 6 mocks cleared · resume updated', 92],
  ['Candidate B — B.Sc. CS', 'CGPA 8.1 · Python, SQL · 4 mocks cleared · 2 projects', 88],
  ['Candidate C — BCCA', 'CGPA 7.9 · SQL, Excel · 5 mocks cleared · certified', 85],
  ['Candidate D — B.E. IT', 'CGPA 7.6 · Python · 3 mocks cleared · wishlisted you', 81]
]

export default function Companies() {
  useReveal()
  return (
    <>
      <PageHero
        crumb="Companies"
        eyebrow="For companies"
        title="Screen fewer candidates for the same hire"
        actions={[
          { to: '/signup?role=company', label: 'Post a role free', style: 'btn-violet', icon: <Arrow /> },
          { href: '#post', label: 'How it works', style: 'btn-ghost' }
        ]}
      >
        Posting is free and self-serve, permanently. Every candidate arrives with test data already attached, so
        your first filter removes real redundancy instead of guessing from CVs.
      </PageHero>

      <section className="section">
        <div className="wrap">
          <SecHead eyebrow="The dashboard" title="Filter on evidence, not on formatting">
            CGPA, skills, aptitude scores, graduation year, course, college. Combine them and the shortlist is
            already defensible before the first call.
          </SecHead>
          <div className="mock reveal">
            <div className="mock-top">
              <i></i><i></i><i></i>
              <span className="mock-title">Candidate search — Software Engineer Trainee</span>
            </div>
            <div className="mock-body">
              <div className="filters">
                <h4>Filters</h4>
                <div className="fgroup">
                  <label htmlFor="cg">Minimum CGPA — 7.5</label>
                  <div className="track" id="cg" role="img" aria-label="Minimum CGPA 7.5"><i></i><b></b></div>
                </div>
                <div className="fgroup">
                  <label>Skills</label>
                  <div className="chips">
                    <span className="on">Python</span><span className="on">SQL</span><span>Java</span><span>React</span><span>Excel</span>
                  </div>
                </div>
                <div className="fgroup">
                  <label>Aptitude score</label>
                  <div className="chips"><span>60+</span><span className="on">80+</span><span>90+</span></div>
                </div>
                <div className="fgroup">
                  <label>Graduation year</label>
                  <div className="chips"><span className="on">2027</span><span>2028</span></div>
                </div>
                <div className="fgroup">
                  <label>College</label>
                  <div className="chips"><span className="on">All partner colleges</span></div>
                </div>
              </div>
              <div className="results">
                <div className="res-head"><span>Matching candidates — live</span><span>Aptitude</span></div>
                {CANDIDATES.map(([name, meta, score]) => (
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
        </div>
      </section>

      <section className="section tint">
        <div className="wrap">
          <SecHead eyebrow="Why it costs nothing" title="You are not the customer, and that is the point" />
          <div className="grid-3">
            <article className="card reveal"><h3>No hiring fee, ever</h3><p>You are not charged to post roles, search candidates or shortlist. Our revenue comes from college training programmes and student subscriptions.</p></article>
            <article className="card reveal"><h3>A better screening ratio</h3><p>Filter on CGPA, skills, aptitude scores and other parameters before the first call, so fewer candidates need screening per final selection.</p></article>
            <article className="card reveal"><h3>Live data across colleges</h3><p>Profiles stay current — resumes, skills, certifications, projects and latest scores — across every partner campus, in one search.</p></article>
          </div>
        </div>
      </section>

      <section className="section" id="post">
        <div className="wrap">
          <SecHead eyebrow="Onboarding" title="Two steps, and no sales call in between" />
          <div className="steps reveal">
            <div className="step">
              <b className="num">01</b>
              <div>
                <h4>Verify your organisation</h4>
                <p>Sign up with your work email and confirm your company details. A simple two-step verification.</p>
              </div>
            </div>
            <div className="step">
              <b className="num">02</b>
              <div>
                <h4>Post the profile and required skills</h4>
                <p>
                  Describe the role and the skills it needs. Matching candidates appear immediately, and students
                  can wishlist you back — which tells you who is already preparing for your pattern.
                </p>
              </div>
            </div>
          </div>
          <div className="grid-2 reveal" style={{ marginTop: '2.5rem' }}>
            <article className="card"><h3>What you can post</h3><p>Full-time fresher roles, internships, and campus drive requirements. Set the batch, course, CGPA cut-off and skills, and only matching students see it in their feed.</p></article>
            <article className="card"><h3>What you get back</h3><p>A filtered candidate list with test scores, resumes, projects and certifications attached — plus the wishlist signal showing which students are actively targeting you.</p></article>
          </div>
          <div style={{ marginTop: '2.2rem' }} className="reveal">
            <Link className="btn btn-violet btn-lg" href="/signup?role=company">Create a hiring account <Arrow /></Link>
          </div>
        </div>
      </section>

      <section className="section lilac">
        <div className="wrap">
          <SecHead eyebrow="Questions from recruiters" title="What hiring teams ask us" />
          <Faq items={FAQ_COMPANY} />
        </div>
      </section>

      <CtaBand
        title="Post your first role today"
        body="Two-step verification, then you are searching candidates on real test data. No cost at any point."
        primary={{ to: '/signup?role=company', label: 'Create a hiring account' }}
        secondary={{ to: '/contact', label: 'Talk to us' }}
      />
    </>
  )
}
