import { useRouter } from 'next/router'
import { withLayout } from '../../layouts/main'


const Job = () => {
    const router = useRouter()

    return(
        <div>
            <h6>job detail</h6>
            <h1>{router.query.title}</h1>
        </div>
    )

}

export default withLayout( Job )