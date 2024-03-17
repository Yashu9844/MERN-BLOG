import React from 'react'
import { useParams ,Link} from 'react-router-dom'
import { useEffect ,useState} from 'react'
import { Button, Spinner } from 'flowbite-react'
import CallToAction from '../components/CallToAction'
import CommentSection from '../components/CommentSection'
const PostShow = () => {

  const {postSlug } = useParams();
 const [loading, setLoading] = useState(true);
const [error, setError] = useState(false);
const [post,setPost] = useState(' ');


  useEffect(()=>{
   const fetchPost = async ()=>{
   try {
    setLoading(true)
    const res =  await fetch(`/api/post/getposts?slug=${postSlug}`);
    const data = await res.json();

  if(res.ok){
    setLoading(false);
    setError(false);
    setPost(data.posts[0]);

  }else{
    setLoading(false);
    setError(true);
    return;
  }

   } catch (error) {
    setLoading(false);
    setError(true);
    
   }
   }
   fetchPost();
  },[postSlug])

if(loading) return (
    <div className='flex min-h-full items-center justify-center'>
       <Spinner size='xl'/>
    </div>
)
  return (
    <main className='p-3 flex flex-col max-w-6xl mx-auto min-h-screen'>
      <h1 className='text-3xl m-10 text-center font-serif first-letter:uppercase p-3 mx-w-2xl mx-auto lg:text-4xl '>{post && post.title}</h1>
      <Link to={`/serach?category=${post?.category}`} className='self-center m-5'>
      <Button color='gray' pill size='xs' >{post?.category}</Button></Link>
      <img src={post?.image} alt={post?.title}  className='mt-10 p-3 max-h-[600px] w-full object-cover '/>
      <div className='flex justify-between p-3 border-b border-slate-500 mx -auto ma-w-2xl text-xs w-full'>
      <span>{post && new Date(post.createdAt).toLocaleDateString()}</span>
        <span>{post && (post.content.length /1000).toFixed(0)} mins read</span>
      </div>
      <div className='p-3 max-w-2xl mx-auto w-full post-content' dangerouslySetInnerHTML={{__html:post?.content}}></div>


      <div className='max-w-4xl mx-auto w-full'>
        <CallToAction/>
      </div>


        <CommentSection postId={post._id}/>
   
    </main>
  )
}

export default PostShow
