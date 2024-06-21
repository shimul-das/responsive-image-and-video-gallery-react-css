import { useState } from "react"

const App = () => {
  const [file, setFile]=useState(null)
  const Media = [
    {type:"video", url:('../src/media/video-01.mp4')},
    {type:"image", url:('../src/media/img-01.jpg')},
    {type:"video", url:('../src/media/video-02.mp4')},
    {type:"image", url:('../src/media/img-02.jpg')},
    {type:"video", url:('../src/media/video-03.mp4')},
    {type:"image", url:('../src/media/img-03.jpg')},
    {type:"video", url:('../src/media/video-04.mp4')},
    {type:"image", url:('../src/media/img-04.jpg')},
    {type:"video", url:('../src/media/video-05.mp4')},
    {type:"image", url:('../src/media/img-05.jpg')},
    {type:"video", url:('../src/media/video-06.mp4')},
    {type:"image", url:('../src/media/img-06.jpg')}
]
  console.log(Media);
  return (
    <div className="container">
      <h1>Responsive Image and Video Gallery</h1>
      <div className="media-container">
{
  Media.map((file,index)=>(
    <div className="media" key={index} onClick={()=>setFile(file)}>
     {
      file.type === 'image' ? 
      <img src={file.url} alt="" /> :
      <video src={file.url} muted></video>
     }
    </div>
  ))
}
      </div>
      <div className="popup-media" style={{display:file? 'block' : 'none'}}>
        <span onClick={()=>setFile(null)}>&times;</span>
        {
          file?.type === "video" ?
          <video src={file?.url} muted autoPlay controls/> :
          <img src={file?.url}/>
        }
      </div>
    </div>
  )
}

export default App