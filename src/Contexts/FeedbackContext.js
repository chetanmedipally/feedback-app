import { createContext,useState } from "react";
import FeedbackData from "../data/FeedbackData";
import {v4 as uuidv4} from "uuid";
const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) => {

    const [feedback,setFeedback] = useState(FeedbackData)

    const [feedbackEdit,setFeedbackEdit] = useState({
        item: {},
        edit:false
    })

    const deleteFeedback = (id) => {
        if(window.confirm("Are you sure you want to delete the feedback?")) {
          setFeedback((items) => {
            return items.filter((item) => item.id !== id)
          })
        }
      }

    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        setFeedback([newFeedback, ...feedback])
    }

    const editFeedback = (item) => {
        setFeedbackEdit({
            item:item,
            edit:true
        })
    }

    const updateFeedback = (id,newItem) => {
        setFeedback(feedback.map((item) => item.id === id ? {...item,...newItem} : item))
    }
    return (<FeedbackContext.Provider 
    value={{feedback, 
            feedbackEdit,
            deleteFeedback,
            addFeedback,
            editFeedback,
            updateFeedback}}
            >
        {children}
    </FeedbackContext.Provider>)
    
}

export default FeedbackContext