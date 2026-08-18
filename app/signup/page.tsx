"use client";
import Link from 'next/link'
import useReveal from '@/lib/useReveal'
import useForm from '@/lib/useForm'
import RoleTabs from '@/components/ui/RoleTabs'
import { Arrow, Tick } from '@/components/ui/Icons'
import { Field, Select, ChipRadio, FormMessage } from '@/components/ui/Field'

const COURSES = ['B.E. / B.Tech', 'B.Sc.', 'B.Com.', 'BCCA / BCA', 'B.Pharma', 'M.Sc. / MCA / MBA', 'Other']
const CELL_ROLES = ['Dean, Training & Placement', 'Training & Placement Officer', 'Principal', 'Management / owner', 'Other']
const BATCH_SIZES = ['Under 100', '100 – 300', '300 – 600', '600 – 1000', 'Over 1000']
const INTERESTS = ['Training and monitoring (both)', 'Training only', 'Product / monitoring only', 'A free baseline test for one batch']
const HIRING = ['Full-time fresher roles', 'Internships', 'Both', 'Campus drive']

function StudentSignup() {
  const f = useForm(
    { name: '', phone: '', email: '', college: '', course: COURSES[0], year: '2nd' },
    {
      required: [
        { name: 'name', label: 'your name' },
        { name: 'phone', label: 'your mobile number' },
        { name: 'email', label: 'your email' }
      ],
      success: 'Account details ready — connect this form to your signup endpoint to create it.'
    }
  )
  return (
    <>
      <h2 style={{ fontSize: '1.2rem', marginBottom: '.4rem' }}>Student sign-up</h2>
      <p style={{ fontSize: '.88rem', color: 'var(--ink-40)', marginBottom: '1.2rem' }}>
        Free forever. Upgrade only when you want the full question bank.
      </p>
      <Field label="Full name" id="su-name" value={f.values.name} onChange={f.set('name')} placeholder="Your name" autoComplete="name" />
      <Field label="Mobile number" id="su-phone" type="tel" value={f.values.phone} onChange={f.set('phone')} placeholder="10-digit mobile" autoComplete="tel" />
      <Field label="Email" id="su-email" type="email" value={f.values.email} onChange={f.set('email')} placeholder="you@example.com" autoComplete="email" />
      <Field label="College" id="su-college" value={f.values.college} onChange={f.set('college')} placeholder="Your college name" />
      <Select label="Course" id="su-course" value={f.values.course} onChange={f.set('course')} options={COURSES} />
      <ChipRadio label="Year of study" name="su-year" options={['1st', '2nd', '3rd', 'Final']} value={f.values.year} onChange={f.set('year')} />
      <button className="btn btn-violet btn-block" onClick={f.submit} type="button">Create free account <Arrow /></button>
      <FormMessage>{f.message}</FormMessage>
      <p className="alt">Takes about 30 seconds. No payment details.</p>
    </>
  )
}

function CollegeSignup() {
  const f = useForm(
    { name: '', role: CELL_ROLES[0], college: '', email: '', phone: '', size: BATCH_SIZES[1], want: INTERESTS[0] },
    {
      required: [
        { name: 'name', label: 'your name' },
        { name: 'college', label: 'your institution name' },
        { name: 'email', label: 'your email' }
      ],
      success: 'Request ready — connect this form to your inbox or CRM to receive it.'
    }
  )
  return (
    <>
      <h2 style={{ fontSize: '1.2rem', marginBottom: '.4rem' }}>College enquiry</h2>
      <p style={{ fontSize: '.88rem', color: 'var(--ink-40)', marginBottom: '1.2rem' }}>
        Institution accounts are set up after a walkthrough with your placement cell.
      </p>
      <Field label="Your name" id="cs-name" value={f.values.name} onChange={f.set('name')} placeholder="Full name" />
      <Select label="Your role" id="cs-role" value={f.values.role} onChange={f.set('role')} options={CELL_ROLES} />
      <Field label="Institution" id="cs-college" value={f.values.college} onChange={f.set('college')} placeholder="College name" />
      <Field label="Institutional email" id="cs-email" type="email" value={f.values.email} onChange={f.set('email')} placeholder="tpo@yourcollege.ac.in" />
      <Field label="Phone" id="cs-phone" type="tel" value={f.values.phone} onChange={f.set('phone')} placeholder="10-digit mobile" />
      <Select label="Students per batch" id="cs-size" value={f.values.size} onChange={f.set('size')} options={BATCH_SIZES} />
      <Select label="Interested in" id="cs-want" value={f.values.want} onChange={f.set('want')} options={INTERESTS} />
      <button className="btn btn-violet btn-block" onClick={f.submit} type="button">Request a walkthrough <Arrow /></button>
      <FormMessage>{f.message}</FormMessage>
      <p className="alt">We do not charge for placements or commit placement numbers.</p>
    </>
  )
}

function CompanySignup() {
  const f = useForm(
    { name: '', company: '', email: '', phone: '', hiring: HIRING[0] },
    {
      required: [
        { name: 'name', label: 'your name' },
        { name: 'company', label: 'your company name' },
        { name: 'email', label: 'your work email' }
      ],
      success: 'Details ready — connect this form to your employer signup and verification flow.'
    }
  )
  return (
    <>
      <h2 style={{ fontSize: '1.2rem', marginBottom: '.4rem' }}>Company sign-up</h2>
      <p style={{ fontSize: '.88rem', color: 'var(--ink-40)', marginBottom: '1.2rem' }}>
        Free, permanently. Two-step verification and you can post today.
      </p>
      <Field label="Your name" id="cm-name" value={f.values.name} onChange={f.set('name')} placeholder="Full name" />
      <Field label="Company" id="cm-company" value={f.values.company} onChange={f.set('company')} placeholder="Company name" />
      <Field label="Work email" id="cm-email" type="email" value={f.values.email} onChange={f.set('email')} placeholder="you@company.com" />
      <Field label="Phone" id="cm-phone" type="tel" value={f.values.phone} onChange={f.set('phone')} placeholder="10-digit mobile" />
      <Select label="Hiring for" id="cm-hiring" value={f.values.hiring} onChange={f.set('hiring')} options={HIRING} />
      <button className="btn btn-violet btn-block" onClick={f.submit} type="button">Create hiring account <Arrow /></button>
      <FormMessage>{f.message}</FormMessage>
      <p className="alt">No posting fee, no hiring fee, no candidate fee.</p>
    </>
  )
}

export default function Signup() {
  useReveal()
  return (
    <section className="wrap auth-wrap">
      <div className="auth-side reveal">
        <span className="eyebrow">Free to start</span>
        <h1 style={{ fontSize: 'clamp(1.9rem,3.6vw,2.8rem)', margin: '.8rem 0 1rem' }}>Create your account</h1>
        <p className="lede">
          Students start with a full mock test and sample practice sets, free and with no card. Companies post
          roles at no cost. Colleges get a walkthrough with their placement cell.
        </p>
        <ul>
          <li><Tick /><span>One free full-length mock test</span></li>
          <li><Tick /><span>Sample practice sets in quants, reasoning, technical and verbal</span></li>
          <li><Tick /><span>Video solution on every question you attempt</span></li>
          <li><Tick /><span>Profile visible to recruiters searching on real scores</span></li>
          <li><Tick /><span>Practice on the mobile app</span></li>
        </ul>
        <p style={{ marginTop: '1.6rem', fontSize: '.94rem', color: 'var(--ink-40)' }}>
          Already registered? <Link href="/login" style={{ color: 'var(--violet-deep)', fontWeight: 600 }}>Log in</Link>.
        </p>
      </div>

      <div className="reveal">
        <RoleTabs
          panes={{ student: <StudentSignup />, college: <CollegeSignup />, company: <CompanySignup /> }}
        />
      </div>
    </section>
  )
}
