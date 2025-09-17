import styled from '@emotion/styled'
import { IconButton } from '@mui/material'

export const GithubButton = styled(IconButton)`
  min-width: 120px;
  height: 48px;
  font-size: 1rem;
  font-weight: 600;
  text-transform: none;
  border-radius: 2px;
` as typeof IconButton

export const LinkedInButton = styled(IconButton)`
  min-width: 120px;
  height: 48px;
  font-size: 1rem;
  font-weight: 600;
  text-transform: none;
  border-radius: 2px;
` as typeof IconButton

export const SocialMediaContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 24px;
  margin: 32px 0;
  width: 100%;
`
