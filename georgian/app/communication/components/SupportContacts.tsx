import { IconCentricButton } from '@lib/ui/buttons/IconCentricButton'
import { EnvelopIcon } from '@lib/ui/icons/EnvelopIcon'
import { LinkedinIcon } from '@lib/ui/icons/LinkedinIcon'
import { TelegramIcon } from '@lib/ui/icons/TelegramIcon'
import { VStack } from '@lib/ui/layout/Stack'
import { ExternalLink } from '@lib/ui/navigation/Link/ExternalLink'
import { XIcon } from '@lib/ui/icons/XIcon'
import {
  productLinkedinUrl,
  productTelegramUrl,
  productXUrl,
  supportEmail,
} from '@georgian/config'

export const SupportContacts = () => (
  <VStack fullWidth gap={12}>
    <ExternalLink to={productXUrl}>
      <IconCentricButton as="div" text="Message on X" icon={<XIcon />} />
    </ExternalLink>
    <ExternalLink to={productLinkedinUrl}>
      <IconCentricButton
        as="div"
        text="Message on LinkedIn"
        icon={<LinkedinIcon />}
      />
    </ExternalLink>
    <ExternalLink to={productTelegramUrl}>
      <IconCentricButton
        as="div"
        text="Message on Telegram"
        icon={<TelegramIcon />}
      />
    </ExternalLink>
    <ExternalLink to={`mailto:${supportEmail}`}>
      <IconCentricButton as="div" text="Send an email" icon={<EnvelopIcon />} />
    </ExternalLink>
  </VStack>
)
