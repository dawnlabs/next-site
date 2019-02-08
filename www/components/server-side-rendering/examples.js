import Container from '../container';
import SectionHeader from '../section-header'
import Button from '../button'

export default () => (
  <Container wide padding gray center>
    <SectionHeader
      title="Integrate Anywhere"
    />

    <div>
      <p>
        Need a path for incremental adoption? No problem. Server-side rendering with Next.js <br />
        can be easily integrated with existing application runtimes such as Express and Electron.
      </p>
    </div>

    <Button invert href="/examples">See Examples</Button>

    <style jsx>
      {`
        .row {
          display: flex;
        }
      `}
    </style>
  </Container>
)