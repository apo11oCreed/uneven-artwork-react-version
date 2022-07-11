
export default function Modal({image,showModal}){
        return <><div className="modal tw-w-1/2 tw-h-auto tw-block tw-fixed tw-left-1/2 -tw-translate-x-2/4 tw-top-0 tw-z-10"><div className="header">{image.title}<span onClick={()=>{showModal(false);}}>X</span></div><div className="body"><img src={image.url} alt={image.title} /></div></div>
        <div className="overlay tw-w-full tw-h-full tw-block tw-fixed tw-left-0 tw-top-0 tw-z-1 tw-bg-slate-800 tw-opacity-80 tw-text-center">test</div></>
}