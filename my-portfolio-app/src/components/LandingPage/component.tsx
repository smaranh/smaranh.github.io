import React from 'react'
import { LandingPageContainer } from './styles'
import { Content } from './components/Content'
import { CTAs } from './components/CTAs'
import { SocialMedia } from './components/SocialMedia'

export const LandingPage: React.FC = () => {
  return (
    <LandingPageContainer>
      <CTAs />
      <Content />
      <SocialMedia />
    </LandingPageContainer>
  )
}
