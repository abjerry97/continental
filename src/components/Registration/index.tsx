import React from 'react'
import FormInput from '../FormInput'
import PageBtn from '../PageBtn'

export default function Registration() {
  return (
    <div className=" container px-4">
      <h3>I’ll inform you about the next milestones</h3>

      <p>
        The developments of the Continental eTravel Companion is at full speed
        and we’ll be soon reaching the next milestone. If you want to be
        informed first hand, share some information and we’ll inform you
        exclusively.
      </p>

      <FormInput/>
      <FormInput/>
      <FormInput/>
      <FormInput/>
      <FormInput/>
      <PageBtn/>
    </div>
  )
}
