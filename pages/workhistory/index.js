import {withLayout} from '../../layouts/main'
import Link from 'next/link'

const Job = props => (
    <li>
      <Link href="/p/[id]" as={`/p/${props.id}`}>
        <a>test{props.company}</a>
      </Link>
    </li>
  )

  const WorkHistory = () => {
    return (
      <div>
        <h1>Work History</h1>
        <Link href="/about/job">test job</Link>
        <ul>
          <Job title="Hello Next.js" />
          <Job title="Learn Next.js is awesome" />
          <Job title="Deploy apps with Zeit" />
        </ul>
      </div>
    )
  }

  export default withLayout(WorkHistory)