const LiveOnlineWork = () => {
     return (
       <div className="my-10">
         <h3 className="text-center text-3xl font-semibold uppercase py-4">Stay tuned for more workshops...</h3>
         <div className="relative bg-cover bg-[url('https://i.ibb.co/JvxKSmJ/bg-online.jpg')]">
           <div className="bg-black opacity-75 min-h-[500px]"></div>
           <div className="absolute text-white top-10 md:top-20 left-10 right-10 md:left-20 md:w-2/5">
             <h2 className="text-3xl font-semibold">Live Online Workshops</h2>
             <div className="border-b-2 mx-auto border-green-600 my-4 w-32"></div>
             <p>
               We invite leading industry artists to teach their methods and techniques through online art workshops with live lessons and demos to give attendees a more personal learning experience with our instructors. Through these online workshops, you can learn techniques in character design, figure drawing, costume design, painting for animated films, set design, and so much more.
             </p>
             <button onClick={() => window.liveWork.showModal()} className="btn glass btn-outline text-white uppercase mt-4 flex place-items-center justify-center btn-sm md:btn-md">Explore Workshops</button>
           </div>
         </div>
   
         <dialog id="liveWork"  className="modal flex items-center justify-center">
           <form method="dialog" className="modal-box">
             <h3 className="font-bold text-lg">Ops!</h3>
             <p className="py-4 text-center">This page is not ready! <br />Now working.</p>
             <div className="modal-action">
               {/* if there is a button in the form, it will close the modal */}
               <button className="btn">Close</button>
             </div>
           </form>
         </dialog>
       </div>
     );
   };
   
   export default LiveOnlineWork;
   