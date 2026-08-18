import useReveal from '../lib/useReveal.js'
import PageHero from '../components/PageHero.jsx'
import SecHead from '../components/SecHead.jsx'
import CtaBand from '../components/CtaBand.jsx'
import { Arrow } from '../components/Icons.jsx'
import { POSTS_STUDENT, POSTS_INSTITUTION } from '../data/site.js'

function PostCard({ post }) {
  return (
    <article className="post reveal">
      <time>{post.tag}</time>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
      {/* ROUTE: point this at /insights/:slug once articles are written */}
      <a className="more" href="#top">Read the note →</a>
    </article>
  )
}

export default function Insights() {
  useReveal()
  return (
    <>
      <PageHero
        crumb="Insights"
        eyebrow="Insights"
        title="Notes from the campus-to-career gap"
        actions={[{ to: '/signup', label: 'Start free mock test', style: 'btn-violet', icon: <Arrow /> }]}
      >
        Prep guides for students, reporting notes for placement cells, and screening notes for recruiters. Free to
        read, no account needed.
      </PageHero>

      <section className="section">
        <div className="wrap">
          <SecHead eyebrow="For students" title="Preparation" />
          <div className="grid-3">
            {POSTS_STUDENT.map((p) => <PostCard key={p.title} post={p} />)}
          </div>
        </div>
      </section>

      <section className="section tint">
        <div className="wrap">
          <SecHead eyebrow="For institutions and recruiters" title="Reporting and screening" />
          <div className="grid-3">
            {POSTS_INSTITUTION.map((p) => <PostCard key={p.title} post={p} />)}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  )
}
