"use client";
import Link from 'next/link'
import useReveal from '@/lib/useReveal'
import useForm from '@/lib/useForm'
import PageHero from '@/components/ui/PageHero'
import { SectionHeading as SecHead } from '@/components/ui/SectionHeading'
import Faq from '@/components/ui/Faq'
import { Arrow } from '@/components/ui/Icons'
import { Field, TextArea, Select, FormMessage } from '@/components/ui/Field'

const ROLES = ['A student', 'A college, dean or placement officer', 'A company hiring freshers', 'Something else']

const FAQ_CONTACT = [
  { q: "I'm a student and my college isn't a partner", a: 'Sign up directly. Individual subscriptions give you the full platform regardless of whether your institution has partnered with us.' },
  { q: 'We want to run a free test for our batch', a: "That's how most partnerships start. Mention your batch size and course in the form and we'll set up a baseline test." },
  { q: "We're hiring and want to post today", a: 'Go straight to the hiring signup. Two-step verification and you are posting — no cost, no call needed.' }
]

export default function Contact() {
  useReveal()
  const f = useForm(
    { name: '', role: ROLES[0], org: '', email: '', phone: '', msg: '' },
    {
      required: [{ name: 'name', label: 'your name' }, { name: 'email', label: 'your email' }],
      success: 'Message ready — connect this form to your inbox or CRM to receive it.'
    }
  )

  return (
    <>
      <PageHero
        crumb="Contact"
        eyebrow="Contact us"
        title="Tell us which side of the bridge you're on"
        actions={[{ to: '/signup', label: 'Students: start free', style: 'btn-violet', icon: <Arrow /> }]}
      >
        Students can sign up and start free without talking to anyone. Colleges and companies — send a note and
        we will set up the right walkthrough.
      </PageHero>

      <section className="section">
        <div className="wrap contact">
          <div className="reveal form-card">
            <h2 style={{ fontSize: '1.5rem', marginBottom: '1.3rem' }}>Send us a message</h2>
            <Field label="Your name" id="name" value={f.values.name} onChange={f.set('name')} placeholder="Full name" autoComplete="name" />
            <Select label="I'm reaching out as" id="role" value={f.values.role} onChange={f.set('role')} options={ROLES} />
            <Field label="College or company" id="org" value={f.values.org} onChange={f.set('org')} placeholder="Institution or organisation name" />
            <Field label="Email" id="email" type="email" value={f.values.email} onChange={f.set('email')} placeholder="you@example.com" autoComplete="email" />
            <Field label="Phone" id="phone" type="tel" value={f.values.phone} onChange={f.set('phone')} placeholder="10-digit mobile" autoComplete="tel" />
            <TextArea label="What do you need?" id="msg" value={f.values.msg} onChange={f.set('msg')} placeholder="A batch size, a hiring requirement, or just a question." />
            <button className="btn btn-violet" onClick={f.submit} type="button">Send message <Arrow /></button>
            <FormMessage>{f.message}</FormMessage>
          </div>

          <aside className="reach reveal">
            <h2 style={{ fontSize: '1.4rem' }}>Where we are</h2>
            <p style={{ color: '#3F3F4C', marginTop: '.7rem', fontSize: '.96rem' }}>
              Partnering with institutions across three states today, expanding to Pan India over the next two years.
            </p>
            <dl>
              <dt>Students</dt>
              <dd>
                No need to write in —{' '}
                <Link href="/signup" style={{ color: 'var(--violet-deep)', fontWeight: 600 }}>create a free account</Link>{' '}
                and start with a mock test.
              </dd>
              <dt>Colleges</dt>
              <dd>We will walk your placement cell through the training programme and the monitoring dashboard. Thirty minutes, live data.</dd>
              <dt>Companies</dt>
              <dd>Two-step verification, then post roles and filter candidates the same day. No cost.</dd>
              {/* CONTACT: confirm or replace these details */}
              <dt>Email</dt>
              <dd><a href="mailto:hello@skillready.ai" style={{ color: 'var(--violet-deep)', fontWeight: 600 }}>hello@skillready.ai</a></dd>
              <dt>Phone</dt>
              <dd>Add your number</dd>
              <dt>Office</dt>
              <dd>Add your address</dd>
            </dl>
          </aside>
        </div>
      </section>

      <section className="section tint">
        <div className="wrap">
          <SecHead eyebrow="Quick answers" title="You may not need to write at all" />
          <Faq items={FAQ_CONTACT} />
        </div>
      </section>
    </>
  )
}
