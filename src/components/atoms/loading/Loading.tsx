import React from 'react'
import { styled } from '@mui/system'

const CustomRootLoading = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  width: '100vw',
  background: 'aliceblue',
  fontSize: theme.spacing(2.4),
}))

interface IProps {
  name: string
}

function Loading(props: IProps): JSX.Element {
  const { name } = props
  return <CustomRootLoading>{name}</CustomRootLoading>
}

export default Loading
