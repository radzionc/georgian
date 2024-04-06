import { TicketCategory } from '@georgian/entities/Ticket'

export const getTicketCategoryPath = (category: TicketCategory) =>
  `/${category}`

export const getCategoryTestPagePath = (category: TicketCategory) =>
  `/${category}/test`

export const curatedQuestionsPagePath = '/interview/questions'

export const termsOfServicePagePath = '/terms-of-service'
export const privacyPolicyPagePath = '/privacy-policy'
