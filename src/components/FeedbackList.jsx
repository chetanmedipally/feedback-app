import React,{useContext} from "react";
import FeedbackItem from "./FeedbackItem";
import { motion, AnimatePresence } from "framer-motion";
import FeedbackContext from "../Contexts/FeedbackContext";

function FeedbackList({ deleteItem }) {
  const {feedback} = useContext(FeedbackContext)
  if (!feedback || feedback.length === 0) {
    return <p>No Feedback Yet</p>;
  }
  return (
    <div className="feedback-list">
      <AnimatePresence>
        {feedback.map((item) => (
          
            <motion.div
            key={item.id}
            initial = {{opacity : 0}}
            animate = {{opacity : 1}}
            exit = {{opacity : 0}}
            >            
            <FeedbackItem item={item}/>
            </motion.div>
          
        ))}
      </AnimatePresence>
    </div>
  );

  // return (
  //     <div className='feedback-list'>
  //     {feedback.map((item) => (
  //         <div  key={item.id}>
  //         <FeedbackItem item={item} deleteItem = {deleteItem}/>
  //         </div>
  //     ))}
  //     </div>
  // );
}


export default FeedbackList;
