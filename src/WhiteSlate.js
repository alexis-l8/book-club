import styled from 'styled-components'
import { color } from 'styled-system'

const WhiteSlate = styled.div([], {
  width: '100vw',
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  '& a': {
    color: 'inherit'
  }
}, color)

WhiteSlate.defaultProps = {
  color: 'background',
  bg: 'text'
}

export default WhiteSlate;
