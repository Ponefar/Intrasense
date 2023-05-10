import React, { useEffect, useState } from 'react'
import { styled } from '@mui/system'
import { useFetchApi } from '@/hooks/api'
import { Button } from '@mui/material'
import Title from '@/components/atoms/title/Title'
import { IComments, IPosts } from '@/types'
import Loading from '@/components/atoms/loading/Loading'
import { InputText } from '@/components/atoms/inputText/InputText'
import { GlobalPostContent } from '@/components/atoms/globalPostContent/GlobalPostContent'

const CustomListPosts = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2.5),
  marginTop: theme.spacing(14),
  zIndex: -1,
}))

const CustomRoot = styled('div')(({ theme }) => ({
  margin: theme.spacing(2),
}))

const CustomHeader = styled('div')(({ theme }) => ({
  zIndex: 99,
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-around',
  marginBottom: theme.spacing(1),
  position: 'fixed',
  width: '100vw',
  top: 0,
  left: 0,
  padding: theme.spacing(2),
  alignItems: 'center',
  background: 'aliceblue',
}))

const CustomNoResult = styled('div')(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(5),
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
}))

const CustomSearch = styled('span')(({ theme }) => ({
  fontSize: theme.spacing(3),
  textDecoration: 'underline',
}))

const urlApiPosts = 'https://jsonplaceholder.typicode.com/posts'
const urlApiComments = 'https://jsonplaceholder.typicode.com/comments'

const nomberOfPostsAtInitialisation = 25

function Home(): JSX.Element {
  const [posts, _, status] = useFetchApi<IPosts[]>(urlApiPosts)
  const [filteredPosts, setFilteredPosts] = useState(posts)

  useEffect(() => {
    if (posts) {
      setFilteredPosts(posts)
    }
  }, [posts])

  const [comments] = useFetchApi<IComments[]>(urlApiComments)

  const [listIdPostDetails, setListIdPostDetails] = useState<
    Record<number, IComments[]>
  >({}) // not an array for don't make an loop in a other loop

  const [allDataVisible, setAllDataVisible] = useState(false)

  const [search, setSearch] = useState<string>('')

  function showLess(id: number): void {
    const updatedList = { ...listIdPostDetails }
    delete updatedList[id]
    setListIdPostDetails(updatedList)
  }

  useEffect(() => {
    if (search) {
      const newListPosts = posts.filter((post) => post.body.includes(search))
      return setFilteredPosts(newListPosts)
    }
    return setFilteredPosts(posts)

    // eslint-disable-next-line
  }, [search])

  if (!filteredPosts || status !== 200) {
    return <Loading name="Loading data [...]" />
  }

  return (
    <CustomRoot>
      <CustomHeader>
        <img src="./logoIntasense.png" width="50px" alt="Intrasense" />
        <Title>Number of results : {filteredPosts.length}</Title>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <InputText value={search} onChange={setSearch} />
          {search.length !== 0 && (
            <Button onClick={(): void => setSearch('')}>
              Reset Search Bar
            </Button>
          )}
        </div>
      </CustomHeader>

      <CustomListPosts>
        {filteredPosts.length === 0 ? (
          <CustomNoResult>
            <Title>
              No result with : <CustomSearch>{search}</CustomSearch>
            </Title>
            <img
              width="800px"
              src="https://media.tenor.com/wUxF2bvGoCwAAAAd/panda-fat.gif"
              alt="gif panda because no result"
            />
          </CustomNoResult>
        ) : (
          filteredPosts
            .slice(0, allDataVisible ? Infinity : nomberOfPostsAtInitialisation)
            .map((item) => {
              return (
                <GlobalPostContent
                  item={item}
                  key={item.id}
                  listIdPostDetails={listIdPostDetails}
                  setListIdPostDetails={setListIdPostDetails}
                  comments={comments}
                  showLess={showLess}
                />
              )
            })
        )}
        {filteredPosts.length !== 0 && (
          <div>
            <Button onClick={(): void => setAllDataVisible(!allDataVisible)}>
              {!allDataVisible
                ? `show all the posts (${filteredPosts.length})`
                : `show ${
                    filteredPosts.length > nomberOfPostsAtInitialisation
                      ? nomberOfPostsAtInitialisation
                      : filteredPosts.length
                  } posts`}
            </Button>
          </div>
        )}
      </CustomListPosts>
    </CustomRoot>
  )
}

export default Home
