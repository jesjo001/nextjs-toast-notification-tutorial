"use client"
import React from 'react'
import { cssTransition, toast } from 'react-toastify'

function page() {

    const bounce = cssTransition({
        enter: "flip-horizontal-bottom",
        exit: "flip-horizontal-upward"
    });

    const notify = () => {
        // toast.info("welcome to my site")
        // toast.success("welcome to my site")
        // toast.warn("You do not have the right to access this resource")
        toast.error("Ops something went wrong, try again later" ,{ autoClose: 1000, transition: bounce})
    }
  return (
    <div><button onClick={() => notify()}>open notification</button></div>
  )
}

export default page