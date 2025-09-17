import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'
import { SocialMediaContainer, GithubButton, LinkedInButton } from './styles'

export const SocialMedia: React.FC = () => {
  return (
    <SocialMediaContainer>
      <GithubButton aria-label="GitHub" href="https://github.com/smaranh" target="_blank">
        <GitHubIcon fontSize="large" />
      </GithubButton>
      <LinkedInButton aria-label="LinkedIn" href="https://www.linkedin.com/in/smaranharihar/" target="_blank">
        <LinkedInIcon fontSize="large" />
      </LinkedInButton>
    </SocialMediaContainer>
  )
}
