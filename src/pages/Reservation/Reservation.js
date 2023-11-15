import React, { useReducer } from 'react'
import { useNavigate } from "react-router-dom"
import BookingForm from '../../components/BookingForm/BookingForm'
import { fetchAPI, submitAPI } from '../../API/api'

export const updateTimes = (state, action) => {
  const today = new Date(action)
  const dateSlots = fetchAPI(today)
  return dateSlots
}

export const initializeTimes = () => {
  const today = new Date()
  const dateSlots = fetchAPI(today)
  return dateSlots
}


const Reservation = () => {

  const navigate = useNavigate()

  const submitForm = (formData) => {
    submitAPI(formData)
    navigate('/confirm')
  }

  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());

  return (
    <>
      <BookingForm timeSlots={availableTimes} submitForm={submitForm} changeDate={dispatch} />
    </>
  )
}

export default Reservation