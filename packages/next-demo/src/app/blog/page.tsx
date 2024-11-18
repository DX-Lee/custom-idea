
const getData = async () =>{

return new Promise((resolve) => {
    setTimeout(() => {
        resolve([
            {
                id: '1',
                title: 'hello'
            },
            {
                id: '12',
                title: 'hello1'
            },
            {
                id: '31',
                title: 'hello2'
            }
        ])
    }, 100);

})
}

export default async function BlogPage(params: any) {
    // let data = await getData()
    let posts: any = await getData()
    return (
      <ul>
        {posts.map((post: any) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    )
  
}

// export const dynamic = 'force-dynamic'