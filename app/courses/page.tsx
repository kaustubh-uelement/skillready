"use client";
import Link from 'next/link'
import useReveal from '@/lib/useReveal'
import useForm from '@/lib/useForm'
import PageHero from '@/components/ui/PageHero'
import { SectionHeading as SecHead } from '@/components/ui/SectionHeading'
import CtaBand from '@/components/ui/CtaBand'
import { Arrow } from '@/components/ui/Icons'
import { Field, Select, FormMessage } from '@/components/ui/Field'
import { COURSES, COURSE_NAMES } from '@/data/site'

function Enquiry() {
  const f = useForm(
    { name: '', phone: '', course: COURSE_NAMES[0] },
    {
      required: [{ name: 'name', label: 'your name' }, { name: 'phone', label: 'your mobile number' }],
      success: 'Enquiry ready — connect this form to your inbox to receive it.'
    }
  )
  return (
    <div className="form-card">
      <h3 style={{ fontSize: '1.15rem' }}>Course enquiry</h3>
      <p style={{ fontSize: '.9rem', color: 'var(--ink-40)', margin: '.4rem 0 1.2rem' }}>
        Tell us which course and we will send the next batch date and fee.
      </p>
      <Field label="Name" id="c-name" value={f.values.name} onChange={f.set('name')} placeholder="Your name" />
      <Field label="Mobile" id="c-phone" type="tel" value={f.values.phone} onChange={f.set('phone')} placeholder="10-digit mobile" />
      <Select label="Course" id="c-course" value={f.values.course} onChange={f.set('course')} options={COURSE_NAMES} />
      <button className="btn btn-violet btn-block" onClick={f.submit} type="button">Send enquiry</button>
      <FormMessage>{f.message}</FormMessage>
    </div>
  )
}

export default function CoursesPage() {
  useReveal()
  return (
    <>
      <PageHero
        crumb="Courses"
        eyebrow="Courses"
        title="Live courses, run by our own trainers"
        actions={[
          { to: '/contact', label: 'Ask about the next batch', style: 'btn-violet', icon: <Arrow /> },
          { to: '/plans', label: 'See plans', style: 'btn-ghost' }
        ]}
      >
        Conducted online or in hybrid mode on a fixed schedule — the same trainers who deliver our campus
        programmes, in a batch small enough to ask questions in.
      </PageHero>

      <section className="section">
        <div className="wrap">
          <SecHead eyebrow="Current courses" title="Pick where you're actually stuck">
            Practice fixes what you nearly know. A live course fixes what you never learnt properly in the first
            place.
          </SecHead>
          <div className="grid-3">
            {COURSES.map((c) => (
              <article className="course reveal" key={c.title}>
                <div className="course-top"><span>{c.tag}</span></div>
                <div className="course-body">
                  <h3>{c.title}</h3>
                  <p>{c.body}</p>
                  <div className="course-meta">
                    {c.meta.map((m) => <span key={m}>{m}</span>)}
                  </div>
                  <div className="course-foot">
                    <Link className="btn btn-light btn-sm btn-block" href="/contact">Enquire</Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section tint">
        <div className="wrap">
          <SecHead eyebrow="How our courses run" title="Live sessions, then work you actually hand in" />
          <div className="grid-4">
            <article className="card reveal"><h3>Live, not recorded</h3><p>Sessions run to a schedule with a trainer in the room. You can interrupt and ask why.</p></article>
            <article className="card reveal"><h3>Practice between sessions</h3><p>Assigned sets from the question bank, with video solutions when you get stuck.</p></article>
            <article className="card reveal"><h3>Tested, not assumed</h3><p>Sectional tests through the course so both you and the trainer see whether it is landing.</p></article>
            <article className="card reveal"><h3>Hybrid where it helps</h3><p>Interview and group-discussion work runs better in person. Those sessions can be on campus.</p></article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap split">
          <div className="reveal">
            <span className="eyebrow">For colleges</span>
            <h2 style={{ fontSize: 'clamp(1.7rem,3vw,2.3rem)', margin: '.8rem 0 1rem' }}>
              Want this delivered to a whole batch?
            </h2>
            <p className="lede">
              The same courses run as campus programmes, bundled with the monitoring system so your placement cell
              can see batch progress in real time — at rates built to undercut what you are paying now.
            </p>
            <div style={{ marginTop: '1.6rem' }}>
              <Link className="btn btn-violet" href="/colleges">See the college programme <Arrow /></Link>
            </div>
          </div>
          <div className="reveal"><Enquiry /></div>
        </div>
      </section>

      <CtaBand />
    </>
  )
}
