import React from 'react'
import { styled } from '@mui/system'

const CustomSvg = styled('svg')({
  width: '50px',
  borderRadius: '50%',
  zIndex: 999,
  background: 'white',
  ':hover': {
    opacity: 0.7,
    cursor: 'pointer',
  },
})
interface IProps {
  color: string
}

function ArrowSvg(props: IProps): JSX.Element {
  const { color } = props
  return (
    <div>
      <CustomSvg
        version="1.0"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 367.000000 367.000000"
        preserveAspectRatio="xMidYMid meet"
      >
        <g
          transform="translate(0.000000,367.000000) scale(0.100000,-0.100000)"
          fill={color}
          stroke="none"
        >
          <path
            d="M0 1835 l0 -1835 1835 0 1835 0 0 1835 0 1835 -1835 0 -1835 0 0
            -1835z m2820 73 c0 -5 -106 -8 -235 -8 l-235 0 0 -474 c0 -261 -3 -481 -6
            -490 -5 -14 -58 -16 -489 -16 -431 0 -484 2 -489 16 -3 9 -6 229 -6 490 l0
            474 -235 0 c-129 0 -235 3 -235 7 0 5 217 225 482 490 l483 483 482 -482 c266
            -266 483 -486 483 -490z"
          />
        </g>
      </CustomSvg>
    </div>
  )
}

ArrowSvg.defaultProps = {
  color: '#4175fc',
}

export default ArrowSvg
