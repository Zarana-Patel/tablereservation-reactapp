import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { clsx } from 'clsx'
import styles from './BookingForm.module.css'


const BookingForm = ({ timeSlots, submitForm, changeDate}) => {
  const bookingSlot = timeSlots.map((item)=>{
    return <option key={item} value={item}>{item}</option>
  })
  const formik = useFormik({
    initialValues: {
      date: "",
      time: "",
      guests: "",
      occasion: "",
    },
    onSubmit: (values) => {
      submitForm(values);
    },
    validationSchema: Yup.object({
      date: Yup.string().required("You have to choose a date"),
      time: Yup.string().required("You have to choose a time"),
      guests: Yup.number()
        .min(1, "Provide a number between 1 and 10")
        .max(10, "Provide a number between 1 and 10")
        .required("You have to provide at least 1 guest"),
      occasion: Yup.string().required("You have to choose an occasion"),
    }),
  });

  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <h1 className={styles.title}>Reserve a Table</h1>
        <form
          className={styles.form}
          onSubmit={formik.handleSubmit}
        >
          <fieldset
            className={clsx({
            [styles.fieldset]: true,
            [styles.fieldError]: formik.touched.date && formik.errors.date
          })} >
            <label className={styles.label} htmlFor="date">Choose date</label>
            <input
              id="date"
              name="date"
              type="date"
              value={formik.values.date}
              onBlur={formik.handleBlur}
              onChange={(e) => {
                changeDate(e.target.value);
                formik.handleChange(e);
              }}
            />
            {formik.touched.date && formik.errors.date && (
              <div className={styles.error}>
                {formik.errors.date}
              </div>
            )}
          </fieldset>

          <fieldset
              className={clsx({
              [styles.fieldset]: true,
              [styles.fieldError]: formik.touched.time && formik.errors.time
            })} >
            <label className={styles.label} htmlFor="time">Choose time</label>
            <select
              id="time"
              name="time"
              placeholder="Select an appropriate time"
              {...formik.getFieldProps("time")}
            >
                <option value="">Select an appropriate time</option>
                {bookingSlot}
            </select>

            {formik.errors.time && formik.touched.time && (
              <div className={styles.error}>
                {formik.errors.time}
              </div>
            )}
          </fieldset>

          <fieldset
            className={clsx({
              [styles.fieldset]: true,
              [styles.fieldError]: formik.touched.guests && formik.errors.guests
            })} >
            <label className={styles.label} htmlFor="guests">Number of guests</label>

            <input
              id="guests"
              name="guests"
              type="number"
              placeholder="A number between 1 and 10"
              min="1"
              max="10"
              step={1}
              {...formik.getFieldProps("guests")}
            />

            {formik.errors.guests && formik.touched.guests && (
              <div className={styles.error}>
                {formik.errors.guests}
              </div>
            )}
          </fieldset>

          <fieldset
              className={clsx({
              [styles.fieldset]: true,
              [styles.fieldError]: formik.touched.occasion && formik.errors.occasion
            })} >
            <label className={styles.label} htmlFor="occasion">Occasion</label>
            <select
                id="occasion"
                name="occasion"
                placeholder="Select an occasion"
                {...formik.getFieldProps("occasion")}
            >
                <option value="">Select an appropriate time</option>
                <option value="Birthday">Birthday</option>
                <option value="Anniversary">Anniversary</option>
            </select>

            {formik.touched.occasion && formik.errors.occasion && (
              <div className={styles.error}>
                {formik.errors.occasion}
              </div>
            )}
          </fieldset>

          <div className={styles.actions}>
            <button type="submit">Make Your reservation</button>
          </div>
        </form>
      </div>


    </section>

  )
}

export default BookingForm