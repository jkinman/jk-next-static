import {Layout} from '../../layouts/main'
import { Words, Project, Arwes, Content } from 'arwes'

const Index = () => (

    <Arwes background='/static/img/background.jpg' pattern='/static/img/glow.png'>
    <Layout>
    <Content>
        <div style={{ padding: 20 }}>
            <Project
                animate
                header='About'
            >
                {anim => (
                    <p><Words animate show={anim.entered}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna
                        aliqua. Ut enim ad minim veniam, quis laboris nisi ut aliquip
                        ex. Duis aute irure. Consectetur adipisicing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud.
                    </Words></p>
                )}
            </Project>
        </div>
     </Content>
     </Layout>
     </Arwes>
)

export default Index