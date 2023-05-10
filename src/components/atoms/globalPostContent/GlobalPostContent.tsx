import { IComments, IPosts } from '@/types'
import { Button } from '@mui/material'
import { styled } from '@mui/system'

const CustomContentPost = styled('div')(({ theme }) => ({
  border: '2px solid',
  borderColor: 'black',
  borderRadius: theme.spacing(1),
  padding: theme.spacing(1.5),
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(1),
}))

const CustomSubTitle = styled('span')({
  fontWeight: 'bold',
  textDecoration: 'underline',
})

interface IProps {
  item: IPosts
  listIdPostDetails: Record<number, IComments[]>
  setListIdPostDetails: (
    value: React.SetStateAction<Record<number, IComments[]>>
  ) => void
  comments: IComments[]
  showLess: (id: number) => void
}

export function GlobalPostContent(props: IProps): JSX.Element {
  const { item, listIdPostDetails, setListIdPostDetails, comments, showLess } =
    props
  return (
    <CustomContentPost key={item.id}>
      <div>
        <CustomSubTitle>User id</CustomSubTitle> : {item.userId}
      </div>
      <div>
        <CustomSubTitle>Title</CustomSubTitle> : {item.title}
      </div>
      {!listIdPostDetails?.[item.id] ? (
        <div style={{ marginTop: '8px' }}>
          <Button
            sx={{ color: 'green', borderColor: 'green' }}
            variant="outlined"
            onClick={(): void =>
              setListIdPostDetails({
                ...listIdPostDetails,
                [item.id]: comments.filter((it) => it?.postId === item.id),
              })
            }
          >
            show more ...
          </Button>
        </div>
      ) : (
        <>
          <div>
            <CustomSubTitle>Body</CustomSubTitle> : {item.body}
          </div>
          <div>
            <CustomSubTitle>Number of comments on this post</CustomSubTitle> :
            {` ${listIdPostDetails?.[item.id].length}`}
          </div>
          <div style={{ marginTop: '8px' }}>
            <Button
              sx={{ color: 'red', borderColor: 'red' }}
              variant="outlined"
              onClick={(): void => showLess(item.id)}
            >
              show less
            </Button>
          </div>
        </>
      )}
    </CustomContentPost>
  )
}
