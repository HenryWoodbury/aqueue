import React from 'react'
import { useNavigate } from 'react-router-dom'

import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { selectTeam, teamSelected } from '../teams/teamSlice'

import { selectUser } from '../auth/authSlice'

interface SettingsPageFormFields extends HTMLFormControlsCollection {
  team: HTMLSelectElement
}

interface SettingsPageFormElements extends HTMLFormElement {
  readonly elements: SettingsPageFormFields
}

export const Settings = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const teamId = useAppSelector(selectTeam)
  const userId = useAppSelector(selectUser)

  const handleSelectTeamSubmit = (e: React.FormEvent<SettingsPageFormElements>) => {
    e.preventDefault()
    const teamId = e.currentTarget.elements.team.value
    dispatch(teamSelected(teamId))
    navigate('/')
  }
  
  return (
    <section>
      <h2>Welcome {userId} </h2>
      <h3>Select a Team to Manage</h3>
      <form id='selectTeam' onSubmit={handleSelectTeamSubmit}>
        <label htmlFor="team">Team</label>
        <input type="text" id="team" defaultValue={teamId || ''} />
        <button>Continue</button>
      </form>
    </section>
  )
}