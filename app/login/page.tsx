"use client";
import Link from 'next/link'
import useReveal from '@/lib/useReveal'
import useForm from '@/lib/useForm'
import RoleTabs from '@/components/ui/RoleTabs'
import { Arrow, Tick } from '@/components/ui/Icons'
import { Field, FormMessage } from '@/components/ui/Field'

/* AUTH: pass onSubmit to useForm to call your real auth endpoint. */
function LoginPane({ heading, idLabel, idType, idPlaceholder, cta, footer }: any) {
  const f = useForm(
    { user: '', password: '' },
    {
      required: [{ name: 'user', label: idLabel.toLowerCase() }, { name: 'password', label: 'your password' }],
      success: 'Ready — connect this form to your auth endpoint.'
    }
  )
  return (
    <>
      <h2 style={{ fontSize: '1.2rem', marginBottom: '1.1rem' }}>{heading}</h2>
      <Field label={idLabel} id={heading + '-id'} type={idType} value={f.values.user}
             onChange={f.set('user')} placeholder={idPlaceholder} autoComplete="username" />
      <Field label="Password" id={heading + '-pw'} type="password" value={f.values.password}
             onChange={f.set('password')} placeholder="Password" autoComplete="current-password" />
      <button className="btn btn-violet btn-block" onClick={f.submit} type="button">{cta} <Arrow /></button>
      <FormMessage>{f.message}</FormMessage>
      <p className="alt">{footer}</p>
    </>
  )
}

export default function Login() {
  useReveal()
  return (
    <section className="wrap auth-wrap">
      <div className="auth-side reveal">
        <span className="eyebrow">Welcome back</span>
        <h1 style={{ fontSize: 'clamp(1.9rem,3.6vw,2.8rem)', margin: '.8rem 0 1rem' }}>Log in to your account</h1>
        <p className="lede">
          Students, colleges and companies each have their own login. Pick the one that matches your account.
        </p>
        <ul>
          <li><Tick /><span><b>Students</b> — practice, mock exams, recruiters, jobs and courses</span></li>
          <li><Tick /><span><b>Colleges</b> — batch monitoring, assessment schedule and reports</span></li>
          <li><Tick /><span><b>Companies</b> — post roles and filter candidates in real time</span></li>
        </ul>
        <p style={{ marginTop: '1.6rem', fontSize: '.94rem', color: 'var(--ink-40)' }}>
          No account yet? <Link href="/signup" style={{ color: 'var(--violet-deep)', fontWeight: 600 }}>Create one free</Link>.
        </p>
      </div>

      <div className="reveal">
        <RoleTabs
          panes={{
            student: (
              <LoginPane
                heading="Student login" idLabel="Mobile number or email" idType="text"
                idPlaceholder="Registered mobile or email" cta="Log in"
                footer={<><a href="#top">Forgot password?</a> · <Link href="/signup">Create a free account</Link></>}
              />
            ),
            college: (
              <LoginPane
                heading="College login" idLabel="Institutional email" idType="email"
                idPlaceholder="tpo@yourcollege.ac.in" cta="Open dashboard"
                footer={<>Not a partner yet? <Link href="/colleges">See the college programme</Link></>}
              />
            ),
            company: (
              <LoginPane
                heading="Company login" idLabel="Work email" idType="email"
                idPlaceholder="you@company.com" cta="Open hiring dashboard"
                footer={<>Hiring for the first time? <Link href="/signup?role=company">Create a free account</Link></>}
              />
            )
          }}
        />
      </div>
    </section>
  )
}
