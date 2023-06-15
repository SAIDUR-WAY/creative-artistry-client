

const LiveOnlineWork = () => {
     return (
          <div className="my-10">
               <h3 className="text-center text-3xl font-semibold uppercase py-4">Stay tuned for more workshops...</h3>
          <div className=" relative bg-cover bg-[url('https://i.ibb.co/JvxKSmJ/bg-online.jpg')]">
               <div className=" bg-black opacity-50 min-h-[500px]"></div>
               <div  className="absolute text-white top-0 left-20 min-h-fit py-20 pl-20 w-2/5">
               <h2 className="text-3xl font-semibold w-fit ">Live Online Workshops</h2>
               <div className="border-b-2 mx-auto  border-green-600 my-4 w-32" ></div>
               <p>
               We invite leading industry artists to teach their methods and techniques through online art workshops with live lessons and demos to give attendees a more personal learning experience with our instructors. Through these online workshops, you can learn techniques in character design, figure drawing, costume design, painting for animated films, set design, and so much more.
               </p>
               <button onClick={()=>window.liveWork.showModal()} className="btn glass btn-outline text-white uppercase">Explore Workshops</button>

               </div>
          </div>
          
<dialog id="liveWork" className="modal">
  <form method="dialog" className="modal-box">
    <h3 className="font-bold text-lg">Ops!</h3>
    <p className="py-4 text-center"> This page not ready! <br />
    now Working
     </p>
    <div className="modal-action">
      {/* if there is a button in form, it will close the modal */}
      <button className="btn">Close</button>
    </div>
  </form>
</dialog>
          </div>
     );
};

export default LiveOnlineWork;