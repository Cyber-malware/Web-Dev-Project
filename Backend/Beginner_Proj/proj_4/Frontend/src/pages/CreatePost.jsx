import React from 'react'

const CreatePost =() =>{
  return (
    <section className='create-post-section'>
      <h1></h1>
      <h1>create Post</h1>

      <form>
        <input type="file" name="image" accept='image/*' />
        <input type="text" name='caption' placeholder='enter caption' required />
        <button type='submit'>Submit</button>
      </form>
    </section>
  )
}


export default CreatePost 