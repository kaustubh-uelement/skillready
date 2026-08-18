"use client";
import Link from 'next/link'
import useReveal from '@/lib/useReveal'
import PageHero from '@/components/ui/PageHero'
import { SectionHeading as SecHead } from '@/components/ui/SectionHeading'
import CtaBand from '@/components/ui/CtaBand'
import TopicIndex from '@/components/ui/TopicIndex'
import { Arrow, Icon } from '@/components/ui/Icons'
import { PATTERNS } from '@/data/site'

export default function Students() {
  useReveal()
  return (
    <>
      <PageHero
        crumb="Students"
        eyebrow="For students"
        title="Everything you need for the placement season, in one login"
        actions={[
          { to: '/signup', label: 'Start free', style: 'btn-violet', icon: <Arrow /> },
          { to: '/plans', label: 'Compare plans', style: 'btn-ghost' }
        ]}
      >
        Six modules built around how companies actually screen. Open to graduation and post-graduation students
        across B.E., B.Sc., B.Com., BCCA and B.Pharma — useful from first year onward.
      </PageHero>

      <section className="section" id="learn">
        <div className="wrap">
          <SecHead eyebrow="Module 01 — Learn" title="Practice, practice tests, and watch-and-learn">
            Every topic has three layers: a video lesson to understand it, practice exercises to drill it, and a
            practice test to prove you can do it against the clock.
          </SecHead>
          <div className="grid-3">
            <article className="card reveal">
              <div className="icon"><Icon name="play" /></div>
              <h3>Watch and learn</h3>
              <p>A trainer explains the concept and the shortcut, in the order the topic is actually tested.</p>
            </article>
            <article className="card reveal">
              <div className="icon"><Icon name="lines" /></div>
              <h3>Practice exercises</h3>
              <p>Graded sets per topic, from basic to placement level, with a video solution on every question.</p>
            </article>
            <article className="card reveal">
              <div className="icon"><Icon name="clock" /></div>
              <h3>Practice tests</h3>
              <p>Timed, sectional tests that report where your minutes went, not just your marks.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section tint" id="exams">
        <div className="wrap">
          <SecHead eyebrow="Module 02 — Exam" title="Company-specific mocks, not generic papers">
            Every recruiter tests differently: sections, weightage, negative marking, time per question. Practise
            the paper you are actually going to sit.
          </SecHead>
          <div className="grid-4">
            {PATTERNS.map((p) => (
              <article className="pattern reveal" key={p.title}>
                <div className="pt-top">
                  <h3>{p.title}</h3>
                  <span className="rounds">{p.rounds}</span>
                </div>
                <p>{p.body}</p>
                <ol>{p.steps.map((s) => <li key={s}>{s}</li>)}</ol>
              </article>
            ))}
          </div>
          <div className="note reveal" style={{ marginTop: '2rem' }}>
            <b>Full-length general mocks too</b>
            <p>
              If you do not know your target company yet, general mocks cover the common pattern across all four
              sections and give you a baseline score to improve on.
            </p>
          </div>
        </div>
      </section>

      <section className="section" id="recruiters">
        <div className="wrap">
          <div className="split">
            <div className="reveal">
              <span className="eyebrow">Module 03 — Top recruiters</span>
              <h2 style={{ fontSize: 'clamp(1.8rem,3.1vw,2.5rem)', margin: '.8rem 0 1rem' }}>
                See the skills they want, before the drive
              </h2>
              <p className="lede">
                Browse recruiter profiles with the exact skills each role asks for. Wishlist the companies you
                want, and you become more visible to them when they search.
              </p>
              <p className="lede" style={{ marginTop: '1rem' }}>
                Knowing a company wants SQL and data interpretation nine months out is the whole advantage. You
                get to prepare for a named target instead of a vague one.
              </p>
              <div style={{ marginTop: '1.7rem' }}>
                <Link className="btn btn-violet" href="/signup">Browse recruiters <Arrow /></Link>
              </div>
            </div>

            <div className="mock reveal">
              <div className="mock-top">
                <i></i><i></i><i></i>
                <span className="mock-title">Top recruiters — your wishlist</span>
              </div>
              <div className="results" style={{ padding: '1.4rem' }}>
                {[
                  ['IT services — graduate trainee', 'Python, SQL, aptitude 70+ · 2027 batch'],
                  ['Analytics — junior analyst', 'Excel, SQL, DI · CGPA 7.5+'],
                  ['Product — SDE intern', 'DSA, one language, projects · 3rd year+'],
                  ['Core — production engineer', 'Branch subjects, quality basics']
                ].map(([name, meta]) => (
                  <div className="res-row" key={name}>
                    <div className="res-av"></div>
                    <div>
                      <div className="res-name">{name}</div>
                      <div className="res-meta">{meta}</div>
                    </div>
                    <div className="res-score">★</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section tint" id="profile">
        <div className="wrap">
          <SecHead eyebrow="Module 04 — Profile" title="One profile recruiters can actually search">
            Keep it current and you show up in live searches. Leave it empty and you do not — it is the single
            highest-return ten minutes on the platform.
          </SecHead>
          <div className="grid-4">
            <article className="card reveal"><h3>Resume</h3><p>Upload it once, update it whenever. Recruiters see the latest version, not a stale copy.</p></article>
            <article className="card reveal"><h3>Skills</h3><p>The filter most employers search on first. Add what you can actually defend in an interview.</p></article>
            <article className="card reveal"><h3>Academics</h3><p>CGPA, course, branch and graduation year — the hard filters on every fresher search.</p></article>
            <article className="card reveal"><h3>Projects &amp; certifications</h3><p>What separates two candidates with the same marks. Add links wherever you have them.</p></article>
          </div>
        </div>
      </section>

      <section className="section" id="apply">
        <div className="wrap">
          <SecHead eyebrow="Modules 05 & 06 — Jobs and courses" title="Apply where hiring is open. Get help where you're stuck." />
          <div className="grid-2">
            <article className="card reveal">
              <div className="icon"><Icon name="bag" /></div>
              <h3>Jobs and internships</h3>
              <p>
                Live openings posted by companies, filtered to your year and course. Apply from the same account —
                your scores and profile travel with the application.
              </p>
              <div style={{ marginTop: '1.3rem' }}>
                <Link className="btn btn-dark btn-sm" href="/jobs">See openings <Arrow /></Link>
              </div>
            </article>
            <article className="card reveal">
              <div className="icon"><Icon name="layers" /></div>
              <h3>Live courses</h3>
              <p>
                Instructor-led courses run online or in hybrid mode by our own trainers, for the areas where
                self-practice has stopped working.
              </p>
              <div style={{ marginTop: '1.3rem' }}>
                <Link className="btn btn-dark btn-sm" href="/courses">See courses <Arrow /></Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section lilac" id="topics">
        <div className="wrap">
          <SecHead eyebrow="Question bank" title="6,000+ questions across four sections">
            Every one with its own video solution. Free sample sets in every topic.
          </SecHead>
          <TopicIndex />
        </div>
      </section>

      <CtaBand />
    </>
  )
}
