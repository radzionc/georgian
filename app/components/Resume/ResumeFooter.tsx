import { GitHubIcon } from '@georgian/ui/ui/icons/GitHubIcon'
import { MailIcon } from '@georgian/ui/ui/icons/MailIcon'
import { TelegramIcon } from '@georgian/ui/ui/icons/TelegramIcon'
import { TwitterIcon } from '@georgian/ui/ui/icons/TwitterIcon'
import { HStack } from '@georgian/ui/ui/Stack'
import { ResumeFooterLink } from './ResumeFooterLink'

const email = 'radzionchachura@gmail.com'
const twitterHandle = 'radzionchachura'
const githubHandle = 'radzionc'
const telegramHandle = 'radzionchachura'

export const ResumeFooter = () => (
  <HStack alignItems="center" gap={40}>
    <ResumeFooterLink
      icon={<MailIcon />}
      name={email}
      url={`mailto:${email}`}
    />
    <ResumeFooterLink
      icon={<TwitterIcon />}
      name={twitterHandle}
      url={`https://twitter.com/${twitterHandle}`}
    />
    <ResumeFooterLink
      icon={<GitHubIcon />}
      name={githubHandle}
      url={`https://github.com/${githubHandle}`}
    />
    <ResumeFooterLink
      icon={<TelegramIcon />}
      name={telegramHandle}
      url={`https://t.me/${telegramHandle}`}
    />
  </HStack>
)
