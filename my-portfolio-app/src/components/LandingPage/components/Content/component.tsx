import React from 'react'
import { ProfileImage, ContentContainer, ContentText, NameText, ProfileContainer } from './styles'

export const Content: React.FC = () => {
  return (
    <>
      <ProfileContainer>
        <ProfileImage src="https://picsum.photos/200" alt="Profile" />
        <NameText>Smaran Harihar</NameText>
      </ProfileContainer>
      <ContentContainer>
        <ContentText>
          Whether it's writing clean, scalable code, collaborating across teams,
          or translating complex ideas into intuitive products, I thrive on
          turning obstacles into opportunities. I am passionate about using
          technology to tell meaningful stories and deliver real-world
          impact—one line of code at a time.
        </ContentText>
        <ContentText>
          As an immigrant to the U.S., I understand
          the importance of embracing challenges head-on, and I apply this
          mindset to building elegant, user-centered digital solutions.
        </ContentText>
        <ContentText>
          Let’s connect if you’re interested in software development that is
          both technically robust and human-focused.
        </ContentText>
      </ContentContainer>
    </>
  )
}
