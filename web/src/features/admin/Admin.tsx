import React from 'react'
import { useNavigate } from 'react-router-dom'

import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { selectTeam, teamSelected } from '../teams/teamSlice'

import { selectUser } from '../auth/authSlice'

interface AdminPageFormFields extends HTMLFormControlsCollection {
  team: HTMLSelectElement
}

interface AdminPageFormElements extends HTMLFormElement {
  readonly elements: AdminPageFormFields
}

export const Admin = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const teamId = useAppSelector(selectTeam)
  const userId = useAppSelector(selectUser)

  const handleUploadRostersSubmit = (e: React.FormEvent<AdminPageFormElements>) => {
    e.preventDefault()

  }

  const handleSelectTeamSubmit = (e: React.FormEvent<AdminPageFormElements>) => {
    e.preventDefault()
    const teamId = e.currentTarget.elements.team.value
    dispatch(teamSelected(teamId))
    navigate('/')
  }
  
  return (
    <section>
      <h2>Welcome {userId} </h2>
      <h3>Upload Rosters</h3>
      <form id='uploadRosters' onSubmit={handleUploadRostersSubmit}>

      </form>
      <h3>Select a Team to Manage</h3>
      <form id='selectTeam' onSubmit={handleSelectTeamSubmit}>
        <label htmlFor="team">Team</label>
        <input type="text" id="team" defaultValue={teamId || ''} />
        <button>Continue</button>
      </form>
    </section>
  )
}