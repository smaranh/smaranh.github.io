import React from 'react'
import ArticleIcon from '@mui/icons-material/Article'
import CollectionsIcon from '@mui/icons-material/Collections'
import { CTAsContainer, ResumeButton, PortfolioButton } from './styles'

export const CTAs: React.FC = () => {
  return (
    <CTAsContainer>
      <ResumeButton
        variant="contained"
        size="large"
        href="https://www.linkedin.com/in/smaranharihar/"
        target="_blank"
        startIcon={<ArticleIcon />}
      >
        Resume
      </ResumeButton>
      <PortfolioButton
        variant="contained"
        size="large"
        href="https://smaranharihar.dev/react-task-tracker"
        target="_blank"
        startIcon={<CollectionsIcon />}
      >
        Portfolio
      </PortfolioButton>
    </CTAsContainer>
  )
}
