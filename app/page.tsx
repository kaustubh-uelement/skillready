"use client";
import Link from 'next/link'
import useReveal from '@/lib/useReveal'
import useForm from '@/lib/useForm'
import { SectionHeading as SecHead } from '@/components/ui/SectionHeading'
import CtaBand from '@/components/ui/CtaBand'
import Faq from '@/components/ui/Faq'
import TopicIndex from '@/components/ui/TopicIndex'
import JobCard from '@/components/ui/JobCard'
import { Arrow, Tick, Mark, Icon } from '@/components/ui/Icons'
import { Field, Select, ChipRadio, FormMessage } from '@/components/ui/Field'
import { STATS, MODULES, SECTIONS, JOURNEY, JOBS, FAQ_HOME } from '@/data/site'

const COURSES = ['B.E. / B.Tech', 'B.Sc.', 'B.Com.', 'BCCA / BCA', 'B.Pharma', 'M.Sc. / MCA / MBA', 'Other']

function HeroSignup() {
  /* FORM: pass onSubmit to useForm to POST this to your signup endpoint. */
  const f = useForm(
    { name: '', phone: '', course: COURSES[0], year: '2nd' },
    {
      required: [{ name: 'name', label: 'your name' }, { name: 'phone', label: 'your mobile number' }],
      success: "You're set — connect this form to your signup endpoint to create the account."
    }
  )

  return (
    <div className="convert reveal">
      <h3>Start free in 30 seconds</h3>
      <p className="sub">One free mock test, sample practice sets, and your profile. No payment.</p>
      <Field label="Full name" id="h-name" value={f.values.name} onChange={f.set('name')}
             placeholder="Your name" autoComplete="name" />
      <Field label="Mobile number" id="h-phone" type="tel" value={f.values.phone} onChange={f.set('phone')}
             placeholder="10-digit mobile" autoComplete="tel" />
      <Select label="Course" id="h-course" value={f.values.course} onChange={f.set('course')} options={COURSES} />
      <ChipRadio label="Year of study" name="h-year" options={['1st', '2nd', '3rd', 'Final']}
                 value={f.values.year} onChange={f.set('year')} />
      <button className="btn btn-violet btn-block" onClick={f.submit} disabled={f.busy} type="button">
        Create my free account <Arrow />
      </button>
      <FormMessage>{f.message}</FormMessage>
      <p className="convert-foot">
        Already registered? <Link href="/login" style={{ color: 'var(--violet-deep)', fontWeight: 600 }}>Log in</Link>
      </p>
    </div>
  )
}

export default function Home() {
  useReveal()

  return (
    <>
      <section className="hero">
        <div className="wrap hero-in">
          <div>
            <span className="badge"><i></i>Welcome onboard — first mock test is free</span>
            <h1>Get placed.<br />Start practising<br />in the <em>first year</em>.</h1>
            <p className="lede">
              6,000+ aptitude, reasoning, technical and verbal questions — every single one with a video
              solution. Company-specific mocks, live courses, and jobs you can actually apply to, in one account.
            </p>
            <div className="hero-cta">
              <Link className="btn btn-violet btn-lg" href="/signup">Take a free mock test <Arrow /></Link>
              <Link className="btn btn-ghost btn-lg" href="/jobs">Browse live jobs</Link>
            </div>
            <div className="hero-proof">
              <span><Tick /> No card needed</span>
              <span><Tick /> Video solution for every question</span>
              <span><Tick /> Practise on the mobile app</span>
            </div>
          </div>
          <div><HeroSignup /></div>
        </div>

        <div className="wrap hero-strip">
          <Mark className="strip-mark" />
          <p className="strip-copy">Learn the right skills.<br />Build employability.</p>
          <div className="strip-actions">
            <Link className="btn btn-dark" href="/students">Students <Arrow /></Link>
            <Link className="btn btn-dark" href="/colleges">Colleges <Arrow /></Link>
            <Link className="btn btn-dark" href="/companies">Companies <Arrow /></Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <SecHead eyebrow="Why students get rejected" title="Nobody fails a placement test for lack of intelligence">
            They fail because nobody showed them the pattern, the timing, or why their answer was wrong.
            That is the entire gap SkillReady was built to close.
          </SecHead>
          <div className="grid-3">
            <article className="card reveal">
              <div className="icon"><Icon name="clock" /></div>
              <h3>You ran out of time</h3>
              <p>Aptitude rounds are a speed test disguised as a maths test. Timed practice sets and full-length mocks train the clock, not just the concept.</p>
            </article>
            <article className="card reveal">
              <div className="icon"><Icon name="fall" /></div>
              <h3>You never learnt why it was wrong</h3>
              <p>An answer key tells you nothing. Every one of our 6,000+ questions has a video solution that walks through the method.</p>
            </article>
            <article className="card reveal">
              <div className="icon"><Icon name="doc" /></div>
              <h3>You prepared for the wrong paper</h3>
              <p>Every company tests differently. Practise on company-specific mocks and see the exact skills each recruiter has asked for.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section tint">
        <div className="wrap">
          <SecHead eyebrow="Your four-year path" title="Start in first year and the final year takes care of itself">
            Most students begin preparing three months before drives. Here is what the other route looks like.
          </SecHead>
          <div className="journey reveal">
            {JOURNEY.map((j) => (
              <div className="jstep" key={j.year}>
                <div className="yr">{j.year}</div>
                <h4>{j.title}</h4>
                <p>{j.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="modules">
        <div className="wrap">
          <SecHead eyebrow="What you get" title="Six modules, one login">
            Open to graduation and post-graduation students across B.E., B.Sc., B.Com., BCCA and B.Pharma.
          </SecHead>
          <div className="modules reveal">
            {MODULES.map((m) => (
              <div className="mod" key={m.tag}>
                <span className="mod-tag">{m.tag}</span>
                <b>{m.title}</b>
                <span>{m.body}</span>
              </div>
            ))}
          </div>
          <div style={{ marginTop: '2rem' }} className="reveal">
            <Link className="btn btn-dark" href="/students">See the full student portal <Arrow /></Link>
          </div>
        </div>
      </section>

      <section className="section tint">
        <div className="wrap">
          <div className="bank reveal">
            <div>
              <h2>6,000+ questions.<br />A video solution for every one.</h2>
              <p>
                Getting a question wrong is only useful if you find out why. Every question has a worked video
                explanation, so practice turns into understanding instead of guessing.
              </p>
              <p className="bank-note"><Tick /> Practise on the web or on the mobile app</p>
              <div style={{ marginTop: '1.6rem' }}>
                <Link className="btn btn-white" href="/signup">Try a free set <Arrow /></Link>
              </div>
            </div>
            <div className="bank-grid">
              {SECTIONS.map((s) => (
                <div className="bank-cell" key={s.name}>
                  <b>{s.name}</b>
                  <span>{s.body}</span>
                </div>
              ))}
            </div>
          </div>

          <h3 style={{ marginTop: '3.2rem', fontSize: '1.3rem' }} className="reveal" id="topics">
            Start practising by topic
          </h3>
          <p className="reveal" style={{ color: 'var(--ink-40)', fontSize: '.94rem', margin: '.4rem 0 1.6rem' }}>
            Free sample sets in every topic. No login needed to look.
          </p>
          <TopicIndex />
        </div>
      </section>

      <section className="band">
        <div className="wrap band-in">
          <div className="reveal">
            <span className="eyebrow" style={{ color: '#C4A6FF' }}>Why us</span>
            <h2 style={{ marginTop: '.7rem' }}>Built by trainers, not just by engineers</h2>
            <p>
              Most assessment platforms are software with content bolted on. SkillReady was built by people who
              have stood in front of classrooms for years, so the training and the product follow the same plan.
            </p>
            <div style={{ marginTop: '1.5rem' }}>
              <Link className="btn btn-outline-white" href="/about">Meet the team <Arrow /></Link>
            </div>
          </div>
          <div className="band-facts reveal">
            {STATS.map((s) => (
              <div className="fact" key={s.value + s.label}>
                <b>{s.value}</b>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <SecHead eyebrow="Jobs and internships" title="Companies post here. You apply from the same account.">
            Employers pay us nothing, so they post freely — and they search on your test scores, not on how well
            you formatted a CV.
          </SecHead>
          <div className="grid-3">
            {JOBS.slice(0, 3).map((j) => (
              <JobCard key={j.title} job={j} cta={{ to: '/jobs', label: 'View role' }} />
            ))}
          </div>
          <div style={{ marginTop: '2rem' }} className="reveal">
            <Link className="btn btn-dark" href="/jobs">See all openings <Arrow /></Link>
          </div>
        </div>
      </section>

      <section className="section lilac">
        <div className="wrap">
          <SecHead eyebrow="Student success stories" title="The students who got there">
            Real stories from our batches carry more weight than any claim we could make. These slots are ready
            for them.
          </SecHead>
          {/* CONTENT NEEDED: replace each slot with student name, college, batch, company joined and a quote. */}
          <div className="grid-3">
            {[1, 2, 3].map((n) => (
              <article className="slot reveal" key={n}>
                <div className="mini-label">Story slot {n}</div>
                <h3>Student name · College · Role joined</h3>
                <p>Two lines in the student&apos;s own words: where they started, what they practised, what changed.</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <SecHead eyebrow="Not a student?" title="Colleges and companies work from the same platform" />
          <div className="grid-3">
            <article className="card aud reveal">
              <span className="tag">Students</span>
              <h3>Practise, test, apply</h3>
              <p>Everything above, from first year to final placement, on web and on the app.</p>
              <ul>
                <li>Free mock test to start</li>
                <li>Video solution for every question</li>
                <li>Apply to live openings</li>
              </ul>
              <Link className="btn btn-dark" href="/students">Student portal <Arrow /></Link>
            </article>
            <article className="card aud reveal">
              <span className="tag">Colleges</span>
              <h3>Training plus visibility</h3>
              <p>Trainer-led programmes with a proprietary monitoring system that tracks progress in real time.</p>
              <ul>
                <li>Batch-wise progress tracking</li>
                <li>Disruptive rates on training and product</li>
                <li>No placement charges, no placement promises</li>
              </ul>
              <Link className="btn btn-dark" href="/colleges">College model <Arrow /></Link>
            </article>
            <article className="card aud reveal">
              <span className="tag">Companies</span>
              <h3>Free, self-serve hiring</h3>
              <p>Post a role and filter candidates on CGPA, skills and aptitude scores in real time.</p>
              <ul>
                <li>No hiring fee at all</li>
                <li>Two-step onboarding</li>
                <li>Better screening-to-hire ratio</li>
              </ul>
              <Link className="btn btn-dark" href="/companies">Hiring dashboard <Arrow /></Link>
            </article>
          </div>
        </div>
      </section>

      <section className="section tint">
        <div className="wrap">
          <SecHead eyebrow="Questions" title="Before you sign up" />
          <Faq items={FAQ_HOME} />
        </div>
      </section>

      <CtaBand />
    </>
  )
}
