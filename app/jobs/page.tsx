"use client";
import useReveal from '@/lib/useReveal'
import PageHero from '@/components/ui/PageHero'
import { SectionHeading as SecHead } from '@/components/ui/SectionHeading'
import CtaBand from '@/components/ui/CtaBand'
import JobCard from '@/components/ui/JobCard'
import { Arrow } from '@/components/ui/Icons'
import { JOBS } from '@/data/site'

const STEPS = [
  ['01', 'Complete your profile', 'Resume, skills, academics, projects. Do it once and keep it current.'],
  ['02', 'Take the tests', 'Your aptitude and technical scores are what recruiters filter on. They come from tests you take here.'],
  ['03', 'Wishlist your targets', 'Wishlisting a company raises your visibility with them and tells you what skills to prepare.'],
  ['04', 'Apply, or get found', 'Apply to live openings — or appear in a recruiter\u2019s filtered search before you apply at all.']
]

export default function Jobs() {
  useReveal()
  return (
    <>
      <PageHero
        crumb="Jobs"
        eyebrow="Jobs and internships"
        title="Openings posted by companies, applied to in one click"
        actions={[
          { to: '/signup', label: 'Create your profile', style: 'btn-violet', icon: <Arrow /> },
          { to: '/companies', label: 'I am hiring', style: 'btn-ghost' }
        ]}
      >
        Employers post here at no cost and search on real test data. Keep your profile and scores current and you
        show up in their filters before you even apply.
      </PageHero>

      <section className="section">
        <div className="wrap">
          <SecHead eyebrow="Live now" title="Current openings">
            A sample of the kinds of roles posted on the platform. Log in to see everything open to your batch
            and course.
          </SecHead>
          <div className="grid-3">
            {JOBS.map((j) => <JobCard key={j.title} job={j} />)}
          </div>
        </div>
      </section>

      <section className="section tint">
        <div className="wrap">
          <SecHead eyebrow="How applying works" title="Four steps, and three of them are one-time" />
          <div className="steps reveal">
            {STEPS.map(([num, title, body]) => (
              <div className="step" key={num}>
                <b className="num">{num}</b>
                <div>
                  <h4>{title}</h4>
                  <p>{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="note reveal">
            <b>One thing worth being clear about</b>
            <p>
              We do not guarantee placements and we do not charge anyone for them. Companies make their own hiring
              decisions. What we control is how prepared you are and how visible your real scores make you.
            </p>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  )
}
